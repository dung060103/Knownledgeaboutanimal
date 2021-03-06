insertHeader();
insertFooter();
insertOptionSeason();
var ColorFall = "#fec594";
var ColorWinter = "#4b79ab";
if(JSON.parse(window.localStorage.getItem("CodeOptionSeason"))==null)
{
    var CodeOptionSeason = {
        code: "0"
    }
    window.localStorage.setItem("CodeOptionSeason", JSON.stringify(CodeOptionSeason));
}
window.addEventListener("load", function () {
    console.log(JSON.parse(window.localStorage.getItem("CodeOptionSeason")));

    loadOptionSeason(JSON.parse(window.localStorage.getItem("CodeOptionSeason")).code)


  document
    .querySelector(".icon_phone")
    .addEventListener("mouseenter", function () {
      document.querySelector(".number_phone").classList.add("is-active");
    });
  document
    .querySelector(".icon_phone")
    .addEventListener("mouseleave", function () {
      document
        .querySelector(".number_phone.is-active")
        .classList.remove("is-active");
    });
  document
    .querySelector(".icon_map")
    .addEventListener("mouseenter", function () {
      document.querySelector(".text_map").classList.add("is-active");
    });
  document
    .querySelector(".icon_map")
    .addEventListener("mouseleave", function () {
      document
        .querySelector(".text_map.is-active")
        .classList.remove("is-active");
    });
  var item_optionSeasonSpring = document.querySelector(
    ".item_optionSeason-Spring"
  );
  item_optionSeasonSpring.addEventListener(
    "click",
    changedColorWithSeasonSpring
  );
  var item_optionSeasonSummer = document.querySelector(
    ".item_optionSeason-Summer"
  );
  item_optionSeasonSummer.addEventListener(
    "click",
    changedColorWithSeasonSummer
  );
  var item_optionSeasonFall = document.querySelector(".item_optionSeason-Fall");
  item_optionSeasonFall.addEventListener("click", changedColorWithSeasonFall);
  var item_optionSeasonWinter = document.querySelector(
    ".item_optionSeason-Winter"
  );
  item_optionSeasonWinter.addEventListener(
    "click",
    changedColorWithSeasonWinter
  );
  var item_optionSeasonUnset = document.querySelector(
    ".item_optionSeason-Unset"
  );
  item_optionSeasonUnset.addEventListener("click", changedColorWithDefault);
});

function insertHeader() {
  var header = document.createElement("header");
  header.id = "headermua";
  header.innerHTML = `
<div class="header">
            <div class="container_logo_brand">
                <!-- <img class="logo_brand" src="images/Knowledge about Animal_unscreen.png" alt=""> -->
                <div class="menu_btn">
                    <p>Menu</p>
                </div>
                <!-- <img src="images/dragon1-unscreen.gif" alt="" class="logo_gif"> -->
                <a href="" class="logo_brand">Knowledge about Animal</a>
                <!-- <img style="height:100% ; display:none ;" src="images/LOGO/logoweb.png" alt=""> -->
            </div>
            <div class="list_menu">
                <div class="item_menu no_list"><a href="index.html">Home</a></div>
                <div class="item_menu no_list"><a href="overview.html">OverView</a></div>
                <div class="item_menu no_list" id="menu3"><a href="javascript:void(0)">Search Animals</a></div>
                <div class="item_menu have_list"><a href="animal.html" onclick="">Animals</a>
                </div>
               <div class="item_menu have_list"><a href="legendary_animal.html">Legendary Animals</a></div>
                <div class="item_menu have_list"><a href="Extinct.html">Extinct Animals</a></div>
                <div class="item_menu no_list"><a href="news.html">News</a></div>
                <div class="item_menu no_list"><a href="javascript:void(0)" onclick="opensignin()">Login</a></div>
                <div class="item_menu no_list"><a href="contact.html">Contact</a></div>
            </div>
        </div>

        <div class="content_menuItem">
            <div class="btn_exit_content_menuItem">
                CLOSE
            </div>

            <div class="list_dropdown list_Animals">
                <div class="item_contentMenu item_Animals">
                    <a href="">
                        <h3>CLASS</h3>
                    </a>
                    <div class="select">
                        <a href="">REPTILE</a>
                        <a href="">FISH</a>
                        <a href="">BIRD</a>
                        <a href="">INSECT</a>
                        <a href="">LOBE LEGS</a>
                        <a href="">SNAKE TAIL</a>
                        <a href="">CRUSTACEAN</a>
                        <a href="">Mammalia</a>
                        <a href="">SPIDER FIGURE</a>
                        <a href="">HOLOTHURIAN</a>
                        <a href="">AMPHIBIANS</a>
                        <a href="">MUTIL LEGS</a>
                        <a href="">JELLYFISH</a>
                        <a href="">STARFISH</a>
                        <a href="">CORAL</a>


                    </div>
                </div>
                <div class="item_contentMenu item_Animals">
                    <a href="">
                        <h3>CHARACTERISTIC</h3>
                    </a>
                    <div class="select">
                        <a href="">WILD ANIMALS</a>
                        <a href="dangerous_animals.html">DANGEROUS ANIMALS</a>
                        <a href="">WATER - OCEAN</a>
                        <a href="">LAND</a>
                        <a href="">DOMESTIC PET</a>

                    </div>
                </div>
                <div class="item_contentMenu item_Animals">
                    <a href="">
                        <h3>INDUSTRY</h3>
                    </a>
                    <div class="select">
                        <a href="">JOINT FOOT</a>
                        <a href="">LIVE WIRE</a>
                        <a href="">HAS A LIVING TAIL</a>
                        <a href="">VERTEBRATE</a>
                        <a href="">PRICKLY SKIN</a>
                        <a href="">FLATWORMS</a>
                        <a href="">WORMS BITE</a>
                        <a href="">TAPWORMS</a>
                        <a href="">ROUNDWORMS</a>
                        <a href="">SOFT BODY</a>

                    </div>
                </div>
            </div>
            <div class="list_dropdown list_Legendary_Animals">
                <div class="item_contentMenu item_Legendary_Animals">
                    <div class="img_Legendary_Animals">
                        <img src="images/Header/from Greecce.jpg" alt="">
                    </div>
                    <a href="">
                        <h3>From Greece</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Legendary_Animals">
                    <div class="img_Legendary_Animals">
                        <img src="images/Header/from Japan.jpg" alt="">
                    </div>
                    <a href="">
                        <h3>From Japan</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Legendary_Animals">
                    <div class="img_Legendary_Animals">
                        <img src="images/Header/form China.png" alt="">
                    </div>
                    <a href="">
                        <h3>From China</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Legendary_Animals">
                    <div class="img_Legendary_Animals">
                        <img src="images/Header/from France.jpg" alt="">
                    </div>
                    <a href="">
                        <h3>From France</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Legendary_Animals">
                    <div class="img_Legendary_Animals">
                        <img src="images/Header/from EUROPE.jpg" alt="">
                    </div>
                    <a href="">
                        <h3>From Europe</h3>
                    </a>
                </div>

                <div class="item_contentMenu item_Legendary_Animals">
                    <div class="img_Legendary_Animals">
                        <img src="images/Header/from African.jpg" alt="">
                    </div>
                    <a href="">
                        <h3>From African</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Legendary_Animals">
                    <div class="img_Legendary_Animals">
                        <img src="images/Header/from VN.jpg" alt="">
                    </div>
                    <a href="">
                        <h3>From Vietnam</h3>
                    </a>
                </div>
            </div>
            <div class="list_dropdown list_Extinct_Animals">
                <div class="item_contentMenu item_Extinct_Animals">
                    <a href="">
                        <h3>Period Ordovic - Silur</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Extinct_Animals">
                    <a href="">
                        <h3>Period Devon </h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Extinct_Animals">
                    <a href="">
                        <h3>Period Permi - Trias</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Extinct_Animals">
                    <a href="">
                        <h3>Period Trias - Jura</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Extinct_Animals">
                    <a href="">
                        <h3>Period Creta - Paleogen</h3>
                    </a>
                </div>
                <div class="item_contentMenu item_Extinct_Animals">
                    <a href="">
                        <h3>Recently</h3>
                    </a>
                </div>
            </div>
        </div>
`;
  document.body.appendChild(header);
}
function insertFooter() {
  var footer = document.createElement("footer");
  footer.id = "footermua";
  footer.innerHTML = `
    <div class="ft_list_option">
            <div class="item_option"><a href="test.html">About</a></div>
            <div class="item_option"><a href="">Contact Us</a> </div>
            <div class="item_option"><a href="">Privacy</a></div>
            <div class="item_option"><a href="">Terms</a></div>
            <div class="item_option"><a href="">Benefits</a></div>
        </div>
        <div class="ft_list_option"></div>
        <div class="ft_list_content">
            <div class="item_content short_introduce">
                <div class="title">
                    <h3>Knowlegde about Animals</h3>
                </div>
                <div class="text">
                    Animals (also called Metazoa) are multicellular, eukaryotic organisms in the biological kingdom
                    Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move,
                    can reproduce sexually, and go through an ontogenetic stage in which their body consists of a hollow
                    sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species
                    have been described???of which around 1 million are insects???but it has been estimated there are over 7
                    million animal species in total. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6
                    metres (110 ft). They have complex interactions with each other and their environments, forming
                    intricate food webs. The scientific study of animals is known as zoology.
                </div>
                <div class="list_others_introduce">
                    <div class="item_others_intro hotline">
                        <div class="icon_others_intro icon_phone"><i class="fas fa-phone">&nbsp</i></div>
                        <div class="content_others_intro number_phone">(+84)583152783</div>
                    </div>
                    <div class="item_others_intro postition">
                        <div class="icon_others_intro icon_map"><i class="fa-solid fa-location-dot">&nbsp</i></div>
                        <div class="content_others_intro text_map">470 Tr???n ?????i Ngh??a, ph?????ng H??a H???i, Qu???n Ng?? H??nh
                            S??n, ???? N???ng</div>
                    </div>
                </div>

                <!-- <div class="form_contact">
      <div class="hotline">
          <div class="icon_phone"><i class="fas fa-phone">&nbsp</i></div>
          <div class="number_phone"> 0583152783</div>
      </div>
      <div class="form_send">
          <form action="">
              <input class="text_gmail" type="text" placeholder="Type your email...">
              <button class="btn_send">Send</button>
          </form>
      </div>
  </div> -->
            </div>
            <div class="item_content campaign_content">
                <div class="title">
                    <h3>Conservation Campaign</h3>
                </div>
                <div class="list_campaign">
                    <div class="item_campaign"><a href=""> Rhino Conservation Campaign</a></div>
                    <div class="item_campaign"><a href=""> Pangolin Conservation Campaign</a></div>
                    <div class="item_campaign"><a href=""> Elephant Conservation Campaign</a></div>
                    <div class="item_campaign"><a href=""> Dolphin Conservation Campaign</a></div>
                    <div class="item_campaign"><a href=""> Coral Conservation Campaign</a></div>
                </div>
            </div>

        </div>
        <div class="ft_list_icon_contact">
            <div class="icon_contact icon_youtube"><i class="fa-brands fa-youtube"></i></div>
            <div class="icon_contact icon_facebook"><i class="fa-brands fa-facebook-f"></i></div>
            <!-- <div class="icon_contact icon_zalo"></div> -->
            <div class="icon_contact icon_tiktok"><i class="fa-brands fa-tiktok"></i></div>
            <div class="icon_contact icon_intagram"><i class="fa-brands fa-instagram"></i></div>
            <div class="icon_contact icon_twiter"><i class="fa-brands fa-twitter"></i></div>
        </div>
        <div class="ft_logo">
            <a href=""><img src="images/LOGO/logo_team.png" alt=""></a>
        </div>
    `;
  document.body.appendChild(footer);
}
function insertOptionSeason() {
  var list_optionSeason = document.createElement("div");
  list_optionSeason.classList.add("list_optionSeason");

  list_optionSeason.innerHTML = `
    <div class="item_optionSeason item_optionSeason-Spring "><i class="fa-solid fa-seedling"></i></div>
    <div class="item_optionSeason item_optionSeason-Summer "><i class="fas fa-sun"></i></div>
    <div class="item_optionSeason item_optionSeason-Fall "><i class="fa-brands fa-canadian-maple-leaf"></i></div>
    <div class="item_optionSeason item_optionSeason-Winter "><i class="fa-solid fa-snowflake"></i></div>
    <div class="item_optionSeason item_optionSeason-Unset "><i class="fa-solid fa-not-equal"></i></div>
    `;
  document.body.appendChild(list_optionSeason);
}
function changedColorWithSeasonSpring() {
    loadOptionSeason("1")
}

function changedColorWithSeasonSummer() {
    loadOptionSeason("2")
}


function changedColorWithSeasonFall() {
loadOptionSeason("3")

}

function changedColorWithSeasonWinter() {
loadOptionSeason("4")

}
function changedColorWithDefault() {
loadOptionSeason("0")
}
function loadOptionSeason(Code) {
  switch (Code) {
    case "1":
        {
            var footer = document.getElementById("footermua");
            footer.style.backgroundImage =
              "linear-gradient(" + "to top" + ", " + "pink" + ", " + "black" + ")";
            var header = document.getElementById("headermua");
            header.style.backgroundImage =
              "linear-gradient(" + "to top" + ", " + "pink" + ", " + "black" + ")";
              console.log(JSON.parse(window.localStorage.getItem("CodeOptionSeason")).code)
              var CodeOptionSeason = JSON.parse(window.localStorage.getItem("CodeOptionSeason"));
                    CodeOptionSeason.code="1";
                  window.localStorage.setItem("CodeOptionSeason", JSON.stringify(CodeOptionSeason));
              console.log(JSON.parse(window.localStorage.getItem("CodeOptionSeason")).code)
        }
      break;
    case "2":
        {
            var footer = document.getElementById("footermua");
            footer.style.backgroundImage =
              "linear-gradient(" + "to top" + ", " + "yellow" + ", " + "black" + ")";
            var header = document.getElementById("headermua");
            header.style.backgroundImage =
              "linear-gradient(" + "to top" + ", " + "yellow" + ", " + "black" + ")";
              var CodeOptionSeason = JSON.parse(window.localStorage.getItem("CodeOptionSeason"));
              CodeOptionSeason.code="2";
            window.localStorage.setItem("CodeOptionSeason", JSON.stringify(CodeOptionSeason));
        }
      break;
    case "3":
        {
            var footer = document.getElementById("footermua");
            footer.style.backgroundImage =
              "linear-gradient(" + "to top" + ", " + ColorFall + ", " + "black" + ")";
            var header = document.getElementById("headermua");
            header.style.backgroundImage =
              "linear-gradient(" + "to top" + ", " + ColorFall + ", " + "black" + ")";
              var CodeOptionSeason = JSON.parse(window.localStorage.getItem("CodeOptionSeason"));
              CodeOptionSeason.code="3";
            window.localStorage.setItem("CodeOptionSeason", JSON.stringify(CodeOptionSeason));
        }
      break;
    case "4":
        {

              var footer = document.getElementById("footermua");
              footer.style.backgroundImage =
                "linear-gradient(" + "to top" + ", " + ColorWinter + ", " + "black" + ")";
              var header = document.getElementById("headermua");
              header.style.backgroundImage =
                "linear-gradient(" + "to top" + ", " + ColorWinter + ", " + "black" + ")";
                var CodeOptionSeason = JSON.parse(window.localStorage.getItem("CodeOptionSeason"));
                CodeOptionSeason.code="4";
              window.localStorage.setItem("CodeOptionSeason", JSON.stringify(CodeOptionSeason));
        }
      break;
    case "0":
        {
            var header = document.getElementById("headermua");
            header.style.backgroundImage = "unset";
            //    header.style.backgroundColor= "white"
            var footer = document.getElementById("footermua");
            // footer.style.background = "black";
            footer.style.backgroundImage = "unset";
            var CodeOptionSeason = JSON.parse(window.localStorage.getItem("CodeOptionSeason"));
            CodeOptionSeason.code="0";
          window.localStorage.setItem("CodeOptionSeason", JSON.stringify(CodeOptionSeason));
        }
      break;
    default:
      break;
  }
}
