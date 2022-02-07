const collapsibles = document.querySelectorAll('.collapasible');

    for(let i = 0; i < collapsibles.length; i++){
        let collapsible = collapsibles[i];

        collapsible.addEventListener('click', function(){
        
        const collapsibleContent = collapsible.nextElementSibling;
        collapsibleContent.classList.toggle("visible");
        });
    }

  
