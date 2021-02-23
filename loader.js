document.addEventListener("DOMContentLoaded", () => {
   M.AutoInit(); //!All other components are handled by this code
   fnSlider();
   fnCarousel();
});

function fnCloseSidenav() {
   let elem = document.querySelector(".sidenav");
   let instanceSidenav = M.Sidenav.init(elem);
   instanceSidenav.close();
}

function fnSlider() {
   //.Slider code
   let elem = document.querySelector(".slider");
   let instanceSlider = M.Slider.init(elem, {
      full_width: true,
      indicators: true,
   });
   //.Getting the slider going
   instanceSlider.next();
}

function fnCarousel() {
   //.Carousel code
   let elem = document.querySelector(".carousel");
   let instanceCarousel = M.Carousel.init(elem, {
      numVisible: 7,
      shift: 70,
   });
   //.Getting the carousel going
   instanceCarousel.next();
}

function fnCoffeeMode() {
   fnCloseSidenav();
   fnChangeBG();
}

function fnChangeBG() {
   //html element
   let modeIcon = document.querySelectorAll(".modeIcon");
   //css var
   let root = document.querySelector(":root");
   let rootStyle = getComputedStyle(root);

   if (rootStyle.getPropertyValue("--number") == 0) {
      root.style.setProperty("--default", "#c07060");
      root.style.setProperty("--number", 1);

      modeIcon[0].innerHTML = "<i class='material-icons medium'>adjust</i>";
      modeIcon[1].innerHTML =
         "<i class='material-icons small'  style='transform: translateY(25%)'>adjust</i>";
   } else if (rootStyle.getPropertyValue("--number") == 1) {
      root.style.setProperty("--default", "white");
      root.style.setProperty("--number", 0);

      modeIcon[0].innerHTML =
         "<i class='material-icons medium'>panorama_fish_eye</i>";
      modeIcon[1].innerHTML =
         "<i class='material-icons small' style='transform: translateY(25%);'>panorama_fish_eye</i>";
   }
}
