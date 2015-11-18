#pragma strict

var target : GameObject;

function Start () {

}

function Update () {

	transform.position.y = target.transform.position.y;
	transform.position.x = target.transform.position.x;
	transform.rotation = target.transform.rotation;
}