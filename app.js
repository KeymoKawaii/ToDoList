let btn = document.getElementById("confirm");
let list = document.getElementById("Todo");

if(btn){
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		AjoutList();
	  })
}

function AjoutList(){
	// Crée les élèments de la liste
	let moreLi = document.createElement("li");
	moreLi.id = "LiTodo";
	let LiDelButton = document.createElement("BUTTON");
	LiDelButton.id = "btnDelete";
	let LiEditButton = document.createElement("BUTTON");
	LiEditButton.id = "btnEdit";

	// Récupère la valeur du champs texte et du Bouton
	let InputText = document.getElementById("Champs").value;
	
	LiDelButton.innerHTML = "X"
	if(LiDelButton){
		LiDelButton.addEventListener('click', function (e) {
			e.preventDefault();
			SupprList();
		  })
	}

	LiEditButton.innerHTML = "Edit"
	LiEditButton.onclick = function EditList(){
		console.log("Edit");
	}

	// Met la valeur du champs dans la LI ainsi que le bouton
	let LiText = document.createTextNode(InputText);
	moreLi.appendChild(LiText);
	moreLi.appendChild(LiEditButton);
	moreLi.appendChild(LiDelButton);

	// Ajoute la LI dans le DOM
	document.getElementById("Todo").appendChild(moreLi);

	// Remet la valeur du champs à 0
	document.getElementById("Champs").value = "";
}

function SupprList(){
		let LiDelButton = document.getElementById("btnDelete");
		moreLi = LiDelButton.parentElement;
		moreLi.remove(LiDelButton);
}