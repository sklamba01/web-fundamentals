-- Creating database named db
DROP DATABASE IF EXISTS db;
CREATE DATABASE db;


CREATE TABLE IF NOT EXISTS public.address
(
    id integer NOT NULL,
    city text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT address_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.category
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT category_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.coupons
(
    id integer NOT NULL,
    discount integer NOT NULL,
    exp_date date NOT NULL,
    CONSTRAINT coupons_pkey PRIMARY KEY (id)
)


CREATE TABLE IF NOT EXISTS public.reviews
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    rating integer NOT NULL,
    review text COLLATE pg_catalog."default",
    CONSTRAINT reviews_pkey PRIMARY KEY (id)
)


CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default",
    dob date NOT NULL,
    address_id integer NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_address_id_fkey FOREIGN KEY (address_id)
        REFERENCES public.address (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)


CREATE TABLE IF NOT EXISTS public.product
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    category_id integer NOT NULL,
    reviews_id integer NOT NULL,
    price integer,
    CONSTRAINT product_pkey PRIMARY KEY (id),
    CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id)
        REFERENCES public.category (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT product_reviews_id_fkey FOREIGN KEY (reviews_id)
        REFERENCES public.reviews (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)


CREATE TABLE IF NOT EXISTS public.items
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT items_pkey PRIMARY KEY (id),
    CONSTRAINT items_product_id_fkey FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

CREATE TABLE IF NOT EXISTS public.orders
(
    id integer NOT NULL,
    order_date date NOT NULL,
    coupon_id integer NOT NULL,
    user_id integer NOT NULL,
    item_id integer NOT NULL,
    CONSTRAINT orders_pkey PRIMARY KEY (id),
    CONSTRAINT orders_coupon_id_fkey FOREIGN KEY (coupon_id)
        REFERENCES public.coupons (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT orders_item_id_fkey FOREIGN KEY (item_id)
        REFERENCES public.items (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)



CREATE TABLE IF NOT EXISTS public.transaction
(
    id integer NOT NULL,
    user_id integer NOT NULL,
    order_id integer NOT NULL,
    transaction_date date NOT NULL,
    is_success boolean NOT NULL,
    CONSTRAINT transaction_pkey PRIMARY KEY (id),
    CONSTRAINT transaction_order_id_fkey FOREIGN KEY (order_id)
        REFERENCES public.orders (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT transaction_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)