document.getElementById('search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if inside a form
        executeSearch();
    }
});

function executeSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for: ${query}`); // Replace with actual search logic
        
    }
}
