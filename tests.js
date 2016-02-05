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
	var neighbors = lifeNeighbors(sample8by6BoardAtTime0,0,0);
	assert.ok(neighbors.length == 3);
	assert.ok(neighbors.filter(x=>x==a).length == 2);
	assert.ok(neighbors.filter(x=>x==d).length == 1);
	
	neighbors = lifeNeighbors(sample8by6BoardAtTime0,4,2);
	assert.ok(neighbors.length == 8);
	assert.ok(neighbors.filter(x=>x==a).length == 0);
	assert.ok(neighbors.filter(x=>x==d).length == 8);
	
	neighbors = lifeNeighbors(sample8by6BoardAtTime0,2,4);
	assert.ok(neighbors.length == 8);
	assert.ok(neighbors.filter(x=>x==a).length == 2);
	assert.ok(neighbors.filter(x=>x==d).length == 6);
});

QUnit.test("Life function rejects non-ALIVE and non-DEAD values", function(assert) {
	assert.ok( lifeNextCell != undefined );
	assert.throws(function() { lifeNextCell(a, ['NOPE!']); });
	assert.throws(function() { lifeNextCell(a, ['a']); });
	assert.throws(function() { lifeNextCell(a, [1,1,1,0,0,0,1,0,0]); });
	assert.throws(function() { lifeNextCell(1, [1,1,1,0,0,0,1,0,0]); });
	assert.throws(function() { lifeNextCell('alive', [1,1,1,0,0,0,1,0,0]); });
	assert.throws(function() { lifeNextCell('dead', [a,a,d,d,a,d,d,d]); });
});

QUnit.test("Life function gives correct mapping", function(assert) {
	assert.ok(lifeNextCell(a, [a,a,d,d,a,d,d,d]) == a);
	assert.ok(lifeNextCell(d, [a,a,d,d,a,d,d,d]) == a);
	assert.ok(lifeNextCell(a, [d,d,d,d,a,d,d,a]) == a);
	assert.ok(lifeNextCell(d, [d,d,d,d,a,d,d,a]) == d);
	assert.ok(lifeNextCell(a, [d,d,d,d,a,d,d,d]) == d);
	assert.ok(lifeNextCell(d, [d,d,d,d,a,d,d,d]) == d);
	assert.ok(lifeNextCell(a, [a,a,a,a,a,d,d,d]) == d);
	assert.ok(lifeNextCell(d, [a,a,a,a,a,d,d,d]) == d);
});

QUnit.test("Next board function gives correct mapping on sample 8x6 input", function(assert) {
	var nextBoard = lifeNextBoard(sample8by6BoardAtTime0);
	for (var y=0; y < 6; y++) {
		for (var x=0; x < 8; x++) {
			assert.ok(nextBoard[y][x] == sample8by6BoardAtTime1[y][x]);
		}
	}
});