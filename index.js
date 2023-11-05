let loadMoreBtn =document.querySelector('#load-more');
        let currentItem=3;
    
    function loadmore(x){
        let boxes=[...document.querySelectorAll('.contain .card-list .card')];
        for(let i=currentItem ;i< currentItem + 4 ;i++){
            boxes[i].style.display = 'inline-block';
            x.disable=true;
        }
        currentItem += 3;
        
        }
window.addEventListener("scroll",function() {
   let header=document.querySelector("header") ;
   header.classList.toggle("sticky",this.window)
})