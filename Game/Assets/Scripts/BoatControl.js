#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var rb : Rigidbody2D;
var turnSpe : float;

var curSpe : float;
var accel : float;
var maxSpeed : float;
var forward : System.Boolean;


function Start () {
	rb = GetComponent.<Rigidbody2D>();
}
function Update () {
	//Bind Keys
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
 	if (forward){

 	}
 	else if (!forward){

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
	//Check for functional Backwards movment
	if (forward){
		if (curSpe <= rb.velocity.magnitude && curSpe > 0){
			curSpe = rb.velocity.magnitude;			
		}
		else{
			curSpe = curSpe + (accel * Time.deltaTime);
		}
		//rb.velocity.magnitude;
	}
	else if (!forward){
		if (curSpe >= rb.velocity.magnitude){
			curSpe = rb.velocity.magnitude;
		}
		else{
			curSpe = curSpe - (accel * Time.deltaTime);
		}
	}
	Debug.Log(rb.velocity.magnitude);
}
