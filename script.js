document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home');
    const dispatchLink = document.getElementById('dispatch');
    const unitsLink = document.getElementById('units');
    const settingsLink = document.getElementById('settings');

    const homeContent = document.getElementById('home-content');
    const dispatchContent = document.getElementById('dispatch-content');
    const unitsContent = document.getElementById('units-content');
    const settingsContent = document.getElementById('settings-content');

    function showSection(section) {
        homeContent.style.display = 'none';
        dispatchContent.style.display = 'none';
        unitsContent.style.display = 'none';
        settingsContent.style.display = 'none';

        section.style.display = 'block';
    }

    homeLink.addEventListener('click', function () {
        showSection(homeContent);
    });

    dispatchLink.addEventListener('click', function () {
        showSection(dispatchContent);
    });

    unitsLink.addEventListener('click', function () {
        showSection(unitsContent);
    });

    settingsLink.addEventListener('click', function () {
        showSection(settingsContent);
    });

    // Show home section by default
    showSection(homeContent);
});
