function scrollSection(sectionId, direction) {
    const container = document.getElementById(sectionId);
    const scrollAmount = 330; // Adjust this value based on your item width + gap
    
    if (container) {
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Add this if you want to hide/show buttons based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.scroll-container');
    
    containers.forEach(container => {
        const wrapper = container.parentElement;
        const leftBtn = wrapper.querySelector('.scroll-btn.left');
        const rightBtn = wrapper.querySelector('.scroll-btn.right');
        
        const updateButtons = () => {
            if (leftBtn && rightBtn) {
                leftBtn.style.display = container.scrollLeft <= 0 ? 'none' : 'flex';
                rightBtn.style.display = 
                    container.scrollLeft >= container.scrollWidth - container.clientWidth 
                    ? 'none' : 'flex';
            }
        };
        
        container.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        updateButtons();
    });
}); 