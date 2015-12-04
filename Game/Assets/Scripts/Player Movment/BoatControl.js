#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var atk : KeyCode;
var rb : Rigidbody2D;
var turnSpe : float;
var projectile : GameObject;

var curSpe : float;
var accel : float;
var maxSpeed : float;
var forward : System.Boolean;

var attackTime : float;

var lifeSprite : Texture;
var maxLife : int;

var canDamage : System.Boolean = true;
public var lifeCount : int;

function Start () {
	rb = GetComponent.<Rigidbody2D>();
}
function Update () {
	//Bind Keys
	forward = true;
 	if (Input.GetKey(moveUp)){
 		forward = true;
 		curSpe +=  accel * Time.deltaTime;
 		if (curSpe > maxSpeed){
 			curSpe = maxSpeed;
 		}
 		rb.velocity = transform.up * curSpe;

 		//rb.velocity = transform.up * curSpe;
 	}
 	
 	else if (Input.GetKey(moveDown)) {
 		forward = false;
 		curSpe +=  (-accel * Time.deltaTime);
 		 if (curSpe < maxSpeed * -0.5){
 			curSpe = maxSpeed * -0.5;
 		 }
 		 rb.velocity = transform.up * curSpe;
	}
 	
 	
 	//Reduce Speed if Turning
 	if (Input.GetKey(moveRight)){
 		rb.rotation += turnSpe * -1;
		maxSpeed = 5;
 	}
 	
	else if  (Input.GetKey(moveLeft)){	
		rb.rotation += turnSpe;
		maxSpeed = 5;
 	}
	
	if (Input.GetKeyUp(moveRight)){
		maxSpeed = 8;
	}
	else if (Input.GetKeyUp(moveLeft)){
		maxSpeed = 8;
	}
	
	//reduce Turn Speed if not moving
	if (rb.velocity.magnitude < 1.5){
		turnSpe = 1;
	}
	if (rb.velocity.magnitude >= 1.5){
		turnSpe = 1.7;
	}
	//curSpe = rb.velocity.magnitude;
	
	//Check to enable Directional Movement
	if (curSpe > 0.0){
		curSpe = rb.velocity.magnitude;
	}
	else if (curSpe <= 0.0 && !forward){
		curSpe = -rb.velocity.magnitude;
	}
	else if (curSpe <= 0.0 && forward){
		curSpe = -rb.velocity.magnitude;
		//end movement
		
	}	
	if (Input.GetKeyDown(atk)){
		if (attackTime > 1){
			Attack();
			attackTime = 0;
		}

	}
	attackTime += Time.deltaTime;
	//Life Stuff
	if (lifeCount == 0){
		Death();
	}
	if (lifeCount > maxLife){
		lifeCount = maxLife;
	}

}

function Attack(){
	var clone : GameObject;
	clone = Instantiate(projectile, transform.position, transform.rotation);
	clone.GetComponent(bombScript).first = false;
	Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	
}
function OnCollisionEnter2D (coll: Collision2D) {
	//enemys
	if (coll.gameObject.tag == "bomb" && canDamage){
		lifeCount -= 1;
		canDamage = false;
		Damaged();
	}
	if (coll.gameObject.tag == "bomb" && !canDamage){
		Physics2D.IgnoreCollision(coll.gameObject.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	}
	//+life
	if (coll.gameObject.name == "heart"){
		lifeCount += 1;
		Destroy (coll.gameObject);
	}
}
function OnGUI (){

	GUI.DrawTexture(Rect(Screen.width - 70,5,20,20), lifeSprite);
	GUI.Label(Rect(Screen.width - 64,4,20,20), lifeCount.ToString());

}

function Death (){

}

function Damaged (){
	
	var i : int = 0;
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = true;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = true;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = true;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = true;

	canDamage = true;
}
