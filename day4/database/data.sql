-- Disabling foreign keys to insert data into tables easily
SET session_replication_role = replica;

INSERT INTO users(id, name, dob, address_id)
	VALUES
		(1, 'user1', TO_DATE('21/10/2000', 'DD/MM/YYYY'), 1),
		(2, 'user2', TO_DATE('14/12/2001', 'DD/MM/YYYY'), 2),
		(3, 'user3', TO_DATE('01/09/1999', 'DD/MM/YYYY'), 3),
		(4, 'user4', TO_DATE('28/12/2015', 'DD/MM/YYYY'), 4),
		(5, 'user5', TO_DATE('17/01/1989', 'DD/MM/YYYY'), 5),
		(6, 'user6', TO_DATE('21/10/2000', 'DD/MM/YYYY'), 6),
		(7, 'user7', TO_DATE('22/10/2000', 'DD/MM/YYYY'), 7);


INSERT INTO address(id, city)
	VALUES
		(1, 'Delhi'),
		(2, 'Noida'),
		(3, 'Jaipur'),
		(4, 'Agra');

INSERT INTO category(id, name)
	VALUES
		(1, 'electronic'),
		(2, 'furniture'),
		(3, 'cloth'),
		(4, 'tools');


INSERT INTO coupons(id, discount)
	VALUES
		(1, 10),
		(2, 20),
		(3, 30),
		(4, 40);
DELETE FROM coupons;
INSERT INTO coupons(id, discount, exp_date)
	VALUES
		(1, 10, TO_DATE('17/05/2022', 'DD/MM/YYYY')),
		(2, 20, TO_DATE('15/06/2022', 'DD/MM/YYYY')),
		(3, 30, TO_DATE('11/07/2022', 'DD/MM/YYYY')),
		(4, 40, TO_DATE('01/08/2022', 'DD/MM/YYYY'));


INSERT INTO items(id, product_id, quantity)
	VALUES
		(1, 1, 10),
		(2, 2, 20),
		(3, 3, 30),
		(4, 4, 40);

INSERT INTO product(id, name, description, category_id, reviews_id, price)
	VALUES
		(1, 'phone', 'Mobile phone', 1, 1, 1000),
		(2, 'Table', 'Work table', 2, 2, 1400),
		(3, 'Shirt', 'Blue shirt', 3, 3, 2500),
		(4, 'Hammer', 'Big hammer', 4, 4, 10000);

INSERT INTO reviews(id, product_id, rating, review)
	VALUES
		(1, 1, 1, 'Very bad'),
		(2, 2, 2, 'Bad'),
		(3, 3, 3, 'Good'),
		(4, 4, 4, 'Best');

INSERT INTO orders(id, order_date, coupon_id, user_id, item_id)
	VALUES
		(1, TO_DATE('17/05/2022', 'DD/MM/YYYY'), 1, 1, 1),
		(2, TO_DATE('17/05/2022', 'DD/MM/YYYY'), 2, 1, 2),
		(3, TO_DATE('17/05/2022', 'DD/MM/YYYY'), 3, 2, 3),
		(4, TO_DATE('17/05/2022', 'DD/MM/YYYY'), 4, 3, 3),
		(5, TO_DATE('17/05/2022', 'DD/MM/YYYY'), 1, 4, 1),
		(6, TO_DATE('17/05/2022', 'DD/MM/YYYY'), 2, 4, 2),
		(7, TO_DATE('17/05/2022', 'DD/MM/YYYY'), 3, 4, 2),
		(8, TO_DATE('17/05/2022', 'DD/MM/YYYY'), 4, 4, 3),
		(9, TO_DATE('17/09/2022', 'DD/MM/YYYY'), 1, 1, 2),
		(10, TO_DATE('17/08/2022', 'DD/MM/YYYY'), 2, 5, 3),
		(11, TO_DATE('17/10/2022', 'DD/MM/YYYY'), 3, 2, 3),
		(12, TO_DATE('17/10/2022', 'DD/MM/YYYY'), 4, 3, 3);
