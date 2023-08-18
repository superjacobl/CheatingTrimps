
window.turbo = 1;

function getCurrentTimestamp() {
    if (window.game) {
        return Date.now() + game.global.turboCounter;
    } else {
        return Date.now();
    }
}

function getCurrentDate() {
    return new Date(getCurrentTimestamp());
}

function toggleTurbo() {
    if (window.turbo === 1) {
        window.turbo = 10;

    } else if (window.turbo === 10) {
        window.turbo = 60;

    } else if (window.turbo === 60) {
        window.turbo = 100;

    } else {
        window.turbo = 1;
    }

    const $button = document.getElementById('turboButtonText');
    if (window.turbo > 1) {
        $button.parentElement.classList.remove('btn-no-turbo');
        $button.parentElement.classList.add('btn-turbo');
        $button.innerText = `Turbo x${window.turbo}`
    } else {
        $button.parentElement.classList.remove('btn-turbo');
        $button.parentElement.classList.add('btn-no-turbo');
        $button.innerText = `No Turbo`
    }
}
(function() {
    let lastTurboTick = Date.now();
    setInterval(() => {
        let delta = Date.now() - lastTurboTick;
        lastTurboTick += delta;
        if (window.game) {
            game.global.turboCounter += delta * (window.turbo - 1);
        }
    }, 1);
})()