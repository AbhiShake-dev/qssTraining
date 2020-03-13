// function create_dict() {
//     var dict = {}
//     var e_mail = document.getElementById("email1").value;
//     var p_word = document.getElementById("pass").value;
//     if (e_mail in dict) {
//         dict = dict;
//     }
//     else {
//         dict[e_mail] = p_word;
//         var output = '';
//         for (var property in dict) {
//             output += property + ': ' + dict[property] + '; ';
//         }
//     }
//     return dict
// }
var dict = {
    "amir@123" : 1223,
}
function fun_tion() {
    
    var email_value = document.getElementById("email").value;
    var pwd_value = document.getElementById("pwd").value;
    for(var key in dict){
        if(pwd_value==dict[key]){
            document.getElementById("form1").action = "kirr.html";
            document.getElementById("form1").submit();
        }
        else{
            console.log("error");
        }
    } 
}
function myfunction() {
    var a = document.createElement('a');
    var link = document.createTextNode("this is a link");
    a.appendChild(link);
    a.title = "this is a link";
    a.href = "https://www.geeksforgeeks.org";
    document.body.prepend(a);

}
