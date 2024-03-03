// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch interest categories from backend API
    fetchInterestCategories();
    
    // Event listener for the "Next" button
    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', function () {
        // Handle navigation to the next screen (e.g., parental permission screen)
        navigateToNextScreen();
    });
});

function fetchInterestCategories() {
    // Simulated interest categories data
    const interestsData = [
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Healthcare' },
        { id: 3, name: 'Finance' },
        { id: 4, name: 'Education' }
    ];
    
    // Populate the list of interest categories dynamically
    populateInterestCategories(interestsData);
}

function populateInterestCategories(categories) {
    const interestsSection = document.getElementById('interests');
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category.name;
        button.addEventListener('click', function () {
            // Handle user selection of interests
            handleInterestSelection(category.id);
        });
        interestsSection.appendChild(button);
    });
}

function handleInterestSelection(interestId) {
    // Store the selected interest ID in a variable or array
    console.log('Selected interest:', interestId);
}

function navigateToNextScreen() {
    // Handle navigation to the next screen (e.g., parental permission screen)
    console.log('Navigating to the next screen...');
    // You can use window.location.href or other methods to navigate
}
