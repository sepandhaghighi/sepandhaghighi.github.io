"use strict";
var image_arr = ["photos/12.jpg",
                 "photos/2.jpg",
                 "photos/3.jpg",
                 "photos/4.jpg",
                 "photos/5.jpg",
                 "photos/6.jpg",
                 "photos/7.jpg",
                 "photos/8.jpg",
                 "photos/9.jpg",
                 "photos/10.jpg",
                 "photos/11.jpg"
                 ];
var image_text=["With Sarmin (Tehran - 2016)",
                "Photonic Research Labratory",
                "Marlik Inst - 2011",
                "Sharif Cup-2013",
                "Best Ideas Festival - Yazd 2011",
                "AUT ACM -2011",
                "Marlik Inst - 2011",
                "With Sepehr ( Masal - 2011)",
                "With Salman - Bame Sabz 2011",
                "Manchester United Best Team in the world!!!!!",
                "With Mostafa ( Roodbar - 2016)" ];
                
var index = 0;

function next() {
    var slider = document.getElementById("slidebar");
    var text=document.getElementById("image_text");
    index=index+1;
    if (index==image_arr.length){
        index=0
    }
    slider.src = image_arr[index];
    text.innerHTML=image_text[index];
    
    
}

function prev() {
    var slider = document.getElementById("slidebar");
     var text=document.getElementById("image_text");
    index=index-1;
    if (index<0){
        index=image_arr.length-1
    }
    slider.src = image_arr[index];
     text.innerHTML=image_text[index];
    
}

