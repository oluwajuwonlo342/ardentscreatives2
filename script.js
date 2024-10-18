var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
var modal = document.getElementById("myModal01");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg01");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById("myModal02");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg02");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption02");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById("myModal03");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg03");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption03");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// var i= 0;
// if (i == 0){
//   i=1;
//   var elem = document.getElementById("bar");
//   var width = 10;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 90) {
//       clearInterval(id);
//       i = 0;
//     } else {
//       width++;
//       elem.style.width = width + "%";
//       elem.innerHTML = width + "%";
//     }
//   }
// }
// var i= 0;
// if (i == 0){
//   i=1;
//   var elem = document.getElementById("bar2");
//   var width = 10;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 40) {
//       clearInterval(id);
//       i = 0;
//     } else {
//       width++;
//       elem.style.width = width + "%";
//       elem.innerHTML = width + "%";
//     }
//   }
// }
