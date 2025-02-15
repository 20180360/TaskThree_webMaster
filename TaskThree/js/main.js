window.addEventListener('scroll',function(){
  var header =document.querySelector('nav');
  var logo= document.querySelector('.navbarrr');
  if(window.scrollY >0){
    header.classList.remove('bg-transparent');
    header.classList.add('bg-white');
    logo.classList.remove('text-white');
    logo.classList.add('text-black');
  }else{
    header.classList.remove('bg-white');
    header.classList.add('bg-transparent');
    logo.classList.add('text-white');
    logo.classList.remove('text-black');
  }
} )
 
