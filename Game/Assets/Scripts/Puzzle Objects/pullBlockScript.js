#pragma strict

public var pull : System.Boolean;
var target : GameObject;
var speed : float;

var left : KeyCode;
var right : KeyCode;
var up : KeyCode;
var down : KeyCode;

function Start () {

}

function Update () {
	var playerLocX = transform.position.x - target.transform.position.x;
	var playerLocY = transform.position.y - target.transform.position.y;
	if (pull){
		if (playerLocX > 0 && Input.GetKey(left)){
			GetComponent.<Rigidbody2D>().velocity.x = -speed;
		}
		if (playerLocX < 0 && Input.GetKey(right)){
			GetComponent.<Rigidbody2D>().velocity.x = speed;
		}
		if (playerLocY < 0 && Input.GetKey(up)){
			GetComponent.<Rigidbody2D>().velocity.y = speed;
		}
		if (playerLocY > 0 && Input.GetKey(down)){
			GetComponent.<Rigidbody2D>().velocity.y = -speed;
		}
	}
}