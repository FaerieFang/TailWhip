#pragma strict

var particles : GameObject;
var speed : float;

function Start () {
	GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
}

function Update () {
	yield WaitForSeconds (4);
	Destroy (this);
}

function Explode(){
	var PS : GameObject;
	PS = Instantiate(particles, transform.position, transform.rotation);
	yield WaitForSeconds (0.1);
	Destroy (this);
}

function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "enemy"){
		Explode();
	}
}