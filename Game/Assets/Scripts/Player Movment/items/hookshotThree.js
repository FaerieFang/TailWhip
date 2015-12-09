#pragma strict

var player : GameObject;
var collTrue : System.Boolean;
function Start () {

}

function Update () {

}
function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject == player){
		collTrue = true;
	}
}

function OnCollisionExit2D (coll: Collision2D) {
	if (coll.gameObject == player){
		collTrue = false;
	}
}