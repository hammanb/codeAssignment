I haven't used mongodb or mongoose before, so took a bit of time to read through the documentation here to be able to accomplish the questions in the problem.

Looking at the questions, the output of all three is a single script with sequential answers as logs. To approach this problem, my first instinct with the SQL stack I'm used to is to run less database queries, and prep the data with a single query, and single transformation for the problem to solve. If the questions were menat to be asked out of order, or a single question could be asked independantly, I would have approached that slightly different. 

As well, this solution might have performance issues if the database gets too big and the collections returned too many rows, so more targeted queries for each question might be a better solution. However, for brevity of my script to approach this problem I coded it this way.

I only had a couple hours to spend on this yesterday and today during meetings, and spent most of that time reading docs. Unfortunately I didn't get to the bonus questions here. Going through the docs I understand that mongoose, and mongodb validations would be the solution to those extra questions https://mongoosejs.com/docs/validation.html
