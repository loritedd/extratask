/*const message = document.getElementById("message");
*/
/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/

let messageWords = [];
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;


/*console.log(`The most frequent word of the message is "${theMostFrequentWord}"`);
console.log(`The number of words in the message is ${numberOfElementsInTheArray}`);*/


// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "http://www.quickmeme.com/img/9d/9d6eaa73b5d0da75ba229b66972795387243df429f6bd0996fa796bcea56ce63.jpg"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
];

function findMostRepeatedWord() {
  let str_0 = document.getElementById('message').value;
  for(i = 0;i<3;i++){
    if(str_0.localeCompare(randomPhrasesAndPictures[i]['phrase']) == 0){
        let picture = document.getElementById('picture').src = randomPhrasesAndPictures[i]['imageURL'];
    }
  }
  
  let str = str_0.toLowerCase();
  let words = str.match(/\w+/g);
  console.log(words); 

  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  console.log(occurances);

  let max = 0;
  let mostRepeatedWord = '';

  for (let word of words) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }

  alert(mostRepeatedWord);
}