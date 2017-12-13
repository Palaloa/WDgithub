var main = function () {
	"use strict";

	var addHabitsToList = function (habits) {
		console.log("Loading todos from server");
		var habitlist = document.getElementById("habit-list");
		for (var key in habits) {
			var li = document.createElement("li");
			li.innerHTML = "HABIT: " + habits[key].message;
			habitlist.appendChild(li);
		}
	};
//	setInterval(function () {
//  note: to use setInterval() you have to implement a mechanisms
//  that checks which habits are already shown to the client
	
		$.getJSON("../habits", addHabitsToList)
			.error(function (jqXHR, textStatus, errorThrown) {
				console.log("error " + textStatus);
				console.log("incoming Text " + jqXHR.responseText);
			});
//	}, 2000);
};
$(document).ready(main);