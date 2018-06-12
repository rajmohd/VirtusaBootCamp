
var arr = [];
const imageHash = require('image-hash');
    const config = {
        uri: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/7F76/production/_95703623_mediaitem95703620.jpg'
      };
function myFunction() {
    var x = document.getElementById("myInput").value;
    //document.getElementById("demo").innerHTML = "You wrote: " + x;
   // b = x.substr(0, x.lastIndexOf('/'));
    //document.write("You wrote: " + b);
    var filename = (x.replace(/^.*[\\\/]/, ''));
  //  var name=filename.replace('.jpg','');
    alert(filename);
  //  arr.push(name);
    document.getElementById("myInput").value='';
//    var pwd= arr.join("");
 //   console.log(arr);
 //   console.log(pwd);
   // console.log(hashCode(pwd));
   imageHash(config, 16, true, (error, data) => {
    if (error) throw error;
    console.log(data);
    // 0773063f063f36070e070a070f378e7f1f000fff0fff020103f00ffb0f810ff0
  });
    
 //local file
var hash=imageHash(filename, 16, true, (error, data) => {
    if (error) throw error;
    console.log(data);
    // 0773063f063f36070e070a070f378e7f1f000fff0fff020103f00ffb0f810ff0
  });
  alert(hash);
}
// remote file simple
imageHash('https://ichef-1.bbci.co.uk/news/660/cpsprodpb/7F76/production/_95703623_mediaitem95703620.jpg', 16, true, (error, data) => {
  if (error) throw error;
  console.log(data);
  // 0773063f063f36070e070a070f378e7f1f000fff0fff020103f00ffb0f810ff0
});
 
// remote file with requestjs config object






hashCode = function(str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
