var main = function () {
	"use strict";

	var addHabitsToList = function (habits) {
		console.log("Loading habbits from server");
		var habitlist = document.getElementById("habit-list");
		for (var key in habits) {
			var li = document.createElement("li");
			li.innerHTML = "HABIT: " + habits[key].message;
			console.log("Element Added:" + li);
			if(!habitlist.contains(li)){
				habitlist.appendChild(li);
				console.log("Element Added:" + li);
			}
		}
		console.log(habitlist);
	};
	
	setInterval(function () {
//  note: to use setInterval() you have to implement a mechanisms
//  that checks which habits are already shown to the client
		$.getJSON("../habits", addHabitsToList)
			.error(function (jqXHR, textStatus, errorThrown) {
				console.log("error " + textStatus);
				console.log("incoming Text " + jqXHR.responseText);
			});
	}, 2000);
};
$(document).ready(main);