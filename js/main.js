function wordCounter(string) {
  var wordCounts = {};
  var subStringArray = string.split(" ");
  var cleanWord = "";

  subStringArray.forEach(function(word) {
    if (word.length > 1) {
      cleanWord = word.replace(/[.,!:;?()]|'s|'d/, "");
      if (wordCounts[cleanWord] === undefined) {
        wordCounts[cleanWord] = 1;
      } else {
        wordCounts[cleanWord] += 1;
      }
    }
  });
}
