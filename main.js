document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
}); /*Esto basicamente lo que hace es que cuando esta en vista de dispositivo mobil al darle en los
3 rayas al lado de la lupa se aparezca o desaparezca el menu o side-bar*/

ScrollReveal().reveal('.showcase'); 
/*De la manera de arriba voy a ver mi pantalla como con un pequeño scroll*/ 
ScrollReveal().reveal('.news-cards',{delay:500});
/*Aplicamos el scroll para la segunda seccion*/
ScrollReveal().reveal('.cards-banner-one',{delay:500});
/*Aplicamos el scroll para la tercer seccion*/
ScrollReveal().reveal('.cards-banner-two',{delay:500});

