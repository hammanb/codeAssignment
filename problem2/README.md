I haven't used mongodb or mongoose before, so took a bit of time to read through the documentation here to be able to accomplish the questions in the problem.

Seeing these answers, as the output of the script is sequential methods, my first instinct with the SQL stack I'm used to is to get everything I need for the script execution from the database, build my data model for solving the question, and then executing the steps. I would approach this problem with independent queries if the methods were to be called or executed out of order, or if the data returned in the collections was too big or there was some other reason with performance.  

I only had a couple hours to spend on this yesterday and today during meetings, and spent most of that time reading docs. Unfortunately I didn't get to the bonus questions here. Going through the docs I understand that mongoose would be the solution to those extra questions. https://mongoosejs.com/docs/validation.html
