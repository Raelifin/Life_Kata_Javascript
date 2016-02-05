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

QUnit.test("2 living neighbors and 1 dead neighbor at corner of sample board", function( assert ) {
	var neighbors = lifeNeighbors(sample8by6BoardAtTime0,0,0);
	console.log(neighbors);
	assert.ok(neighbors.length == 3);
	assert.ok(neighbors.filter(x=>x==a).length == 2);
	assert.ok(neighbors.filter(x=>x==d).length == 1);
});