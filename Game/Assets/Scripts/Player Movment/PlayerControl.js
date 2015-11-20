#pragma strict

var speed : float;
var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var attack : KeyCode;
var activate : KeyCode;

var pullBlock : GameObject;
var pullPos : System.Boolean;

var lifeSprite : Texture;
var maxLife : int;
var lifeCount : int;
var pos : float = .96;
function Start () {

}

function Update () {

	/* ********MOVEMENT********* */
	if (Input.GetKey(moveUp)){
		GetComponent.<Rigidbody2D>().velocity.y = speed;
		if (Input.GetKey(moveLeft)){
			GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		}
		if (Input.GetKey(moveDown)){
			GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		}
		if (Input.GetKey(moveRight)){
			GetComponent.<Rigidbody2D>().velocity.x = speed;
		}		
	}
	else if (Input.GetKey(moveDown)){
		GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		if (Input.GetKey(moveLeft)){
			GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		}
		if (Input.GetKey(moveRight)){
			GetComponent.<Rigidbody2D>().velocity.x = speed;
		}
		if (Input.GetKey(moveUp)){
			GetComponent.<Rigidbody2D>().velocity.y = speed;
		}		
	}
	else if (Input.GetKey(moveLeft)){
		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		if (Input.GetKey(moveRight)){
			GetComponent.<Rigidbody2D>().velocity.x = speed;
		}
		if (Input.GetKey(moveDown)){
			GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		}
		if (Input.GetKey(moveUp)){
			GetComponent.<Rigidbody2D>().velocity.y = speed;
		}				
	}
	else if (Input.GetKey(moveRight)){
		GetComponent.<Rigidbody2D>().velocity.x = speed;
		if (Input.GetKey(moveLeft)){
			GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		}
		if (Input.GetKey(moveDown)){
			GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		}
		if (Input.GetKey(moveUp)){
			GetComponent.<Rigidbody2D>().velocity.y = speed;
		}		
	}
	else{
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		GetComponent.<Rigidbody2D>().velocity.y = 0;
	}
	if (Input.GetKeyUp(moveUp)){
		GetComponent.<Rigidbody2D>().velocity.y = 0;	
	}
	else if (Input.GetKeyUp(moveDown)){
		GetComponent.<Rigidbody2D>().velocity.y = 0;	
	}
	else if (Input.GetKeyUp(moveLeft)){
		GetComponent.<Rigidbody2D>().velocity.x = 0;	
	}
	else if (Input.GetKeyUp(moveRight)){
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	/* ********END MOVEMENT********* */

	
	if (Input.GetKey(attack)){
		Attack();
	}
	if (Input.GetKey(activate) && pullPos){
			speed = 2.5;
			pullBlock.GetComponent(pullBlockScript).pull = true;
	}
	if (Input.GetKeyUp(activate)){
			pullBlock.GetComponent(pullBlockScript).pull = false;
			speed = 5;
	}
	
	/***** LIFE COUNTER ******/
	if (lifeCount == 0){
		Death();
	}


}

function Attack(){

}

function OnCollisionEnter2D (coll: Collision2D) {
	//pulling blocks
	if (coll.gameObject.tag == "CanPress"){
		pullPos = true;

	}
	
	//enemys
	if (coll.gameObject.tag == "enemy"){
		lifeCount -= 1;
	}
	//+life
	if (coll.gameObject.name == "heart"){
		lifeCount += 1;
		Destroy (coll.gameObject);
	}
}
function OnCollisionExit2D (coll: Collision2D) {
	if (coll.gameObject.tag == "CanPress"){
		pullPos = false;
		pullBlock.GetComponent(pullBlockScript).pull = false;
	}
}
function OnGUI (){

	GUI.DrawTexture(Rect(Screen.width - 70,5,20,20), lifeSprite);
	GUI.Label(Rect(Screen.width - 64,4,20,20), lifeCount.ToString());

}

function Death (){

}
