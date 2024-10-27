

//Offer Close//
var offerbar = document.querySelector(".offer-bar")
document.getElementById("offer-close").addEventListener("click",function(){
    offerbar.style.display="none"
})


//Side Navbar//
var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar=document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft="-60%"
})


//Slider//
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0


sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)

//like button
var likebuttons =document.querySelectorAll(".like-button")
likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){



        if(e.target.src.indexOf("Mw-H")>0)
        {

            e.target.src= "./img/favorite.png"
        }
        else{
            e.target.src= "./img/Mw-H.png"
        }
    })

})

