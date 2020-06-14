var modal = document.getElementsByClassName('modal')[0];
var button = document.getElementsByClassName('trigger')[0];



var open = function() {
  modal.style.visibility = 'visible';
  modal.style.marginTop = '50px';
  modal.style.opacity = '1';
  modal.style.radius = '5px';
 

};

button.addEventListener('click', open, false);

var close = function() {
  modal.style.visibility = 'hidden';
  modal.style.marginTop = '-50px';
  modal.style.opacity = '0';
  button.style.opacity = '1';
};

modal.addEventListener('click', close, false);