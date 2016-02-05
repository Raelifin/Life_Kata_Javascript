//Helper function
function getObjKeys(o) {
	var result = [];
	for (var k in o) {
		result.push(k);
	}
	return result;
}

function AutomatonController(automaton, name) {
	this.automaton = automaton;
	
	this.generateBoardHTML = function(board) {
		return board.map(r => '<div class="row">'+r.map(c=>'<div class="cell automaton_'+c+'">'+c+'</div>').join('')+'</div>').join('');
	}
	
	this.createAutomatonBox = function(board, containerSelector) {
		var self = this;
		var resultHTML = '<div id="automatonBox">';
		resultHTML += '<h1>'+name+'</h1>';
		resultHTML += '<div id="automatonCells"></div>';
		resultHTML += '<button id="resetAutomatonButton">Reset</button>';
		resultHTML += '<button id="stepAutomatonButton">Step</button>';
		resultHTML += '</div>';
		$(containerSelector).first().append(resultHTML);
		this.set(board);
		$('#automatonBox #stepAutomatonButton').click(function() { self.step(); });
		$('#automatonBox #resetAutomatonButton').click(function() { self.set(board); });
	}
	
	this.set = function(board) {
		$('#automatonBox #automatonCells').empty();
		$('#automatonBox #automatonCells').append(this.generateBoardHTML(board));
		$('#automatonBox .cell').click(function() {
			$(this).removeClass('automaton_'+$(this).html());
			var states = getObjKeys(automaton.rules);
			var index = states.indexOf($(this).html());
			if (index >= 0) {
				var newState = states[(index+1)%states.length];
				$(this).html(newState);
				$(this).addClass('automaton_'+newState);
			}
		});
	}
	
	this.step = function() {
		var board = $('#automatonBox .row').map(function(y) {
			return [$(this).children('.cell').map(function(x) { return $(this).html(); }).get()];
		}).get();
		this.set(this.automaton.nextBoard(board));
	}
}