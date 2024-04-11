# Week Four Project

## Project- Building a Full Stack Application:

This week we were to combine front-end display and interactivity, with backend management of inputs and data, making use of Node,js, Express and SQL

There were three main sections to the project this week:

- A user can visit a website and read information.
- A user can contribute to the page (like a message in a guestbook).
- A user can see the other contributions that other guests have made.

I kept track of my thoughts and tasks here: [https://frankjs.notion.site/Day-Seventeen-project-38847db1da6f4444b0992459944ef17c?pvs=4](https://frankjs.notion.site/Day-Seventeen-project-38847db1da6f4444b0992459944ef17c?pvs=4)

### Features!

- list
- list

### What went well

I used innerHTML and insertAdjacentHTML blah blah

### Sticky points

Plenty of these this week!!

I wanted a way to link comments to the game they were made for. I had help from Tim who told me about Query Parameters, listed below. Once implemented with the right ID these worked perfectly!

I was encountering a lot of issues with user comment submission being parsed and passed incorrectly!
It took a lot of chipping away at very tiny possibilities, such as trailing commas in the app.js code, ensuring I was passing the correct variables WITH the correct column names, and making sure the server was receiving the correct data and passing it to the database correctly.
Eventually I got everything tidied and the comments saving correctly.

A persistent issue was that on loading each of the games to display on the page, the order would sometimes be incorrect.
This would show the "1997" entry before "2003", for example.
This was because I was using a 'for each' loop which contained async functions within. Changing to a 'for of' loop solved this issue.

### Bonus points

### Future improvements

- list
- list

### Resources

Query Parameters - https://stackabuse.com/get-query-strings-and-parameters-in-express-js/
InnerHTML - https://www.w3schools.com/jsref/prop_html_innerhtml.asp
insertAdjacentHTML - https://www.freecodecamp.org/news/javascript-insertadjacenthtml-method-efficient-dom-manipulation/
