const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const sound = document.getElementById("sound");
const btn = document.querySelector("#search-btn");

btn.addEventListener("click", () => {
    let inputWord = document.getElementById("input-word").value;

    fetch(`${url}${inputWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inputWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetics[0].text}/</p>
                </div>
                <p class="word-meaning">${
                    data[0].meanings[0].definitions[0].definition
                }</p>
                <p class="word-example">${
                    data[0].meanings[0].definitions[0].example ||
                    "Sorry! There is no example for this word."
                }</p>`;

            sound.setAttribute("src", `${data[0].phonetics[0 || 1 || 2 || 3].audio}`);
            console.log(sound);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't find the word</h3>`;
        });
});

function playSound() {
    sound.play();
}
