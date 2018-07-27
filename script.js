$(document).ready(function() {
	
	var basketball_teams = ["Bulls", "Lakers", "Rockets", "Mavericks", "Clippers", "Nets"];
	basketball_teams.length 
	basketball_teams.sort();
	console.log(basketball_teams);
	
	for (var p=0; p<30; p++) {
		console.log("p" + p);
		console.log(basketball_teams[p]);
	}
	
	for (var p=0; p<basketball_teams.length; p++) {
		$("#result").append("<p>" + basketball_teams[p] + "</p>");
	}
	
}); 