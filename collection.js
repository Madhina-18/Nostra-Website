var offerbar = document.querySelector(".offer-bar")
document.getElementById("offer-close").addEventListener("click",function(){
    offerbar.style.display="none"
})

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar=document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft="-60%"
})

//Search and products//
var search =document.getElementById("search") 
var products = document.querySelector(".products") 
var divList = products.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()
    

    for(count = 0;count<divList.length;count=count+1)
        {
 
            if(divList[count].textContent.toUpperCase().indexOf(enteredValue)===-1)
            {
                 divList[count].style.display = "none"  
            }
            else{
        
                divList[count].style.display = "block" 

            }

        }



})