const image_error_url = 'images/image_error.png';
const arrow_down = `<i class="fa fa-arrow-down fa-2x" aria-hidden="true" onclick="load_image();"></i>`;
const last_update = "12/18/2022";
const image_scope = 20;
var mydata = JSON.parse(data);
var remaining_images = mydata.length;
var template = `
<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="{{link}}">
      <img id="img{{id1}}" src="{{link}}" alt="{{id1}}" width="300" height="300" loading="lazy" onerror="image_error(this, {{id1}});">
    </a>
    <div class="desc" id="desc{{id1}}">{{desc1}}<br/>{{date1}}</div>
  </div>
</div>
`

function ready(callback) {
    if (document.readyState != 'loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function() {
        if (document.readyState == 'complete') callback();
    });
}

function image_error(obj, id_number){
    obj.src = image_error_url;
    let desc = document.getElementById(`desc${id_number}`)
    desc.innerHTML = `<i class="fa fa-refresh fa-lg refresh" aria-hidden="true" onclick="refresh(${id_number});"></i>`;
}

function image_link(image) {
    return "images/" + image
}

function refresh(id_number) {
    let img = document.getElementById(`img${id_number}`)
    img.src = image_link(mydata[mydata.length - id_number]["img"])
    let desc = document.getElementById(`desc${id_number}`)
    desc.innerHTML = id_number;
}

function show_last_update(){
    let last_update_obj = document.getElementById("last_update");
    last_update_obj.innerHTML += last_update;
}

function fill_template(img_number, img_link, img_desc, img_date) {
    var temp = template;
    for (let i = 0; i < 6; i++) {
        temp = temp.replace("{{id1}}", img_number).replace("{{link}}", img_link).replace("{{desc1}}", img_desc).replace("{{date1}}", img_date)
    }
    return temp
}

function load_image() {
    let image_number = Math.min(remaining_images, image_scope);
    let image_start = mydata.length - remaining_images;
    let image_stop = image_start + image_number;
    
    for (let i = image_start; i < image_stop; i++) {
        document.getElementById("content").innerHTML += fill_template(parseInt(mydata[i]["id"]), image_link(mydata[i]["img"]), mydata[i]["desc"], mydata[i]["date"])
    }
    
    if (remaining_images == mydata.length){
        document.getElementById("footer").innerHTML = arrow_down;
    }
    
    remaining_images -= image_number;
    
    if (remaining_images == 0){
        document.getElementById("footer").innerHTML = "";
    }

}

ready(function() {
    show_last_update();
    load_image();
});