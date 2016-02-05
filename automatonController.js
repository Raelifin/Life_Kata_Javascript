function AutomatonController(automaton, name) {
	this.automaton = automaton;
	
	this.generateBoardHTML = function(board) {
		return board.map(r => '<div class="row">'+r.map(c=>'<div class="cell automaton_'+c+'">'+c+'</div>').join('')+'</div>').join('');
	}
	
	this.createAutomatonBox = function(board, containerSelector) {
		var resultHTML = '<div id="automatonBox">';
		resultHTML += '<h1>'+name+'</h1>';
		resultHTML += '<div id="automatonCells">'+this.generateBoardHTML(board)+'</div>';
		resultHTML += '<button id="resetAutomatonButton">Reset</button>';
		resultHTML += '<button id="stepAutomatonButton">Step</button>';
		resultHTML += '</div>';
		$(containerSelector).first().append(resultHTML);
		$('#automatonBox #stepAutomatonButton').click(function() { r.step(); });
		$('#automatonBox #resetAutomatonButton').click(function() { r.set(board); });
	}
	
	this.set = function(board) {
		$('#automatonBox #automatonCells').empty();
		$('#automatonBox #automatonCells').append(this.generateBoardHTML(board));
	}
	
	this.step = function() {
		var board = $('#automatonBox .row').map(function(y) {
			return [$(this).children('.cell').map(function(x) { return $(this).html(); }).get()];
		}).get();
		this.set(this.automaton.nextBoard(board));
	}
}