//turn pages when click next or prev button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

//contact me button when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        if (page.id === "turn-3") return; // Skip the page with id "turn-3"
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


// creat revers index function
let totalPages = pages.length;
let pageNumber = 0;

function reversIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}


// back profile button when clicked

const backProfilBtn = document.querySelector('.back-profile');

backProfilBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reversIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reversIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}


// opening anamation

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// opening anamation(cover right animation)

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

// opening anamation(page left or profile page animation)

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

// opening anamation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reversIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reversIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1) * 200 + 2100)
})

function toggleContent(event) {
    const btn = event.target
    const content = btn.closest('.services-content');
    const hiddenParagraph = content.querySelector('.hidd');
  if (content.style.position !== 'absolute') {
        content.style.position = 'absolute';  // Remove it from document flow
        content.style.zIndex = '50';          // Bring it to the front
        content.style.width = '205px';        // Adjust width
        content.style.backgroundColor = 'black'; // Change background
        content.style.color = 'white';           // Text color change
        hiddenParagraph.style.display = 'block'; // Show hidden paragraph
    } else {
        // Reset styles back to normal
        content.style.position = '';           // Reset position
        content.style.zIndex = '';             // Reset z-index
        content.style.width = '';              // Reset width
        content.style.backgroundColor = '';    // Reset background color
        content.style.color = '';              // Reset text color
        hiddenParagraph.style.display = 'none'; // Hide the hidden paragraph again
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('portfolioWrapper');
    const prevBtn = document.getElementById('portfolioPrev');
    const nextBtn = document.getElementById('portfolioNext');
    const projects = document.querySelectorAll('.portfolio-wrapper .portfolio-box');
    
    let currentProject = 0;
    const totalProjects = projects.length;

    function updatePortfolioDisplay() {
        // Hide all projects
        projects.forEach((project, index) => {
            if (index === currentProject) {
                project.style.display = 'block';
                project.style.opacity = '1';
            } else {
                project.style.display = 'none';
                project.style.opacity = '0';
            }
        });
        
        // Update button visibility
        prevBtn.style.opacity = currentProject === 0 ? '0.3' : '0.7';
        nextBtn.style.opacity = currentProject === totalProjects - 1 ? '0.3' : '0.7';
        
        // Disable/enable buttons
        prevBtn.style.pointerEvents = currentProject === 0 ? 'none' : 'auto';
        nextBtn.style.pointerEvents = currentProject === totalProjects - 1 ? 'none' : 'auto';
    }

    function nextProject() {
        if (currentProject < totalProjects - 1) {
            currentProject++;
            updatePortfolioDisplay();
        }
    }

    function prevProject() {
        if (currentProject > 0) {
            currentProject--;
            updatePortfolioDisplay();
        }
    }

    // Event listeners
    nextBtn.addEventListener('click', nextProject);
    prevBtn.addEventListener('click', prevProject);

    // Initialize display
    updatePortfolioDisplay();
});