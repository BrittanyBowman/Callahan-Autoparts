UPDATE users
SET username=$1
WHERE id=$2


-- update Product A and B to increase Price by 5%
-- update p
-- set p.Price = p.Price * 1.05
-- from dbo.Product p
-- where name in ('A', 'B');

-- // updates username
-- app.patch('/api/user/:id', partsController.update);