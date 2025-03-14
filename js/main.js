// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    // Example of modern JavaScript feature: Fetch API
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

// ...existing code...
