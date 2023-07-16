const chatButton = document.getElementById('chatButton');
const feedback = document.getElementById('feedback');
const closeButton = document.getElementById('closeFeedback');
const upenderException = document.getElementById('upenderException');
const modalBlurOverlay = document.getElementById('modalBlurOverlay');

function openModal() {
    feedback.classList.remove('feedback--hidden');
    upenderException.classList.add('upender__exception--blurred');
    modalBlurOverlay.classList.add('upender__blur-overlay--active');
    
    document.addEventListener('keydown', handleEscKey);
}

function closeModal() {
    feedback.classList.add('feedback--hidden');
    upenderException.classList.remove('upender__exception--blurred');
    modalBlurOverlay.classList.remove('upender__blur-overlay--active');
    
    document.removeEventListener('keydown', handleEscKey);
}

chatButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

function handleEscKey(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}