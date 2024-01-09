const {executeSQL} = require("../../func/mysql");
const {checkAuth} = require("../../func/checkAuth");
const {nad, ite} = require("../../func/error");

/**
 * @jso @result[] num
 */
module.exports.getPostInfo = (req, res) => {
    if (!req.body.id) {
        nad(res);
    } else {
        const postId = req.body.id;
        const query = `
            SELECT p.title                          as title,
                   p.body                           as body,
                   p.user_id                        as owner_id,
                   User.username                    as username,
                   COUNT(DISTINCT Likes.id)         as likes,
                   COUNT(DISTINCT Comment.id)       as comments,
                   GROUP_CONCAT(DISTINCT Tags.tags) as tags
            FROM Post p
                     INNER JOIN
                 User ON User.id = p.user_id
                     LEFT JOIN
                 Likes ON Likes.post_id = p.id
                     LEFT JOIN
                 Comment ON Comment.post_id = p.id
                     LEFT JOIN
                 Tags ON Tags.post_id = p.id
            WHERE p.id = ?
            GROUP BY p.title, p.body, p.user_id, User.username;
        `;

        executeSQL(query, [postId], (error, result) => {
            if (error) {
                ite(res);
            } else {
                result = result[0]
                try {
                    result.tags = result.tags.split(',')
                } catch (e) {
                    result.tags = null;
                }
                if (req.headers.authorization) {
                    checkAuth(req.headers.authorization, (error, decoded) => {
                        if (error) {
                            res.status(403).send('SOMETHING_WRONG');
                        } else {
                            executeSQL(
                                'SELECT id FROM Likes WHERE post_id = ? AND user_id = ?;',
                                [postId, parseInt(decoded.id)],
                                (error, result2) => {
                                    if (error) {
                                        ite(res);
                                    } else {
                                        result.liked = !!result2[0];
                                        res.json(result);
                                    }
                                }
                            );
                        }
                    });
                } else {
                    result.liked = false;
                    res.json(result);
                }
            }
        });
    }
};
