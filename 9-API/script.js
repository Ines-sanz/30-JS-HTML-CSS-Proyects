const joke = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");

generateJoke();

async function generateJoke() {
  const config = {
    headers: { Accept: "application/json" },
  };

  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
    config
  );

  const data = await res.json();

  joke.innerHTML = data.joke;
}

/*function generateJoke() {
    const config = {
        headers: { Accept: "application/json" },
      };
    
      fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
        config
      )
        .then((res) => res.json())
        .then((data) => {
          joke.innerHTML = data.joke;
        });
    }
    */

jokebtn.addEventListener("click", generateJoke);
