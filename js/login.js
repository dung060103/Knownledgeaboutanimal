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
    var popup = document.querySelector('.container');
    popup.classList.add('.active');  
}

// document.getElementById("btn1").onclick = function () {
//     document.getElementById('container').style.visibility = 'visible';
// };


function opensignin(){
   document.getElementById('content').style.display = 'flex';
   document.getElementById('container').style.display = 'block';
};
function exit(){
document.getElementById('content').style.display = 'none';
}

function opensignoutclosesignin(){
    document.getElementById('signup').style.display = 'block';
    document.getElementById('signin').style.display = 'none';
}
function opensigninclosesignout(){
    document.getElementById('signin').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
}