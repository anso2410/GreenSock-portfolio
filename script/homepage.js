// menu cercle //
const btnCircle = document.querySelector('.btn-circle');
const circleMenu = document.querySelector('.circle-menu');

btnCircle.addEventListener('click', () => {

    btnCircle.classList.toggle('menu-anim');
    circleMenu.classList.toggle('circle-anim');
    

})


// menu POP //
const containerMenuPop = document.querySelector('.container-menu-pop');
const btnMenuPop = document.querySelector('.btn-menu-pop');

btnMenuPop.addEventListener('click', () => {
    containerMenuPop.classList.toggle('active');
})




// Animation texte //
window.onload = function() {
    let tl = new TimelineMax();
        tl
           
            .from('h2',2,{opacity:0}, '+= 0.4') 
            .from('p',1,{opacity:0}, '+= 0.2'); 


            TweenMax.from
                     ('h3', 3, {
                         y: -500,
                        autoAlpha: 0,
                      ease:Elastic.easeOut.config(1,0.7), x: -500}) 

           
            TweenMax.fromTo('.container-menu-pop', 3,{
                    x: -500,
                    
                },
                {
                     x:200,
                     
                     ease:Elastic.easeOut.config(3,0.7), x: 150
                }
                        
            )  
            TweenMax.from('.container-corner', 3,{
                x: -500
                
            }
            
           
                    
        ) 
}

