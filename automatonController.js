function AutomatonController() {
	this.createAutomatonBox = function(board) {
		var resultHTML = '<div id="automatonBox">';
		resultHTML += '<h1>Conway\'s Life</h1>';
		resultHTML += '<div id="automatonCells">';
		for (var y=0; y < board.length; y++) {
			resultHTML += '<div class="row">';
			for (var x=0; x < board[y].length; x++) {
				resultHTML += '<div class="cell automaton_'+board[y][x]+'">'+board[y][x]+'</div>';
			}
			resultHTML += '</div>';
		}
		resultHTML += '</div>';
		resultHTML += '<button id="resetAutomatonButton">Reset</button>';
		resultHTML += '<button id="stepAutomatonButton">Step</button>';
		resultHTML += '</div>';
		return resultHTML;
	}
}