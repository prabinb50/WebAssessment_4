// document.addEventListener('DOMContentLoaded', function () {
//     // Handle "Get Started" button click
//     const getStartedButton = document.getElementById('get-started');
//     getStartedButton.addEventListener('click', function () {
//         alert('Thank you for getting started with our Mental Health Support!');
//     });

    // Toggle the search bar when the search icon is clicked
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    searchIcon.addEventListener('click', function (event) {
        event.preventDefault();
        if (searchBar.classList.contains('hidden')) {
            searchBar.classList.remove('hidden');
        } else {
            searchBar.classList.add('hidden');
        }
    });


//Get Started
document.getElementById('get-started').addEventListener('click', function() {
  document.getElementById('resources').scrollIntoView({
      behavior: 'smooth'
  });
});


// MOOD TRACKER

window.onload = function() {
    displayMoodSummary();
};

function saveMood() {
    const mood = document.querySelector('input[name="mood"]:checked');
    const note = document.getElementById('note').value.trim();

    if (mood) {
        const moodEntry = {
            mood: mood.value,
            note: note,
            date: new Date().toLocaleString()
        };

        // Get existing data or initialize if empty
        let moodData = JSON.parse(localStorage.getItem('moodData')) || [];
        moodData.push(moodEntry);

        // Save updated data back to local storage
        localStorage.setItem('moodData', JSON.stringify(moodData));

        // Clear the form
        document.getElementById('note').value = ''; 
        displayMoodSummary();  // Refresh the mood summary
    } else {
        alert('Please select a mood.');
    }
}

function displayMoodSummary() {
    const moodData = JSON.parse(localStorage.getItem('moodData')) || [];
    const moodSummary = document.getElementById('mood-summary');

    moodSummary.innerHTML = '';  // Clear the existing summary

    moodData.forEach(entry => {
        const moodEntryDiv = document.createElement('div');
        moodEntryDiv.className = 'mood-entry';

        const moodText = document.createElement('p');
        moodText.innerHTML = `<strong>Mood:</strong> ${entry.mood}`;
        
        const noteText = document.createElement('p');
        noteText.innerHTML = `<strong>Note:</strong> ${entry.note || 'No note added'}`;
        
        const dateText = document.createElement('p');
        dateText.innerHTML = `<strong>Date:</strong> ${entry.date}`;

        moodEntryDiv.appendChild(moodText);
        moodEntryDiv.appendChild(noteText);
        moodEntryDiv.appendChild(dateText);

        moodSummary.appendChild(moodEntryDiv);
    });
}


  