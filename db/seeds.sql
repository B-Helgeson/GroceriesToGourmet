USE groceries_db;

INSERT INTO `groceries_db`.`saved_ingredients`
(`ingredient_name`,
`purchased`,
`ingredient_id`,
`shopping_list_id`,
`createdAt`,
`updatedAt`)
VALUES
('Rice',
0,
1,
2,
'2018-06-08 12:00:00',
'2018-06-08 12:00:00'),
('Cabbage',
0,
2,
1,
'2018-06-08 12:00:00',
'2018-06-08 12:00:00'),
('Beef',
1,
3,
1,
'2018-06-08 12:00:00',
'2018-06-08 12:00:00');



INSERT INTO `groceries_db`.`saved_recipes`
(`api_recp_id`,
`recipe_name`,
`recipe_descr`,
`recipe_id`,
`shopping_list_id`,
`createdAt`,
`updatedAt`)
VALUES
(123,
'Corned Beef',
'Mmm Delicious',
1,
1,
'2018-06-08 12:00:00',
'2018-06-08 12:00:00'),
(123,
'Tofu Rice',
'Mmm Delicious',
2,
2,
'2018-06-08 12:00:00',
'2018-06-08 12:00:00');


INSERT INTO `groceries_db`.`shopping_lists`
(`list_name`,
`user_id`,
`shopping_list_id`,
`createdAt`, 
`updatedAt`)
VALUES
('MyList',
1,
1,
'2018-06-08 12:00:00',
'2018-06-08 12:00:00'),
('HerList',
1,
2,
'2018-06-08 12:00:00',
'2018-06-08 12:00:00');


INSERT INTO `groceries_db`.`users`
(`user_id`,
`firstname`,
`lastname`,
`email`,
`password`,
`last_login`,
`status`,
`createdAt`,
`updatedAt`)
VALUES
(1,
'Brandon',
'Helgeson',
'bsh@mail.com',
'Pass123',
'2018-06-08 12:00:00',
'active',
'2018-06-08 12:00:00',
'2018-06-08 12:00:00');
