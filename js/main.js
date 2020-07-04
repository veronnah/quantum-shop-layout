const selectAllElements = document.querySelectorAll("[data-select]");

selectAllElements.forEach(function(item){
    item.addEventListener("click", function(){
        const realSelect = document.getElementById('selectReal');

        if (event.target.hasAttribute("data-select-item") ) {

            let itemTitle = event.target.getAttribute("data-select-item");
            this.querySelector("[data-select-title]").textContent = itemTitle;

            this.querySelector(".header__select-items__dropdown").classList.toggle("hidden");
        }
        else {
            this.querySelector(".header__select-items__dropdown").classList.toggle("hidden");
        }
        realSelect.value = itemTitle;

    });
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: [],
        loop: false
    });
  });