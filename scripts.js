let clickCount = 0;
let clickTimeout;

document.getElementById('takemura').addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        clickTimeout = setTimeout(() => {
            clickCount = 0; // Reset click count after 4 second
        }, 4000);
    }

    if (clickCount === 10) {
        clearTimeout(clickTimeout);
        showModal();
        clickCount = 0;
    }
});

function showModal() {
    const modal = document.getElementById('easter-egg-modal');
    modal.style.display = 'block';

    const closeBtn = document.querySelector('.modal .close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
