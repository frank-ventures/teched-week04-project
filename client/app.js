const gameWrapper = document.getElementById("gameWrapper");

// async function testServerConnection() {
//   const response = await fetch(
//     "https://teched-week04-project.onrender.com/gamewinners"
//   );
//   const testResponse = await response.json();
//   console.log(testResponse);
// }

// testServerConnection();
async function getComments(gameId) {
  const commentsResponse = await fetch(
    `https://teched-week04-project.onrender.com/comments/?id=${gameId}`
  );
  const comments = await commentsResponse.json();

  return await comments;
}
getComments();

async function getGames() {
  gameWrapper.innerHTML = "";

  console.log("app.js Getting games...");
  const gamesresponse = await fetch(
    "https://teched-week04-project.onrender.com/gamewinnersjoined"
  );
  const gotyWinners = await gamesresponse.json();
  console.log(gotyWinners);

  for (const game of gotyWinners) {
    // Oh dear....
    // Game information variables
    const mainDiv = document.createElement("div");
    const detailsDiv = document.createElement("div");
    const gameH2 = document.createElement("h2");
    const genreP = document.createElement("p");
    const devP = document.createElement("p");
    const platformP = document.createElement("p");
    const img = document.createElement("img");
    // Game information display assignments
    mainDiv.classList.add("game-wrapper");
    mainDiv.classList.add(`game-id-${game.id}`);
    detailsDiv.classList.add("details-wrapper");
    gameH2.classList.add("game-name");
    img.classList.add("game-img");

    // Declaring this allows us to add everything all in one go, instead of the 15 lines commented out below!
    let form = `      <div class="comment-form">
    <form class="new-comment game-comment-id-${game.id}">
      <label for="username">Username:</label
      ><input type="text" name="username" placeholder="username" />
      <label for="comment">Comment:</label
      ><input type="text" name="comment" placeholder="comment" />
      <button type="submit">Send comment!</button>
    </form>
    <h3>Comments!</h3>
  </div>`;

    let oneCodeToRuleThemAll = `<p class="win-year">Winning year: <span class="year-number">${game.year}</span></p><img class="game-img" src="${game.image}" alt="${game.name}"><h2 class="game-name">${game.name}</h2><div class="details-wrapper"><p>Genre: ${game.genre}</p><p>Developer: ${game.developer}</p><p>Platform: ${game.platform}</p></div>`;

    // Add things to the page
    mainDiv.insertAdjacentHTML("afterbegin", oneCodeToRuleThemAll);
    mainDiv.insertAdjacentHTML("beforeend", form);
    // mainDiv.insertAdjacentHTML("beforeend", commentsDiv);

    // Add an event listener to each individual user form

    // let winYear = `<p class="win-year">Winning year: <span class="year-number">${game.year}</span></p>`;
    // img.src = game.image;
    // img.alt = game.name;
    // gameH2.textContent = game.name;
    // genreP.textContent = `Genre: ${game.genre}`;
    // devP.textContent = `Developer: ${game.developer}`;
    // platformP.textContent = `Platform: ${game.platform}`;
    // // Attaching things in correct order
    // mainDiv.insertAdjacentHTML("afterbegin", winYear);
    // mainDiv.appendChild(img);
    // mainDiv.appendChild(gameH2);
    // mainDiv.appendChild(detailsDiv);
    // detailsDiv.appendChild(genreP);
    // detailsDiv.appendChild(devP);
    // detailsDiv.appendChild(platformP);
    // commentsDiv.appendChild(genreP);

    const comments = await getComments(game.id);
    console.log(`current game id: ${game.id}`);
    console.log(comments);
    comments.forEach((comment) => {
      // Comments interaction variables

      let newComment = `<div class="comments-individual"><p class="intro-comment">Comment from: </p><p>${comment.username}</p><p>${comment.comment}</p></div>`;

      mainDiv.insertAdjacentHTML("beforeend", newComment);

      // const commentsDiv = document.createElement("div");
      // commentsDiv.classList.add("comments-wrapper");
      // const introP = document.createElement("p");
      // introP.classList.add("intro-comment");
      // const nameP = document.createElement("p");
      // const messageP = document.createElement("p");
      // console.log(comment);
      // introP.textContent = "Comment from: ";
      // nameP.textContent = comment.username;
      // messageP.textContent = comment.message;
      // commentsDiv.appendChild(introP);
      // commentsDiv.appendChild(nameP);
      // commentsDiv.appendChild(messageP);
      // mainDiv.appendChild(commentsDiv);

      // comment.likes
    });

    // Putting it on the page
    gameWrapper.appendChild(mainDiv);

    console.log(`attatching to ${game.id}`);
    const userForm = document.querySelector(
      `.new-comment.game-comment-id-${game.id}`
    );
    userForm.addEventListener("submit", (event) =>
      handleFormSubmission(event, game.id)
    );
    // userForm.addEventListener("submit", handleFormSubmission);
  }
}

getGames();

async function handleFormSubmission(event, gameId) {
  event.preventDefault();
  console.log(`submitted ${gameId}`);

  const formTarget = event.target;
  const formData = new FormData(formTarget);
  const comment = formData.get("comment");
  const username = formData.get("username");
  console.log(gameId, username, comment);

  try {
    const jsonData = JSON.stringify({
      game_id: gameId,
      username: username,
      comment: comment
    });
    console.log(jsonData);

    const response = await fetch(
      "https://teched-week04-project.onrender.com/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: jsonData
      }
    );

    if (response.ok) {
      // Handle successful submission
      console.log("Comment submitted successfully");
      updateCommentsSection(gameId);
    } else {
      // Handle error case
      console.error("Failed to submit comment");
    }
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
}

async function updateCommentsSection(gameId) {
  try {
    // Gets the updated comments from the databse, for the specific gameId passed in
    const commentsResponse = await fetch(
      `https://teched-week04-project.onrender.com/comments/?id=${gameId}`
    );
    const comments = await commentsResponse.json();

    // Find the matching game wrapper based on the gameId
    const gameWrapper = document.querySelector(`.game-id-${gameId}`);

    if (gameWrapper) {
      // Clear existing comments
      gameWrapper
        .querySelectorAll(".comments-individual")
        .forEach((comment) => comment.remove());

      // Append the updated comments to the game wrapper
      comments.forEach((comment) => {
        const newComment = `
          <div class="comments-individual">
            <p class="intro-comment">Comment from: ${comment.username}</p>
            <p>${comment.comment}</p>
          </div>
        `;
        gameWrapper.insertAdjacentHTML("beforeend", newComment);
      });
    } else {
      console.error("Game wrapper not found");
    }
  } catch (error) {
    console.error("Error updating comments section:", error);
  }
}
