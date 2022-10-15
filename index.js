var generate = function () {
    var secret = Math.floor(Math.random() * 1000000);
  
    var display = document.createElement('p');
    display.textContent = secret;
    document.getElementsByTagName('body')[0].appendChild(display);
  
    var display2 = document.createElement('p');
    display2.textContent = "Refreshing the page in 5 seconds...";
    document.getElementsByTagName('body')[0].appendChild(display2);
  
    localStorage.setItem("Secret", secret);
  
    setTimeout(function () {
      location.reload();
    }, 5000);
  
  };
  
  var check = function () {
    var submission = document.getElementsByTagName('input')[0].value;
    var secret = localStorage.getItem("Secret");
    var matchCount = 0;
    console.log(submission, secret);
    while (secret > 0) {
      if (submission % 10 === secret % 10) {
        matchCount++;
      }
      submission = Math.floor(submission / 10);
      secret = Math.floor(secret / 10);
  
    }
  
    if (matchCount === 6) {
      var success = document.createElement('p');
      success.textContent = 'Right!';
      document.getElementsByTagName('body')[0].appendChild(success);
    } else {
      var text2 = document.createElement('p');
      text2.textContent = "Wrong!";
      document.getElementsByTagName('body')[0].appendChild(text2);
      var text = document.createElement('p');
      text.textContent = "Amount of digits matched: " + matchCount;
      document.getElementsByTagName('body')[0].appendChild(text);
    }
  
  
  } 
  
  if (localStorage.getItem("Secret") === null) {
    var button = document.createElement('button');
    button.textContent = "Generate";
    document.getElementsByTagName('body')[0].appendChild(button);
    button.addEventListener('click', generate);
  } else {
    var input = document.createElement('input');
    document.getElementsByTagName('body')[0].appendChild(input);
    var guess = document.createElement('button');
    guess.textContent = "Guess";
    document.getElementsByTagName('body')[0].appendChild(guess);
    guess.addEventListener('click', check);
    var replay = document.createElement('button');
    replay.textContent = "Replay";
    document.getElementsByTagName('body')[0].appendChild(replay);
    replay.addEventListener('click', function () {
      localStorage.removeItem("Secret");
      location.reload();
    });
  }