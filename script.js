let x = 1;
let switcher = 1;

function delayTimer() {
  setInterval(delayedFunction, 1000);
}

function delayedFunction() {
  if (switcher == 1) {
    x++;
  } else {
    x--;
  }
  if (x == 15 || (x == 2 && switcher == -1)) {
    switcher *= -1;
  }
  //console.log(switcher);
  document.getElementById('container').innerHTML = '<div class="child"></div> '.repeat(x);
}
delayTimer();
document.getElementsByTagName("body")[0].id="mybody";
