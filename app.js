let editBtn = document.getElementsByTagName("LI");
var i;
		for (i = 0; i < editBtn.length; i++) {
			let span = document.createElement("SPAN");
			let txt = document.createTextNode(" Edit ");
			span.className = "edit";
			span.appendChild(txt);
			editBtn[i].appendChild(span);
		}

let closeBtn = document.getElementsByTagName("LI");
var i;
		for (i = 0; i < closeBtn.length; i++) {
			let span = document.createElement("SPAN");
			let txt = document.createTextNode("\u00D7");
			span.className = "close";
			span.appendChild(txt);
			closeBtn[i].appendChild(span);
		}

let btn = document.getElementById("confirm");

if(btn){
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		AjoutList();
	  })
}

let list = document.getElementById("Todo");

function AjoutList(){
	// Création de la liste
	let li = document.createElement("li");
	li.id = "LiTodo";
	// let LiEditButton = document.createElement("BUTTON");
	// LiEditButton.id = "btnEdit";

	// Récupère la valeur du champs texte et du Bouton
	let InputText = document.getElementById("Champs").value;

	// LiEditButton.innerHTML = "Edit"
	// LiEditButton.onclick = function EditList(){
	// 	console.log("Edit");
	// }

	// Met la valeur du champs dans la LI ainsi que le bouton
	let LiText = document.createTextNode(InputText);
	li.appendChild(LiText);
	// li.appendChild(LiEditButton);

	// Ajoute la LI dans le DOM
	document.getElementById("Todo").appendChild(li);

	let spanEdit = document.createElement("SPAN");
  	let txtEdit = document.createTextNode(" Edit ");
  	spanEdit.className = "edit";
  	spanEdit.appendChild(txtEdit);
	li.appendChild(spanEdit);
	
	let spanclose = document.createElement("SPAN");
  	let txtclose = document.createTextNode("\u00D7");
  	spanclose.className = "close";
  	spanclose.appendChild(txtclose);
	li.appendChild(spanclose);


	// Remet la valeur du champs à 0
	document.getElementById("Champs").value = "";

	let edit = document.getElementsByClassName("edit");
	var i;
	for (i = 0; i < edit.length; i++) {
		edit[i].addEventListener('click', function (e) {
			  e.preventDefault();
			  console.log("Hello")
			let input = document.createElement("INPUT");
			input.type = "text";
			let btnEdit = document.createElement("SPAN");
			let txtEdit = document.createTextNode(" Edit ");
			btnEdit.className = "EditInput";
			btnEdit.appendChild = (txtEdit);
			// let textLi = LiText;
			// JSON.stringify(textLi);
			JSON.stringify(LiText);
			console.log(typeof LiText);
			input.value = LiText.value;
			li.appendChild(input);
			li.appendChild(btnEdit)
    		
  		})
	}

	let close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
  		close[i].addEventListener('click', function (e) {
	  		e.preventDefault();
    		let closeLi = this.parentElement;
    		closeLi.remove();
  		})
	}
}