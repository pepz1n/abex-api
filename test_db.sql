-- Test database for store with suppliers and products
CREATE TABLE supplier (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact_email VARCHAR(100) NOT NULL
);

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  supplier_id INTEGER NOT NULL REFERENCES supplier(id)
);

INSERT INTO supplier (name, contact_email) VALUES
  ('ABC Distributors', 'contact@abc.com'),
  ('Global Supplies', 'sales@globalsupplies.com');

INSERT INTO product (name, price, supplier_id) VALUES
  ('Notebook', 3500.00, 1),
  ('Mouse Wireless', 80.00, 1),
  ('Monitor 24"', 900.00, 2),
  ('Keyboard Mechanical', 450.00, 2);
