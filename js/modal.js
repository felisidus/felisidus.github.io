document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.project-modal');
    const modalImage = document.querySelector('.modal-image');
    const closeButton = document.querySelector('.close-button');
    const gridItems = document.querySelectorAll('.grid-item');

    // Open modal when clicking grid items
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.querySelector('.project-image').src;
            
            // Set the image source
            modalImage.src = imageSrc;
            
            // Show the modal
            modal.style.display = 'block';
            
            // Add animation
            setTimeout(() => {
                modalImage.style.transform = 'scale(1)';
            }, 10);
        });
    });

    // Close modal when clicking X
    closeButton.addEventListener('click', function() {
        modalImage.style.transform = 'scale(0.9)';
        setTimeout(() => {
            modal.style.display = 'none';
            modalImage.style.transform = 'scale(0.9)';
        }, 300);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modalImage.style.transform = 'scale(0.9)';
            setTimeout(() => {
                modal.style.display = 'none';
                modalImage.style.transform = 'scale(0.9)';
            }, 300);
        }
    });
}); 