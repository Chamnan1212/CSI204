let Sa = document.getElementById("Salary")
let a = document.getElementById("A")
let b = document.getElementById("B")
function computedata(){
let Salary =Sa.value
let S = Salary


 if (Salary<15000) {
    tex = S-(S*0.03);
    Z = (S*0.03);
    a.innerHTML ="เงินเดือน"+S;
    b.innerHTML ="เงินเดือนหลังหักภาษี"+tex;
    Y.innerHTML = "ภาษี"+Z
 } 
 
 else if(Salary<100000) {
    tex = S-(S*0.05);
    Z = (S*0.05);
    a.innerHTML ="เงินเดือน"+S;
    b.innerHTML ="เงินเดือนหลังหักภาษี"+tex;
    Y.innerHTML = "ภาษี"+Z
 }
 else{
    tex = S-(S*0.2);
    Z = (S*0.02);
    a.innerHTML ="เงินเดือน"+S;
    b.innerHTML ="เงินเดือนหลังหักภาษี"+tex;
    Y.innerHTML = "ภาษี"+Z
 }
}
function resetData(){
    Sa.value = "";
    a.innerHTML ="";
    b.innerHTML ="";
}