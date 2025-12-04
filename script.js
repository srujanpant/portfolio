function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 

        const video = modal.querySelector('video');
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    }
}

function closeModal(event, modalId) {
    if (event && event.target !== event.currentTarget) return;
    
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
        
        const video = modal.querySelector('video');
        if (video) {
            video.pause();
        }
        
        // Stop YouTube iframes
        const iframes = modal.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            const src = iframe.src;
            iframe.src = src; 
        });
    }
}