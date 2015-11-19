#pragma strict

var object : GameObject;
var many : int;
var controler : GameObject;

function Start () {
	many = controler.GetComponent(ControlScript).backCount;
	if (many < 1000){
		var clone : GameObject;
		
		clone = Instantiate(object, new Vector2 (transform.position.x + .96, transform.position.y), transform.rotation);
		clone = Instantiate(object, new Vector2 (transform.position.x - .96, transform.position.y), transform.rotation);
		clone = Instantiate(object, new Vector2 (transform.position.x, transform.position.y + 1.4), transform.rotation);
		clone = Instantiate(object, new Vector2 (transform.position.x, transform.position.y - 1.4), transform.rotation);
		controler.GetComponent(ControlScript).backCount += 1;
	}
}

function Update () {

}

function OnCollisionEnter2D (coll: Collision2D){
	if (coll.gameObject.tag == "background"){
		Debug.Log ("test");
		Destroy (coll.gameObject);
	}
}
