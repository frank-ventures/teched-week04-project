const gameWrapper = document.getElementById("gameWrapper");

// Fetches Game Of The Year data from the server.
// Gets the 'joined' GOTY data with publisher, genre etc info.
async function getGames() {
  gameWrapper.innerHTML = "";

  console.log("app.js Getting games...");
  const gamesresponse = await fetch(
    // "https://teched-week04-project.onrender.com/gamewinnersjoined"
    "http://localhost:8080/gamewinnersjoined"
  );
  const gotyWinners = await gamesresponse.json();
  console.log("GOTY details array here:", gotyWinners);
  console.log("Got them!");

  for (const game of gotyWinners) {
    // mainDiv is the 'card' which contains the GOTY info and the Comments.
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("game-wrapper");
    mainDiv.classList.add("flex");
    mainDiv.classList.add(`game-id-${game.id}`);

    console.log(game.image);

    // Declaring these two allows us to add everything all in one go, instead of multiple lines of '.createElement', '.classList.add', '.textContent' and '.appendChild'.
    let oneCodeToRuleThemAll = `
    <p class="win-year regular-text">Year: <span class="year-number">${game.year}</span></p>
    <img class="game-img" src="${game.image}" alt="${game.name}">
    <h2 class="game-name">${game.name}</h2>
    <div class="details-wrapper flex">
      <p class="regular-text">Genre: </p><p class="right-side">${game.genre}</p>
      <p class="regular-text">Developer: </p><p class="right-side">${game.developer}</p>
      <p class="regular-text">Platform: </p><p class="right-side">${game.platform}</p>
    </div>`;

    let form = `
    <div class="comment-form flex">
    <button class="toggle-comments toggle-comment-id-${game.id}">Toggle Comments</button>
    <form class="new-comment game-comment-id-${game.id} flex hidden">
      <p class="regular-text">Say something!</p>
      <div class="username flex">
        <label for="username" class="regular-text">Username:</label>
        <input type="text" name="username" placeholder="username" />
      </div>
      <div class="comment flex">
        <label for="comment" class="regular-text">Comment:</label>
        <input type="text" name="comment" placeholder="comment" />
      </div>
      <div class="submit flex">
      <button type="submit" id="submitComment-${game.id}">Send comment!</button>
      </div>
    </form>
    <div class="comments-wrapper hidden"></div>
  </div>
  `;

    // Add things to the page.
    mainDiv.insertAdjacentHTML("afterbegin", oneCodeToRuleThemAll);
    mainDiv.insertAdjacentHTML("beforeend", form);
    // Putting it on the page
    gameWrapper.appendChild(mainDiv);
    // Get the comments and put them on the page.
    updateCommentsSection(game.id);

    // Add an event listener to each individual comment toggle button
    console.log(`Attatching listener to button ${game.id}`);
    const toggleButton = document.querySelector(
      `.toggle-comments.toggle-comment-id-${game.id}`
    );
    toggleButton.addEventListener("click", () => toggleComments(game.id));

    // Add an event listener to each individual user form
    console.log(`Attatching listener to form ${game.id}`);
    const userForm = document.querySelector(
      `.new-comment.game-comment-id-${game.id}`
    );
    userForm.addEventListener("submit", (event) =>
      handleFormSubmission(event, game.id)
    );
  }
}
// Go get them!
getGames();

function toggleComments(gameId) {
  console.log("current Game ID: ", gameId);

  // Find the matching game wrapper based on the gameId
  const gameWrapper = document.querySelector(`.game-id-${gameId}`);

  if (gameWrapper) {
    const form = gameWrapper.querySelector(".new-comment");
    form.classList.toggle("hidden");
    const allComments = gameWrapper.querySelector(".comments-wrapper");
    allComments.classList.toggle("hidden");
  }
}

// For the comment 'forms'
async function handleFormSubmission(event, gameId) {
  event.preventDefault();
  console.log(`submitted comments for Game ID ${gameId}`);

  const formTarget = event.target;
  const formData = new FormData(formTarget);
  const comment = formData.get("comment");
  const username = formData.get("username");
  console.log("submitting:", gameId, username, comment);

  try {
    const jsonData = JSON.stringify({
      game_id: gameId,
      username: username,
      comment: comment
    });
    console.log("json data: ", jsonData);

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
      console.log("Comment submitted successfully");
      updateCommentsSection(gameId);
      // Clears the input fields after
      document.querySelector(`.game-comment-id-${gameId}`).reset();
      // Get current button
      const addCommentButton = document.getElementById(
        `submitComment-${gameId}`
      );
      const successPopup = document.createElement("p");
      successPopup.classList.add("success-popup");
      successPopup.textContent = "Comment successful!";
      addCommentButton.insertAdjacentElement("afterend", successPopup);
      // show your thing
      setTimeout(function name(params) {
        // remove your thing
        successPopup.remove();
      }, 1500);
    } else {
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
    let commentWrapper = gameWrapper.querySelector(".comments-wrapper");

    if (gameWrapper) {
      // Clear existing comments
      gameWrapper
        .querySelectorAll(".comments-individual")
        .forEach((comment) => comment.remove());

      // Append the updated comments to the game wrapper
      for (const comment of comments) {
        const newComment = `
          <div class="comments-individual flex">
            <p class="comment-from">Comment from: ${comment.username}</p>
            <p class="comment-content">${comment.comment}</p>
          </div>
        `;
        commentWrapper.insertAdjacentHTML("beforeend", newComment);
      }
      // comments.forEach((comment) => {
      //   const newComment = `
      //     <div class="comments-individual hidden flex">
      //       <p class="intro-comment">Comment from: ${comment.username}</p>
      //       <p>${comment.comment}</p>
      //     </div>
      //   `;
      //   commentWrapper.insertAdjacentHTML("beforeend", newComment);
      // });
    } else {
      console.error("Game wrapper not found");
    }
  } catch (error) {
    console.error("Error updating comments section:", error);
  }
}
