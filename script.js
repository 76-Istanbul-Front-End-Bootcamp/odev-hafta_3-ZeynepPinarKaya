class Animal {
  constructor(name,legs, actionText, actionSoundName, image) {
    this.name=name;
    this.legs = legs;
    this.actionText = actionText;
    this.actionSoundName = actionSoundName;
    this.image = image;
  }

  action() {
    document.getElementById(this.actionSoundName).play();
  }

  putInTheDocument() {
    let petsTable = document.getElementById("petsTable");
    let petTR = document.createElement("tr");
    petTR.className="petRows";

    let petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  

    let petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    let petActionTD = document.createElement("td");
    let petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
  }

  showImage() {
    let imageShower = document.getElementById("imageWrapper");
    let imageElement = document.createElement("img");

    imageElement.src="images/"+ this.image +".jpg"; 
    imageShower.appendChild(imageElement);
    imageElement.style.width = "100%";
    // todo create image element +
    // imageShower.appendChild(image element); +
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 4, "Meoow", "meow", "cat");
  }
}

class Monkey extends Animal {
  constructor(name) {
    super(name, 2, "Scream", "scream", "monkey");
  }
}

let mila = new Cat("Mila");
mila.putInTheDocument();
object.addEventListener("click", showImage);


let charlie = new Monkey("Charlie");
charlie.putInTheDocument();


