canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokStyle ="red";
ctx.lineWidth = 1;
ctx.rect(150,143,430,200)
ctx.stroke();

ctx.beginPath();
ctx.strokStyle ="blue";
ctx.lineWidth = 5;
ctx.rect(250, 210, 40 ,0 , 2 * math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokStyle ="black";
ctx.lineWidth = 5;
ctx.rect(350, 210, 40 ,0 , 2 * math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokStyle ="red";
ctx.lineWidth = 5;
ctx.rect(450, 210, 40 ,0 , 2 * math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokStyle ="orange";
ctx.lineWidth = 5;
ctx.rect(300, 250 , 40 ,0 , 2 * math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokStyle ="green";
ctx.lineWidth = 5;
ctx.rect(400, 250, 40 ,0 , 2 * math.PI);
ctx.stroke();
