import {database, getScientific_Class, list_Class} from "./database.js";
window.addEventListener("load",function()
{
    // renderAnimalLegend();
})
function renderAnimalLegend()
{
    var containerAnimalLG =document.querySelector("#content1 .animal-legend .container");
    console.log(containerAnimalLG)
    const nItem = 18
    for(var i=0;i<nItem;i++)
    {
        var ItemNew = document.createElement("div");
        ItemNew.setAttribute("class","animal");
        ItemNew.setAttribute("id","animal1");
        ItemNew.innerHTML=
        `
        <img src="${database[database.length-1].list_OtherIMGs[0].itemUrlIMG}" alt="">
                        <div class="name">
                            <i class="fa-solid fa-dragon"></i>
                            ${database[database.length-1].name_Animal}
                        </div>
                        <div class="country">
                            <i class="fa-solid fa-earth-asia"></i>${database[database.length-1].ScienceAnimal}
                        </div>
                        <div class="type">
                            <a href=""><i class="fa-solid fa-feather"></i>Legend Animal</a>
                        </div>

                        <div class="about">${database[database.length-1].IntroCard}
                        </div>
                        <div onclick="detail();
                        " class="buton">
                            <a >Read more</a>
                        </div>
        `
        containerAnimalLG.appendChild(ItemNew)
    }
}
window.addEventListener("load",function()
{
    console.log(document.querySelector("#animal1 .buton"))
    document.querySelector("#animal1 .buton a").addEventListener("click",renderDataDetail)
})
         function renderDataDetail(event)
  {
    console.log(event.target);
    console.log(document.querySelector("#animal1 .buton"))
      var containerDetail= document.querySelector("#contentdetail #formdetail .contai .container-1");
    containerDetail.innerHTML=
    `
    <div class="slide-show">
                            <figure class="zoom" style="background-image:url(images/Animals/bear2.jpg);"
                                onmousemove="zoom(event)" ontouchmove="zoom(event)">
                                <img src="images/Animals/bear.jpg" alt="">
                            </figure>

                        </div>
                        <div class="right">
                            <div class="right-left">
                                <div class="animal-name">
                                    <h2><i class="fa-solid fa-paw"></i>Brown Bear</h2>
                                </div>
                                <div class="type">
                                    <table cellspacing="5">
                                        <tr>
                                            <th>Type</th>
                                            <td>Legendary Animal</td>
                                        </tr>
                                        <tr>
                                            <th>Class</th>
                                            <td>${database[database.length-1].scientific_Classification.Class}</td>
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
                                                ${database[database.length-1].listConservation}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>HEIGHT</th>
                                            <th>${database[database.length-1].loadCharacteristics.massAnimal}</th>
                                        </tr>
                                        <tr>
                                            <th>FOOD</th>
                                            <th>${database[database.length-1].loadCharacteristics.massAnimal}</th>
                                        </tr>
                                        <tr>
                                            <th>NATURAL ENEMY</th>
                                            <th>${database[database.length-1].loadCharacteristics.massAnimal}</th>
                                        </tr>
                                    </table>

                                </div>

                                <hr>

                            </div>
                        </div>
    `
  }