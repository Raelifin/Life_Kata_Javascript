function AutomatonRenderer() {
	this.createAutomatonBox = function() {
		return 	'<div id="automatonBox">'+
					'<h1>Conway\'s Life</h1>'+
					'<div id="automatonCells"></div>'+
					'<button id="resetAutomatonButton">Reset</button>'+
				'</div>';
	}
}