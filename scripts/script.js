// ACTIVE NAV LINK
document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// IMAGE MODAL FUNCTIONS
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    
    // Restore body scrolling
    document.body.style.overflow = "auto";
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// IMAGE HOVER DEBUG
document.querySelectorAll(".gallery-grid img, .big-image img")
    .forEach((img, i) => {
        img.addEventListener("mouseenter", () => {
            console.log(`Hovered image ${i + 1}`);
        });
    });