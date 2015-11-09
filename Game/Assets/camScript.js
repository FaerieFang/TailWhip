#pragma strict


var player : GameObject;
var tog : KeyCode;
var active : System.Boolean = false;

function Start () {

}

function Update () {

 	if (Input.GetKeyDown(tog)){
		active = !active;

	}
	if (active){
	
		transform.position.y = player.transform.position.y;
		transform.position.x = player.transform.position.x;
	}
}