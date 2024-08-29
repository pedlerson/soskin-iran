$(function(){
       let menu = document.querySelector(".menu");
       let mainHeader = document.getElementById("mainHeader");
        menu.addEventListener("click",e=>{
        menu.classList.toggle("open");
        mainHeader.classList.toggle("d-none");
        mainHeader.classList.toggle("d-md-flex");
        mainHeader.classList.toggle("h-100");
        mainHeader.classList.toggle("position-fixed");
        mainHeader.classList.toggle("top-0");
        mainHeader.classList.toggle("end-0");
        mainHeader.classList.toggle("z-3");
        mainHeader.classList.toggle("w-75");
        mainHeader.classList.toggle("container-fluid");
        ul = mainHeader.querySelector("ul").classList.toggle("d-flex");
        });
        var ul = mainHeader.querySelectorAll("&>ul");
        ul.forEach((e)=>{
            e.classList.toggle("d-flex");
            e.classList.toggle("d-block");
        });
           $("#mainHeader>ul>li.parent").on("click",e=>{
            if(n > acition)
            e.target.classList.toggle("llll");
            $(e).target.toggleClass("llll");
            
            e.currentTarget.classList.toggle("active");
            e.currentTarget.classList.toggle("deactive");
        });
        
        let newProduct=document.getElementById("mahsul");
        let mahsul= document.querySelector("#newproduct");
        mahsul.addEventListener("click",e=>{
            mahsul.classList.toggle("open");
            newProduct.classList.toggle("d-none");
            newProduct.classList.toggle("d-md-none");
        });
        let porTarin=document.getElementById("foroush");
        let foroush=document.querySelector("#porTarin");
        foroush.addEventListener("click",e=>{
            foroush.classList.toggle("open");
            porTarin.classList.toggle("d-none");
            porTarin.classList.toggle("d-md-none");
        });

        window.addEventListener("scroll",()=>{
                console.log(window.innerWidth);
                
                // console.log(window.scrollY);
                if(window.innerWidth >= 768){
                        if(window.scrollY > 300){
                            $(".head-desk").addClass("position-fixed w-100 top-0 bg-white animate__animated animate__slideInDown")
                        }else{
                            $(".head-desk").removeClass("position-fixed w-100 top-0 bg-white animate__animated animate__slideInDown")

                        }
                }
            
        })
        
});