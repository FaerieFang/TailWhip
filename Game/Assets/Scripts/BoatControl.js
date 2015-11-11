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

function Start () {
	rb = GetComponent.<Rigidbody2D>();

}

 function Update () {
 	//movement
 	if (Input.GetKey(moveUp)){
 		curSpe +=  accel * Time.deltaTime;
 		if (curSpe > maxSpeed){
 			curSpe = maxSpeed;
 		}
 		rb.velocity = transform.up * curSpe;
 	}
 	
 	else if (Input.GetKey(moveDown)) {
 	/*
 		curSpe +=  (accel * Time.deltaTime);
 		if (curSpe > maxSpeed * 0.5){
 			curSpe = maxSpeed * 0.5;
 		}
 		rb.velocity = -transform.up * curSpe;
 	*/	
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
 	else{
 		rb.rotation = rb.rotation;
 	}
	
	if (Input.GetKeyUp(moveRight)){
		maxSpeed = 7;
	}
	else if (Input.GetKeyUp(moveLeft)){
		maxSpeed = 7;
	}
	
	//reduce Turn Speed if not moving
	if (rb.velocity.magnitude < 1.5){
		turnSpe = 1;
	}
	if (rb.velocity.magnitude >= 1.5){
		turnSpe = 1.7;
	}
	//set VELOCITY veriable
	curSpe = rb.velocity.magnitude;
	
	
	/* 	 
	if (Mathf.Abs(curSpe) < 0.4){
		curSpe = 0;
	}
	*/
 }
