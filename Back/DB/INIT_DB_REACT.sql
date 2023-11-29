USE fichtr;
DROP TABLE IF EXISTS Tags,Likes,Comment,Profile,Post,Subject,User;

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
    profile_pic varchar(200) not null default '',
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

CREATE TABLE Tags (
    post_id int not null,
    tags varchar(150) not null,
    FOREIGN KEY (post_id) REFERENCES Post(id)
);

-- Création des données de test.

INSERT INTO User (username, firstname, lastname, mail, password, roles) VALUES
('john_doe', 'John', 'Doe', 'john.doe@example.com', 'hashed_password_1', 'user'),
('jane_smith', 'Jane', 'Smith', 'jane.smith@example.com', 'hashed_password_2', 'admin'),
('bob_jackson', 'Bob', 'Jackson', 'bob.jackson@example.com', 'hashed_password_3', 'user');


INSERT INTO Profile (profile_pic, bio, url_personnal_site, user_id) VALUES
('profile_pic_john.jpg', 'A software engineer', 'http://www.johndoe.com', 1),
('profile_pic_jane.jpg', 'An administrator', NULL, 2),
('profile_pic_bob.jpg', 'A blogger', 'http://www.bobjackson.com', 3);

INSERT INTO Subject (name) VALUES
('Technology'),
('Travel'),
('Food');

INSERT INTO Post (title, body, user_id, subject_id) VALUES
('Introduction to SQL', 'SQL is a powerful database query language...', 1, 1),
('My Trip to Paris', 'I had an amazing time in Paris. Here are some highlights...', 3, 2),
('Delicious Pasta Recipe', 'Here is a simple and tasty pasta recipe...', 2, 3);

INSERT INTO Comment (user_id, post_id, body, time) VALUES
(1, 1, 'Great article!', NOW()),
(2, 1, 'I learned a lot from this.', NOW()),
(3, 2, 'Paris is my favorite city!', NOW()),
(1, 3, 'I''ll definitely try this recipe.', NOW());

INSERT INTO Likes (user_id, post_id) VALUES
(2, 1),
(3, 1),
(1, 2),
(2, 3);

INSERT INTO Tags (post_id, tags) VALUES
(1, 'SQL, databases, programming'),
(2, 'travel, Paris, adventure'),
(3, 'food, recipe, pasta');