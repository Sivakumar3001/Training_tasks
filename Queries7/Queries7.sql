-- 1. Select the average price in the table titles for  pub _id is 1389.

-- 2. What are the total numbers of rows in the titles table


-- 3. List the address of all stores  in the state WA or CA in the table stores


-- 4. List the date between  the year 1989 to 1992 in the table employee


-- 5. List the first name and last name of the employee in the employee table where the jobs_id  is 6

select concat('$',trim_scale(avg(cast(substring(price,2)as decimal))))as avg_price from titles
where pub_id='1389';

select count(*) as totalno_of_rows from titles;

select stor_address from stores
where state in ('WA','CA');

select hire_date as date_bt_1989_1992 from employee 
where hire_date
between '1989-01-01' and '1992-12-30'
order by hire_date;

select fname,lname from employee 
where job_id='6';
