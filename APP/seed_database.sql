BEGIN

INSERT INTO "user"
    ("id", "name", "email", "password", "description")
VALUES
(1, 'Ana', 'ana@story.com', 1324, 'je suis Ana'),
(2, 'Evariste', 'evariste@story.com', 1324, 'je suis Evariste'),
(3, 'Leyti', 'leyti@story.com', 1324, 'je suis Leyti'),
;

INSERT INTO "story"
    ("id", "title", "resume","content", "category_id", "user_id")
VALUES
(1, 'Aventure dans le Pole Nord', "Tony voyage au Pole Nord et vit beaucoup d'aventures", "lorem ipsum djdjdj aahhshs aallaf viviiz asjsjjajsjsj ",1,1),
(2, 'Nightmare in London', "Un detective recherche un criminal en Londres", "lorem ipsum djdjdj aasjsjeia dkaolsjsjjajsjsj ",2,1),
(3, 'Le corps humain', "Le corps humain à travers le microscope", "lorem ipsum corps corpore qjsjiaoaj ",3,2),
(4, 'Interstellar', "Deux astronautes s'installent dans une galaxye remote et découvrent le secret de l'univers", "lorem ipsum inter stellar iviiz asjsjjajsjsj ",4,3),

INSERT INTO "category"
("id", "name")
VALUES
(1, 'Aventure'),
(2, 'Thriller'),
(1, 'Educatif'),
(1, 'Science-fiction'),
(1, 'Romantique'),
(1, 'Horror'),
;

SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));
SELECT setval('story_id_seq', (SELECT MAX(id) from "story"));
SELECT setval('category_id_seq', (SELECT MAX(id) from "category"));

COMMIT;