window.addEventListener('load',function ()
{
    document.querySelectorAll('.list_Animals .item_Animals .select a')[7].textContent='Mammalia';
    document.querySelector('#menu3').addEventListener('click',click_search_btn);
    var new_imgLOGO=document.createElement('img');
    new_imgLOGO.src="images/LOGO/logoweb.png";
    new_imgLOGO.style.display='none';

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
    
    var Animal = function(Animal_name, SCname, urlIMG,intro,nameClass,habitat,live,phylum)
{
    this.Animal_name=Animal_name;
    this.SCname=SCname;
    this.urlIMG=urlIMG;
    this.intro=intro;
    this.nameClass=nameClass;
    this.habitat=habitat;
    this.live=live;
    this.phylum=phylum;
}

data_animals =
[ new Animal(
    'Javan Tiger',
    'Panthera tigris sondaica',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Java_Tiger.jpg/800px-Java_Tiger.jpg',
    'The Javan tiger was a Panthera tigris sondaica population native to the Indonesian island of Java until the mid-1970s. It was hunted to extinction, and its natural habitat converted for agricultural land use and infrastructure. It was one of the three tiger populations in the Sunda Islands.',
    'Mammalia',
    'forested areas',
    'Meru Betiri',
    'Chordata'
    ),
    new Animal(
        'Bengal Tiger',
        'Panthera tigris tigris',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Adult_male_Royal_Bengal_tiger.jpg/1024px-Adult_male_Royal_Bengal_tiger.jpg',
        'The Bengal tiger is a population of the Panthera tigris tigris subspecies. It ranks among the biggest wild cats alive today. It is considered to belong to the world\'s charismatic megafauna.',
        'Mammalia',
        'forested areas',
        'Meru Betiri',
        'Chordata'
        ),
    new Animal(
        'Vietnamese Pot-bellied Pig',
        'Sus scrofa domesticus',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pot-bellied_pigs_in_Lisbon_Zoo_2008.jpg/330px-Pot-bellied_pigs_in_Lisbon_Zoo_2008.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'open woodlands',
        'Ha Nam, Ninh Binh and Thai Binh',
        'Chordata'

    )];
        console.log(data_animals.length);
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
    for(var i=0;i<data_animals.length;i++)
    {

        if(data_animals[i].Animal_name.toUpperCase().indexOf(myInput.toUpperCase())>-1 || data_animals[i].SCname.toUpperCase().indexOf(myInput.toUpperCase())>-1)
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
                if(data_animals[i].Animal_name.toUpperCase().indexOf(myInput.toUpperCase())>-1)
                {
                    idxBegin= data_animals[i].Animal_name.toUpperCase().indexOf(myInput.toUpperCase());
                    idxEnd =data_animals[i].Animal_name.toUpperCase().indexOf(myInput.toUpperCase())+myInput.length;
                    const span = document.createElement('span');
                    span.textContent = data_animals[i].Animal_name.substring(idxBegin,idxEnd);
                    span.style.backgroundColor='green';
                    text_Name= data_animals[i].Animal_name.substring(0,idxBegin) + span.outerHTML + data_animals[i].Animal_name.substring(idxEnd , data_animals[i].Animal_name.length);
                    text_SCName=data_animals[i].SCname;
                }
                else 
                {
                    idxBegin= data_animals[i].SCname.toUpperCase().indexOf(myInput.toUpperCase());
                    idxEnd =data_animals[i].SCname.toUpperCase().indexOf(myInput.toUpperCase())+myInput.length;
                    idxBegin= data_animals[i].SCname.toUpperCase().indexOf(myInput.toUpperCase());
                    idxEnd =data_animals[i].SCname.toUpperCase().indexOf(myInput.toUpperCase())+myInput.length;
                    const span = document.createElement('span');
                    span.textContent = data_animals[i].SCname.substring(idxBegin,idxEnd);
                    span.style.backgroundColor='green';
                    text_SCName= data_animals[i].SCname.substring(0,idxBegin) + span.outerHTML + data_animals[i].SCname.substring(idxEnd , data_animals[i].SCname.length);
                    text_Name=data_animals[i].Animal_name;
                }

                
                var new_element= document.createElement('div');
                new_element.classList.add('info_animals_search');
                new_element.innerHTML=
                `<div class="img-animals_search"><img
                                    src="${data_animals[i].urlIMG}"
                                    alt="${data_animals[i].Animal_name}"></div>
                            <div class="short_info_animal_search">
                                <div class="slide_short_info intro_short_animal_search">
                                    <div class="title_name_animal">${text_Name}</div>
                                    ${data_animals[i].intro}
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
                                                <td>${data_animals[i].nameClass}</td>
                                            </div>
                                            </tr>
                                            <tr>
                                                <div class="habitat_animal">
                                                <td><label for="habitat_animal">Habitat:</label></td>
                                                <td>${data_animals[i].habitat}</td>
                                            </div>
                                            </tr>
                                            <tr>
                                                <div class="live_animal">
                                                <td><label for="live_animal">Live: </label></td>
                                            <td>${data_animals[i].live}</td>
                                        </div>
                                            </tr>
                                            <tr>
                                                <div class="industry_animal">
                                                <td><label for="industry_animal">Phylum:</label></td>
                                            <td>${data_animals[i].phylum}</td>
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

