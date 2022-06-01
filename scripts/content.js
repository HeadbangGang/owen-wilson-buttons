// document.querySelectorAll was not behaving properly. This is a temporary hack to get all buttons I want.
const buttons = [
    ...document.getElementsByTagName('button'),
    ...document.getElementsByTagName('a'),
    ...document.querySelectorAll('input[role=button]')
]

const wow = () => {
    const url = chrome.runtime.getURL(`assets/${Math.floor(Math.random() * (6) + 1)}.mp3`)
    const sound = new Audio(url)
    sound.play()
}

const buttonAction = (event) => {
    const { clientX, clientY } = event
    const x = clientX / window.innerWidth
    const y = clientY / window.innerHeight

    const end = Date.now() + 15000;
    const colors = ['#bb0000', '#000000'];

    const confettiAnimation = () => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: {x: 0},
            colors: colors
        })
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: {x: 1},
            colors: colors
        })
    }

        if (Date.now() < end) {
            requestAnimationFrame(confettiAnimation);
        }

    wow()
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonAction)
}
