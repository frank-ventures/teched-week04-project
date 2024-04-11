console.log("Hello Frank!");

async function testServerConnection() {
  const response = await fetch(
    "https://teched-week04-project.onrender.com/gamewinners"
  );
  const testResponse = await response.json();
  console.log(testResponse);
}

testServerConnection();
