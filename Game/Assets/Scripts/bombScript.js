#pragma strict

var particles : GameObject;
var speed : float;
public var first : System.Boolean;

function Start () {
	GetComponent.<Rigidbody2D>().velocity = transform.up * speed;
	yield WaitForSeconds (2);
	if (!first){
		Destroy (this.gameObject);
	}
}

function Update () {

}

function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "enemy"){
		Explode();
	}
	if (coll.gameObject.tag == "Obs"){
		Explode();
	}
}

function Explode(){
	var PS : GameObject;
	PS = Instantiate(particles, transform.position, transform.rotation);
	PS.GetComponent(PS2script).first = false;
	yield WaitForSeconds (0.1);
	Destroy (this.gameObject);
}

