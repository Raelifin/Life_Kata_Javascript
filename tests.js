const a = "ALIVE";
const d = "DEAD";

const sample8by6BoardAtTime0 = [
	[d,d,d,d,d,d,a,d],
	[a,a,a,d,d,d,a,d],
	[d,d,d,d,d,d,a,d],
	[d,d,d,d,d,d,d,d],
	[d,d,d,a,a,d,d,d],
	[d,d,d,a,a,d,d,d]];
	
const sample8by6BoardAtTime1 = [
	[d,a,d,d,d,d,d,d],
	[d,a,d,d,d,a,a,a],
	[d,a,d,d,d,d,d,d],
	[d,d,d,d,d,d,d,d],
	[d,d,d,a,a,d,d,d],
	[d,d,d,a,a,d,d,d]];

QUnit.test("Sample board has expected neighborhoods", function(assert) {
	var neighbors = conwaysLife.neighbors(sample8by6BoardAtTime0,0,0);
	assert.ok(neighbors.length == 3);
	assert.ok(neighbors.filter(x=>x==a).length == 2);
	assert.ok(neighbors.filter(x=>x==d).length == 1);
	
	neighbors = conwaysLife.neighbors(sample8by6BoardAtTime0,4,2);
	assert.ok(neighbors.length == 8);
	assert.ok(neighbors.filter(x=>x==a).length == 0);
	assert.ok(neighbors.filter(x=>x==d).length == 8);
	
	neighbors = conwaysLife.neighbors(sample8by6BoardAtTime0,2,4);
	assert.ok(neighbors.length == 8);
	assert.ok(neighbors.filter(x=>x==a).length == 2);
	assert.ok(neighbors.filter(x=>x==d).length == 6);
});

QUnit.test("Life function gives correct mapping", function(assert) {
	assert.ok(conwaysLife.nextCell(a, [a,a,d,d,a,d,d,d]) == a);
	assert.ok(conwaysLife.nextCell(d, [a,a,d,d,a,d,d,d]) == a);
	assert.ok(conwaysLife.nextCell(a, [d,d,d,d,a,d,d,a]) == a);
	assert.ok(conwaysLife.nextCell(d, [d,d,d,d,a,d,d,a]) == d);
	assert.ok(conwaysLife.nextCell(a, [d,d,d,d,a,d,d,d]) == d);
	assert.ok(conwaysLife.nextCell(d, [d,d,d,d,a,d,d,d]) == d);
	assert.ok(conwaysLife.nextCell(a, [a,a,a,a,a,d,d,d]) == d);
	assert.ok(conwaysLife.nextCell(d, [a,a,a,a,a,d,d,d]) == d);
});

QUnit.test("Next board function gives correct mapping on sample 8x6 input", function(assert) {
	var nextBoard = conwaysLife.nextBoard(sample8by6BoardAtTime0);
	for (var y=0; y < 6; y++) {
		for (var x=0; x < 8; x++) {
			assert.ok(nextBoard[y][x] == sample8by6BoardAtTime1[y][x]);
		}
	}
});