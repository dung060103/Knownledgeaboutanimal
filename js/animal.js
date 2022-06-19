import {database, findWithNameSC, getScientific_Class, list_Class} from "./database.js";
window.addEventListener('load',function()
{
    // console.log(database);
    load_animal_cont_Type();
    load_animalType();
    var listIAnimalType=document.querySelectorAll(".list_animalType .item_animalType");
    console.log(listIAnimalType.length)
    // for(var i=0;i<listIAnimalType.length;i++)
    // {
    //         listIAnimalType[i].addEventListener("click",renderDataAnimal);
    // }
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

    var value= parseInt(document.querySelector('.list_animalType').getBoundingClientRect().width/document.querySelector('.item_animalType').getBoundingClientRect().width);
    // var value=321312
    for(var i=0;i<list_animalTypes.length;i++)
    {
        list_animalTypes[i].style.gridTemplateColumns= `repeat(${value}, 1fr)`;
    }
    // console.log(JSON.stringify(ALL_Animal));
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
// var list_Class=['Mammalia' ,'Amphibia', 'Bivalves','Actinopterygii'];
    function load_animalType()
    {
        var list = document.querySelectorAll('.list_animalType');
        for(var j =0;j<list_Class.length;j++)
        {
           var animalRS= getScientific_Class(list_Class[j])
            for(var i=0;i<animalRS.length;i++)
            {
                var div_ = document.createElement('div');
                div_.setAttribute("data_SCname",`${animalRS[i].ScienceAnimal}`)
                div_.classList.add('item_animalType');
            console.log(animalRS[i].list_OtherIMGs[0].itemUrlIMG)
            div_.innerHTML= `
            <p>  ${animalRS[i].name_Animal}</p>
              <img src="${animalRS[i].list_OtherIMGs[0].itemUrlIMG}" alt="">
                              <table>
                                              <tr>
                                                  <div class="name_animal">
                                                  <td><label for="name_animal">Science name: </label></td>
                                                      <td>${animalRS[i].ScienceAnimal}</td>
                                                  </div>
                                                  </tr>
                                                  <tr>
                                                      <div class="class_animal">
                                                      <td> <label for="class_animal">Class: </label></td>
                                                      <td>${animalRS[i].scientific_Classification.Class}</td>
                                                  </div>
                                                  </tr>
                                                  <tr>
                                                      <div class="habitat_animal">
                                                      <td><label for="habitat_animal">Family:</label></td>
                                                      <td>${animalRS[i].scientific_Classification.Family}</td>
                                                  </div>
                                                  </tr>
                                                  <tr>
                                                      <div class="live_animal">
                                                      <td><label for="live_animal"> Genus: </label></td>
                                                  <td>${animalRS[i].scientific_Classification.Genus}</td>
                                              </div>
                                                  </tr>
                                                  <tr>
                                                      <div class="industry_animal">
                                                      <td><label for="industry_animal">Phylum:</label></td>
                                                  <td>${animalRS[i].scientific_Classification.Phylum}</td>
                                              </div>
                                                  </tr>
                                          </table>
                          `
                          console.log(div_)
                          list[j].appendChild(div_)

              
          }
        }
    }

    function load_animal_cont_Type()
    {

        console.log(list_Class.length);
        for(var i=0;i<list_Class.length;i++)
        {
            var cont= document.createElement('div')
            cont.classList.add('container_type_animal');
            cont.classList.add('animal_' + list_Class[i].toLowerCase());
            cont.innerHTML=`
            <div class="after">${list_Class[i]}</div>
            <div class="nav-icon_animalType pre_icon_animalType"><i class="fa-solid fa-angles-left"></i></div>
                <div class="list_animalType">                        
                </div>
                <div class="nav-icon_animalType next_icon_animalType"><i class="fa-solid fa-angles-right"></i></div>
            `
            document.querySelector('.main_content').appendChild(cont);
        }

    }
    function renderDataAnimal(event)
    {
        var dataDetail= event.currentTarget;
        var i = findWithNameSC(dataDetail.getAttribute("data_SCname"))
        console.log("cscscsd");
        var newItem  = document.createElement("div");
        newItem.setAttribute("id","contentdetail")
        newItem.innerHTML=
        `
        <div id="formdetail">
                <div class="media"><span><i class="fa-brands fa-unity" onclick="div3d()"></i> </span>
                    <span><i class="fa-solid fa-circle-play"  onclick="divvideo()"></i> </span>
                    <span><i class="fa-solid fa-music"  onclick="divmusic()"></i></span>
                </div>
                <i class="fa-solid fa-circle-xmark" id="exit" onclick="exitDetail()"></i>
                <div class="contai">


                    <div class="container-1">
                        <div class="slide-show">
                            <figure class="zoom" style="background-image:url(images/Animals/bear2.jpg);"
                                onmousemove="zoom(event)" ontouchmove="zoom(event)">
                                <img src="images/Animals/bear.jpg" alt="">
                            </figure>

                        </div>
                        <div class="right">
                            <div class="right-left">
                                <div class="animal-name">
                                    <h2><i class="fa-solid fa-paw"></i>${database[i].name_Animal}</h2>
                                </div>
                                <div class="type">
                                    <table cellspacing="5">
                                        <tr>
                                            <th>Kingdom</th>
                                            <td>${database[i].scientific_Classification.Kingdom}</td>
                                        </tr>
                                        <tr>
                                            <th>Class</th>
                                            <td>${database[i].scientific_Classification.Class}</td>
                                        </tr>
                                    </table>
                                </div>
                                <hr>
                                <div class="lala">
                                    <table cellspacing="0">
                                        <tr>
                                            <th>
                                                STATUS
                                            </th>
                                            <th>
                                                ${database[i].listConservation}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>HEIGHT</th>
                                            <th>2.4 - 3m</th>
                                        </tr>
                                        <tr>
                                            <th>FOOD</th>
                                            <th>Salmon, fish, fruit, mushroom,...</th>
                                        </tr>
                                        <tr>
                                            <th>NATURAL ENEMY</th>
                                            <th>Tiger, wolf,...</th>
                                        </tr>
                                    </table>

                                </div>

                                <hr>

                            </div>
                        </div>
                    </div>



                    <div class="features">
                        <div class="table">
                            <table cellspacing="5">
                                <tr>
                                    <th class="btn-1">MAPS</th>

                                    <th class="btn-2">INTRODUCE</th>
                                    <th class="btn-4">TAXONOMY</th>
                                </tr>
                            </table>
                        </div>

                        <div class="map">

                        </div>

                        <div class="similar">
                            <h2>Other species commonly misidentified as this species</h2>
                            <div class="species-animal">
                                <div class="card-2">
                                    <div class="img">
                                        <img src="${database[i].list_OtherIMGs[0].itemUrlIMG}" alt="">
                                    </div>
                                    <div class="detail-content">
                                        <div class="species-name">
                                            <h2>Black Bear</h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-2">
                                    <div class="img">
                                        <img src="${database[i].list_OtherIMGs[0].itemUrlIMG}" alt="">
                                    </div>
                                    <div class="detail-content">
                                        <div class="species-name">
                                            <h2>Panda</h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-2">
                                    <div class="img">
                                        <img src="${database[i].list_OtherIMGs[0].itemUrlIMG}" alt="">
                                    </div>
                                    <div class="detail-content">
                                        <div class="species-name">
                                            <h2>${database[i].ScienceAnimal}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="introduce">

                            <div class="intro-content">
                                <h2>
                                    The brown bear is a large bear species found across Eurasia and North America
                                </h2>
                                In North America, the populations of brown bears are called grizzly bears, while the
                                subspecies that inhabits the Kodiak Islands of Alaska is known as the Kodiak bear.
                                It is one of the largest living terrestrial members of the order Carnivora, rivaled in
                                size only by its closest relative, the polar bear (Ursus maritimus), which is much less
                                variable in size and slightly bigger on average.
                                The brown bear's range includes parts of Russia, Central Asia, the Himalayas, China,
                                Canada, the United States, Hokkaido, Scandinavia, Finland, the Balkans, the Picos de
                                Europa and the Carpathian region (especially Romania), Iran, Anatolia, and the Caucasus.
                                The brown bear is recognized as a national and state animal in several European
                                countries.
                                <br> While the brown bear's range has shrunk, and it has faced local extinctions across
                                its wide range, it remains listed as a least concern species by the International Union
                                for Conservation of Nature (IUCN) with a total estimated population in 2017 of 110,000.
                                As of 2012, this and the American black bear are the only bear species not classified as
                                threatened by the IUCN, though the large sizes of both bears may be a disadvantage due
                                to increased competition with humans. Populations that were hunted to extinction in the
                                19th and 20th centuries are the Atlas bear of North Africa and the Californian, Ungavan
                                and Mexican populations of the grizzly bear of North America. Many of the populations in
                                the southern parts of Eurasia are highly endangered as well. One of the smaller-bodied
                                forms, the Himalayan brown bear, is critically endangered, occupying only 2% of its
                                former range and threatened by uncontrolled poaching for its body parts. The Marsican
                                brown bear of central Italy is one of several currently isolated populations of the
                                Eurasian brown bear and is believed to have a population of just 50 to 60 bears.
                            </div>

                        </div>

                        <div class="taxonomy" style="overflow-y: auto;">


                            <!-- <table border="" cellspacing="0" > 
                        <tr>
                            <th>Kingdom</th>
                            <th>Phylum</th>
                            <th>Class</th>
                            <th>Order</th>
                            <th>Family</th>
                            <th>Genus</th>
                            <th>Species</th>
                        </tr>
                        <tr>
                            <td>Animalia</td>
                            <td>Chordata</td>
                            <td>Mammalia</td>
                            <td>Carnivora</td>
                            <td>Ursidae</td>
                            <td>Ursus</td>
                            <td>U.arctos</td>
                        </tr>
                    </table> -->


                            <table>
                                <thead>
                                    <tr>
                                        <th>Kingdom</th>
                                        <th>Phylum</th>
                                        <th>Class</th>
                                        <th>Order</th>
                                        <th>Family</th>
                                        <th>Genus</th>
                                        <th>Species</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Animalia</td>
                                        <td>Chordata</td>
                                        <td>Mammalia</td>
                                        <td>Carnivora</td>
                                        <td>Ursidae</td>
                                        <td>Ursus</td>
                                        <td>U.arctos</td>
                                    </tr>

                                </tbody>
                            </table>



                        </div>




                    </div>




                </div>

                <div class="seeU" id="seeU">
                    <i class="fa-solid fa-circle-xmark" id="exit" onclick="exitSeeU()"></i>




                </div>



            </div>
        `
        document.querySelector("content").appendChild(newItem);
        newItem.style.display="block";
    }

