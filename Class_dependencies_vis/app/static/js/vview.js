/*
	Generate class dependencies graph
	Author : Hanfei Lin
	Date: 10/14/2017
*/

vis.vview = function(){

	var vview = {},
		container = null,
		data = null,
		size = [960, 800],
	 	margin = {left:10, top:10, right:10, bottom:10},
		dispatch = d3.dispatch("select", "mouseover", "mouseout");

	vview.container = function(_) {
		if (!arguments.length) return container;
		container = _;
		return vview;
	};

	vview.data = function(_) {
		if (!arguments.length) return data;
		data = _;
		return vview;
	};

	vview.dispatch = dispatch;

	///////////////////////////////////////////////////
	// Private Parameters

	///////////////////////////////////////////////////
	// Public Function
	vview.layout = function() {

		return vview;
	};

	vview.render = function() {


		return vview.update();
	};

	vview.update = function() {
		return vview;
	};

	///////////////////////////////////////////////////
	// Private Functions

	function private_function1() {

	};

	function private_function2() {

	};

	function private_function3() {

	};

	return vview;
};