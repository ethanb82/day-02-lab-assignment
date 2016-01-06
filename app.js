var userName = prompt('What is your name my friend?');
alert('I knew it was you, ' + userName + '! Let\'s find out how well you actually know me.');
  console.log('Your friend\'s name is ' + userName + '.');

var answersRight = 0;
var answersWrong = 0;

var answer1 = prompt(userName + ', Did I grow up in Alaska?');
  console.log('Your friend responded, ' + answer1 + ' to question 1.');
    if (answer1 === 'N' ||answer1 === 'NO' ||answer1 === 'n' ||answer1 === 'no' ||answer1 === 'No'){
      answersRight ++;
      alert('At least you know that much ' + userName + '! I grew up in Washington. You\'ve got ' + answersRight + ' right so far and ' + answersWrong + ' wrong.');
    } else {
      answersWrong ++;
      alert('You suck! I grew up in Washington. You\'ve got ' + answersRight + ' right so far and ' + answersWrong + ' wrong.');
    }

var answer2 = prompt(userName + ', Do I like nature and being outside?');
  console.log('Your friend responded, ' + answer2 + ' to question 2.');
    if (answer2 === 'Y' ||answer2 === 'y' ||answer2 === 'YES' ||answer2 === 'Yes' ||answer2 === 'yes'){
      answersRight ++;
      alert('You are in the friend zone ' + userName + '! You\'ve got ' + answersRight + ' right so far and ' + answersWrong + ' wrong.');
    } else {
      answersWrong ++;
      alert('So you actually don\'t know me... I love getting out there! You\'ve got ' + answersRight + ' right so far, and ' + answersWrong + ' wrong ' + userName + '.');
    }

var answer3 = prompt(userName + ', Am I a tech geek?');
  console.log('Your friend responded, ' + answer3 + ' to question 3.');
    if (answer3 === 'Y' ||answer3 === 'y' ||answer3 === 'YES' ||answer3 === 'Yes' ||answer3 === 'yes'){
      answersRight ++;
      alert('Did we just become best friends, ' + userName + '?! You\'ve got ' + answersRight + ' right so far and ' + answersWrong + ' wrong.');
    } else {
      answersWrong ++;
      alert('I never want to see you again, ' + userName + '. Technology is my middle name. You\'ve got ' + answersRight + ' correct, and ' + answersWrong + ' wrong so far.');
    }

var answer4 = prompt(userName + ', on a scale of 1 to 10, how good of friends are we?');
  console.log('Your friend responded, ' + answer4 + ' to question 4.');
    if (answer4 >= 7){
      alert('We go way back ' + userName + '. And great job, you got ' + answersRight + ' right, and ' + answersWrong + ' wrong overall!');
    } else {
      alert('We need to work on this ' + userName + '. You got ' + answersRight + ' right, and ' + answersWrong + ' wrong overall.');
    }
