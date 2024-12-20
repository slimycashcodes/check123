let currentPage = 0;

// Function to update the displayed page
function updatePage() {
    const container = document.querySelector('.container');
    container.style.transform = `translateX(-${currentPage * 100}vw)`;
}

// Event listener for keydown events
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextPage();
    } else if (event.key === 'ArrowLeft') {
        prevPage();
    }
});

// Function to go to the next page
function nextPage() {
    currentPage = Math.min(currentPage + 1, 3); // 3 is the last page index
    updatePage();
}

// Function to go to the previous page
function prevPage() {
    currentPage = Math.max(currentPage - 1, 0); // 0 is the first page index
    updatePage();
}

// Add click event listeners to navigation buttons
document.getElementById('nextBtn').addEventListener('click', nextPage);
document.getElementById('prevBtn').addEventListener('click', prevPage);

// Function to show/hide images when clicked
function showImage(img) {
