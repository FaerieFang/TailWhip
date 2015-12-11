#pragma strict
public var first : System.Boolean;
var player : GameObject;
function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "Obs"){
		if (!first){
			yield WaitForSeconds (0.01);
			player.SendMessage("GoToHookshot");
			GetComponent(hookshot).enabled = false;
			Physics2D.IgnoreCollision(player.GetComponent.<Collider2D>(), GetComponent.<Collider2D>(), false);
		}
	}
	if (coll.gameObject == player){
			Destroy (this.gameObject);

	}
}
function Start (){
	GetComponent(hookshot).enabled = true;	
}