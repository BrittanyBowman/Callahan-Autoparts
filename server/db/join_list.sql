SELECT orders.order_id FROM orders INNER JOIN users ON users.id=orders.id RETURN orders;

--Inner join