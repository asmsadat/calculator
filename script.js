function AddItem(val) {
    var ip = document.getElementById('result');
    ip.value += val;
 }
 function Result() {
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 function Clear() {
    var ac = document.getElementById('result');
    ac.value = '';
 }
 function Back() {
    var clear = document.getElementById('result');
    clear.value = clear.value.slice(0,-1);
 }