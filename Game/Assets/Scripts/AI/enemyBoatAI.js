#pragma strict

var player : GameObject;
var curSpe : float;
var accel : float;
var maxSpeed : float;
var projectile : GameObject;
var attackTime : float;
var MinDist : float;
var MaxDist : float;
var canRotate : System.Boolean = true;
function Start () { 

}

function Update () {
	/**** main loop ****/
	if (canRotate){
		transform.LookAt(player.transform.position);
	}
	transform.rotation.x = 0;
	transform.rotation.y = 0;

    if(Vector3.Distance(transform.position,player.transform.position) >= MinDist){
    	curSpe +=  accel * Time.deltaTime;
    	GetComponent.<Rigidbody2D>().velocity = transform.right * curSpe;
    }
    if(Vector3.Distance(transform.position,player.transform.position) < MinDist && attackTime > 2){
    	Fire();
    	attackTime = 0;
    }
    if(Vector3.Distance(transform.position,player.transform.position) >= MaxDist){
    	
    }

	if (curSpe > maxSpeed){
 		curSpe = maxSpeed;
 	}
 	if (curSpe > 0.0){
		curSpe = GetComponent.<Rigidbody2D>().velocity.magnitude;
	}
	else if (curSpe <= 0.0){
		curSpe = -GetComponent.<Rigidbody2D>().velocity.magnitude;
	}
	attackTime += Time.deltaTime;
}

function Fire () {
	canRotate = false;
	var clone : GameObject;
	clone = Instantiate(projectile, transform.position, transform.rotation);
	clone.GetComponent(bombScript).first = false;
	Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	yield WaitForSeconds (1);
	canRotate = true;
}
function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.tag == "bomb"){
		Death();
	}
}
function Death () {

}