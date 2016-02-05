var a = "ALIVE";
var d = "DEAD";

var sample8by6BoardAtTime0 = [
	[d,d,d,d,d,d,a,d],
	[a,a,a,d,d,d,a,d],
	[d,d,d,d,d,d,a,d],
	[d,d,d,d,d,d,d,d],
	[d,d,d,a,a,d,d,d],
	[d,d,d,a,a,d,d,d]];
	
var sample8by6BoardAtTime1 = [
	[d,a,d,d,d,d,d,d],
	[d,a,d,d,d,a,a,a],
	[d,a,d,d,d,d,d,d],
	[d,d,d,d,d,d,d,d],
	[d,d,d,a,a,d,d,d],
	[d,d,d,a,a,d,d,d]];

QUnit.test("Sample board has expected neighborhoods", function(assert) {
	var neighbors = conwaysLife.neighbors(sample8by6BoardAtTime0,0,0);
	assert.equal(neighbors.length, 3);
	assert.equal(neighbors.filter(x=>x==a).length, 2);
	assert.equal(neighbors.filter(x=>x==d).length, 1);
	
	neighbors = conwaysLife.neighbors(sample8by6BoardAtTime0,4,2);
	assert.equal(neighbors.length, 8);
	assert.equal(neighbors.filter(x=>x==a).length, 0);
	assert.equal(neighbors.filter(x=>x==d).length, 8);
	
	neighbors = conwaysLife.neighbors(sample8by6BoardAtTime0,2,4);
	assert.equal(neighbors.length, 8);
	assert.equal(neighbors.filter(x=>x==a).length, 2);
	assert.equal(neighbors.filter(x=>x==d).length, 6);
});

QUnit.test("Life function gives correct mapping", function(assert) {
	assert.equal(conwaysLife.nextCell(a, [a,a,d,d,a,d,d,d]), a);
	assert.equal(conwaysLife.nextCell(d, [a,a,d,d,a,d,d,d]), a);
	assert.equal(conwaysLife.nextCell(a, [d,d,d,d,a,d,d,a]), a);
	assert.equal(conwaysLife.nextCell(d, [d,d,d,d,a,d,d,a]), d);
	assert.equal(conwaysLife.nextCell(a, [d,d,d,d,a,d,d,d]), d);
	assert.equal(conwaysLife.nextCell(d, [d,d,d,d,a,d,d,d]), d);
	assert.equal(conwaysLife.nextCell(a, [a,a,a,a,a,d,d,d]), d);
	assert.equal(conwaysLife.nextCell(d, [a,a,a,a,a,d,d,d]), d);
});

QUnit.test("Next board function gives correct mapping on sample 8x6 input", function(assert) {
	var nextBoard = conwaysLife.nextBoard(sample8by6BoardAtTime0);
	for (var y=0; y < 6; y++) {
		for (var x=0; x < 8; x++) {
			assert.equal(nextBoard[y][x], sample8by6BoardAtTime1[y][x]);
		}
	}
});