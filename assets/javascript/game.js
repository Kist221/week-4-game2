
// global variables
var hero;
var enemies;
var enemy;
var heroChosen = false;
var enemyChosen = false;


// game functions
var heroSelect = function () 
{
	// choose hero on click
	$("#picksBox").on("click", ".pick", function()
	{
		if (heroChosen === false) 
		{
			// get hero HTML and append to #Hero box
			hero = $(this);
			$("#heroBox").append(hero);
			heroChosen = true;
			// runs function to populate enemies and clear choice box
			popEnemies();
			$("#picksBox").empty();
		} 
	});
}

// move unchosen heroes to enemies box
var popEnemies = function () 
{
	// if hero chosen, move all else to #Enemies box
	enemies = $("#picksBox").html();
	$("#enemyBox").append(enemies);
}

var enemySelect = function ()
{
	// choose enemy on click
	$("#enemyBox").on("click", ".pick", function()
	{
		if (enemyChosen === false) 
		{
			// get enemy HTML and append to #enemy box
			enemy = $(this);
			$("#defenderBox").append(enemy);
			enemyChosen = true;
		} 
		else
		{
			// replace defender with new selection
			$("#enemyBox").append(enemy);
			enemy = $(this);
			$("#defenderBox").append(enemy);
		}
	});
}




heroSelect();
enemySelect();

