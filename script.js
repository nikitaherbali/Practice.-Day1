const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();       
ctx.moveTo(30, 50);    
ctx.lineTo(150, 100);
ctx.lineWidth = 15;  
ctx.stroke(); 
