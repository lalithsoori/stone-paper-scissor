function game( yourchoice ) {
  var humanchoice, compchoice;

  humanchoice = yourchoice.id;
  console.log( 'humanchoice', yourchoice.id );

  compchoice = numberToChoose( randomNumber() );
  console.log( 'computerchoice', compchoice );

  result = decidewinner( humanchoice, compchoice );
  console.log( result );

  message = finalmessage( result );
  console.log( message );

  gameresult(yourchoice.id, compchoice, message);
  console.log(gameresult);
}

function randomNumber() {
  return Math.floor( Math.random() * 3 );
}


function numberToChoose( number ) {
  return [ 'rock', 'paper', 'scissors' ][ number ];
}

function decidewinner( yourchoice, computerchoice ) {
  var database = {
    'rock': {
      'scissors': 1,
      'rock': 0.5,
      'paper': 0
    },
    'paper': {
      'rock': 1,
      'paper': 0.5,
      'scissors': 0
    },
    'scissors': {
      'paper': 1,
      'scissors': 0.5,
      'rock': 0
    }
  };


  var yourscore = database[ yourchoice ][ computerchoice ];
  var computerscore = database[ computerchoice ][ yourchoice ];

  return [ yourscore, computerscore ];
}



function finalmessage( [ yourscore, computerscore ] ) {
  if ( yourscore === 0 ) {
    return {
      'message': 'you lost',
      'color': '#ec2011'
    };
  } else if ( yourscore === 0.5 ) {
    return {
      'message': 'you tied',
      'color': '#ffc107'
    };
  } else {
    return {
      'message': 'you won',
      'color': '#4caf50'
    };
  }
}

function gameresult(humanImageChoice, ComputerImageChoice, finalmessage) {
  var imageDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  //image romove code

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();


  var humanselector =document.createElement('div');
  var computerselector =document.createElement('div');
  var messageselector =document.createElement('div');

  humanselector.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' style='box-shadow:1px 1px 10px rgb(233, 30, 99)'>"
  messageselector.innerHTML = "<h1 style='color:" + finalmessage['color'] +"; display:flex-box; width=150px;font-size: 70px;  margin=10px;  text-transform: capitalize; margin-tox:10px; '>"+ finalmessage['message'] +"</h1>"
  computerselector.innerHTML = "<img src='" + imageDatabase[ComputerImageChoice] +"' style='box-shadow:1px 1px 10px rgb(156, 39, 176)'>"

  document.getElementById('gameresultfunction').appendChild(humanselector);
  document.getElementById('gameresultfunction').appendChild(messageselector);
  document.getElementById('gameresultfunction').appendChild(computerselector);

}
