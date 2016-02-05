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

QUnit.test("Sample board has expected neighborhoods", function( assert ) {
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