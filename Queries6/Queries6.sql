-- 1. Find the total number of books in Business type.

-- 2. Display the published date for this book Life Without Fear. 

-- 3. Display all the books title published by Binnet & Hardley. 

-- 4. Find the authors first name and last name for this book Straight Talk About Computers.

select count(title) as Business_Books from titles
where type='business';

select pubdate as PublishedDate from titles
where title='Life Without Fear';

select title from titles join publishers on titles. pub_id= publishers. pub_id
where titles.pub_id=(select pub_id from publishers where pub_name='Binnet & Hardley');

select au_fname,au_lname from authors 
where authors.au_id=(select au_id from titleauthor
where titleauthor.title_id=(select title_id from titles
where titles.title='Straight Talk About Computers'));