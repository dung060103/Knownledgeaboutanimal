
window.addEventListener("readystatechange", function()
{
    var content_login = document.getElementById("content");
    content_login.id="content_login"
    var container_login = document.getElementById("container");
    container_login.id="container_login"

})
// const btnham = document.querySelector('.ham-btn');
// const bttimes = document.querySelector('.times-btn');
// const navbar = document.getElementById('nav-bar');
// btnham.addEventListener('click', function(){
//     if(btnham.className !== ""){
//         btnham.style.display = "none";
//         bttimes.style.display = "block";
//         navbar.classList.add("show-nav");
//     }
// });

// bttimes.addEventListener('click',function(){
//     if(bttimes.className !== ""){

//         bttimes.style.display = "none";
//         btnham.style.display = "block";
 
//         navbar.classList.remove("show-nav")
//     }
// });



function isnumberkey(e){
    var charcode = (e.which) ? e.which : e.keycode;
    if(charcode>31 && (charcode < 48 || charcode >57)){
        return false
    }
    return true
}


function ischarkey(e){
    var charcode = (e.which) ? e.which : e.keycode;
    if(charcode >= 48 && charcode <= 57 )
        return false
    return true
}






/*       Sign in          */
function signupToggle(){
    // var conta = document.querySelector('.container');
    // conta.classList.add('.active');
    var popup = document.querySelector('.content_login');
    popup.classList.add('.active');  
}

// document.getElementById("btn1").onclick = function () {
//     document.getElementById('container').style.visibility = 'visible';
// };


function opensignin(){
   document.getElementById('content_login').style.display = 'flex';
   document.getElementById('container_login').style.display = 'block';
};
function exit_login(){
document.getElementById('content_login').style.display = 'none';
}

function opensignoutclosesignin(){
    document.getElementById('signup').style.display = 'block';
    document.getElementById('signin').style.display = 'none';
}
function opensigninclosesignout(){
    document.getElementById('signin').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
}