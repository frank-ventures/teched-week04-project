const gameWrapper = document.getElementById("gameWrapper");

async function testServerConnection() {
  const response = await fetch(
    "https://teched-week04-project.onrender.com/gamewinners"
  );
  const testResponse = await response.json();
  console.log(testResponse);
}

testServerConnection();

async function getGames() {
  console.log("app.js Getting games...");
  const response = await fetch("http://localhost:8080/gamewinners");
  const gotyWinners = await response.json();
  console.log(gotyWinners);

  gotyWinners.forEach((game) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    div.classList.add("game-wrapper");
    h2.classList.add("game-name");
    let ptag = `<p class="win-year">Won in <span class="year-number">${game.win_year}</span>.</p>`;
    h2.textContent = game.name;
    div.appendChild(h2);

    h2.insertAdjacentHTML("afterend", ptag);
    // p.textContent =
    // img.src = game.imgUrl;
    // img.alt = game.name;

    // div.appendChild(p);
    // div.appendChild(img);
    gameWrapper.appendChild(div);
  });
}

getGames();
