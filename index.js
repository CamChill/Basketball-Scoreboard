let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function homeadd1() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function homeadd2() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function homeadd3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function guestadd1() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function guestadd2() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function guestadd3() {
    guestScore += 3
    guestEl.textContent = guestScore
}