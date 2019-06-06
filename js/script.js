//Create array of quotes
const quotes = [ {
                quote: 'From there to here, from here to there, funny things are everywhere',
                source:'-Dr.Seuss',
                year: 1960 ,
                citation: 'One Fish Two fish Red Fish Blue Fish',
                tags: 'Humor',
                  },
                { 
                quote:'The more that you read, The more things you will know. The more that you learn, The more places you’ll go.',
                source: '-Dr.Seuss',
                year: 1978 ,
                citation:"I Can Read with my Eyes Shut",
                tag: 'Inspirational',
                  },
                {
                  quote:'You\'re off to great places. Today is your day! Your mountain is waiting. So... get on your way.',
                  source: '-Dr.Seuss',
                  year: 1990,
                  citation:'Oh, the Place you\'ll Go', 
                  tag: 'Inspirational',
                } ,
                  {
                  quote: 'You only live once,You oughta be thankful, a whole heaping lot, For the places and people you\'re lucky you\'re not! but if you do it right, Once is enough.',
                  source: '-Dr.Seuss',
                  year: 1973,
                  citation: 'Did I Ever Tell You How Lucky You Are?', 
                  tag: 'Inspirational',
                  },
                 {
                  quote:  'I know up on top you are seeing great sights, But down here on the bottom, We too should have rights',
                  source: '-Dr.Seuss', 
                  year: 1958 ,
                  citation: 'Yertle the Turtle',
                  tag:'Politics',
                 },
                 {
                  quote:  'Today you are You, that is truer than true. There is no one alive who is Youer than You',
                  source: '-Dr.Seuss', 
                  year: 1959 ,
                  citation: 'Happy Birthday to You',
                  tag: 'Inspirational',
                 },
                  {
                  quote:  'I meant what I said and I said what I meant. An elephant\'s faithful one-hundred percent',
                  source: '-Dr.Seuss', 
                  year: 1940 ,
                  citation: 'Horton Hatches the Egg',
                  tag:'Humor',
                  },
                  {
                    quote:  'You’ll miss the best things if you keep your eyes shut',
                    source: '-Dr.Seuss', 
                    year: 1978 ,
                    citation: 'I Can Read With My Eyes Shut',
                    tag: 'Inspirational',
                    } 
                  ]

// Create getRandomQuote Generator
function getRandomQuote () 
{ 
    let num = Math.floor(Math.random() * quotes.length);
    let RandomQuote  = quotes [num]
return RandomQuote;
}
console.log (getRandomQuote(quotes));



//Create the `printQuote` function with HTML string

function printQuote () {
let monkeykey = getRandomQuote ();

  var template = ' ' ;

    template=  "<p class='quote'>" + monkeykey.quote + " </p>";
    template+= "<p class='source'>" + monkeykey.source ;

    if (typeof monkeykey.citation != undefined)
  { template+= "<span class='citation'>" + monkeykey.citation + " </span>";
  }
    if (typeof monkeykey.year != undefined)
  {  template+= "<span class='year'>" + monkeykey.year + "</span>";}  

    if (typeof monkeykey.tag != undefined)
  {  template+= "<span class='year'>" + monkeykey.tag + "</span></p>";}  

  
document.getElementById('quote-box').innerHTML= template ; 
const resultcolor = getRandomColor(); //call random color to display in background 
document.body.style.backgroundColor = resultcolor;
}

//Get Random Color function

let colorList = ["#11FFE8","#FDCE44","#FFB4E9","#FF0041","#AF63EC","#3C80EE","#6A1D4E","#8AD52C"];

function getRandomColor ()
{let n = Math.floor(Math.random()* colorList.length); 
return colorList [n];
}


//Event click button
setInterval (printQuote,20000); //Set timer to change quote every 20seconds
document.getElementById('loadQuote').addEventListener("click", printQuote, false); 
