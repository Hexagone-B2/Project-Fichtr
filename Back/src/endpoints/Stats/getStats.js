const {executeSQL} = require("../../func/mysql");
module.exports.getStats = (req, res) => {
    executeSQL(`SELECT 
                        (SELECT COUNT(*) FROM Post) AS total_posts,
                        (SELECT COUNT(*) FROM User) AS total_users,
                        (SELECT username FROM User ORDER BY id DESC LIMIT 1) AS last_user;`, [], (error, result) => {
        if (!error) {
            executeSQL(`SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(replace(tags,' ',''), ',', n), ',', -1) AS tag_word,
                               COUNT(*) AS word_count
                        FROM Tags
                                 JOIN (SELECT 1 AS n
                                       UNION ALL
                                       SELECT 2
                                       UNION ALL
                                       SELECT 3) AS numbers
                        WHERE LENGTH(tags) - LENGTH(REPLACE(tags, ',', '')) >= n - 1
                        GROUP BY tag_word
                        ORDER BY word_count DESC
                        LIMIT 3;`,[],(error,result2)=>{
                if (!error){
                    let tab = [];
                    result2.forEach(e=>tab.push(e.tag_word));
                    res.json({...result[0],tendance : tab})
                }
            })
        }
    })
}
