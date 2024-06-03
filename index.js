var rect=document.querySelector(".rect");
rect.addEventListener("mousemove",function(dets){
    var rectval=rect.getBoundingClientRect();
    var insideRect=dets.clientX-rectval.left;
    if(insideRect<rectval.width/2){
        var red=gsap.utils.mapRange(0,rectval.width/2,250,0,insideRect);
        gsap.to(rect,{
            backgroundColor:g=`rgb(${red},0,0)`,
            

        })
    }else{
        var blue=gsap.utils.mapRange(rectval.width/2,rectval.width,0,250,insideRect);
        gsap.to(rect,{
            backgroundColor:g=`rgb(0,0,${blue})`,
            

        })
    }
});
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
    })
}); 