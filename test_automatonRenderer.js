//Not bothering to test the html for this exercise.

var a = "ALIVE";
var d = "DEAD";

var sample8by6BoardAtTime0 = [
	[d,d,d,d,d,d,a,d],
	[a,a,a,d,d,d,a,d],
	[d,d,d,d,d,d,a,d],
	[d,d,d,d,d,d,d,d],
	[d,d,d,a,a,d,d,d],
	[d,d,d,a,a,d,d,d]];

$( document ).ready(function() {
	$('html').append('<div id="lifeBox"><h1>Conway\'s Life</h1><canvas id="lifeCanvas"></canvas><button id="resetLifeButton">Reset</button></div>');
	//renderAutomaton(conwaysLife, );
});

QUnit.test("Placeholder test", function(assert) {
	assert.ok(1==1);
});