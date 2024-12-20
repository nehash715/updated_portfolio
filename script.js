function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
 
console.log("theme chenger")
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


// Initialize theme based on local storage or default to light theme
const initialTheme = getThemeFromLocalStorage() || 'light';
applyTheme(initialTheme);

  }
    const dynamicContent = document.getElementById("dynamic-text");

    const phrases = ["FullStack Developer", "MERN Stack Developer", "Problem Solver"]
    let pharseIndex = 0;
    let letterIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 75

    function printLetters(phrase) {

        if (letterIndex == phrase.length) {
            // clear letter which have been typed
            clearLetters();
        }
        else if (letterIndex < phrase.length) {
            dynamicContent.textContent += phrase.charAt(letterIndex);
            letterIndex += 1;
            setTimeout(function () {
                printLetters(phrase)
            }, typingSpeed)
        }
    }

    function clearLetters() {
        if (letterIndex == -1) {
            pharseIndex = (pharseIndex + 1) % phrases.length;
            letterIndex = 0;
            printLetters(phrases[pharseIndex])
        }
        else if (letterIndex > -1) {
            let updatedPhrase = "";
            for (let index = 0; index < letterIndex; index++) {
                updatedPhrase += phrases[pharseIndex].charAt(index);

            }
            dynamicContent.textContent = updatedPhrase;
            letterIndex -= 1;
            setTimeout(clearLetters, erasingSpeed)
        }
    }

    printLetters(phrases[pharseIndex]);

    


