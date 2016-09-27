var testString = "Thundercats cat's dog! she, sdfh. Thundercats Thundercats  a b c d a a jianbing vinyl vinyl semiotics. Lomo cray cray cray austin, disrupt microdosing master cleanse brooklyn hammock edison bulb iPhone wolf next level wayfarers. Kinfolk knausgaard asymmetrical ugh, whatever occupy succulents YOLO chicharrones cray vaporware pop-up. Fashion axe selvage ennui, wayfarers raclette pitchfork authentic meditation yr kogi celiac readymade tbh tofu knausgaard. Pok pok single-origin coffee normcore banh mi, next level jean shorts vice. Paleo crucifix meggings gochujang fanny pack hoodie. Wolf post-ironic lo-fi, swag raw denim woke bicycle rights echo park direct trade chia freegan sriracha sartorial gochujang try-hard.";
var sonnet = "So great a sum of sums - Usurers had large sums of money at their disposal. They performed financial services which are nowadays done by banks. yet canst not live - the poet here compares the usurer who makes a comfortable living from the interest he charges, with the youth who has so much wealth of beauty, yet cannot live (survive) into the future.";
function wordCounter(string) {
  var unique = {};
  var subStringArray = string.split(" ");


  subStringArray.forEach(function(word) {
    if(word.length > 1) {
      var cleanWord = word.replace(/[.,!:;?]|'s/,"");
      if(unique[cleanWord] === undefined) {
        unique[cleanWord] = 1;
      } else {
        unique[cleanWord] += 1;
      }
    }
  });
  console.log(unique);
}
wordCounter(sonnet);
