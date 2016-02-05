var lifeNeighborDeltas = [
	[-1,-1],[+0,-1],[+1,-1],
	[-1,+0],        [+1,+0],
	[-1,+1],[+0,+1],[+1,+1]];

function lifeNeighbors(board, x, y) {
	var validDeltas = lifeNeighborDeltas.filter(d => board[y+d[1]] != undefined && board[y+d[1]][x+d[0]] != undefined);
	return validDeltas.map(d => board[y+d[1]][x+d[0]]);
}