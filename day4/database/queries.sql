-- queries
-- # 1
SELECT name AS user_name, COUNT(users.id) as count FROM users
    RIGHT JOIN orders ON users.id = orders.user_id
    GROUP BY users.id
    ORDER BY count DESC
    LIMIT 1;

-- # 2
CREATE VIEW item_price AS
    SELECT items.id AS item_id, product_id, quantity*product.price AS item_amount
        FROM items LEFT JOIN product ON items.product_id = product.id;

CREATE VIEW final_price AS
    SELECT
        orders.user_id,
        orders.id AS order_id,
        order_date, 
        CASE
            WHEN orders.order_date <= coupons.exp_date
                THEN coupons.discount
                ELSE 0
        END AS discount, 
        item_amount,
        product_id
        FROM orders, coupons, item_price
        WHERE orders.coupon_id = coupons.id AND orders.item_id = item_price.item_id;

SELECT * FROM final_price;


-- Maximum payment user
SELECT name AS user_name, SUM(item_amount) - SUM(discount) AS total_payment
    FROM users
    RIGHT JOIN final_price
    ON users.id = final_price.user_id
    GROUP BY users.id
    ORDER BY total_payment DESC
    LIMIT 1;

-- Minimum payment user
SELECT name AS user_name, SUM(item_amount) - SUM(discount) AS total_payment
    FROM users
    RIGHT JOIN final_price
    ON users.id = final_price.user_id
    GROUP BY users.id
    ORDER BY total_payment ASC
    LIMIT 1;


-- # 3
-- superhit product
SELECT id AS product_id, name AS product_name, COUNT(product_id) AS sold_count
    FROM product
    RIGHT JOIN final_price
    ON id = product_id
    GROUP BY id
    ORDER BY sold_count DESC
    LIMIT 1;

-- flop product
SELECT id AS product_id, name AS product_name, COUNT(product_id) AS sold_count
    FROM product
    FULL JOIN final_price
    ON id = product_id
    GROUP BY id
    ORDER BY sold_count ASC
    LIMIT 1;


-- # 4
-- Failed transaction for a user
SELECT order_id, transaction_date
    FROM transaction
    WHERE user_id = 1 AND is_success = false;



-- # 5
-- total discount by a user in last 6 months
SELECT user_id, SUM(discount) AS total_discount_in_last_6_months
    FROM final_price
    WHERE NOW() < 180 + order_date
    GROUP BY user_id;

-- # 6
-- expired coupons
SELECT * FROM coupons WHERE exp_date < NOW();

--  # 7
-- highest rating product
SELECT product.id AS product_id, name, rating
    FROM product
    LEFT JOIN reviews ON product.reviews_id = reviews.id
    ORDER BY rating DESC
    LIMIT 1;

-- lowest rating product
SELECT product.id AS product_id, name, rating
    FROM product
    LEFT JOIN reviews ON product.reviews_id = reviews.id
    ORDER BY rating ASC
    LIMIT 1;


-- # 8
-- orders having items quantity more than 4
SELECT orders.id AS order_id, order_date, user_id, item_id, quantity
    FROM orders
    LEFT JOIN items ON items.id = orders.item_id
    WHERE quantity > 4;

--  # 9
-- Category for wich maximum/minimum orders are palced in last quater

CREATE VIEW order_item AS 
    SELECT orders.id AS order_id, order_date, item_id, product_id 
    FROM orders
    LEFT JOIN items ON items.id = orders.item_id
    WHERE order_date + 90 > NOW();

CREATE VIEW order_item_product AS
    SELECT order_id, order_date, item_id, product_id, category_id
    FROM order_item
    LEFT JOIN product ON product.id = product_id;

-- maximum
SELECT category_id, name AS category_name, COUNT(order_id) AS order_count
    FROM order_item_product
    LEFT JOIN category ON category.id = category_id
    GROUP BY category_id, name
    ORDER BY order_count DESC
    LIMIT 1;

-- minimum
SELECT id AS category_id, name AS category_name, COUNT(order_id) AS order_count
    FROM order_item_product
    RIGHT JOIN category ON category.id = category_id
    GROUP BY id, name
    ORDER BY order_count ASC
    LIMIT 1;



--  # 10
-- users who has not placed any order till now
SELECT * FROM
        (SELECT users.id AS user_id, name, COUNT(orders.id) AS order_count
        FROM users
        LEFT JOIN orders ON user_id = users.id
        GROUP BY users.id) AS users_orders
    WHERE order_count = 0;


--  # 11
-- users whose transactions are failed
SELECT user_id, name
    FROM transaction
    LEFT JOIN users ON users.id = transaction.user_id
    WHERE is_success = false;


--  # 12
-- users whose birthday is today
SELECT * FROM users
    WHERE EXTRACT(DAY FROM dob) = EXTRACT(DAY FROM NOW())
        AND EXTRACT(MONTH FROM dob) = EXTRACT(MONTH FROM NOW());