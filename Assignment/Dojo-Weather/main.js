var acceptBtn = document.querySelector('.cookie-section')
var city = document.querySelector('.city')
var valueTem = document.querySelectorAll('.value')

function acceptCookie() {
    acceptBtn.remove()

}

function displayCity(elm) {
    var newCity = elm.innerText;
    city.innerText = newCity
    alert('Loading weather report ' + newCity)
}

function convertTemp(elm) {

    for (let i = 0; i < valueTem.length; i++) {
        var current = parseInt(valueTem[i].innerText)
        if (elm.value == 'f') {
            valueTem[i].innerText = Math.round((current * 1.8) + 32) + '°'

        } else {
            valueTem[i].innerText = Math.round((current - 32) / 1.8) + '°'

        }
    }


}
