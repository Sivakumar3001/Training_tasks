-- 1. Display/find the given authors complete address information. [Panteley Sylvia]
 
-- 2. Display only the hire date and employee name for each employee.

-- 3. Display all the books which come under Psychology type.

select phone,address,city,state,zip from authors
where au_lname='Panteley'and au_fname='Sylvia';

select hire_date,concat(fname,' ',minint,' ',lname)as employee_name from employee
order by employee_name asc;

select title as psychology_Books from titles
where type='psychology';
