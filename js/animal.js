window.addEventListener('load',function()
{

    load_animal_cont_Type();
    load_animalType();
    const list_animalTypes = document.querySelectorAll('.list_animalType');
    const prebtn= document.querySelectorAll('.fa-solid.fa-angles-left');
    const nxtbtn= document.querySelectorAll('.fa-solid.fa-angles-right');
    const list_item_Type= document.querySelector('.item_animalType');

    console.log();
    list_animalTypes.forEach((item,i)=>
    {
        var container_dimension= item.getBoundingClientRect();
        var containWidth= container_dimension.width;
        prebtn[i].addEventListener('click',function ()
        {
            item.scrollLeft-=list_item_Type.getBoundingClientRect().width+20;
        })
        nxtbtn[i].addEventListener('click', function()
        {
            item.scrollLeft+=list_item_Type.getBoundingClientRect().width+20;
        })
    });
    var list_item_animalType= document.querySelectorAll('.item_animalType');
    for(var i=0;i<list_item_animalType.length;i++)
    {
        list_item_animalType[i].addEventListener('mouseenter',show_hover);
        list_item_animalType[i].addEventListener('mouseleave', hide_hover);

    }
    // document.querySelector('.fa-solid.fa-angles-right').addEventListener('click',function()
    // {
    //     var temp = document.querySelector('.list_animalType')
    //     console.log(temp.scrollLeft);
    //     temp.scrollTo(100,0);
    // })
    // document.querySelector('.fa-solid.fa-angles-left').addEventListener('click',function()
    // {
    //     var temp = document.querySelector('.list_animalType')
    //     console.log(temp.scrollLeft);
    //     temp.scrollTo(200,0);
    // })

    // console.log(list_animalTypes[i].width);

    var value= parseInt(document.querySelector('.list_animalType').getBoundingClientRect().width/document.querySelector('.item_animalType').getBoundingClientRect().width)
    for(var i=0;i<list_animalTypes.length;i++)
    {
        list_animalTypes[i].style.gridTemplateColumns= `repeat(${value}, 1fr)`;
    }
});
 function show_hover(event)
 {
    var temp = event.target;
    temp.classList.add('is-active');
}
function hide_hover(event)
{
   var temp = event.target;
   temp.classList.remove('is-active');
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
var list_type=['Carnivores' ,'Herbivore', 'Insect','omnivores'];
ALL_Animal =[
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
        'Kenya, India, Sri Lanka',
        'Chordata'
        ),
    new Animal(
        'Black panther',
        'Sus scrofa domesticus',
        'https://i1.sndcdn.com/avatars-000006005197-3l22oj-t500x500.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'open woodlands',
        'Ha Nam, Ninh Binh and Thai Binh',
        'Chordata'

    ),
    new Animal(
        'Python',
        'Sus scrofa domesticus',
        'https://www.cloverdx.com/hubfs/david-clode-PsqJlaAlvXk-unsplash__1618841662_5.81.219.59.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'open woodlands',
        'Africa, Asia, and Australia',
        'Chordata'

    ),
    new Animal(
        'Hammerhead shark',
        'Sus scrofa domesticus',
        'https://frontiersinblog.files.wordpress.com/2020/01/frontiers-marine-science-estimating-global-catches-marine-recreational-fishes.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'open woodlands',
        'Ecuador, Cocos Island',
        'Chordata'

    )]
    ,
    [
        new Animal(
        'Rabbit',
        'Sus scrofa domesticus',
        'https://www.oxbowanimalhealth.com/uploads/images/Feb_2019_blog_rabbit_noises_thumbnail.png',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'open woodlands',
        'Ecuador, Cocos Island',
        'Chordata'

    ),
    new Animal(
        'Cow',
        'Sus scrofa domesticus',
        'https://img.freepik.com/free-photo/cute-cow_1385-1806.jpg?w=360',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'House,Meadow ',
        'Ecuador, Cocos Island',
        'Chordata'

    ),
    
    new Animal(
        'Sheep',
        'Sus scrofa domesticus',
        'https://external-preview.redd.it/x3NSgvoP35r9bmRHMQyOdYk0TqragUUk9YjgiAOTHM8.jpg?auto=webp&s=ebe2275b3f8c709528fe6312a43924acb24e7c56',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'House,Meadow ',
        'Ecuador, Cocos Island',
        'Chordata'

    ),
    new Animal(
        'Zebra',
        'Sus scrofa domesticus',
        'https://resources.stuff.co.nz/content/dam/images/1/f/s/r/4/w/image.related.StuffLandscapeSixteenByNine.710x400.1frz5d.png/1480452024764.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'House,Meadow ',
        'Ecuador, Cocos Island',
        'Chordata'

    )
    ],
    
    ///////////////////////////////////
    [new Animal(
        'Butterfly',
        'Sus scrofa domesticus',
        'https://cdn.wallpapersafari.com/43/72/N3dF9T.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'Tree,Flower',
        'Ecuador, Cocos Island',
        'Arthropoda'
    ),
    new Animal(
        'Bee',
        'Sus scrofa domesticus',
        'https://www.treehugger.com/thmb/babqraV9o7TrcMp_KobhXBUqpdI=/1280x768/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2018__04__Apis_mellifera-0c1678fc8e0d45a499ddc42699b955f6.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'Tree,Flower',
        'Ecuador, Cocos Island',
        'Arthropoda'
    ),
    new Animal(
        'Cockroach',
        'Sus scrofa domesticus',
        'https://c8.alamy.com/zooms/9/1dd127279206469f874c612cd5fd6749/prtyaj.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'House',
        'Ecuador, Cocos Island',
        'Arthropoda'
    ),
    new Animal(
        'FireFly',
        'Sus scrofa domesticus',
        'https://d25vtythmttl3o.cloudfront.net/uploads/sites/164/2018/08/Firefly_altered-with-glow-500x497.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'House',
        'Ecuador, Cocos Island',
        'Arthropoda'
    )
]
    ,
[
    new Animal(
        'Domestic dog',
        'Sus scrofa domesticus',
        'https://lh3.googleusercontent.com/xCGq6z8ttJPLImoEYYChE57se-Lu2yVwQolx5HbAmaiOLfMf3wJjzz690LA4O402IyfTPuFaErY4lEBe93T9LU7LiMM=w640-h400-e365-rj-sc0x00ffffff',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'House',
        'Much where',
        'Chordata'
    ),
    new Animal(
        'Gloucestershire Pig',
        'Sus scrofa domesticus',
        'https://i.pinimg.com/236x/0f/10/bb/0f10bbe1a06ab7e2cf327967915bb7f6.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'House',
        'Much where',
        'Chordata'
    ),
    new Animal(
        'White Catfish',
        'Sus scrofa domesticus',
        'https://thumbs.dreamstime.com/b/albino-catfish-picture-aquarium-44250570.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'Lake',
        'Much where',
        'Chordata'
    ),
    new Animal(
        'American crow',
        'Sus scrofa domesticus',
        'https://www.allaboutbirds.org/guide/assets/photo/59858041-480px.jpg',
        'Vietnamese Pot-bellied is the exonym for the Lon I (Vietnamese: Lợn Ỉ) or I pig,[a] an endangered traditional Vietnamese breed of small domestic pig.',
        'Mammalia',
        'Forested areas',
        'Much where',
        'Chordata'
    )
]
];
    function load_animalType()
    {
        var list = document.querySelectorAll('.list_animalType');
        for(var j =0;j< list_type.length;j++)
        {
            for(var i=0;i<ALL_Animal[j].length;i++)
            {
                var div_ = document.createElement('div');
                div_.classList.add('item_animalType');
                // div_.classList.add('is-active');
            div_.innerHTML= `
          <p>  ${ALL_Animal[j][i].Animal_name}</p>
            <img src="${ALL_Animal[j][i].urlIMG}" alt="">
                            <table>
                                            <tr>
                                                <div class="name_animal">
                                                <td><label for="name_animal">Science name: </label></td>
                                                    <td>${ALL_Animal[j][i].SCname}</td>
                                                </div>
                                                </tr>
                                                <tr>
                                                    <div class="class_animal">
                                                    <td> <label for="class_animal">Class: </label></td>
                                                    <td>${ALL_Animal[j][i].nameClass}</td>
                                                </div>
                                                </tr>
                                                <tr>
                                                    <div class="habitat_animal">
                                                    <td><label for="habitat_animal">Habitat:</label></td>
                                                    <td>${ALL_Animal[j][i].habitat}</td>
                                                </div>
                                                </tr>
                                                <tr>
                                                    <div class="live_animal">
                                                    <td><label for="live_animal">Live: </label></td>
                                                <td>${ALL_Animal[j][i].live}</td>
                                            </div>
                                                </tr>
                                                <tr>
                                                    <div class="industry_animal">
                                                    <td><label for="industry_animal">Phylum:</label></td>
                                                <td>${ALL_Animal[j][i].phylum}</td>
                                            </div>
                                                </tr>
                                        </table>
                        `
                        list[j].appendChild(div_);
            }
            
        }
    }

    function load_animal_cont_Type()
    {
        console.log(list_type.length);
        for(var i=0;i<list_type.length;i++)
        {
            var cont= document.createElement('div')
            cont.classList.add('container_type_animal');
            cont.classList.add('animal_' + list_type[i].toLowerCase());
            cont.innerHTML=`
            <div class="after">${list_type[i]}</div>
            <div class="nav-icon_animalType pre_icon_animalType"><i class="fa-solid fa-angles-left"></i></div>
                <div class="list_animalType">                        
                </div>
                <div class="nav-icon_animalType next_icon_animalType"><i class="fa-solid fa-angles-right"></i></div>
            `
            document.querySelector('.main_content').appendChild(cont);
        }

    }

