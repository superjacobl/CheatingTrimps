
window.turbo = 1;

function toggleTurbo() {
    window.turbo *= 10;

    if (window.turbo > 1000) {
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