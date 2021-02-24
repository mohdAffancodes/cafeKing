document.addEventListener("DOMContentLoaded", () => {
   //.Materialize component functions
   M.AutoInit(); //!All other components are handled by this code
   fnSlider();
   fnCarousel();
   //.calling functions
   fnValignIndicators();
});

function fnValignIndicators() {
   let vAligned = false;
   setInterval(() => {
      if (window.innerWidth <= 600 && vAligned == false) {
         document.querySelector(".indicators").className +=
            " valign-wrapper center";
         vAligned = true;
      } else if (window.innerWidth >= 600 && vAligned == true) {
         document
            .querySelector(".indicators")
            .classList.remove("valign-wrapper");
         vAligned = false;
      }
   }, 100);
}

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

function fnCoffeeModeForMobile() {
   fnCloseSidenav();
   fnChangeBG();
}

function fnChangeBG() {
   //html element
   let modeIcon = document.querySelectorAll(".modeIcon");
   let headers = document.querySelectorAll(".header");
   //css var
   let root = document.querySelector(":root");
   let rootStyle = getComputedStyle(root);

   if (rootStyle.getPropertyValue("--number") == 0) {
      root.style.setProperty("--default", "#c07060");
      root.style.setProperty("--number", 1);

      modeIcon[0].innerHTML = "<i class='material-icons medium'>adjust</i>";
      modeIcon[1].innerHTML =
         "<i class='material-icons small'  style='transform: translateY(25%);color: #5c352d;'>adjust</i>";
      for (let i = 0; i < headers.length; i++) {
         headers[i].style.color = "white";
      }
   } else if (rootStyle.getPropertyValue("--number") == 1) {
      root.style.setProperty("--default", "white");
      root.style.setProperty("--number", 0);

      modeIcon[0].innerHTML =
         "<i class='material-icons medium'>panorama_fish_eye</i>";
      modeIcon[1].innerHTML =
         "<i class='material-icons small' style='transform: translateY(25%);color: rgb(104, 104, 104);'>panorama_fish_eye</i>";
      for (let i = 0; i < headers.length; i++) {
         headers[i].style.color = "black";
      }
   }
}

let btn = document.querySelector(".readMoreBtn");
btn.innerHTML = "Read more";
let text = document.querySelector(".readMoreText");

function fnReadMore() {
   if (btn.textContent == "Read more") {
      text.innerHTML +=
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime nisi tempora reprehenderit provident sequi deserunt consequatur enim cumque soluta iure numquam amet saepe temporibus, aliquam et voluptatem esse quae quos corporis sapiente? Veniam, rerum minima ullam quos recusandae numquam tempore repellendus deleniti velit voluptatum? Laborum, soluta ipsum vitae asperiores voluptate vero veritatis praesentium aperiam minus quam saepe, reiciendis omnis quisquam aut vel quia porro quis modi iste rem enim, explicabo delectus nihil. Vitae excepturi nesciunt alias sit. Dolorum repellendus numquam aliquid in maxime porro quasi deleniti eum. Vitae deserunt optio nulla voluptates dolorem corporis adipisci eos sapiente aspernatur aliquam!";
      btn.innerHTML = "Read less";
   } else if (btn.textContent == "Read less") {
      text.innerHTML =
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium consequatur quisquam, illum autem harum nulla?     Nesciunt pariatur laudantium rerum mollitia quisquam. Delectus repellendus tempora enim. Itaque molestiae facere accusamus,    alias laudantium consequuntur vero cum odio officia veniam dolorum dignissimos aut mollitia suscipit labore minima possimus sed perferendis, est optio.";
      btn.innerHTML = "Read more";
   }
}
