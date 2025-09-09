// Step 1: unique card types
const cardTypes = [
  'cherries', 
  'chili', 
  'grapes', 
  'lemon', 
  'orange', 
  'pineapple', 
  'strawberry', 
  'watermelon'
];

let gridcards = [];
cardTypes.forEach(card => {
  gridcards.push(card, card);
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap
  }
  return array;
}

gridcards = shuffle(gridcards);var selectedCards=0;
var remainingcard=16;
var index1,index2;

// Timer function
let timerInterval; // global
let seconds = 0;   // global

function startTimer() {
  if (timerInterval) return; // prevent multiple timers

  timerInterval = setInterval(() => {
    seconds++;
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    document.getElementById('time').textContent =
      `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}
// To stop timer: clearInterval(timerInterval);

$('.card').click(function(event){
    if (!timerInterval) startTimer(); // start only once
    if(selectedCards===1)
    {
        index2=$(this).attr('id');
        document.getElementById(index2+'*').setAttribute('src','./assests/'+gridcards[index2]+'.png');
        if(index2!=index1)
        {
        if(gridcards[index1]===gridcards[index2])
        {
                setTimeout(function() {
            document.getElementById(index1).style.visibility='hidden';
            document.getElementById(index2).style.visibility='hidden';
            remainingcard-=2;
            if(remainingcard===0)
            {
                document.querySelector('h1').innerHTML = "You Won, press Enter to play again";

                let image = document.createElement('img');
                image.setAttribute('src', './assests/giphy.gif');
                image.style.display = 'block';
                image.style.margin = '20px auto';

                document.querySelector('h1').appendChild(image);
                document.querySelector('#Timer').remove();;
                clearInterval(timerInterval);

                document.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        location.reload();
                    }
                });

            }
                },50);

        }
        else 
        {

             setTimeout(function() {
            document.getElementById(index1+'*').setAttribute('src','./assests/kisspng-paper-tile-sticker-clip-art-play-illustration-5b2c93be07a202.9251300215296480620313.jpg');
            document.getElementById(index2+'*').setAttribute('src','./assests/kisspng-paper-tile-sticker-clip-art-play-illustration-5b2c93be07a202.9251300215296480620313.jpg');
            },500);
        }
        selectedCards=0;
        }

    }
    else {
    index1=$(this).attr('id');
    document.getElementById(index1+'*').setAttribute('src','./assests/'+gridcards[index1]+'.png');
    selectedCards++;
    }

});

