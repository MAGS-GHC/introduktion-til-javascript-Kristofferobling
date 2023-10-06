//Opgave 5.1
function myFunction(){
    console.log("Hello World");
}
myFunction();

//Opgave 5.2
function addNumbers(a, b){
    return(a + b)
}
console.log(addNumbers(3 +18));

//Opgave 5.3
function trueFalse(x){
    if(x.toLowerCase() === "ja"){
        return true
    } else {
        return false
    }
}
console.log(trueFalse("ja"));

//Opgave 5.4
const password = "AbCdEf"
function pswdCheck(pswd){
    if(pswd === password){
        return true
    } else{
        return false
    }
}
console.log(pswdCheck("AbCdEf"));

//Opgave 5.5
const userName = "Mags"
function checkUserName(user){
    if(user.toLowerCase() === userName.toLowerCase()){
        return true
    } else{
        return false
    }
}
console.log(checkUserName("mags"));