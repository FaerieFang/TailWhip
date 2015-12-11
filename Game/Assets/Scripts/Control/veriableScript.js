#pragma strict
//This Script Stores Veriales for the Transfer beetween rooms

var waitTime : float;
var whichPlayerType : System.Boolean; //true = Player, False = Boat

var playerScript = player.GetComponent(lifeScript);
var boatScript = boat.GetComponent(boatLifeScript);


//Create All the GameObjects

var boat : GameObject;
var player : GameObject;
	if (player != null){
		var playerScript = player.GetComponent(lifeScript);
	}
	if (boat != null){
		var boatScript = boat.GetComponent(boatLifeScript);
	}
/*
if (GameObject.Find("Player") != null){

}
else {
	playerScript = null;
}

if (GameObject.Find("Boat") != null){

}
else {
	boatScript = null;
}

/*
var inventory : Transform[];

//Get Gameobject Components

if (GameObject.Find("Player") != null){
	//var player : GameObject;
	//var playerScript = player.GetComponent(PlayerControl);
	whichPlayerType = true;
}
if (GameObject.Find("Boat") != null){
	//var boat : GameObject;
	//var boatScript = boat.GetComponent(BoatControl);
	whichPlayerType = false;
}
*/

//var we need the inventory

/***** init actuall veriables *****/
public var maxLife : int;
public var lifeCount : int;
//still need inventory stuff

function Start () {
	waitTime = 0;
}
function OnLevelWasLoaded (/*level : int*/) {
	waitTime = 0;
}
function Update () {
	if (player != null){
		playerScript = player.GetComponent(lifeScript);
	}
	if (boat != null){
		boatScript = boat.GetComponent(boatLifeScript);
	}
	
	if (GameObject.Find("Player") != null){
		player = GameObject.Find("Player");
		boat = null;
		boatScript = null;
		playerScript = player.GetComponent(lifeScript);
		whichPlayerType = true;
	}
	else if (GameObject.Find("Boat") != null){
		boat = GameObject.Find("Boat");
		player = null;
		playerScript = null;
		boatScript = boat.GetComponent(boatLifeScript);
		whichPlayerType = false;
	}

}
function Awake () {
	DontDestroyOnLoad (this.gameObject);
}

function Unload (L1 : int, Lmax : int) {
	maxLife = Lmax;
	lifeCount = L1;
	Application.LoadLevel("lvl1");

}