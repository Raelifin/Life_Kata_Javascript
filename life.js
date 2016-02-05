var lifeStates = ['ALIVE', 'DEAD'];

var lifeNeighborDeltas = [
	[-1,-1],[+0,-1],[+1,-1],
	[-1,+0],        [+1,+0],
	[-1,+1],[+0,+1],[+1,+1]];

function lifeNeighbors(board, x, y) {
	var validDeltas = lifeNeighborDeltas.filter(d => board[y+d[1]] != undefined && board[y+d[1]][x+d[0]] != undefined);
	return validDeltas.map(d => board[y+d[1]][x+d[0]]);
}

function lifeNextCell(oldState, neighbors) {
	var livingNeighbors = neighbors.filter(x=> x == 'ALIVE');
	if (oldState == 'ALIVE') {
		return livingNeighbors.length == 2 || livingNeighbors.length == 3 ? 'ALIVE' : 'DEAD';
	} else if (oldState == 'DEAD') {
		return livingNeighbors.length == 3 ? 'ALIVE' : 'DEAD';
	}
	return oldState;
}

function lifeNextBoard(board) {
	return board.map( (thisRow,y,a1) => thisRow.map( (thisCell,x,a2) => lifeNextCell(thisCell,lifeNeighbors(board,x,y)) ) );
}