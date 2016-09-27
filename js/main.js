var testString = "Thundercats Thundercats Thundercats  a b c d a a jianbing vinyl vinyl semiotics. Lomo cray cray cray austin, disrupt microdosing master cleanse brooklyn hammock edison bulb iPhone wolf next level wayfarers. Kinfolk knausgaard asymmetrical ugh, whatever occupy succulents YOLO chicharrones cray vaporware pop-up. Fashion axe selvage ennui, wayfarers raclette pitchfork authentic meditation yr kogi celiac readymade tbh tofu knausgaard. Pok pok single-origin coffee normcore banh mi, next level jean shorts vice. Paleo crucifix meggings gochujang fanny pack hoodie. Wolf post-ironic lo-fi, swag raw denim woke bicycle rights echo park direct trade chia freegan sriracha sartorial gochujang try-hard.";

function wordCounter(string) {
  var unique = {};
  var subStringArray = string.split(" ");


  subStringArray.forEach(function(word) {
    if(word.length > 1) {
      if(unique[word] === undefined) {
        unique[word] = 1;
      } else {
        unique[word] += 1;
      }
    }
  })
  console.log(unique);
}
wordCounter(testString);
