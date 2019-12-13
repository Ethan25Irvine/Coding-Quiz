
 
 

  // Questions
  const questions = [
  {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
      
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  ];
 
  const totalQ = questions.length;
  console.log(totalQ);
  let currentQ = 0;
  
//   Below is somehow supposed to get the score to saved in storage but I keep getting NaN and its too late for me to figure it out in time.
    function saveScore (){
        localStorage.setItem('theScore', window.score);
        console.log(window.score);
    }
    
  if(localStorage.getItem('theScore')){ 
      
      window.score = localStorage.getItem('theScore')
  } else {
      window.score = 0;
  }

  
  
  
  
  
  // to hide blank html when the page loads
  $(document).ready(function(){
        $('.mainArea').hide();
        // this makes it so that the answer for the first question is ready on load
        localStorage.setItem('answer', questions[0].answer);
        
      
  });
  
  $('.qButtons').click(function(){
      $('.mainArea').show();
      $('.mainButts').hide();
      
      if (currentQ === totalQ){
          document.location.href = 'enterscore.html';
          
      } else {
          localStorage.setItem('answer', questions[currentQ].answer);
          $('#question').text(questions[currentQ].title);    
          $('#option1').text(questions[currentQ].choices[0]);
          $('#option2').text(questions[currentQ].choices[1]);
          $('#option3').text(questions[currentQ].choices[2]);
          $('#option4').text(questions[currentQ].choices[3]); 
          currentQ++ 
          
          
      }
  });
      
//    This is what changes the html in the index.html page
  $('.options').click(function(){
      
      localStorage.setItem('userChoice',this.textContent);
      let ans = localStorage.getItem('answer')
      let userAns = localStorage.getItem('userChoice');
      if (userAns === ans){
          saveScore();
          window.score = Number(window.score)+1;
          
          
      };
    });
 
  
  
 
  
  // takes you to the scoreboard when you press the highscore button
  $('#highScore').click(function(){
      document.location.href = 'scoreboard.html';
  });

  // Timer
  $('.start').click(function(){
      localStorage.setItem('time', 75);
      let timeleft = localStorage.getItem('time');
      const Timer = setInterval(function(){
          $("#timer").text(timeleft + " seconds remaining");
          timeleft -= 1;
          if(timeleft <= 0){
              document.location.href = 'enterscore.html';
          }
      },1000);     
  });
  
// Below is the enterscore.html script

  
  
