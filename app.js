const button = document.querySelector('#button')
const name = document.querySelector('#name')
const height = document.querySelector('#height')
const mass = document.querySelector('#mass')
const birthYear = document.querySelector('#birthYear')


function getInfo() {
    updateWithLoading()

    let randomNumber = Math.floor((Math.random() * 88) + 1);

    let apiUrl = 'https://swapi.py4e.com/api/people/' + randomNumber;

    axios.get(apiUrl)
        .then(response => {
            updateInfo(response.data);
        }).catch(e => {
            updateInfoWithError()
        })
}

function updateInfo(data) {
    name.innerText = data.name
    height.innerText = `Height: ${data.height}`
    mass.innerText = `Mass: ${data.mass}`
    birthYear.innerText = `Birth Year: ${data.birth_year}`
}

function updateInfoWithError() {
    name.innerText = `Oh No! This Character Isn't Available Right Now`
    height.innerText = ''
    mass.innerText = ''
    birthYear.innerText = ''
}

function updateWithLoading() {
    name.innerHTML = `<i class="fas fa-spinner"></i>`
    height.innerText = ''
    mass.innerText = ''
    birthYear.innerText = ''
}

button.addEventListener('click', getInfo)