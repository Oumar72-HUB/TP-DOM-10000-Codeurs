// Modification du contenu d'un paragraphe
document.getElementById("intro").textContent = "Contenu modifié par le DOM!";
// JS POUR DOM SELECTEUR
function changeText() {
  let elements = document.getElementsByClassName("text");
  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = "Texte modifié!";
  }
}
// MODIFIER DOM
function changeImage() {
  document.getElementById("image").src = "https://via.placeholder.com/200";
  document.getElementById("image").alt = "Nouvelle image";
}
//Ajouter et supprimer des elements
function addElement() {
  let newElement = document.createElement("li");
  newElement.textContent = "Nouvel élément";
  document.getElementById("list").appendChild(newElement);
}

function removeElement() {
  let list = document.getElementById("list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}
// Evenement DOM
document.getElementById("clickButton").addEventListener("click", function () {
  document.getElementById("message").textContent = "Bouton cliqué!";
});

// Ecouteur evenement DOM

// Ajout d'un écouteur d'événement pour le clic
document.getElementById("clickButton").addEventListener("click", function () {
  document.getElementById("message").textContent = "Bouton cliqué!";
});

// Ajout d'un écouteur d'événement pour le double-clic
document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", function () {
    document.getElementById("message").textContent = "Bouton double-cliqué!";
  });

// Écouteur d'événement sur le paragraphe pour changer la couleur du texte au survol
document.getElementById("message").addEventListener("mouseover", function () {
  this.style.color = "red";
});

// Rétablir la couleur du texte lorsque la souris quitte le paragraphe
document.getElementById("message").addEventListener("mouseout", function () {
  this.style.color = "black";
});

// Navigation dans le DOM
function highlightFirstChild() {
  let parentDiv = document.getElementById("parent");
  parentDiv.firstElementChild.style.backgroundColor = "yellow";
}

//Animation DOM

function moveBox() {
  let box = document.getElementById("box");
  let position = 0;
  let interval = setInterval(function () {
    if (position >= 300) {
      clearInterval(interval);
    } else {
      position++;
      box.style.left = position + "px";
    }
  }, 5);
}
// Interraction avec Les Formulaires
function validateForm(event) {
  event.preventDefault(); // Empêche le formulaire d'être soumis
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  if (name === "" || age === "") {
    document.getElementById("message").textContent =
      "Tous les champs sont requis!";
  } else {
    document.getElementById("message").textContent =
      "Formulaire soumis avec succès!";
  }
}
// Noeuds DOM
function showNodeTypes() {
  let parentNode = document.getElementById("parentNode");
  let nodes = parentNode.childNodes; // Inclut les nœuds texte, élément, etc.
  let message = "";

  nodes.forEach(function (node) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        message += "Nœud Élément : " + node.tagName + "\n";
        break;
      case Node.TEXT_NODE:
        message += "Nœud Texte : " + node.textContent.trim() + "\n";
        break;
      case Node.COMMENT_NODE:
        message += "Nœud Commentaire\n";
        break;
      default:
        message += "Autre type de nœud\n";
    }
  });

  alert(message);
}
// Changer collection Dom
function changeCollection() {
  let items = document.getElementsByTagName("li"); // Collection DOM
  for (let i = 0; i < items.length; i++) {
    items[i].textContent = "Élément modifié " + (i + 1);
  }
}
function manipulateNodeList() {
  let nodeList = document.querySelectorAll("#nodeContainer p"); // Liste de nœuds DOM
  nodeList.forEach(function (node, index) {
    node.textContent = "Paragraphe " + (index + 1) + " modifié";
  });

  // Suppression du deuxième nœud
  if (nodeList.length > 1) {
    nodeList[1].remove();
  }
}
