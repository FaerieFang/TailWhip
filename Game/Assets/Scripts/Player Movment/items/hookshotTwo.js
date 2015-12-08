#pragma strict
public var first : System.Boolean;
var player : GameObject;
function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "Obs"){
		if (!first){
			player.GetComponent(PlayerControl).end = true;
			GetComponent(hookshot).enabled = false;
			Physics2D.IgnoreCollision(player.GetComponent.<Collider2D>(), GetComponent.<Collider2D>(), false);
		}
	}
	if (coll.gameObject == player){
			Debug.Log("yay");
			player.GetComponent(PlayerControl).contEnabled = true;
			player.GetComponent(PlayerControl).end = false;
			var killObj : GameObject = GameObject.Find("HookTrail(Clone)");
			Destroy (killObj);
			Destroy (this.gameObject);

	}
}