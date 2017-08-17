//Back-end logic
function getWordsGreaterThan3(words) {
  var newArray = words.filter(function(word) {
    return word.length >= 3
  });
  return newArray.reverse().join(" ");
}






$(document).ready(function() {
  $("#userInfo").submit(function(event) {
    event.preventDefault();

    // Store user input
    var sentence = $("#userInput").val();

    // Turn user input from string to array
    var sentenceWords = sentence.split(" ");
    var result = getWordsGreaterThan3(sentenceWords);

    // Test
    //console.log(getWordsGreaterThan3(sentenceWords));
    $("#newSentence").text(result);
  });
});
