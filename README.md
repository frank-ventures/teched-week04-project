# Week Four Project

## Project- Building a Full Stack Application:

**Link to project:** https://goty-winners.onrender.com/

This week we were to combine front-end display and interactivity, with backend management of inputs and data, making use of Node,js, Express and SQL

There were three main sections to the project this week:

- A user can visit a website and read information.
- A user can contribute to the page (like a message in a guestbook).
- A user can see the other contributions that other guests have made.

I kept track of my thoughts and tasks here: [https://frankjs.notion.site/Day-Seventeen-project-38847db1da6f4444b0992459944ef17c?pvs=4](https://frankjs.notion.site/Day-Seventeen-project-38847db1da6f4444b0992459944ef17c?pvs=4)

### Features!

- There's a client, a server and a database!
- The database has multiples tables of information for the games, and a table for comments.
- The server takes GET requests to retrieve joined Game information, and Comments.
- The server takes POST requests to add comments to the database.
- The server uses a query to match comments to the game they are for.
- The client build the display of information as it retrieves it from the databse.
- The comments update when a user completes the form.
- The page follows the theming of Valves Steam platform.
- I ensured parts of the UI gave the user some feedback, including 'hover' changes on buttons, a pop-up to confirm a comment had been submitted, and on desktop some 'hover' emphasis on the game displays.

### What went well

**Beginnings**

At the start of the project I wrote out the idea I had, what I wanted to achieve, and the smaller steps I needed to take to achieve the functionality I wanted.

Doing this first helped me to see which tables I needed in the database.

Writing my seed.js to create my database was fairly simple, however, a bit laborious given how many entries I had, and that I was joining tables by hand.

**Functionality**

I was able to find solutions for some of the bugs I was having, particularly when the data was not displaying in the correct order due to a 'for each' loop being used within an async function.

I was able to persist with some of the more complex functionailty toward the end of the project.

I realised that I had far too many lines of code just to put HTML and content on the page. While methods like '.appendChild' have worked in the past, I moved to use '.innerHTML' and '.insertAdjacentHTML' combined with variables containing template literals.

This can be seen where I've created the display for each game, and the form for each game. In my opinion this created far more readable and editable code, which came in handy later in the project for some layout and formatting. (I'm aware of how 'hacky' this method might actually be!)

**Identification, please.**

Using the Game_ID within the app.js was a huge key to getting the functionality correct.

Being able to attach it to various parts of the HTML as unique identifier, and also pass it aound in various functions, really unlocked the inner working of comments, buttons and displays.

**Design**

Once the site was functioning, it was a case of spending some time playing with the CSS to tidy it up and make it look appealing!

I was pleased with the 'card' style of display, the effect that box-shadows gave to the content, and the way the content 'grew' in size on hover.

### Sticky points

Plenty of these this week!! Including the extra layers of having a server and database definitely added complexity in thinking about the project.

What helped, as always, was to tackle the problem in tiny chunks, getting small bits working at a time.

**Linking comments**

In my project, I wanted a way to link comments to the game they were made for. I had help from Tim who told me about Query Parameters (listed below). Once implemented with the right ID these worked perfectly!

**Getting comments to submit**

I was encountering a lot of issues with user comment submission being parsed, and passed, incorrectly!
It took a lot of chipping away at very tiny possibilities, such as eliminating trailing commas in the app.js code, ensuring I was passing the correct variables WITH the correct column names, and making sure the server was receiving the correct data, and passing it to the database correctly.
Eventually I got everything tidied, and got the comments saving correctly through lots of small changes.

**Order. Order!**

A persistent issue was that on loading each of the games to display on the page, the order would sometimes be incorrect.
For example, the "1997" entry could show before "2003", for example.
This was because I was using a 'for each' loop which contained async functions within. Changing to a 'for of' loop solved this issue. I also implemented this method when loading the comments.

### Bonus points

I'm quite happy with this project. I didn't have an initial idea which jumped out at me, and I wasn't sure of how I'd present it, which I found a bit of a blocker.

Once I brainstormed on the theme of games, things fell into place nicely!

### Future improvements

- There's probably a way to use the SteamDB API to fetch the images. Currently they're linked with a URL in a text field on the database.
- I'm not 100% satisfied with the display of the cards and the comments. I'd like to tinker!
- I think with more time I'd perhaps make use of CSS grid to display some of the content, such as "Genre, Developer, and Platform"
- I need to check accessibility and make amendments for that.

### Resources

Query Parameters - https://stackabuse.com/get-query-strings-and-parameters-in-express-js/

InnerHTML - https://www.w3schools.com/jsref/prop_html_innerhtml.asp

insertAdjacentHTML - https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement , https://www.freecodecamp.org/news/javascript-insertadjacenthtml-method-efficient-dom-manipulation/ and https://www.codingnepalweb.com/build-a-notes-app-in-html-css-javascript/

For the Game of the Year content - https://en.wikipedia.org/wiki/Golden_Joystick_Award_for_Game_of_the_Year

For the Images - https://www.steamgriddb.com/

For the CSS color scheme: https://colorswall.com/palette/193/ and https://store.steampowered.com

Clearing the form after submission - https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission
