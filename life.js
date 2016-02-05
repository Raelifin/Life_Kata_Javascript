function Automata2D(rules) {
	this.rules = rules;
	
	var neighborDeltas = [
		[-1,-1],[+0,-1],[+1,-1],
		[-1,+0],        [+1,+0],
		[-1,+1],[+0,+1],[+1,+1]];
	this.neighbors = function(board,x,y) {
		var validDeltas = neighborDeltas.filter(d => board[y+d[1]] != undefined && board[y+d[1]][x+d[0]] != undefined);
		return validDeltas.map(d => board[y+d[1]][x+d[0]]);
	}
	
	this.nextCell = function(oldState, neighbors) {
		return (oldState in this.rules) ? this.rules[oldState](neighbors) : oldState;
	}
	
	this.nextBoard = function(board) {
		return board.map( (row,y,a1) => row.map( (cell,x,a2) => this.nextCell(cell,this.neighbors(board,x,y)) ) );
	}
}

var conwaysLife = new Automata2D({
	ALIVE: function(neighbors) { return ([2,3].indexOf(neighbors.filter(x=> x == 'ALIVE').length) >= 0 ? 'ALIVE' : 'DEAD'); },
	DEAD: function(neighbors) { return (neighbors.filter(x=> x == 'ALIVE').length == 3 ? 'ALIVE' : 'DEAD'); },
});