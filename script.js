const contentNumbers = document.getElementById("content_numbers");

const progress = [
    {
        number : Math.floor(Math.random() * 899) + 100,
        tag: "Award Received"
    },
    {
        number : Math.floor(Math.random() * 8999) + 1000,
        tag: "Cup of Coffee"
    },
    {
        number : Math.floor(Math.random() * 899) + 100,
        tag: "Projects Completed"
    },
    {
        number : Math.floor(Math.random() * 899) + 100,
        tag: "Happy Clients"
    }
]

const generateHTML = () => {
    const contentHTML = progress.map((items) => (`
    <div class="progress">
        <h1 class="number">${setTimeout(()=> {}, 5000)}</h1>
        <p class="tag">${items.tag}</p>
        <div class="hr1"><div class="under"></div></div>
    </div>
    `));
    console.log(contentHTML);
    contentNumbers.innerHTML = contentHTML.join('');
}

generateHTML();





