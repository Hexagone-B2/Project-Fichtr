USE fichtr;
DROP TABLE IF EXISTS Tags,Likes,Comment,Profile,Post,Subject,User,LikesComment,MP;

CREATE TABLE User (
    id int primary key auto_increment,
    username varchar(50) not null,
    firstname varchar(50),
    lastname varchar(50),
    mail varchar(300) unique not null,
    password varchar(1024) not null,
    roles varchar(5) not null default 'user'
);

CREATE TABLE Profile (
    id int primary key auto_increment,
    profile_pic varchar(200) not null default 'default.jpeg',
    bio tinytext,
    url_personnal_site varchar(300) default NULL,
    user_id int not null,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE Subject (
    id int primary key auto_increment,
    name varchar(50) not null
);

CREATE TABLE Post (
    id int primary key auto_increment,
    title varchar(100) not null,
    body tinytext not null,
    user_id int not null,
    subject_id int not null,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (subject_id) REFERENCES Subject(id)
);

CREATE TABLE Comment (
    id int primary key auto_increment,
    user_id int not null,
    post_id int not null,
    body tinytext not null,
    time datetime DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (post_id) REFERENCES Post(id)
);

CREATE TABLE Likes (
    id int primary key auto_increment,
    user_id int not null,
    post_id int not null,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (post_id) REFERENCES Post(id)
);

CREATE TABLE LikesComment(
    id int primary key auto_increment,
    user_id int not null,
    comment_id int not null,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (comment_id) REFERENCES Post(id)
);

CREATE TABLE Tags (
    post_id int not null,
    tags varchar(150) not null,
    FOREIGN KEY (post_id) REFERENCES Post(id)
);

CREATE TABLE MP
(
    sender_id   int,
    receiver_id int,
    message     text,
    time datetime default NOW(),
    FOREIGN KEY (sender_id) REFERENCES User (id),
    FOREIGN KEY (receiver_id) REFERENCES User (id)
);

-- Création des données de test.

-- Ajouter des utilisateurs
INSERT INTO User (username, firstname, lastname, mail, password, roles)
VALUES
    ('user1', 'John', 'Doe', 'john.doe@email.com', 'password1', 'user'),
    ('user2', 'Jane', 'Smith', 'jane.smith@email.com', 'password2', 'user'),
    ('admin1', 'Admin', 'Adminsson', 'admin@admin.com', 'adminpass', 'admin'),
    ('user3', 'Alice', 'Johnson', 'alice.johnson@email.com', 'password3', 'user'),
    ('user4', 'Bob', 'Williams', 'bob.williams@email.com', 'password4', 'user');

-- Ajouter des profils
INSERT INTO Profile (bio, url_personnal_site, user_id)
VALUES
    ('Lorem ipsum dolor sit amet.', 'http://www.example.com', 1),
    ('Consectetur adipiscing elit.', NULL, 2),
    ('Pellentesque ac tristique elit.', NULL, 3),
    ('Vestibulum cursus augue at neque.', 'http://www.example.net', 4),
    ('Aenean euismod ultricies neque.', 'http://www.example.org', 5);

-- Ajouter des sujets
INSERT INTO Subject (name)
VALUES
    ('Technology'),
    ('Science'),
    ('Travel'),
    ('Food'),
    ('Music');

-- Ajouter des messages
INSERT INTO Post (title, body, user_id, subject_id)
VALUES
    ('Post 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, 1),
    ('Post 2', 'Pellentesque ac tristique elit. Vestibulum cursus augue at neque.', 2, 2),
    ('Post 3', 'Aenean euismod ultricies neque.', 3, 3),
    ('Post 4', 'Vestibulum cursus augue at neque.', 4, 4),
    ('Post 5', 'Consectetur adipiscing elit. Pellentesque ac tristique elit.', 5, 5),
    ('Post 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, 1),
    ('Post 7', 'Pellentesque ac tristique elit. Vestibulum cursus augue at neque.', 2, 2),
    ('Post 8', 'Aenean euismod ultricies neque.', 3, 3),
    ('Post 9', 'Vestibulum cursus augue at neque.', 4, 4),
    ('Post 10', 'Consectetur adipiscing elit. Pellentesque ac tristique elit.', 5, 5),
    ('Post 10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, 1),
    ('Post 11', 'Pellentesque ac tristique elit. Vestibulum cursus augue at neque.', 2, 2),
    ('Post 12', 'Aenean euismod ultricies neque.', 3, 3),
    ('Post 13', 'Vestibulum cursus augue at neque.', 4, 4),
    ('Post 14', 'Consectetur adipiscing elit. Pellentesque ac tristique elit.', 5, 5),
    ('Post 15', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, 1),
    ('Post 16', 'Pellentesque ac tristique elit. Vestibulum cursus augue at neque.', 2, 2),
    ('Post 17', 'Aenean euismod ultricies neque.', 3, 3),
    ('Post 18', 'Vestibulum cursus augue at neque.', 4, 4),
    ('Post 19', 'Consectetur adipiscing elit. Pellentesque ac tristique elit.', 5, 5);


-- Ajouter des commentaires
INSERT INTO Comment (user_id, post_id, body)
VALUES
    (1, 1, 'Great post!'),
    (2, 1, 'I totally agree.'),
    (3, 2, 'Interesting thoughts.'),
    (4, 3, 'Thanks for sharing.'),
    (5, 4, 'Nice post!');

-- Ajouter des likes
INSERT INTO Likes (user_id, post_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 3),
    (5, 4);

-- Ajouter des likes de commentaires
INSERT INTO LikesComment (user_id, comment_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 3),
    (5, 4);

-- Ajouter des tags
INSERT INTO Tags (post_id, tags)
VALUES
    (1, 'tech, programming'),
    (2, 'science, research'),
    (3, 'travel, adventure'),
    (4, 'food, cooking'),
    (5, 'music, art');
