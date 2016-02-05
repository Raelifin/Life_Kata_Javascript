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
	$('body').append(r.createAutomatonBox());
	assert.ok($('#automatonBox').length == 1);
	assert.ok($('#automatonBox h1').length == 1);
	assert.ok($('#automatonBox #automatonCells').length == 1);
	assert.ok($('#automatonBox #resetAutomatonButton').length == 1);
	assert.ok($('#automatonBox .row').length == 6);
	assert.ok($('#automatonBox .cell').length == 48);
});