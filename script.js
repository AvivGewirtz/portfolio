/***************** Navbar function *****************/

// Toggle menu visibility on click
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("active");
});

// Add click event on nav item that makes smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Turn menu toggle of when clicked
        if(anchor.className != "button")
            document.querySelector("nav ul").classList.toggle("active");
    });
});
/**************************************************/

/*************** Project hover functions ****************/
function applyHoverEffect() {
    const isWideScreen = window.matchMedia('(min-width: 769px)').matches;
    
    Array.from(document.getElementsByClassName('project')).forEach(anchor => {
        // Adds transition for smooth hover effect
        anchor.style.transition = 'width 0.1s ease-in-out';

        if (isWideScreen) {
            // Add hover effect for wide screens
            anchor.addEventListener('mouseover', expand);
            anchor.addEventListener('mouseout', resetSize);
        } else {
            // Remove hover effect for small screens
            anchor.removeEventListener('mouseover', expand);
            anchor.removeEventListener('mouseout', resetSize);
        }
    });
}

// Expand function for hover
function expand() {
    this.style.width = '84vw';
    this.style.height = 'auto';
}

// Reset function when mouse leaves
function resetSize() {
    this.style.width = '';
    this.style.height = '';
}

// Apply hover effect on page load
applyHoverEffect();

// Reapply when the window resizes
window.addEventListener('resize', applyHoverEffect);
/***************************************************/

/************* Project Image Functions *************/

// Function for opening image in "full screen" 
function openImage(imgElement) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");

    fullImage.src = imgElement.src; // Change modal source to clicked image
    modal.style.display = "flex";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.width = "100%";
    modal.style.height = "100%";
    // Lock scrolling
    document.body.classList.add("locked");
}
// Function for closing image that in "full screen" 
function closeImage() {
    // Unlock scrolling
    document.body.classList.remove("locked");

    // Stop display the clicked image
    document.getElementById("imageModal").style.display = "none";
    modal.style.width = "0%";
    modal.style.height = "0%";
    modal.style.backgroundColor = "none";
}
/***************************************************/
