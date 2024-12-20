let currentPage = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentPage = Math.min(currentPage + 1, 3); // 3 is the last page index
        updatePage();
    } else if (event.key === 'ArrowLeft') {
        currentPage = Math.max(currentPage - 1, 0); // 0 is the first page index
        updatePage();
    }
});

function updatePage() {
    const container = document.querySelector('.container');
    container.style.transform = `translateX(-${currentPage * 100}vw)`;
}

function showImage(img) {
    img.classList.toggle('hidden');
    img.classList.toggle('show');
}
