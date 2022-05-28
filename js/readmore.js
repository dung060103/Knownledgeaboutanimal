var click = 0 ; 


function Next() {
    click =  click + 1;
       
    if(click == 1) {

        let slide1 = document.getElementById("slide");
        slide1.style.transform = 'translate(-24%, 0%)';
        
    } else if(click == 2) {

        let slide2 = document.getElementById("slide");
        slide2.style.transform = 'translate(-50%, 0%)';
        
    }else if(click == 3) {

        let slide2 = document.getElementById("slide");
        slide2.style.transform = 'translate(-75%, 0%)';
        
    } else if( click > 3) {

        click = 3;
    }

}

function Back() {
    
    click = click - 1;
       
    if(click == 2) {

        let slide1 = document.getElementById("slide");
        slide1.style.transform = 'translate(-50%, 0%)';
        
    } else if(click == 1) {

        let slide2 = document.getElementById("slide");
        slide2.style.transform = 'translate(-25%, 0%)';
        
    }else if(click == 0) {

        let slide2 = document.getElementById("slide");
        slide2.style.transform = 'translate(0%, 0%)';
        
    } else if( click < 0) {

        click = 0;
    }

}
function open1(){
    document.getElementById('content').style.display = 'flex';
    document.getElementById('container').style.display = 'block';
};
function exit(){
 document.getElementById('content').style.display = 'none';
}