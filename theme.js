
document.addEventListener("DOMContentLoaded", () => {
// Get the theme switcher button and the theme icon
const themeSwitcher = document.getElementById("theme-switcher");
const themeIcon = document.getElementById("theme-icon");
console.log(themeIcon,themeSwitcher)
//document.getElementById("theme-switcher").addEventListener('click', () => console.log('Button clicked'));

// Check the current theme (light or dark) from local storage
const getThemeFromLocalStorage = () => localStorage.getItem('theme');

// Set the theme based on local storage or default to light theme
const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.src = 'light.svg'; // Change icon to bulb for dark theme
  } else {
    document.body.classList.remove('dark-theme');
    themeIcon.src = 'dark.svg'; // Change icon to moon for light theme
  }
};

// Toggle the theme when the button is clicked
const toggleTheme = () => {
    console.log("themeswitcher")
  let currentTheme = getThemeFromLocalStorage();
  if (currentTheme === 'dark') {
    // Switch to light theme
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  } else {
    // Switch to dark theme
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  }
};

// Initialize theme based on local storage or default to light theme
const initialTheme = getThemeFromLocalStorage() || 'light';
applyTheme(initialTheme);

// Add event listener to toggle theme on button click
themeSwitcher.addEventListener('click', toggleTheme);
})