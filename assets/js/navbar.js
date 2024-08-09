const html = `<header class="bg-white sticky top-0 z-[2] transition-all duration-800">
        <div class="bg-[#d3441ecc] hidden md:block">
            <div
                class="flex md:justify-end justify-between items-center p-4 md:px-12 max-w-screen-2xl mx-auto text-white">
                <div class="md:flex items-center max-sm:space-y-2">
                    <a href="tel:+1-678-368-4899" class="flex items-center">
                        <img src="./assets/phoneLogo.png" alt="Phone" class="mr-2">
                        <span class="mr-4">+1-678-368-4899</span>
                    </a>
                    <a href="mailto:sales@ordersune.com" class="flex items-center">
                        <img src="./assets/mailLogo.png" alt="Mail" class="mr-2">
                        <span class="mr-8">sales@ordersune.com</span>
                    </a>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="https://www.facebook.com" target="_blank" class="">
                        <img src="./assets/facebook.png" alt="Facebook">
                    </a>
                    <img src="./assets/twitter.png" alt="Twitter" class="">
                    <img src="./assets/instagram.png" alt="Instagram" class="">
                    <img src="./assets/linkedin.png" alt="LinkedIn" class="">
                </div>
            </div>
        </div>
        <nav class="relative xl:px-12 max-sm:px-4 py-4 flex justify-between items-center bg-white">
            <a class="text-3xl font-bold leading-none" href="index.html">
                <img src="./assets/logo.png" class="h-12" alt="Ordersune Logo" />

            </a>
            <div class="lg:hidden">
                <button class="navbar-burger flex items-center text-blue-600 p-3">
                    <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <div class="hidden w-full lg:block md:w-auto max-sm:border max-sm:rounded-lg max-sm:shadow"
                id="navbar-default">
                <ul
                    class="flex flex-col p-4 md:p-0 rounded-lg md:flex-row 2xl:space-x-10 xl:space-x-6 md:space-x-3 rtl:space-x-reverse text-[#002959] md:items-center">
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex items-center md:justify-between w-full text-gray-900 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]                                ">Products
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        <div id="dropdownNavbar"
                            class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow transform-none h-full md:h-[70vh] overflow-auto border shadow">
                            <ul class="p-2 text-sm font-medium space-y-3" aria-labelledby="dropdownLargeButton">
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/point-of-sale.png" alt="">Point of
                                        sale</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/kiosk.png" alt="">Kiosk Self Service</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/kitchen.png" alt="">Kitchen Display
                                        System</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/order-tracking.png" alt="">Order
                                        Tracking</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/ecommerce.png" alt="">Ecommerce</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/digital.png" alt="">Digital Menu
                                        Boards</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/call-center.png" alt="">Call Center
                                        Ordering</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/social-media.png" alt="">Social Media
                                        Ordering</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/reservations.png" alt="">Reservations</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/loyalty-pro.png" alt="">Loyalty
                                        Program</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/inventory-management.png" alt="">Inventory
                                        Management</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/product-recommendations.png" alt="">Product
                                        Recommendations <br> using AI</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/tableside-ordering.png" alt="">Tableside
                                        Ordering / BYOD</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/advanced-reports.png" alt="">Advanced
                                        Reports</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/aggregator.png" alt="">Aggregator
                                        Integration</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/coupons-discounts.png" alt="">Coupons &
                                        Discounts</a>
                                </li>
                                <li class="">
                                    <a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                            src="./assets/images/products/email-sms.png" alt="">Email & SMS
                                        Marketing</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#"
                            class="block rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Pricing</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Solutions</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Partners</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Resources</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Company</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Contact
                            Us</a>
                    </li>

                </ul>
            </div>
            <div class="flex items-center xl:space-x-6 space-x-2 max-md:hidden">
                <div class="relative flex items-center">
                    <span class="absolute xl:ps-5 ps-2">
                        <img src="./assets/icons/search.png" alt="search icon" class="h-4">
                    </span>
                    <input type="text" placeholder="Search"
                        class="text-sm xl:ps-12 ps-8 py-2 px-2 rounded-full bg-[#d9d9d980] border-0 2xl:w-72 lg:w-44 md:w-32">
                </div>
                <button class="bg-gradient-to-r from-[#D14420] to-[#FF4766] text-white py-3 xl:px-8 px-3 rounded-full">Get a
                    Demo</button>
            </div>
        </nav>
        <div class="navbar-menu relative z-50 hidden">
            <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav style="background-image: linear-gradient(136.79deg, rgba(210, 67, 33, 0.25) 14.12%, rgba(210, 67, 33, 0.2) 23.53%, rgba(210, 67, 33, 0.15) 32.29%, rgba(210, 67, 33, 0.125) 40.85%, rgba(210, 67, 33, 0.075) 47.69%, rgba(210, 67, 33, 0.04) 56.89%);"
                class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-white border-r overflow-y-auto justify-between">
                <div class="p-6">
                    <div class="flex items-center mb-8">
                        <a class="mr-auto text-3xl font-bold leading-none" href="index.html">
                            <img src="./assets/logo.png" class="h-12" alt="Ordersune Logo" />

                        </a>
                        <button class="navbar-close">
                            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul class="divide-y divide-[#d3441ecc]">
                            <li>
                                <button id="dropdownMobileNavbarLink" data-dropdown-toggle="dropdownMobileNavbar"
                                    class="flex items-center md:justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]                                ">Products
                                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>
                                <!-- Dropdown menu -->
                                <div id="dropdownMobileNavbar"
                                    class="max-h-[70%] z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow transform-none h-full md:h-[70vh] overflow-auto border shadow">
                                    <ul class="p-2 text-sm font-medium space-y-3" aria-labelledby="dropdownLargeButton">
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/point-of-sale.png" alt="">Point of
                                                sale</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/kiosk.png" alt="">Kiosk Self
                                                Service</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/kitchen.png" alt="">Kitchen Display
                                                System</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/order-tracking.png" alt="">Order
                                                Tracking</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/ecommerce.png" alt="">Ecommerce</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/digital.png" alt="">Digital Menu
                                                Boards</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/call-center.png" alt="">Call Center
                                                Ordering</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/social-media.png" alt="">Social Media
                                                Ordering</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/reservations.png"
                                                    alt="">Reservations</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/loyalty-pro.png" alt="">Loyalty
                                                Program</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/inventory-management.png"
                                                    alt="">Inventory
                                                Management</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/product-recommendations.png"
                                                    alt="">Product
                                                Recommendations <br> using AI</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/tableside-ordering.png"
                                                    alt="">Tableside
                                                Ordering / BYOD</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/advanced-reports.png" alt="">Advanced
                                                Reports</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/aggregator.png" alt="">Aggregator
                                                Integration</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/coupons-discounts.png" alt="">Coupons
                                                &
                                                Discounts</a>
                                        </li>
                                        <li class="">
                                            <a href="#"
                                                class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                                                    src="./assets/images/products/email-sms.png" alt="">Email & SMS
                                                Marketing</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Pricing</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Solutions</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Partners</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Resources</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Company</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Contact
                                    Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bg-[#d3441ecc] p-6 space-y-6">
                    <div class="flex flex-col items-center space-y-2 text-white">
                        <a href="tel:+1-678-368-4899" class="flex items-center">
                            <img src="./assets/phoneLogo.png" alt="Phone" class="mr-2 hidden md:block">
                            <span class="mr-4">+1-678-368-4899</span>
                        </a>
                        <a href="mailto:sales@ordersune.com" class="flex items-center">
                            <img src="./assets/mailLogo.png" alt="Mail" class="mr-2 hidden md:block">
                            <span class="mr-8">sales@ordersune.com</span>
                        </a>
                    </div>
                    <div class="flex items-center space-x-4 justify-center max-sm:space-x-10">
                        <a href="https://www.facebook.com" target="_blank" class="">
                            <img src="./assets/facebook.png" alt="Facebook">
                        </a>
                        <img src="./assets/twitter.png" alt="Twitter" class="">
                        <img src="./assets/instagram.png" alt="Instagram" class="">
                        <img src="./assets/linkedin.png" alt="LinkedIn" class="">
                    </div>
                </div>
            </nav>
        </div>
    </header>`;

// window.onload = function () {
//   const header = document.getElementsByTagName("header")[0];
//   header.innerHTML = html;
// };
document.addEventListener("DOMContentLoaded", function () {
  function loadNavbar() {
    fetch("./assets/html/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        const header = document.getElementsByTagName("navbar")[0];
        header.innerHTML = data;
      });
  }
  loadNavbar()
//   const header = document.getElementsByTagName("navbar")[0];
//   header.innerHTML = html;
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  var prevScrollpos = window.pageYOffset;
  if (window.innerWidth > 768) {
    window.onscroll = function () {
      var currentScrollpos = window.pageYOffset;
      if (prevScrollpos > currentScrollpos) {
        document.getElementsByTagName("header")[0].classList.add("top-0");
      } else {
        document.getElementsByTagName("header")[0].classList.add("top-[-56px]");
      }

      prevScrollpos = currentScrollpos;
    };
  }
});
