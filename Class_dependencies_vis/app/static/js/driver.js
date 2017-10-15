/*
	System Driver
	Author : Hanfei Lin
	Date: 10/14/2017
*/

var mainview = vis.mainview();
var hview = vis.hview();

// layout UI and setup events
$(document).ready(function() {
	// init data list
	$.get("/list", function(d) {
		$("#dataset").empty();
		d = $.parseJSON(d);
		d.forEach(function(name) {
			$("#dataset").append(
				"<option>" + name + "</option>"
			);
		});
		display();
	});

	$("#tabs").tabs();
	$("#tablists").tabs();

	wire_events();
});

//////////////////////////////////////////////////////////////////////
// local functions
function wire_events() {
};

function display() {
	// clean contents
	d3.select("#mainview").selectAll("*").remove();
	d3.select("#hview").selectAll("*").remove();

	// load datasets
	var data = $('#dataset').val();
	if(!data || data == '') {
		return;
	}

	var dataUrl = "data/" + $('#dataset').val() + ".txt";
	d3.json(dataUrl, function(error, json) {
		if (error) {
			console.log(error)
			return;
		}
		hview.container(d3.select("#hview")).data(json.source).layout().render();
		mainview.container(d3.select("#mainview")).data(json.graph).layout().render();
	});
};