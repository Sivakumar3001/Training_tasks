-- 1.Display the names and hire dates of  employees hired between 1991 - 1992.

-- 2.Display the names of employees without middle (minit) name.

-- 3.Display the names and hire dates of all employees with the column 
--   headers \Name" and \Start Date", in the order they were hired.

-- 4.Retrieve the names of  employees whose designation is Sales Representative.

select concat(fname,' ',minint,' ',lname)as name, hire_date
from employee
where hire_date 
between '1991-01-01' and '1992-12-30'
order by hire_date;

select fname,lname 
from employee;


select concat(fname,' ',minint,' ',lname )as Name,
hire_date as StartDate 
from employee
order by hire_date;


select concat(fname,' ',minint,' ',lname)as name from jobs 
join employee on jobs.job_id=employee.job_id
where job_desc='Sales Representative';
