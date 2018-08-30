
var carouselEl=document.getElementById("carousel-gallery");
var carousel_list=[];
var imgs=[];
var carousel_as=[];
for(var i=0;i<15;i++){
    carousel_list[i]= document.createElement("div");
    if(i==0){
        carousel_list[i].setAttribute("class","carousel-item active");
    }else{
        carousel_list[i].setAttribute("class","carousel-item");
    }
    carousel_as[i]=document.createElement("a");
    carousel_as[i].setAttribute("data-toggle","modal");
    carousel_as[i].setAttribute("style","cursor:zoom-in");
    carousel_as[i].setAttribute("data-target","#lightboxmodal");
    imgs[i] = document.createElement("img");
    imgs[i].setAttribute("class","d-block w-100 img-fluid");
    carousel_list[i].appendChild(carousel_as[i]);
    carousel_as[i].appendChild(imgs[i]);
    carouselEl.appendChild(carousel_list[i]);
}


var getSource = function(i,j,data){
    var photoid=i*4+j+1;
    var jsonentry=data[photoid-1];
    var src="";
    if(jsonentry.id==photoid){
        src=jsonentry.link;
    }
    return src;
}

$.getJSON( "images.json", function( data ) {
    for(var k=0;k<15;k++){
        var src = getSource(0,k,data.images);
        imgs[k].setAttribute("src",src);
        carousel_as[k].setAttribute("href",src);
    }

});

$(document).on('click', '[data-toggle="modal"]', function(event) {
    event.preventDefault();
    var src=$(this).attr("href");
    console.log($("#iframe_for_lightbox_image"))

    $("#lightbox_image")[0].setAttribute("src",src);
});
