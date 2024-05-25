$(document).ready(function() {
    console.log("DOMContentLoaded event listener called");

    function showSection(sectionId) {
        console.log(`showSection called with sectionId: ${sectionId}`);
        const sections = $('.main-content section');
        console.log(`Found ${sections.length} sections`);
        sections.hide();

        const selectedSection = $(`#${sectionId}`);
        if (selectedSection.length) {
            console.log(`Displaying section: ${sectionId}`);
            selectedSection.show();
        } else {
            console.log(`Section with id ${sectionId} not found`);
        }

        const buttons = $('.navbar nav button');
        console.log(`Found ${buttons.length} buttons`);
        buttons.removeClass('highlight-button');

        const selectedButton = $(`.navbar nav button[data-section="${sectionId}"]`);
        if (selectedButton.length) {
            console.log(`Highlighting button for section: ${sectionId}`);
            selectedButton.addClass('highlight-button');
        } else {
            console.log(`Button for section ${sectionId} not found`);
        }
    }

    function checkOrientation() {
        console.log("checkOrientation called");
        const overlay = $('#rotate-overlay');
        if (overlay.length) {
            if (window.innerHeight > window.innerWidth) {
                overlay.css('display', 'flex');
            } else {
                overlay.css('display', 'none');
            }
        }
    }

    function highlightAboutOnLoad() {
        console.log("highlightAboutOnLoad called");
        showSection('about');
    }

    function showMainContent() {
        console.log("showMainContent called");
        const loadingScreen = $('#loading-screen');
        const mainContent = $('.outer-container');
        console.log(`loadingScreen found: ${loadingScreen.length !== 0}`);
        console.log(`mainContent found: ${mainContent.length !== 0}`);
        if (loadingScreen.length && mainContent.length) {
            loadingScreen.hide();
            mainContent.css('display', 'flex');
        } else {
            console.error('Error: loadingScreen or mainContent not found');
        }
    }

    $(window).on('resize', function() {
        console.log("resize event listener called");
        checkOrientation();
    });

    checkOrientation();
    highlightAboutOnLoad();

    setTimeout(function() {
        console.log("setTimeout callback called after 2 seconds");
        showMainContent();
    }, 2000);

    window.showSection = showSection;
});