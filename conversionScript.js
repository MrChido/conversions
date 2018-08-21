/*8-bit binary string as locations 01234567
/128/64/32/16/8/4/2/1*/

document.getElementById("binary").addEventListener("click",
  binary);
document.getElementById("d2b").addEventListener("click",
  d2b);


function binary() {
   // document.getElementById('B2D');
    var value = [128,64,32,16,8,4,2,1];
    var dResult = 0;
    var userI = prompt("Please enter your Binary code, a set of 8 1s and 0s.");
    if(userI.length>=9){
        alert("your code exceeds requested length.");
    }
    if(userI.length <=7){
        alert("Prodeding will provide an inaccurate result.");
    }
   for(i =7; i >=0; i-= 1){
    if (userI.charAt(i) === "1"){
        dResult += value[i];
   }
   }
    document.write("<h2>Binary to Decimal Conversion</h2>");
    document.write("Your binary code of "+ userI +". Evaluates to " + dResult + ".");
    document.write("<p>Please use your browser navigation, or click <a href='index.html'> here</a> to start over.</p>")
}


/* decimal to binary converter
This will request user for a number with a upper limit of 255, parse it to a number and then evaluate if certain numbers can be removed from said number
and write it to the HTML
128/64/32/16/8/4/2/1
a, b, c, d, e, f, g, h
*/
function d2b() {

    var values = [128,64,32,16,8,4,2,1];
    var digits = ['0','0','0','0','0','0','0','0'];
    //var disp;
    var userI = prompt("Please enter a value between 0 to 255");
    var Dig= parseInt(userI);
    if(Dig <0){
        alert("OK, $%@&*@$$! I am using the absolute value.")
        Dig = Math.abs(Dig);
    }
    if (Dig > 255 || Dig < -255){
        alert("Your number excedes the expected boundaries.");
        userI= 255;
    }
     for(i =0; i<=values.length;i +=1){
    if (Dig >= values[i] ) {
        digits[i] = "1";
        Dig -= values[i];
    }
     }


document.write("<h2>Decimal To Binary Conversion</h2>")
document.write(Math.abs(userI) + " in binary is " + digits.join('') + ". " );
document.write("<p>For each '1' that you see in binary you add: 1,2,4,8,16,32,64,128; starting from right to left.</p>");
document.write("<p>Please use your browser navigation to start over or click <a href='index.html'> here</a> to start over.</p>");
}
/*a function for a future morse code converter
function morse(){}*/
