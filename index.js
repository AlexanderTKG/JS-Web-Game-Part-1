function theGreenCharacter() {
  let greenCharacter = document.createElement("img");
  greenCharacter.src = "assets/green-character.gif"; //It tells the browser what image to display by providing a relative path to an image file. Try finding the image in the file explorer of your code editor.
  greenCharacter.style.position = "fixed";
  greenCharacter.style.left = "100px";
  greenCharacter.style.bottom = "100px";
  document.body.append(greenCharacter); //Displays the img on the webpage

  theGreenCharacter.addEventListener("click", function () {
    theGreenCharacter.remove();
  });
}

function pineTree() {
  let pinetree = document.createElement("img");
  pinetree.src = "assets/pine-tree.png";
  pinetree.style.position = "fixed";
  pinetree.style.left = "450px";
  pinetree.style.bottom = "200px";
  document.body.append(pinetree);

  pinetree.addEventListener("dblclick", function () {
    pinetree.remove();
  });
}

function tree() {
  let trees = document.createElement("img");
  trees.src = "assets/tree.png";
  trees.style.position = "fixed";
  trees.style.left = "200px";
  trees.style.bottom = "300px";
  document.body.append(trees);

  trees.addEventListener("dblclick", function () {
    trees.remove();
  });
}

function pillar() {
  let pillar = document.createElement("img");
  pillar.src = "assets/pillar.png";
  pillar.style.position = "fixed";
  pillar.style.left = "350px";
  pillar.style.bottom = "100px";
  document.body.append(pillar);

  pillar.addEventListener("dblclick", function () {
    pillar.remove();
  });
}

function crate() {
  let crate = document.createElement("img");
  crate.src = "assets/crate.png";
  crate.style.position = "fixed";
  crate.style.left = "150px";
  crate.style.bottom = "200px";
  document.body.append(crate);

  crate.addEventListener("dblclick", function () {
    crate.remove();
  });
}

function well() {
  let well = document.createElement("img");
  well.src = "assets/well.png";
  well.style.position = "fixed";
  well.style.left = "500px";
  well.style.bottom = "425px";
  document.body.append(well);

  well.addEventListener("dblclick", function () {
    well.remove();
  });
}

function shield() {
  let shield = document.createElement("img");
  shield.src = "assets/sheild.png";
  shield.style.position = "fixed";
  shield.style.left = "165px";
  shield.style.bottom = "185px";
  document.body.append(shield);

  shield.addEventListener("dblclick", function () {
    shield.remove();
  });
}

function staff() {
  let staff = document.createElement("img");
  staff.src = "assets/staff.png";
  staff.style.position = "fixed";
  staff.style.left = "600px";
  staff.style.bottom = "100px";
  document.body.append(staff);

  staff.addEventListener("dblclick", function () {
    staff.remove();
  });
}

function sword() {
  let sword = document.createElement("img");
  sword.src = "assets/sword.png";
  sword.style.position = "fixed";
  sword.style.left = "500px";
  sword.style.bottom = "405px";
  document.body.append(sword);

  sword.addEventListener("dblclick", function () {
    sword.remove();
  });
}

function newimage() {
  sword();
  staff();
  shield();
  well();
  crate();
  pillar();
  tree();
  pineTree();
  theGreenCharacter();
}

newimage();
