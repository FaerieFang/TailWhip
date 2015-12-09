#pragma strict

var speed : float;
var prefab : GameObject;
public var first : System.Boolean;
var player : GameObject;

var dir : int; // up = 1, right = 2, down = 3, left = 4
var up : KeyCode;
var left : KeyCode;
var right : KeyCode;
var down : KeyCode;
var initPosX : float;
var initPosY : float;
var xArray = new Array ();
var yArray = new Array ();
/*
	This system works by recording the direction its going for a time, then sending the data to the player to follow
*/
//Init vars

public var times = new Array ();
public var pushTime : float;
public var directions = new Array ();


function Start () {
	initPosX = transform.position.x;
	initPosX = transform.position.x;
	times.Clear();
	directions.Clear();
	pushTime = 0;
	times.Push(0);
	directions.Push(1);
	if (first){
		GetComponent(SpriteRenderer).enabled = false;
	}
	else {
		GetComponent(SpriteRenderer).enabled = true;
		var clone : GameObject;
		clone = Instantiate(prefab, transform.position, transform.rotation);
		Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	}
	GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
}

function Update () {

	/****movment****/
	if (dir == 1){
		if (Input.GetKeyDown(left)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * -speed;
			times.Push(pushTime);
			directions.Push(dir);
			pushTime = 0;
			dir = 4;
			xArray.Push(transform.position);
		}
		else if (Input.GetKeyDown(right)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * speed;
			times.Push(pushTime);
			directions.Push(dir);
			pushTime = 0;
			dir = 2;
			xArray.Push(transform.position);
		}
	}
	else if (dir == 2){
		if (Input.GetKeyDown(up)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
			times.Push(pushTime);
			directions.Push(dir);
			pushTime = 0;
			dir = 1;
			xArray.Push(transform.position);

		}
		else if (Input.GetKeyDown(down)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * -speed;
			times.Push(pushTime);
			directions.Push(dir);
			pushTime = 0;
			dir = 3;
			xArray.Push(transform.position);

		}
	}
	else if (dir == 3){
		if (Input.GetKeyDown(left)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * -speed;
			times.Push(pushTime);
			directions.Push(dir);
			pushTime = 0;
			dir = 4;
			xArray.Push(transform.position);

		}
		else if (Input.GetKeyDown(right)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * speed;
			times.Push(pushTime);
			directions.Push(dir);
			pushTime = 0;
			dir = 2;
			xArray.Push(transform.position);

		}
	}
	else if (dir == 4){
		if (Input.GetKeyDown(up)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
			times.Push(pushTime);
			directions.Push(dir);
			pushTime = 0;
			dir = 1;
			xArray.Push(transform.position);

		}
		else if (Input.GetKeyDown(down)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * -speed;
			times.Push(pushTime);
			directions.Push(dir);
			pushTime = 0;
			dir = 3;
			xArray.Push(transform.position);

		}	
	}
	pushTime += Time.deltaTime;
}
function FixedUpdate () {
		if (!first){
			var clone : GameObject;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}

}
function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "Obs"){
		times.Push(pushTime);
		directions.Push(dir);
		xArray.Push(transform.position);
		
	}
}