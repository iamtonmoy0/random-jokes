const load = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => displayJokes(data));
}
const displayJokes = jokes => {
    const jokesDisplay = document.getElementById('joke')
    jokesDisplay.innerHTML = jokes.value;


}