
let page;
let login,hmpg,menu,badge;

function setup() {

  createCanvas(360, 540);

    page = 1;

// function preload () {
   login = loadImage('https://imgur.com/a/cO5vjCP');
   hmpg = loadImage('https://imgur.com/a/tpxWSR0');
   menu = loadImage('https://imgur.com/a/mv3jr3K');
   badge = loadImage('https://imgur.com/a/JErvAGq');
}

function draw() {
  background(0);

page 1: login;

if (page==1) {
  image(login,0,0);

} else

//page 2: home
if (page==2) {
  background(255,0,0);
  image(hmpg, 0,0);

}
//page3 menu
else if
(page==3) {
  background(255,255,0);
  image(menu,0,0);

 }
//page4 badge
 else if (page==4) {
  background(0,255,0);
  image(badge,0,0);
}
}
function mousePressed() {

  //v year
  if (page==1 && mouseX>=130 && mouseX<=230 && mouseY>=160 && mouseY<=260){
    page++;
  }

  //v month
else if (page==2 && mouseX>=5 && mouseX<=355 && mouseY>=275 && mouseY<=390) {
    page++;
  }
else if (page==3 && mouseX>=5 && mouseX<=355 && mouseY>=275 && mouseY<=390) {
      page++;
    }
else if (page==4 && mouseX>=5 && mouseX<=355 && mouseY>=275 && mouseY<=390) {
        page++;
      }
}
