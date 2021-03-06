var a = "ALIVE";
var d = "DEAD";

var sample8by6BoardAtTime0 = [
	[d,d,d,d,d,d,a,d],
	[a,a,a,d,d,d,a,d],
	[d,d,d,d,d,d,a,d],
	[d,d,d,d,d,d,d,d],
	[d,d,d,a,a,d,d,d],
	[d,d,d,a,a,d,d,d]];

var r = new AutomatonController(conwaysLife, "Conway's Life");

QUnit.test("Renderer can create automatonBox div with internal elements", function(assert) {
	r.createAutomatonBox(sample8by6BoardAtTime0, 'body');
	
	assert.equal($('#automatonBox').length, 1);
	assert.equal($('#automatonBox h1').length, 1);
	assert.equal($('#automatonBox #automatonCells').length, 1);
	assert.equal($('#automatonBox #resetAutomatonButton').length, 1);
	assert.equal($('#automatonBox #stepAutomatonButton').length, 1);
	assert.equal($('#automatonBox .row').length, 6);
	assert.equal($('#automatonBox .cell').length, 48);
	
	$('#automatonBox').remove();
});

QUnit.test("Box header is labeled \"Conway's Life\"", function(assert) {
	r.createAutomatonBox(sample8by6BoardAtTime0, 'body');
	assert.equal($('#automatonBox h1').html(), 'Conway\'s Life');
	$('#automatonBox').remove();
});

QUnit.test("AutomatonBox has cells with correct content and class", function(assert) {
	r.createAutomatonBox(sample8by6BoardAtTime0, 'body');
	
	$('#automatonBox .row').each(function(y) {
		$(this).children('.cell').each(function(x) {
			assert.equal($(this).html(), sample8by6BoardAtTime0[y][x]);
			assert.ok($(this).hasClass('automaton_'+sample8by6BoardAtTime0[y][x]));
		});
	});
	
	$('#automatonBox').remove();
});

QUnit.test("StepAutomaton button works", function(assert) {
	r.createAutomatonBox(sample8by6BoardAtTime0, 'body');
	
	$('#automatonBox #stepAutomatonButton').click();
	$('#automatonBox .row').each(function(y) {
		$(this).children('.cell').each(function(x) {
			assert.equal($(this).html(), sample8by6BoardAtTime1[y][x]);
		});
	});
	
	$('#automatonBox').remove();
});

QUnit.test("ResetAutomation button works", function(assert) {
	r.createAutomatonBox(sample8by6BoardAtTime0, 'body');
	
	$('#automatonBox #stepAutomatonButton').click();
	$('#automatonBox #stepAutomatonButton').click();
	$('#automatonBox #stepAutomatonButton').click();
	$('#automatonBox #resetAutomatonButton').click();
	$('#automatonBox .row').each(function(y) {
		$(this).children('.cell').each(function(x) {
			assert.equal($(this).html(), sample8by6BoardAtTime0[y][x]);
		});
	});
	
	$('#automatonBox').remove();
});

QUnit.test("Cells flip when clicked", function(assert) {
	r.createAutomatonBox(sample8by6BoardAtTime0, 'body');
	
	$('#automatonBox .cell').click();
	$('#automatonBox .row').each(function(y) {
		$(this).children('.cell').each(function(x) {
			assert.ok($(this).html() != sample8by6BoardAtTime0[y][x]);
		});
	});
	$('#automatonBox .cell').click();
	$('#automatonBox .row').each(function(y) {
		$(this).children('.cell').each(function(x) {
			assert.equal($(this).html(), sample8by6BoardAtTime0[y][x]);
		});
	});
	
	$('#automatonBox').remove();
});