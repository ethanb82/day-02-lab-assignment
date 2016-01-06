var userName = prompt('What is your name my friend?');
alert('I knew it was you, ' + userName + '! Let\'s find out how well you actually know me.');
  console.log('Your friend\'s name is ' + userName + '.');

var answer1 = prompt(userName + ', Did I grow up in Alaska?');
  console.log('Your friend responded, ' + answer1 + ' to question 1.');
    if (answer1 === 'N'){
      alert('At least you know that much ' + userName + '! I grew up in Washington.');
    } else {
      alert('You suck! I grew up in Washington.');
    }

var answer2 = prompt(userName + ', Do I like nature and being outside?');
  console.log('Your friend responded, ' + answer2 + ' to question 2.');
    if (answer2 === 'Y'){
      alert('You are in the friend zone ' + userName + '!');
    } else {
      alert('So you actually don\'t know me... I love getting out there!');
    }

var answer3 = prompt(userName + ', Am I a tech geek?');
  console.log('Your friend responded, ' + answer3 + ' to question 3.');
    if (answer3 == 'Y'){
      alert('Did we just become best friends, ' + userName + '?!');
    } else {
      alert('I never want to see you again, ' + userName + '. Technology is my middle name.');
    }

var answer4 = prompt(userName + ', on a scale of 1 to 10, how good of friends are we?');
  console.log('Your friend responded, ' + answer4 + ' to question 4.');
    if (answer4 >= 7){
      alert('We go way back ' + userName + '.');
    } else {
      alert('We need to work on this ' + userName + '.');
    }
