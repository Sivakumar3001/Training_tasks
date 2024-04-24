-- 1. Display the maximum and minimum price of the book. 

-- 2. Display the total book price for each type. 

-- 3. Find out the Publisher for the following books 

--    Cooking with Computers: Surreptitious Balance Sheets, 
--    Silicon Valley Gastronomic Treats, 
--    Is Anger the Enemy?, 
--    Fifty Years in Buckingham Palace Kitchens.

select concat('$',max(cast(substring(price,2)as decimal)))as maximum, concat('$',min(cast(substring(price,2)as decimal)))as minimum from titles;

select type,concat('$',sum(cast(substring(price,2)as decimal)))as total_price from titles
where type is not null
group by type 
order by type asc;

select pub_name from publishers join titles on publishers. pub_id= titles. pub_id
where title in ('Cooking with Computers: Surreptitious Balance Sheets','Silicon Valley Gastronomic Treats','Is Anger the Enemy?','Fifty Years in Buckingham Palace Kitchens');