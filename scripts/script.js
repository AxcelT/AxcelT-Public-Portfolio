document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event listener called");

    function showSection(sectionId) {
        console.log(`showSection called with sectionId: ${sectionId}`);
        const sections = document.querySelectorAll('.main-content section');
        console.log(`Found ${sections.length} sections`);
        sections.forEach(section => {
            section.style.display = 'none';
        });

        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            console.log(`Displaying section: ${sectionId}`);
            selectedSection.style.display = 'block';
        } else {
            console.log(`Section with id ${sectionId} not found`);
        }

        const buttons = document.querySelectorAll('.navbar nav button');
        console.log(`Found ${buttons.length} buttons`);
        buttons.forEach(button => {
            button.classList.remove('highlight-button');
        });

        const selectedButton = document.querySelector(`.navbar nav button[data-section="${sectionId}"]`);
        if (selectedButton) {
            console.log(`Highlighting button for section: ${sectionId}`);
            selectedButton.classList.add('highlight-button');
        } else {
            console.log(`Button for section ${sectionId} not found`);
        }
    }

    function checkOrientation() {
        console.log("checkOrientation called");
        const overlay = document.getElementById('rotate-overlay');
        if (overlay) {
            if (window.innerHeight > window.innerWidth) {
                overlay.style.display = 'flex';
            } else {
                overlay.style.display = 'none';
            }
        }
    }

    function highlightAboutOnLoad() {
        console.log("highlightAboutOnLoad called");
        showSection('about');
    }

    function showMainContent() {
        console.log("showMainContent called");
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.querySelector('.outer-container');
        console.log(`loadingScreen found: ${loadingScreen !== null}`);
        console.log(`mainContent found: ${mainContent !== null}`);
        if (loadingScreen && mainContent) {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'flex';
        } else {
            console.error('Error: loadingScreen or mainContent not found');
        }
    }

    window.addEventListener('resize', () => {
        console.log("resize event listener called");
        checkOrientation();
    });

    checkOrientation();
    highlightAboutOnLoad();

    setTimeout(() => {
        console.log("setTimeout callback called after 2 seconds");
        showMainContent();
    }, 2000);

    window.showSection = showSection;
});