document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imagesContainer = document.getElementById('dog-images');
    const breedsList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');

    // Fetch and display dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imgUrl => {
                const img = document.createElement('img');
                img.src = imgUrl;
                imagesContainer.appendChild(img);
            });
        });

    // Fetch and display dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            for (const breed in data.message) {
                const li = document.createElement('li');
                li.textContent = breed;
                breedsList.appendChild(li);
            }
        });

    // Change font color on click
    breedsList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change to any color you prefer
        }
    });

    // Filter breeds by dropdown selection
    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        const breedItems = breedsList.getElementsByTagName('li');

        for (const item of breedItems) {
            if (selectedLetter === 'all' || item.textContent.startsWith(selectedLetter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });
});
