-- 1. How many stores are in each unique state in the stores table? Select the state and
--    display the number of store  in each. Hint: count is used to count rows in a column,
--    sum works on numeric data only.

-- 2. Select the title and price in the table title that the price is
--    greater than 10.00. Display the results in Ascending order based on the price


select state,count(state) as number_of_stores
from stores
group by state
order by state;


select title,concat('$',cast(substring(price,2)as decimal)) as Price from titles
where cast(substring(price,2)as decimal)>10.0
order by cast(substring(price,2)as decimal);