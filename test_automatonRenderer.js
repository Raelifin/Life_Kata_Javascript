//Not bothering to test the html for this exercise.

$( document ).ready(function() {
	$('html').append('<div id="lifeBox"><h1>Conway\'s Life</h1><canvas id="lifeCanvas"></canvas><button id="resetLifeButton">Reset</button></div>');
});

QUnit.test("Placeholder test", function(assert) {
	assert.ok(1==1);
});