#pragma strict

var particles : GameObject;
var speed : float;
public var first : System.Boolean;

function Start () {
	if (first){
		GetComponent(SpriteRenderer).enabled = false;
	}
	else{
		GetComponent(SpriteRenderer).enabled = true;
	}
	GetComponent.<Rigidbody2D>().velocity = transform.right * speed;
	yield WaitForSeconds (0.08);
	var clone : GameObject;
	clone = Instantiate(GameObject.Find("PS3 (Shoot)"), transform.position, transform.rotation);
	clone.GetComponent(PS2script).first = false;
	Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	
	yield WaitForSeconds (2);
	if (!first){
		Destroy (this.gameObject);
	}
}

function Update () {

}

function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "enemy" || coll.gameObject.tag == "Player" || coll.gameObject.tag == "bomb" || coll.gameObject.tag == "Obs"){
		Explode();
	}
}

function Explode(){
	var PS : GameObject;
	PS = Instantiate(particles, transform.position, transform.rotation);
	PS.GetComponent(PS2script).first = false;
	yield WaitForSeconds (0.01);
	Destroy (this.gameObject);
}

