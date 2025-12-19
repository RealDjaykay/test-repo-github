let side_1=parseInt(prompt("Please enter the known side[a]"));
let side_2=parseInt(prompt("Please enter the next known side[b]"));
let angle_between = parseInt(prompt("Enter the angle between a and b"));
let angle_conversion = angle_between*(Math.PI/180);
// document.write("<h3>Angle in Degrees = ",angle_between);
// document.write("<br><h3>Angle in Radians = ",angle_conversion);
let side_squared = (side_1*side_1)+(side_2*side_2);
let cosine_value = Math.cos(angle_conversion);
// document.write("<br><h3>Cos(",angle_between,") =",cosine_value);
let product_with_angle = (2*side_1*side_2)*cosine_value
let unknown_side_total_squared = side_squared-product_with_angle;
let unknown_side_squareRoot = Math.sqrt(unknown_side_total_squared);
// document.write("<br><h3>The Unknown side = ",unknown_side_squareRoot);
document.write("<br><h3>----------------------------------------------------");
document.write("<br><h3>side a given by user =",side_1);
document.write("<br><h3>side b given by user =",side_2);
document.write("<br><h3>angle between a and b given by user =",angle_between);
document.write("<br><h3>The final side opposite of angle between a and b =",unknown_side_squareRoot,);
document.write("<br><h3>----------------------------------------------------");
