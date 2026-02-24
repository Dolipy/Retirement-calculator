'use strict';

// Elements
const btnCalculate = document.querySelector('#enter');
const btnReset = document.querySelector('#undo');
const btnExit = document.querySelector('#exit');

const inputName = document.querySelector('#name-input');
const inputBirth = document.querySelector('#birth-input');
const inputRetireAge = document.querySelector('#retire-input');

const resultsCard = document.querySelector('#results');
const statusText = document.querySelector('#status-text');

const resName = document.querySelector('#res-name');
const resAge = document.querySelector('#res-age');
const resYear = document.querySelector('#res-year');
const resCountdown = document.querySelector('#res-countdown');
const summaryText = document.querySelector('#summary-text');

/**
 * Calculate current age and retirement details
 */
const updateUI = () => {
    const name = inputName.value.trim();
    const birthYear = Number(inputBirth.value);
    const targetRetireAge = Number(inputRetireAge.value);
    const currentYear = new Date().getFullYear();

    // Validation
    if (!name || !birthYear || !targetRetireAge) {
        statusText.textContent = '⚠️ Please fill in all fields to calculate.';
        statusText.style.color = '#f43f5e';
        resultsCard.classList.add('hidden');
        return;
    }

    if (birthYear > currentYear || birthYear < 1900) {
        statusText.textContent = '❌ Valid birth year required (1900 - present).';
        statusText.style.color = '#f43f5e';
        return;
    }

    const age = currentYear - birthYear;
    const yearsRemaining = targetRetireAge - age;
    const retirementYear = currentYear + yearsRemaining;

    // Update Results
    resName.textContent = name;
    resAge.textContent = `${age} years`;
    resYear.textContent = retirementYear;
    resCountdown.textContent = yearsRemaining > 0 ? `${yearsRemaining} years` : 'Retired';

    // Update Summary Message
    if (yearsRemaining > 0) {
        summaryText.innerHTML = `Hey <strong>${name}</strong>, you have <strong>${yearsRemaining}</strong> years left until you reach your goal age of <strong>${targetRetireAge}</strong>. Your retirement year will be <strong>${retirementYear}</strong>! 🚀`;
        statusText.textContent = 'Success! Your plan is ready.';
        statusText.style.color = '#10b981';
    } else {
        summaryText.innerHTML = `Congratulations <strong>${name}</strong>! You've already reached or surpassed your retirement age of <strong>${targetRetireAge}</strong>. Enjoy your well-deserved freedom! 🌴`;
        statusText.textContent = 'You are a legend!';
        statusText.style.color = '#10b981';
    }

    // Show Results Card
    resultsCard.classList.remove('hidden');

    // Smooth scroll to results on mobile
    if (window.innerWidth < 768) {
        resultsCard.scrollIntoView({ behavior: 'smooth' });
    }
};

/**
 * Reset all fields
 */
const resetApp = () => {
    inputName.value = '';
    inputBirth.value = '';
    inputRetireAge.value = '';
    resultsCard.classList.add('hidden');
    statusText.textContent = 'Plan your golden years with precision.';
    statusText.style.color = '';

    // Add a little feedback
    const originalText = btnReset.innerHTML;
    btnReset.innerHTML = '✨ Cleared!';
    setTimeout(() => btnReset.innerHTML = originalText, 1000);
};

/**
 * Exit App functionality
 */
const exitApp = () => {
    if (confirm('Are you sure you want to exit the Retirement Planner?')) {
        document.body.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center; font-family: 'Outfit', sans-serif; background: #0f172a; color: white;">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Goodbye! 👋</h1>
                <p style="color: #94a3b8; font-size: 1.2rem;">We hope your retirement dreams come true. See you soon!</p>
                <button onclick="location.reload()" style="margin-top: 2rem; background: #6366f1; border: none; padding: 1rem 2rem; border-radius: 1rem; color: white; cursor: pointer; font-weight: 700;">Back to App</button>
            </div>
        `;
    }
};

// Event Listeners
btnCalculate.addEventListener('click', updateUI);

btnReset.addEventListener('click', resetApp);

btnExit.addEventListener('click', exitApp);

// Enter key support
[inputName, inputBirth, inputRetireAge].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') updateUI();
    });
});