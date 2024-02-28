
function fetchData() {
    return fetch('data.json')
        .then(response => response.json())
        .then(data => data.destinations) 
        .catch(error => console.error('Error fetching JSON:', error));
}

function showDestination(destinationName) {
    fetchData()
        .then(destinations => {
            const destination = destinations.find(dest => dest.name.toUpperCase() === destinationName.toUpperCase());
            if (destination) {
                document.getElementById('destination-image').src = destination.images.webp;
                document.getElementById('destination-name').textContent = destination.name;
                document.getElementById('destination-description').textContent = destination.description;
                document.getElementById('destination-distance').textContent = destination.distance;
                document.getElementById('destination-travel').textContent = destination.travel;
            }
        });
}



function openMenu() {
    let hamburger = document.getElementById('hamburger');
    let menu = document.querySelector(".menu");
    menu.classList.add("open");
    hamburger.style.display = 'none';
}

function closeMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.remove("open");
    hamburger.style.display = 'block';
}

document.getElementById("hamburger").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    if (!menu.classList.contains("open")) {
        openMenu();
    } else {
        closeMenu();
    }
});

document.getElementById("close").addEventListener("click", function() {
    closeMenu();
});

