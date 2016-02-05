function AutomatonController() {
	this.createAutomatonBox = function() {
		var resultHTML = '<div id="automatonBox">';
		resultHTML += '<h1>Conway\'s Life</h1>';
		resultHTML += '<div id="automatonCells">';
		for (var y=0; y < 6; y++) {
			resultHTML += '<div class="row">';
			for (var x=0; x < 8; x++) {
				resultHTML += '<div class="cell"></div>';
			}
			resultHTML += '</div>';
		}
		resultHTML += '</div>';
		resultHTML += '<button id="resetAutomatonButton">Reset</button>';
		resultHTML += '</div>';
		return resultHTML;
	}
}