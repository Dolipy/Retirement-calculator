'use strict'
document.querySelector('#enter').addEventListener('click', function() {
    const guess = String(document.querySelector('.borderframe').value);
    const guessed = Number(document.querySelector('.borderframed').value);
    const guessing = Number(document.querySelector('.borderframed2').value);
    if (!guess || !guessed || !guessing) {
        document.querySelector('.guess').textContent = '🥺Please fill up the boxes!';

    } else if (guess && guessed && guessing) {
        function joshage(currentyear, birthyears) {
            return currentyear - birthyears

        }
        console.log(joshage(2025, 1998));

        document.querySelector('.guess').style.color = ' #006efe';
        document.querySelector('.hola').style.color = ' #00fe22';

        function joshretirement(retirement, currentyear, birthYear) {
            return retirement - joshage(currentyear, birthYear)

        }
        console.log(joshretirement(95, 2025, 1998));


        function joshpuppy(currentyear, birthYear, firstName, retirement) {
            let retires = joshretirement(retirement, currentyear, birthYear);
            const age5 = joshage(currentyear, birthYear);
            if (retires > 0) {
                console.log(`YAY!, ${firstName} has not retired!`);
                document.querySelector('.hola').textContent = `YAY!,${firstName} not has retired!`;

            } else {
                console.log(`Oh, ${firstName} has retired!`);
                document.querySelector('.hola').textContent = `Oh, ${firstName} has retired.`;
            }
            if (retires < 1) {
                retires = 0;
            }
            document.querySelector('.name').textContent = `${firstName}`;
            document.querySelector('.retirement').textContent = `👧👩Age: ${age5}`;
            document.querySelector('.years').textContent = `👩🔜👵🛌Retirement year:${retires}`;
            document.querySelector('.birth').textContent = `👶Birthyear: ${birthYear}`;
            document.querySelector('.guess').textContent = `
                    ${ firstName }
                    birthyear is ${ birthYear }, current age is ${ age5 }
                    and the year remaining to retire is ${ retires }
                    `;
            return `
                    ${ firstName }
                    birthyear is ${ birthYear }, current age is ${ age5 }
                    and the year remaining to retire is ${ retires }
                    `
        }


        console.log(joshpuppy(2025, guessed, guess, guessing));



    }

    document.querySelector('body').style.backgroundImage = 'Linear-gradient(to top, #00e5ff, #aa00ff, #f85ad3)';

});
document.querySelector('#undo').addEventListener('click', function() {
    document.querySelector('.borderframe').value = '';
    document.querySelector('.borderframed').value = '';
    document.querySelector('.borderframed2').value = '';
    document.querySelector('.name').textContent = '👧🔤Fullname:0';
    document.querySelector('.retirement').textContent = '👧👩Age:0';
    document.querySelector('.years').textContent = '👩🔜👵🛌Retirement year:0';
    document.querySelector('.birth').textContent = '👶Birthyear:0';
    document.querySelector('.guess').textContent = 'Retirement age!';
    document.querySelector('.hola').textContent = 'Hello lets calculate our retirement age together!!!';
    document.querySelector('body').style.backgroundImage = ' linear-gradient(to bottom, #ff3835, #ffae00, #fbff00, #18fb04, #3ff2ff, #4502fc, #9f21ff, #ff00e6)';
});