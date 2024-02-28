function fetchData() {
  return fetch("data.json")
    .then((response) => response.json())
    .then((data) => data.technology) 
    .catch((error) => console.error("Error fetching JSON:", error));
}

function showFacility(techFacility) {
  fetchData()
    .then((technology) => {
      const facility = technology.find((tech) => tech.name === techFacility);
      if (facility) {
        document.getElementById("facility-image").src =
          facility.images.portrait;
        document.getElementById("facility-name").textContent = facility.name;
        document.getElementById("facility-description").textContent =
          facility.description;
      }
    })
    .catch((error) => {
      console.error("Error fetching technology data:", error);
    });
}

function handleLaunchClick(launchId) {
    let launch1 = document.getElementById("launch1");
    let launch2 = document.getElementById("launch2");
    let launch3 = document.getElementById("launch3");

    
    launch1.classList.remove("selected");
    launch2.classList.remove("selected");
    launch3.classList.remove("selected");

    let selectedLaunch = document.getElementById(launchId);
    selectedLaunch.classList.add("selected");
  }


  // Function to open the menu with slide-in effect
function openMenu() {
   let hamburger = document.getElementById('hamburger');
   let menu = document.querySelector(".menu");
    menu.classList.add("open");
    hamburger.style.display = 'none';
}

// Function to close the menu
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
