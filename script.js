const generateBtn = document.querySelector('#gen-btn').addEventListener('click', (e) => {
    e.preventDefault()
    getAdvice()
})

function getAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            renderAdvice(data['slip'].id, data['slip'].advice)
        })
        .catch(err => console.error(err))
}

function renderAdvice(id, text) {
    const adviceText = document.querySelector('#advice')
    const adviceID = document.querySelector('#advice-id')

    console.log(id, text)

    adviceID.innerHTML = `Advice #${id}`
    adviceText.innerHTML = `&ldquo;${text}&rdquo;`
}