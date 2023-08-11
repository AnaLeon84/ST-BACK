BEGIN;

TRUNCATE "user",
"category",
"story" RESTART IDENTITY;

INSERT INTO "user"
    ("name", "email", "password", "description")
VALUES
('Ana', 'ana@story.com', 1234, 'je suis Ana'),
('Evariste', 'evariste@story.com', 1234, 'je suis Evariste'),
('Leyti', 'leyti@story.com', 1234, 'je suis Leyti')
;

INSERT INTO "category"
    ("name")
VALUES
('Aventure'),
('Thriller'),
('Educatif'),
('Science-fiction'),
('Romantique'),
('Horror')
;

INSERT INTO "story"
    ("title", "resume","content", "category_id", "user_id")
VALUES
('Aventure dans le Pole Nord', 'Tony voyage au Pole Nord et vit de nombreuses aventures', 'lorem ipsum',1,1),
('Nightmare in London', 'Un detective recherche un criminal en Londres', 'lorem ipsum djdjdj',2,1),
('Le corps humain', 'Le corps humain à travers le microscope', 'lorem ipsum corps corpore qjsjiaoaj',3,2),
('Interstellar', 'Deux astronautes découvrent le secret de Casiopea', 'lorem ipsum inter stellar iviiz asjsjjajsjsj',4,3)
;

COMMIT;