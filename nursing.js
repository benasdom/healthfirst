const content=document.querySelectorAll(".scrollani");

const menubtn=document.querySelector(".menu-btn");
const menuList=document.querySelector(".menu-list");


   window.scrollTo({
      top:1,
      behavior:"smooth",
})


content.forEach((content,index)=>{


   window.addEventListener('scroll',()=>{
      let contentPos=content.getBoundingClientRect().top;
      let screenpos=window.innerHeight;

   document.querySelector(".header").style.cssText="position:sticky;z-index:1000000;background:whitesmoke;width:100%;transition:all .5s ease-in-out";
    setTimeout(()=>{
      if(contentPos < screenpos){
            content.style.cssText="opacity:1;transform:scale(1);transition:all .3s ease-in;";

         }
         else{
            content.style.cssText="opacity:0;transform:scale(.8);transition:all .3s ease-in;";


         }

      },10);
   })
})
;

menubtn.onclick=()=>{
menuList.classList.toggle("menu-lista")    
}
