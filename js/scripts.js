$(document).ready(function(){
  $("#userInfo").submit(function(event){
    event.preventDefault();
    
    // Store user input
    var sentence = $("#userInput"). val();
    
    // Turn user input from string to array
    var sentenceWords = sentence.split(" ");

    // Test
    alert(sentenceWords);
    
  });
});
