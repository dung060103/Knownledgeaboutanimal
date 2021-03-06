import {database, getScientific_Class, list_Class} from "./database.js";
window.addEventListener('load',function ()
{
    document.querySelectorAll('.list_Animals .item_Animals .select a')[7].textContent='Mammalia';
    document.querySelector('#menu3').addEventListener('click',click_search_btn);
    var new_imgLOGO=document.createElement('img');
    new_imgLOGO.src="images/LOGO/logoweb.png";
    new_imgLOGO.style.display='none';
    var div_login = this.document.createElement('div');
    div_login.id='content_login';
div_login.innerHTML=
`
<div id="container_login" class="animate__backInDown">
                <i class="fa-solid fa-circle-xmark" id="exit" onclick="exit_login()"></i>
                <form action="" class="sign-in" id="signin" align="center">
                    <h2 class="title">Sign in</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password">
                    </div>
                    <input type="submit" value="Login" class="btn_login">
                    <p class="social-text">Or Sign in with social platform</p>
                    <div class="social-media">
                        <a href="" class="social-icon"><i class="fab fa-facebook"></i></a>
                        <a href="" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="" class="social-icon"><i class="fab fa-google"></i></a>
                    </div>
                    <p class="account-text">Don't have an account? <a id="sign-up-btn2" onclick="opensignoutclosesignin()" style="font-weight: 800;">Sign up</a></p>
                </form>

                <form action="" class="sign-up" id="signup" align="center">
                    <h2 class="title">Sign up</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="Email">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-phone"></i>
                        <input type="text" placeholder="Phone">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password">
                    </div>
                    <input type="submit" value="Sign up" class="btn">
                    <p class="social-text">Or Sign in with social platform</p>
                    <div class="social-media">
                        <a href="" class="social-icon"><i class="fab fa-facebook"></i></a>
                        <a href="" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="" class="social-icon"><i class="fab fa-google"></i></a>
                    </div>
                    <p class="account-text">Already have an account? <a  id="sign-in-btn2" onclick="opensigninclosesignout()" style="font-weight: 800;">Sign in</a></p>
                </form>
            </div>
`


    document.querySelector('content').appendChild(div_login);
    this.document.querySelector('.container_logo_brand').appendChild(new_imgLOGO);
        var btn_close =document.querySelector('.item_Search_Animals .container_search .btn_search_close');
    if(btn_close!=null)
    {
    btn_close.addEventListener('click',click_search_btn_close);
    }
    var btn_search=document.querySelector('.item_Search_Animals .container_search .btn_search');
    if(btn_search!=null)btn_search.addEventListener('click',function()
    {
        load_search_animal();

    })
    document.querySelector('.item_Search_Animals .input_search input').addEventListener('keyup',load_search_animal);
    document.querySelector('.container_logo_brand').addEventListener('mouseenter',function()
    {
        if(document.querySelector('.item_menu.have_list.open')!=null)
        {
    
            document.querySelector('.item_menu.have_list.open').classList.remove('open');
        }
    });
    var list_nolist_ItemMenu = document.querySelectorAll('.item_menu.no_list');
        for(var i=0;i<list_nolist_ItemMenu.length;i++)
        {
            list_nolist_ItemMenu[i].addEventListener('mouseenter',function()
            {
                if(document.querySelector('.item_menu.have_list.open')!=null)
                {
            
                    document.querySelector('.item_menu.have_list.open').classList.remove('open');
                }
            });

        }
    resize_work()
    add_lineHover();
    change_btn_menu();
    window.addEventListener('resize',item_menu_transition);
   
    window.addEventListener('resize',resize_work)
});
function resize_work()
{
        // document.querySelector('footer').classList.add('hide');
        // document.querySelector('.logo_brand').classList.add('hide');
        // document.querySelector('.container_logo_brand img').classList.add('hide');
        document.querySelector('.content_menuItem').classList.remove('is-active');
        document.querySelector('.btn_exit_content_menuItem').classList.remove('btn_is-active');
        if(document.querySelector('item_menu.have_list.open')!=null)document.querySelector('item_menu.have_list.open').classList.remove('open');
    var content_itemMenu = document.querySelector('.content_menuItem');
    if(window.innerWidth<980)
    {
        
        var list= document.querySelectorAll('.item_is-active');
        console.log(list);
        for(var i =0; i<list.length;i++)
        {
            list[i].classList.remove('item_is-active');
        }
        content_itemMenu.removeEventListener('mouseenter', show_content_menuItem);
content_itemMenu.removeEventListener('mouseleave', hide_content_menuItem);
content_itemMenu.removeEventListener('mouseleave',hold_hover_menuItem  );
        var list_menu = document.querySelectorAll('.item_menu.have_list')
        document.querySelector('.btn_exit_content_menuItem').addEventListener('click',hide_content_menuItem)
        document.querySelector('.btn_exit_content_menuItem').addEventListener('click',function()
        {
            document.querySelector('.btn_exit_content_menuItem').classList.remove('btn_is-active');
            var list= document.querySelectorAll('.item_is-active');
            console.log(list);
            for(var i =0; i<list.length;i++)
            {
                list[i].classList.remove('item_is-active');
            }

        });
        for(var i=0;i<list_menu.length;i++)
        {
            // list_menu[i].querySelector('div').style.width='100%;'
            list_menu[i].removeEventListener('mouseenter',show_list);
            list_menu[i].removeEventListener('mouseleave',hide_list);
            list_menu[i].addEventListener('click',show_list);
            list_menu[i].addEventListener('click',function()
            {
                console.log(document.querySelector('.item_menu.have_list.open'));
            });
        }


    }

     else if(window.innerWidth>=980)
{
    document.querySelector('footer').classList.remove('hide');
    document.querySelector('.logo_brand').classList.remove('hide');
    document.querySelector('.btn_exit_content_menuItem').classList.remove('btn_is-active');
    var list= document.querySelectorAll('.item_is-active');
    console.log(list);
    for(var i =0; i<list.length;i++)
    {
        list[i].classList.remove('item_is-active');
    }   
var list_menu = document.querySelectorAll('.item_menu.have_list')
content_itemMenu.addEventListener('mouseenter', show_content_menuItem);
content_itemMenu.addEventListener('mouseleave', hide_content_menuItem);
content_itemMenu.addEventListener('mouseleave',hold_hover_menuItem  );
for(var i=0;i<list_menu.length;i++)
{
    // list_menu[i].querySelector('div').style.width='100%;'
    list_menu[i].removeEventListener('click',show_list);
    list_menu[i].addEventListener('mouseenter',show_list);
    list_menu[i].addEventListener('mouseleave',hide_list);
}
}
var list_info =document.querySelectorAll('.short_info_animal_search');
for(var i=0;i<list_info.length;i++)
{
    list_info[i].scrollTop=-180;
}
}
function add_lineHover()
{

    var list_menu = document.querySelectorAll('.item_menu.have_list ');
    // list_menu[i].appendChild(line);
    for(var i=0;i<list_menu.length;i++)
    {

        var line  = document.createElement('div');
        console.log(line);
        line.style.backgroundColor='black';
        line.style.width='0%';
        line.style.height='1px';
        list_menu[i].appendChild(line);
    }
    
}
function show_list(event)
{   

    if(window.innerWidth<980)
    {
        // var list_items_actived= document.querySelectorAll('.item_is-active')
        // for (let index = 0; index < list_items_actived.length; index++) {
        //     list_items_actived[i].classList.remove('item_is-active');        
        // }
        document.querySelector('.btn_exit_content_menuItem').classList.toggle('btn_is-active');
        var text=event.target.textContent;
        if(text=='Animals') load_content_Animals();
        else if(text=='Legendary Animals')load_content_Legendary_Animals();
        else if(text=='Extinct Animals')load_content_Extinct_Animals();
    }
    if(document.querySelector('.item_menu.have_list.open')!=null)
    {

        document.querySelector('.item_menu.have_list.open').classList.remove('open');
    }
    var item_hover=(event.target);
    
    event.target.classList.add('open');
    // console.log(event.target.);
    show_content_menuItem();
    
}
function hide_list(event)
{
    hide_content_menuItem();
}
function show_content_menuItem()
{
    var content_menu_item = document.querySelector('.content_menuItem');
    content_menu_item.classList.add('is-active');

    // console.log(document.querySelector('.item_menu.have_list.open'));
    if(document.querySelector('.item_menu.have_list.open a')!=null)
    {
        var text=document.querySelector('.item_menu.have_list.open a').textContent;
        if(text=='Animals') load_content_Animals();
        else if(text=='Legendary Animals')load_content_Legendary_Animals();
        else if(text=='Extinct Animals')load_content_Extinct_Animals();
    }
    contentOption_item_menu_Animals_transition();
    
    hold_hover_menuItem();
    // content_item_menu_Animals_transition();
}
function load_content_Animals()
{
    var list= document.querySelectorAll('.item_Animals');
    console.log(list);
    for(var i =0; i<list.length;i++)
    {
        list[i].classList.add('item_is-active');
    }
    console.log(list);
}
function load_content_Legendary_Animals()
{
    var list= document.querySelectorAll('.item_Legendary_Animals');
    for(var i =0; i<list.length;i++)
    {
        list[i].classList.add('item_is-active');
    }
}
function load_content_Extinct_Animals()
{
    var list= document.querySelectorAll('.item_Extinct_Animals');
    for(var i =0; i<list.length;i++)
    {
        list[i].classList.add('item_is-active');
    }
}
function hide_content_menuItem()
{
    var content_menu_item = document.querySelector('.content_menuItem');
    content_menu_item.classList.remove('is-active');
    if(document.querySelector('.item_menu.have_list.open a')!=null)
    {
        var text=document.querySelector('.item_menu.have_list.open a').textContent;
        if(text=='Animals') remove_content_Animals();
        else if(text=='Legendary Animals')remove_content_Legendary_Animals();
        else if(text=='Extinct Animals')remove_content_Extinct_Animals();
    }
    
    contentOption_item_menu_Animals_transition();
    // content_item_menu_Animals_transition();
}
function remove_content_Animals()
{
    var list= document.querySelectorAll('.item_Animals');
    console.log(list);
    for(var i =0; i<list.length;i++)
    {
        list[i].classList.remove('item_is-active');
    }
    console.log(list);
}
function remove_content_Legendary_Animals()
{
    var list= document.querySelectorAll('.item_Legendary_Animals');
    for(var i =0; i<list.length;i++)
    {
        list[i].classList.remove('item_is-active');
    }
}
function remove_content_Extinct_Animals()
{
    var list= document.querySelectorAll('.item_Extinct_Animals');
    for(var i =0; i<list.length;i++)
    {
        list[i].classList.remove('item_is-active');
    }
}
function hold_hover_menuItem()
{
    if((document.querySelector('.content_menuItem').classList.contains('is-active'))==false)
    {
        console.log(document.querySelector('.content_menuItem').classList.contains('is-active'));
        if(document.querySelector('.item_menu.have_list.open')!=null)
        {
            
            document.querySelector('.item_menu.have_list.open').classList.remove('open');
        }
    }
}


function change_btn_menu()
{
    var menu = document.querySelector('.menu_btn');
    var list_menu = document.querySelector('.list_menu');
    // document.querySelector('footer').classList.toggle('hide');
    // document.querySelector('.logo_brand').classList.toggle('hide');
    // document.querySelector('.container_logo_brand img').classList.toggle('hide');
    menu.addEventListener('click',function()
    {

        menu.classList.toggle('is_active');

        list_menu.classList.toggle('mode-mobile')
        document.querySelector('footer').classList.toggle('hide');
        document.querySelector('.logo_brand').classList.toggle('hide');
        document.querySelector('.container_logo_brand img').classList.toggle('hide');
        item_menu_transition();
        // if(window.innerWidth<280)
        // {
        //     document.querySelector('.container_logo_brand img').style.display='none';
        // }
        // else if(window.innerWidth>=280)
        // {
        //     document.querySelector('.container_logo_brand a').style.display='none';
        // }
    });

}
function item_menu_transition()
{
    let w = window.innerWidth;
    
    if(w<980&&document.querySelector('.list_menu.mode-mobile')!=null)
    {
        var menuItems = document.querySelectorAll('.list_menu.mode-mobile a');

            for(var i=0;i<menuItems.length;i++)
            {
                menuItems[i].style.transitionDelay="."+i+"s";
            }
        }
    
  
    else if(w >980)
    {
        var menuItems = document.querySelectorAll('.list_menu a');

        for(var i=0;i<menuItems.length;i++)
        {
            menuItems[i].style.transitionDelay="0s";
        }
    }

 
}

function content_item_menu_Animals_transition()
{
    console.log("test:"+document.querySelector('.content_menuItem.is-active')!=null);
    if(document.querySelector('.content_menuItem.is-active')!=null)
    {
        var menuItems = document.querySelectorAll('.content_menuItem.is-active .list_dropdown .item_is-active a h3');

            for(var i=0;i<menuItems.length;i++)
            {
                menuItems[i].style.transitionDelay=""+i/45+"s";
                console.log(menuItems[i]);
            }
        }
    
            
    else 
    {
        var menuItems = document.querySelectorAll('.content_menuItem .list_dropdown .item_contentMenu a h3');

        for(var i=0;i<menuItems.length;i++)
        {
            menuItems[i].style.transitionDelay="0s";
        }
    }

}

function contentOption_item_menu_Animals_transition()
{
    if(document.querySelector('.content_menuItem.is-active')!=null)
    {
        var menuItems = document.querySelectorAll('.content_menuItem.is-active .list_dropdown .item_Animals .select a');
        // console.log(menuItems);
            for(var i=0;i<menuItems.length;i++)
            {
                menuItems[i].style.transitionDelay=""+i/45+"s";
            }
        }
    
            
    else 
    {
        var menuItems = document.querySelectorAll('.content_menuItem .list_dropdown .item_Animals .select a');

        for(var i=0;i<menuItems.length;i++)
        {
            menuItems[i].style.transitionDelay="0s";
        }
    }

}
function click_search_btn(event)
{
    document.querySelector('body').style.overflow='hidden';
    document.querySelector('.item_Search_Animals').classList.add('is-active');
    // load_search_animal();

}
function click_search_btn_close(event)
{
    document.querySelector('body').style.overflow='scroll';
    document.querySelector('.item_Search_Animals').classList.remove('is-active');
}
    

        console.log(database.length);
function load_search_animal()
{
    var myInput=document.querySelector('.item_Search_Animals .input_search input').value;
    var old_element=document.querySelectorAll('.info_animals_search');
     console.log(old_element.length);
    for(var i=0;i<old_element.length;i++)
    {
            old_element[i].outerHTML=null;
            console.log(old_element);
    }
    document.querySelector('.container_result').classList.remove('is-active');
    for(var i=0;i<database.length;i++)
    {
        console.log(database[i].list_OtherIMGs[0].itemUrlIMG);
        if(database[i].name_Animal.toUpperCase().indexOf(myInput.toUpperCase())>-1 || database[i].ScienceAnimal.toUpperCase().indexOf(myInput.toUpperCase())>-1)
        {
            if(myInput.trim()=="")
            {
                // console.log(old_element.length);
                // for(var j=0;j<old_element.length;j++)
                // {
                //         if(old_element)old_element[j].outerHTML="";
                        
                // }
            }
            else
            {
                var idxBegin;
                var idxEnd ;
                var text_Name;
                var text_SCName;
                if(database[i].name_Animal.toUpperCase().indexOf(myInput.toUpperCase())>-1)
                {
                    idxBegin= database[i].name_Animal.toUpperCase().indexOf(myInput.toUpperCase());
                    idxEnd =database[i].name_Animal.toUpperCase().indexOf(myInput.toUpperCase())+myInput.length;
                    const span = document.createElement('span');
                    span.textContent = database[i].name_Animal.substring(idxBegin,idxEnd);
                    span.style.backgroundColor='green';
                    text_Name= database[i].name_Animal.substring(0,idxBegin) + span.outerHTML + database[i].name_Animal.substring(idxEnd , database[i].name_Animal.length);
                    text_SCName=database[i].ScienceAnimal;
                }
                else 
                {
                    idxBegin= database[i].ScienceAnimal.toUpperCase().indexOf(myInput.toUpperCase());
                    idxEnd =database[i].ScienceAnimal.toUpperCase().indexOf(myInput.toUpperCase())+myInput.length;
                    idxBegin= database[i].ScienceAnimal.toUpperCase().indexOf(myInput.toUpperCase());
                    idxEnd =database[i].ScienceAnimal.toUpperCase().indexOf(myInput.toUpperCase())+myInput.length;
                    const span = document.createElement('span');
                    span.textContent = database[i].ScienceAnimal.substring(idxBegin,idxEnd);
                    span.style.backgroundColor='green';
                    text_SCName= database[i].ScienceAnimal.substring(0,idxBegin) + span.outerHTML + database[i].ScienceAnimal.substring(idxEnd , database[i].ScienceAnimal.length);
                    text_Name=database[i].name_Animal;
                }
                var conservation = database[i].Conservation;
                // console.log(conservation.ConservationStatus);
                var new_element= document.createElement('div');
                new_element.classList.add('info_animals_search');
                new_element.innerHTML=
                `<div class="img-animals_search"><img
                                    src="${database[i].list_OtherIMGs[0].itemUrlIMG}"
                                    alt="${database[i].name_Animal}"></div>
                            <div class="short_info_animal_search">
                                <div class="slide_short_info intro_short_animal_search">
                                    <div class="title_name_animal">${text_Name}</div>
                                   <p> ${database[i].IntroCard}</p>
                                </div>
                                <div class="slide_short_info">
                                    <table>
                                        <tr>
                                            <div class="name_animal">
                                            <td><label for="name_animal">Science name: </label></td>
                                                <td>${text_SCName}</td>
                                            </div>
                                            </tr>
                                            <tr>
                                                <div class="class_animal">
                                                <td> <label for="class_animal">Class: </label></td>
                                                <td>${database[i].scientific_Classification.Class}</td>
                                            </div>
                                            </tr>
                                            <tr>
                                                <div class="habitat_animal">
                                                <td><label for="habitat_animal">Conversion Status:</label></td>
                                                <td>${database[i].Conservation}</td>
                                            </div>
                                            </tr>
                                            <tr>
                                                <div class="live_animal">
                                                <td><label for="live_animal">Live: </label></td>
                                            <td>${database[i].loadCharacteristics.mapAnimal.captionMapAnimal}</td>
                                        </div>
                                            </tr>
                                            <tr>
                                                <div class="industry_animal">
                                                <td><label for="industry_animal">Phylum:</label></td>
                                            <td>${database[i].scientific_Classification.Phylum}</td>
                                        </div>
                                            </tr>
                                    </table>
                                </div>
            
                                </div>
                                `
                                document.querySelector('.container_result').appendChild(new_element);
            }
   
        }
    }

    document.querySelector('.container_result').classList.add('is-active');
    var list_info =document.querySelectorAll('.short_info_animal_search');
    for(var i=0;i<list_info.length;i++)
    {
        list_info[i].scrollTop=-180;
    }
}

