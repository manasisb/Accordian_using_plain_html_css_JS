//For mobile accordian view 
if (document.documentElement.clientWidth < 767){
    
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active1");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
}
    

//For desktop tab view
if (document.documentElement.clientWidth >= 767){
    
        let Buttons = document.querySelectorAll(".accordion");
        for (let button of Buttons) {
          button.addEventListener('click', (e) => {
            const et = e.target;
            const active = document.querySelector(".active");
            if (active) {
              active.classList.remove("active");
            } 
            et.classList.add("active");

            let allContent = document.querySelectorAll('.accordion-content');
            for (let content of allContent) {
              if(content.getAttribute('data-number') === button.getAttribute('data-number')) {
                content.style.display = "block";
               }
              else {
                content.style.display = "none";
               }
             }
          });
        }
}

window.onresize = function(event){
    document.location.reload(true);
}
