function wordCounter(string) {
  var wordCounts = {};
  var subStringArray = string.split(" ");

  subStringArray.forEach(function(word) {
    if(word.length > 1) {
      var cleanWord = word.replace(/[.,!:;?()]|'s/,"");
      if(wordCounts[cleanWord] === undefined) {
        wordCounts[cleanWord] = 1;
      } else {
        wordCounts[cleanWord] += 1;
      }
    }
  });
}
