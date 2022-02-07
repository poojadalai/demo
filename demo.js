const toggleBtn = document.querySelector('button');
const div = document.querySelector('.hide');

toggleBtn.addEventListener('click', function(){
   
    // if(div.style.display === "none"){
    //     div.style.display = "block";
       
    // }else{
    //     div.style.display = "none";
    // }

    div.classList.toggle("visible");
});