


// var useri = [];
//
// var user1 = {
//     email:"adi@yahoo.com",
//     adress:"Galati naeLeonard  nr 4",
//     city: "Galati",
//     state: "SUA",
//     gender: "male",
//
// };
//
// useri.push(user1);
// console.log(useri);



// var gender = document.getElementById("genderType");
// var x1 = document.createElement("INPUT");
// x1.value = "Male";
// x1.type = "radio";
// x1.name = " genders";
// x1.text="MALE";
// gender.appendChild(x1);
//
// var y1 = document.createElement("INPUT");
// y1.value = "Male";
// y1.type = "radio";
// y1.name = " genders";
// y1.textAlign="MALE";
// gender.appendChild(y1);


var genders = [ "male", "female", "other"];
//
// var output ='<label class = "subTitlu" > Genders </label>";


var radio1 = document.createElement("input");
radio1.type = "radio";
radio1.value = genders[0];
radio1.name="gender";
radio1.checked = true;
var label1 = document.createElement("label");
label1.classList.add("subTitlu");

label1.innerHTML=genders[0];
document.getElementById("genderType").appendChild(label1);
document.getElementById("genderType").appendChild(radio1);

for( var i =1 ; i< genders.length; i++){

    var radio = document.createElement("input");
    radio.type = "radio";
    radio.value = genders[i];
    radio.name="gender";
    var label = document.createElement("label");
    label.classList.add("subTitlu");

    label.innerHTML=genders[i];
    document.getElementById("genderType").appendChild(label);
    document.getElementById("genderType").appendChild(radio);
    //var  x = document.createElement("");
    //document.getElementById("genderType").appendChild(x);
     //var x =document.createTextNode( '\u00A0' );

    document.getElementById("genderType").appendChild(document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );
}
//EMAIL
var emailLabel = document.createElement("label");
emailLabel.for = "inputEmail4";
emailLabel.classList.add("subTitlu");
emailLabel.innerHTML = "Email";
var inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id="inputEmailLogin";
inputEmail.classList.add("form-control");
inputEmail.placeholder = "Email" ;
//inputEmail.onkeyup = checkPass();
document.getElementById("emailInput").appendChild(emailLabel);
document.getElementById("emailInput").appendChild(inputEmail);

//PASS
var passLabel = document.createElement("label");
passLabel.for = "inputPassword4";
passLabel.classList.add("subTitlu");
passLabel.innerHTML = "Password";
var inputPass = document.createElement("input");
inputPass.type = "password";
inputPass.classList.add("form-control");
inputPass.id = "inputPassword4";
inputPass.placeholder = "Password" ;
document.getElementById("passInput").appendChild(passLabel);
document.getElementById("passInput").appendChild(inputPass);

//INPUT SELECT

var states = ["Chose...","SUA","ROMANIA","GEORGIA"];

var selectLabel = document.createElement("label");
selectLabel.classList.add("subTitlu");
selectLabel.for = "inputState";
selectLabel.innerHTML = "State";
var infoSelect = document.createElement("select");
infoSelect.classList.add("form-control");
infoSelect.id = "inputState";

for( var j =0 ; j < states.length ; j++){
    var option = document.createElement("option");
    option.innerHTML = states[j];
    infoSelect.appendChild(option);

}


document.getElementById("selectForm").appendChild(selectLabel);
document.getElementById("selectForm").appendChild(infoSelect);


//-----------------------SIGNUP PART



function checkPass() {

    var email = document.getElementById("inputEmail4").value;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email) == true) {
        document.getElementById("inputEmail4").style.color = "green";
        //document.getElementById("message").innerHTML="Matching";
        return true;
    } else {
        document.getElementById("inputEmail4").style.color = "red";
        //document.getElementById("message").innerHTML="Passwords don't matching";
        return false;
    }
}


var $j = jQuery.noConflict();
var valori = null;
$.get("https://jsonplaceholder.typicode.com/users")
    .done(function(response) {
        console.log( "s-a terminat cu bine",response);
        valori = response;
    })
    .fail(function(error) {
        console.log( "error",error);
    })
    .always(function() {
        console.log( "Cod-ul din .always se apeleaza de fiecare data, indiferent daca request-ul a fost cu success sau cu fail" );
    });


function checkIfEmailExit(Email) {
    for (var i = 0; i < valori.length; i++) {
        if (Email === valori[i].email)
            return false;
    }
    return true;
}
var buttonSignUp = document.getElementById("signUp");

var x =buttonSignUp.addEventListener("click",function (e) {
   // e.preventDefault();
    var email = document.getElementById("inputEmail4").value;


    var pass = document.getElementById("inputPassword4").value;
    var adress = document.getElementById("inputAddress").value;
    var city = document.getElementById("inputCity").value;
    var e = document.getElementById("inputState");
    var state = e.options[e.selectedIndex].text;
    //var findGender =document.getElementById("genderType");
    var gender = document.querySelector('input[name = "gender"]:checked').value;

    // var userNou ={
    //     email:email,
    //     adress:adress,
    //     city: city,
    //     state: state,
    //     gender: gender,
    //
    // };
    if(checkPass() === true ) {
        if(checkIfEmailExit(email) === true)
        {
            alert(email + "  e bun" + pass + " " + adress + " " + state + gender);
        }
        else{
            alert("emailul exista");
        }
        //window.location.href="http://www.google.ro"
    }

    else {
        alert("emailul nu are format bun");

    }




});


// LOGINPART

var buttonLogin = document.getElementById("LogIn");

buttonLogin.addEventListener("click",function (e) {
    var emailLogIn = document.getElementById("inputEmailLogin").value;
    var passLogIn = document.getElementById("exampleInputPassword1").value;

    var indice;
    var checkParola = false;
    var checkEmail = false;

    for(var i= 0 ; i < valori.length;i++){
        console.log(valori[i].email);
        if(emailLogIn === valori[i].email && passLogIn === valori[i].name) {
            checkEmail = true;
            checkParola = true;
            indice = i;
        }
    }
    if(checkEmail === true && checkParola ===true) {
        e.preventDefault();
        window.location.href = "PrincipalMenu.html?username="+ valori[indice].username;
    }
    else{
        alert("Nu exista");
    }
});

// console.log(useri);
























