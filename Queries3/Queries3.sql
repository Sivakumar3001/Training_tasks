-- 1. Display/find the total number of Publishers in publishers table. 


-- 2. Display the employee name and job description of all employees with the same job as Howard. 


-- 3. Display the employee name and job description of all employees whose are not Managing Editor. 

select count(pub_name) as TotalnumberofPublisher  from publishers;


select concat(fname,' ',minint,' ',lname )as name ,job_desc from jobs join employee on jobs.job_id=employee.job_id
where job_desc=(select job_desc from jobs  join employee on jobs.job_id=employee.job_id where fname='Howard');


select concat(fname,' ',minint,' ',lname )as name ,job_desc from jobs join employee on jobs.job_id=employee.job_id
where job_desc <> 'Managing Editor';