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
var controler : GameObject;
var lifeSprite : Texture;
public var maxLife : int;
public var canDamage : System.Boolean = true;
public var lifeCount : int;

public var end : System.Boolean;
var contEnabled : System.Boolean = true;
var hookshotPrefab : GameObject;
var fireHook : KeyCode;


function Start () {
	controler = GameObject.Find("Controler");
	yield WaitForSeconds (0.01);
	maxLife = controler.GetComponent(veriableScript).maxLife;
	lifeCount = controler.GetComponent(veriableScript).lifeCount;
}

function Update () {

	/* ********MOVEMENT********* */
	if (contEnabled){
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
	}
	
	if (Input.GetKeyDown(fireHook)){
		Hookshot();
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		GetComponent.<Rigidbody2D>().velocity.y = 0;
	}
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
	if (lifeCount > maxLife){
		lifeCount = maxLife;
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
	if (coll.gameObject.tag == "enemy" && canDamage){
		lifeCount -= 1;
		canDamage = false;
		Damaged();
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
function OnTriggerEnter2D (coll: Collider2D){
	if (coll.gameObject.name == "HookTrail(Clone)"){
		if (end){
			transform.position = coll.transform.position;
			Destroy (coll.gameObject);
		}
	}
}
function OnGUI (){
	GUI.DrawTexture(Rect(Screen.width - 70,5,20,20), lifeSprite);
	GUI.Label(Rect(Screen.width - 64,4,20,20), lifeCount.ToString());
}

function Death (){

}

function Damaged (){
	
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
//**** ITEM FUNCTIONS ****//

function Hookshot (){
	contEnabled = false;
	var clone : GameObject;
	clone = Instantiate(hookshotPrefab, transform.position, transform.rotation);
	clone.GetComponent(hookshot).first = false;
	clone.GetComponent(hookshotTwo).first = false;
	Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	yield WaitForSeconds (1);
	contEnabled = true;
}