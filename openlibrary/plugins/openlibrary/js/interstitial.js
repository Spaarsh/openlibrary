export function initInterstitial(elem) {
    let seconds = elem.dataset.wait
    const url = elem.dataset.url
    const timerElement = elem.querySelector('#timer')
    const countdown = setInterval(() => {
        seconds--
        timerElement.textContent = seconds
        if (seconds === 0) {
            clearInterval(countdown)
            window.location.href = url
        }
    }, 1000) // 1 second interval
}
