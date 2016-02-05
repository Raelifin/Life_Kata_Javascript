var lifeNeighborDeltas = [
	[-1,-1],[+0,-1],[+1,-1],
	[-1,+0],        [+1,+0],
	[-1,+1],[+0,+1],[+1,+1]];

function lifeNeighbors(board, x, y) {
	var validDeltas = lifeNeighborDeltas.filter(d => board[y+d[1]] != undefined && board[y+d[1]][x+d[0]] != undefined);
	return validDeltas.map(d => board[y+d[1]][x+d[0]]);
}

function lifeNextCell(oldState, neighbors) {
	var livingNeighbors = neighbors.filter(function(x){
		if (x == 'ALIVE') {
			return true;
		} else if (x == 'DEAD') {
			return false;
		}
		throw "Unexpected neighbor: "+x;
	});
	if (oldState == 'ALIVE') {
		return livingNeighbors.length == 2 || livingNeighbors.length == 3 ? 'ALIVE' : 'DEAD';
	} else if (oldState == 'DEAD') {
		return livingNeighbors.length == 3 ? 'ALIVE' : 'DEAD';
	} else {
		throw "Unexpected previous state: "+oldState;
	}
}

function lifeNextBoard(board) {
	var nextBoard = [];
	for (var y=0; y < board.length; y++) {
		nextBoard.push(board[y].map((thisCell,i,a)=>lifeNextCell(thisCell,lifeNeighbors(board,i,y))));
	}
	return nextBoard;
}