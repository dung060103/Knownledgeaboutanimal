// import {database, getScientific_Class, list_Class} from "./database.js";

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = (offsetX / zoomer.offsetWidth) * 100
    y = (offsetY / zoomer.offsetHeight) * 100
    zoomer.style.backgroundPosition = x + "% " + y + "%";
  }

  function exitDetail() {
    let exit = document.getElementById('contentdetail');
    exit.style.display = 'none';
  }

  function exitSeeU() {
    let exit = document.getElementById('seeU');
    exit.style.display = 'none';
  }

  function div3d() {
    let open = document.getElementById('seeU');

    open.style.display = 'block';
    open.innerHTML=
    `
    <div class="sketchfab-embed-wrapper"> <iframe title="phoenix bird" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/844ba0cf144a413ea92c779f18912042/embed" > </iframe> </div>
    <i class="fa-solid fa-circle-xmark" id="exit" onclick="exitSeeU()"></i>
    `

  }

  function divvideo() {
    let open = document.getElementById('seeU');
    open.style.display = 'block';
    open.style.backgroundColor = 'red';

  }

  function divmusic() {
    let open = document.getElementById('seeU');
    open.style.display = 'block';
    open.style.backgroundColor = 'yellow';
  }

 