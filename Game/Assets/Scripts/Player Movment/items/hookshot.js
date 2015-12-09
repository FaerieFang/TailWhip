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

function Start () {

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
			dir = 4;
			var clone : GameObject;
			GetComponent(SpriteRenderer).enabled = true;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			clone.GetComponent(BoxCollider2D).size = clone.GetComponent(BoxCollider2D).size * 2;
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
		else if (Input.GetKeyDown(right)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * speed;
			dir = 2;
			GetComponent(SpriteRenderer).enabled = true;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			clone.GetComponent(BoxCollider2D).size = clone.GetComponent(BoxCollider2D).size * 2;
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
	}
	else if (dir == 2){
		if (Input.GetKeyDown(up)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
			dir = 1;
			GetComponent(SpriteRenderer).enabled = true;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			clone.GetComponent(BoxCollider2D).size = clone.GetComponent(BoxCollider2D).size * 2;
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
		else if (Input.GetKeyDown(down)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * -speed;
			dir = 3;
			GetComponent(SpriteRenderer).enabled = true;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			clone.GetComponent(BoxCollider2D).size = clone.GetComponent(BoxCollider2D).size * 2;
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
	}
	else if (dir == 3){
		if (Input.GetKeyDown(left)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * -speed;
			dir = 4;
			GetComponent(SpriteRenderer).enabled = true;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			clone.GetComponent(BoxCollider2D).size = clone.GetComponent(BoxCollider2D).size * 2;
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
		else if (Input.GetKeyDown(right)){
			GetComponent.<Rigidbody2D>().velocity = transform.right * speed;
			dir = 2;
			GetComponent(SpriteRenderer).enabled = true;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			clone.GetComponent(BoxCollider2D).size = clone.GetComponent(BoxCollider2D).size * 2;
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
	}
	else if (dir == 4){
		if (Input.GetKeyDown(up)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
			dir = 1;
			GetComponent(SpriteRenderer).enabled = true;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			clone.GetComponent(BoxCollider2D).size = clone.GetComponent(BoxCollider2D).size * 2;
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
		else if (Input.GetKeyDown(down)){
			GetComponent.<Rigidbody2D>().velocity = transform.up * -speed;
			dir = 3;
			GetComponent(SpriteRenderer).enabled = true;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			clone.GetComponent(BoxCollider2D).size = clone.GetComponent(BoxCollider2D).size * 2;
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
	}
}
function FixedUpdate () {
		if (!first){
			var clone : GameObject;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
		if (!first){
			///var clone : GameObject;
			clone = Instantiate(prefab, transform.position, transform.rotation);
			Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
		}
}
