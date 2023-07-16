const callButton = document.getElementById('callButton');
const callback = document.getElementById('callback');
const closeButton = document.getElementById('closeCallback');
const upenderException = document.getElementById('upenderException');
const modalBlurOverlay = document.getElementById('modalBlurOverlay');

function openModal() {
    callback.classList.remove('callback--hidden');
    upenderException.classList.add('upender__exception--blurred');
    modalBlurOverlay.classList.add('upender__blur-overlay--active');
    
    document.addEventListener('keydown', handleEscKey);
}

function closeModal() {
    callback.classList.add('callback--hidden');
    upenderException.classList.remove('upender__exception--blurred');
    modalBlurOverlay.classList.remove('upender__blur-overlay--active');
    
    document.removeEventListener('keydown', handleEscKey);
}

callButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

function handleEscKey(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}