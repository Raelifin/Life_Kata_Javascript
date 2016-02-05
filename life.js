var lifeRules = {
	ALIVE: function(neighbors) { return ([2,3].indexOf(neighbors.filter(x=> x == 'ALIVE').length) >= 0 ? 'ALIVE' : 'DEAD'); },
	DEAD: function(neighbors) { return (neighbors.filter(x=> x == 'ALIVE').length == 3 ? 'ALIVE' : 'DEAD'); },
};

var lifeNeighborDeltas = [
	[-1,-1],[+0,-1],[+1,-1],
	[-1,+0],        [+1,+0],
	[-1,+1],[+0,+1],[+1,+1]];

function lifeNeighbors(board, x, y) {
	var validDeltas = lifeNeighborDeltas.filter(d => board[y+d[1]] != undefined && board[y+d[1]][x+d[0]] != undefined);
	return validDeltas.map(d => board[y+d[1]][x+d[0]]);
}

function lifeNextCell(oldState, neighbors) {
	return (oldState in lifeRules) ? lifeRules[oldState](neighbors) : oldState;
}

function lifeNextBoard(board) {
	return board.map( (thisRow,y,a1) => thisRow.map( (thisCell,x,a2) => lifeNextCell(thisCell,lifeNeighbors(board,x,y)) ) );
}