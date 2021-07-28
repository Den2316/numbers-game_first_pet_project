'use strict';
// A game should be able to help a user find the needed number. Numbers can be from -100 till 100. If a user in the first attempt is far (more than 50%) - it will tell cold. If closer - will tell warm. If closer - will tell hot(less than 30). If very close - will tell very close (less than 10). If only 3 points away - will tell "you are very very close to the finish". User has 10 attempts. 
function getRandomNumber (min, max){
    max = Math.floor(max);
    min= Math.ceil(min);
    const gettheNumber = Math.floor(Math.random()* (max-min + 1) - min);
    return gettheNumber;
}
const theNeededNumber = getRandomNumber(0,100);
console.log(theNeededNumber);
let question1;
let i=0;
while(i<10){
    question1 = prompt ('Dear friend, I invite you to guess the number ( from 0 to 100) which I am thinking about! Please write it down ✍');
    if (question1-theNeededNumber >=50 || theNeededNumber-question1>=50) {
        alert('Too cold, my friend. Try again. 🧊');
    } else if (question1-theNeededNumber >=30 || theNeededNumber-question1>=30){
        alert ('Not so cold, but not warm too. Try again')
    } else if (question1-theNeededNumber >=10 || theNeededNumber-question1>=10){
        alert ('It is getting warm now 🌵. Your result differs from mine in more than 10 points.')
    } else if (question1-theNeededNumber >=4 || theNeededNumber-question1>=4){
        alert ('You are very close!Your result differs from mine in more than 4 points. Try again 🎇');
    }  else if (question1-theNeededNumber >=1 || theNeededNumber-question1>=1){
        alert ('You are extremely close! Give the final attempts! ');
    } else if (question1-theNeededNumber === 0 || theNeededNumber-question1 === 0) {
        alert ('You are a winner!');
        break;
    };
}
