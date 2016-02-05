var a = "ALIVE";
var d = "DEAD";

var sample8by6BoardAtTime0 = [
	[d,d,d,d,d,d,a,d],
	[a,a,a,d,d,d,a,d],
	[d,d,d,d,d,d,a,d],
	[d,d,d,d,d,d,d,d],
	[d,d,d,a,a,d,d,d],
	[d,d,d,a,a,d,d,d]];

var r = new AutomatonController();

QUnit.test("Renderer can create automatonBox div with internal elements", function(assert) {
	$('body').append(r.createAutomatonBox(sample8by6BoardAtTime0));
	assert.ok($('#automatonBox').length == 1);
	assert.ok($('#automatonBox h1').length == 1);
	assert.ok($('#automatonBox #automatonCells').length == 1);
	assert.ok($('#automatonBox #resetAutomatonButton').length == 1);
	assert.ok($('#automatonBox .row').length == 6);
	assert.ok($('#automatonBox .cell').length == 48);
	$('#automatonBox').remove();
});

QUnit.test("Box header is labeled \"Conway's Life\"", function(assert) {
	$('body').append(r.createAutomatonBox(sample8by6BoardAtTime0));
	assert.ok($('#automatonBox h1').html() == 'Conway\'s Life');
	$('#automatonBox').remove();
});

QUnit.test("AutomatonBox has cells with correct content and class", function(assert) {
	$('body').append(r.createAutomatonBox(sample8by6BoardAtTime0));
	$('#automatonBox .row').each(function(y) {
		$(this).children('.cell').each(function(x) {
			assert.ok($(this).html() == sample8by6BoardAtTime0[y][x]);
			assert.ok($(this).hasClass('automaton_'+sample8by6BoardAtTime0[y][x]));
		});
	});
	$('#automatonBox').remove();
});