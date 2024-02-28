
function fetchData() {
    return fetch('data.json')
        .then(response => response.json())
        .then(data => data.crew) 
        .catch(error => console.error('Error fetching JSON:', error));
}

function showMember(memberName) {
    fetchData()
        .then(crew => {
            const member = crew.find(cr => cr.name === memberName);
            if (member) {
                document.getElementById('member-image').src = member.images.png;
                document.getElementById('member-name').textContent = member.name;
                document.getElementById('role').textContent = member.role;
                document.getElementById('member-description').textContent = member.bio;
            }
        });
}

document.addEventListener("DOMContentLoaded", function() {
   
    var initialDot = document.querySelector('.crewBtn');
    initialDot.style.backgroundColor = 'white';

    var dotElements = document.querySelectorAll('.crewBtn');
    dotElements.forEach(function(dot) {
        dot.addEventListener('click', handleDotClick);
    });
});

function handleDotClick(event) {
   
    var allDots = document.querySelectorAll('.crewBtn');
    allDots.forEach(function(dot) {
        dot.style.backgroundColor = 'gray';
    });

    
    event.target.style.backgroundColor = 'white';
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