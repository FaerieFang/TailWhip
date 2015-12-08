#pragma strict

var player : GameObject;
var collTrue : System.Boolean;
function Start () {

}

function Update () {
 	if (!player.GetComponent(PlayerControl).hookDone && !collTrue){
		var clone : GameObject;
		clone = Instantiate(gameObject, new Vector2 (transform.position.x, transform.position.y-5), transform.rotation);
		clone.GetComponent(SpriteRenderer).enabled = false;
		clone = Instantiate(gameObject, new Vector2 (transform.position.x, transform.position.y+5), transform.rotation);
		clone.GetComponent(SpriteRenderer).enabled = false;
		clone = Instantiate(gameObject, new Vector2 (transform.position.x-5, transform.position.y), transform.rotation);
		clone.GetComponent(SpriteRenderer).enabled = false;
		clone = Instantiate(gameObject, new Vector2 (transform.position.x+5, transform.position.y), transform.rotation);
		clone.GetComponent(SpriteRenderer).enabled = false;
	}
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