var mainEl=document.getElementById("griddy");
var rows=[];
for(var i=0;i<3;i++){
    rows[i]=document.createElement("div");
    rows[i].setAttribute("class","row");
    var cols=[];
    for(var j=0;j<5;j++){
        cols[j]=document.createElement("div");
        cols[j].setAttribute("class","col m2 ");
        if(j==0){
            cols[j].setAttribute("class","col m2 offset-m1");

        }
        rows[i].appendChild(cols[j]);
    }
    mainEl.appendChild(rows[i]);
}
var createImageElement = function(i,j,data){
    var img = document.createElement("img");
    var photoid=i*5+j+1;
    var jsonentry=data[photoid-1];
    if(jsonentry.id==photoid){
        img.setAttribute("src",jsonentry.link);
    }
    img.setAttribute("class","responsive-img materialboxed ");
    return img;
}
$.getJSON( "images.json", function( data ) {
    //var img = createImageElement(i,j,data.images);
    for(var i=0;i<3;i++){
        for(var j=0;j<5;j++){
            var img = createImageElement(i,j,data.images);
            rows[i].childNodes[j].appendChild(img)

        }
    }
});
 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
