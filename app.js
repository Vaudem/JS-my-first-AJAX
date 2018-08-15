var app = (function app(){
	"use strict";

	var log = function(data){
		console.log(data);
	};

	var displayDataset = function(tableau) {

		for (var i=0; i < tableau.length;i++){
			var ul = document.getElementById("liste");
			var li = document.createElement("li");
			li.innerHTML += tableau[i].fields.adresse;
			ul.appendChild(li);

		}
	};

	var myFirstAjaxGet = function(url){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		xhr.onload = function(evt){
			log(this); // ici xhr
			log(this.response); // en JSON
			var res = JSON.parse(this.response); //en JS
			log(res);
			displayDataset(res.records);
		};
		xhr.send();
	};





	 var start = function (){
	 	var url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_kiosques_presse_a_paris&rows=100&facet=code_postal&facet=statut";
	 	myFirstAjaxGet(url);




	 };

 window.addEventListener("DOMContentLoaded", start);

})();


// AJAX = Asynchronous JS and XML (méthode dans JS)
// exemple : envoi de message sur le chat Gmail sans rechargement de la page (des mails...)



