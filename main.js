//Create a reference for canvas 

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image

gcar_w = 75;
gcar_h = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

gcar_x = 5;
gcar_y = 225;

function add() {
	//upload car, and background images on the canvas.

	bg_image = new Image();
	bg_image.onload = uploadBackground();
	bg_image.src = background_image;

	gcar_image = new Image();
	gcar_image.onload = uploadgreencar();
	gcar_image.src = greencar_image;
}

function uploadBackground()
 {
	//Define function ‘uploadBackground’

	ctx.drawImage(bg_image, 0, 0, canvas.width, canvas.height);      
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	ctx.drawImage(gcar_image, gcar_x, gcar_y, gcar_w, gcar_h);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward

	if(gcar_y >=0)
	{
             gcar_y = gcar_y - 10;
             console.log("When Up Arrow Key Is Pressed , X = " + gcar_x + "| Y = " + gcar_y);
              uploadBackground()
               uploadgreencar()
	} 
}

function down()
{
	//Define function to move the car downward

	if(gcar_y <=300)
	{
             gcar_y = gcar_y + 10;
             console.log("When Down Arrow Key Is Pressed , X = " + gcar_x + "| Y = " + gcar_y);
              uploadBackground()
               uploadgreencar()
	} 
}

function left()
{
	//Define function to move the car left side

	if(gcar_x >=0)
	{
             gcar_x = gcar_x - 10;
             console.log("When Left Arrow Key Is Pressed , X = " + gcar_x + "| Y = " + gcar_y);
              uploadBackground()
               uploadgreencar()
	} 
}

function right()
{
	//Define function to move the car right side

	if(gcar_y <=700)
	{
             gcar_x = gcar_x + 10;
             console.log("When Right Arrow Key Is Pressed , X = " + gcar_x + "| Y = " + gcar_y);
              uploadBackground()
               uploadgreencar()
	} 
}
