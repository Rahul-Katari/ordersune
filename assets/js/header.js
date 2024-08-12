async function headerold() {
  const response = await fetch('/assets/js/header.html');
  const headerHtml = await response.text();
  document.getElementById('header').outerHTML = headerHtml;
}

function header() {
  const headerHtml = `<header class="bg-white sticky top-0 z-[2] transition-all duration-800">
  <div class="bg-[#d3441ecc] hidden md:block">
    <div class="flex md:justify-end justify-between items-center p-2 md:px-12 max-w-screen-2xl mx-auto text-white">
      <div class="md:flex items-center max-sm:space-y-2"><a href="tel:+1-678-368-4899" class="flex items-center"><img
            src="/assets/images/icons/phoneLogo.png" alt="Phone" class="mr-2" /><span
            class="mr-4">+1-678-368-4899</span></a><a href="mailto:sales@ordersune.com" class="flex items-center"><img
            src="/assets/images/icons/mailLogo.png" alt="Mail" class="mr-2" /><span
            class="mr-8">sales@ordersune.com</span></a></div>
      <div class="flex items-center space-x-4"><a href="https://www.facebook.com" target="_blank"><img
            src="/assets/images/social/facebook.png" alt="Facebook" /></a><img src="/assets/images/social/twitter.png"
          alt="Twitter" /><img src="/assets/images/social/instagram.png" alt="Instagram" /><img
          src="/assets/images/social/linkedin.png" alt="LinkedIn" /></div>
    </div>
  </div>
  <nav class="relative 2xl:px-12 px-4 py-4 flex justify-between items-center bg-white"><a
      class="text-3xl font-bold leading-none" href="/index.html"><img src="/assets/images/logo.png" class="h-12"
        alt="Ordersune Logo" /></a>
    <div class="lg:hidden"><button class="navbar-burger flex items-center text-blue-600 p-3"><svg
          class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg></button></div>
    <div class="hidden w-full lg:block md:w-auto max-sm:border max-sm:rounded-lg max-sm:shadow" id="navbar-default">
      <ul class="flex flex-col p-4 md:p-0 rounded-lg md:flex-row rtl:space-x-reverse text-[#002959] md:items-center">
        <li>
          <div
            class="flex items-center md:justify-between w-full text-gray-900 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">
            <a href="/products.html" id="dropdownHoverButton" data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              class="py-2 xl:px-3 px-1 flex items-baseline"
              type="button">Products<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </a>
          </div>
          <div id="dropdownHover"
            class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow transform-none h-full md:h-[70vh] overflow-auto border shadow">
            <ul class="p-2 text-sm font-medium space-y-3" aria-labelledby="dropdownLargeButton">
              <li><a href="../../products/pointofsale.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/point-of-sale.png" alt="" /></div>Point of sale
                </a></li>
              <li><a href="../../products/kiosk.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/kiosk.png" alt="" /></div>Kiosk Self Service
                </a></li>
              <li><a href="../../products/kds.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/kitchen.png" alt="" /></div>Kitchen Display System
                </a></li>
              <li><a href="../../products/order-tracking.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/order-tracking.png" alt="" /></div>Order Tracking
                </a></li>
              <li><a href="../../products/ecommerce.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/ecommerce.png" alt="" /></div>Ecommerce
                </a></li>
              <li><a href="../../products/digital-menu-boards.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/digital.png" alt="" /></div>Digital Menu Boards
                </a></li>
              <li><a href="../../products/call-center-ordering.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/call-center.png" alt="" /></div>Call Center Ordering
                </a></li>
              <li><a href="../../products/social-media-ordering.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/social-media.png" alt="" /></div>Social Media Ordering
                </a></li>
              <li><a href="#" class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/reservations.png" alt="" /></div>Reservations
                </a></li>
              <li><a href="../../products/loyalty.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/loyalty-pro.png" alt="" /></div>Loyalty Program
                </a></li>
              <li><a href="../../products/payments.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/payments.png" alt="" /></div>Payments
                </a></li>
              <li><a href="../../products/inventory.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/inventory-management.png" alt="" /></div>Inventory Management
                </a></li>
              <li><a href="../../products/ai-product.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/product-recommendations.png" alt="" /></div>Product
                  Recommendations <br />using AI
                </a></li>
              <li><a href="../../products/tableside.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/tableside-ordering.png" alt="" /></div>Tableside Ordering /
                  BYOD
                </a></li>
              <li><a href="../../products/advanced-analytics.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/advanced-reports.png" alt="" /></div>Advanced Reports
                </a></li>
              <li><a href="../../products/aggregator.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/aggregator.png" alt="" /></div>Aggregator Integration
                </a></li>
              <li><a href="../../products/coupons.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/coupons-discounts.png" alt="" /></div>Coupons & Discounts
                </a></li>
              <li><a href="../../products/email-sms.html"
                  class="flex items-center px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3">
                  <div><img src="/assets/images/products/email-sms.png" alt="" /></div>Email & SMS Marketing
                </a></li>
            </ul>
          </div>
        </li>
        <li><a href="/pricing.html"
            class="block py-2 xl:px-3 px-1 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Pricing</a>
        </li>
        <li><a href="#"
            class="block py-2 xl:px-3 px-1 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Solutions</a>
        </li>
        <li><a href="#"
            class="block py-2 xl:px-3 px-1 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Partners</a>
        </li>
        <li><a href="#"
            class="block py-2 xl:px-3 px-1 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Resources</a>
        </li>
        <li><a href="#"
            class="block py-2 xl:px-3 px-1 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Company</a>
        </li>
        <li><a href="#"
            class="block py-2 xl:px-3 px-1 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Contact
            Us</a></li>
      </ul>
    </div>
    <div class="flex items-center xl:space-x-6 space-x-3 max-lg:hidden">
      <div class="relative flex items-center"><span class="absolute ps-5"><img src="/assets/images/icons/search.png"
            alt="search icon" class="h-4" /></span><input type="text" placeholder="Search"
          class="text-sm ps-12 py-2 px-2 rounded-full bg-[#d9d9d980] border-0 2xl:w-72 lg:w-36 w-24" /></div><button
        class="bg-gradient-to-r from-[#D14420] to-[#FF4766] text-white py-3 xl:px-8 px-4 rounded-full max-lg:hidden">Get
        a Demo </button>
    </div>
  </nav>
  <div class="navbar-menu relative z-50 hidden">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav
      style=" background-image: linear-gradient( 136.79deg, rgba(210, 67, 33, 0.25) 14.12%, rgba(210, 67, 33, 0.2) 23.53%, rgba(210, 67, 33, 0.15) 32.29%, rgba(210, 67, 33, 0.125) 40.85%, rgba(210, 67, 33, 0.075) 47.69%, rgba(210, 67, 33, 0.04) 56.89% ); "
      class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-white border-r overflow-y-auto justify-between">
      <div class="p-6">
        <div class="flex items-center mb-8"><a class="mr-auto text-3xl font-bold leading-none" href="index.html"><img
              src="/assets/images/logo.png" class="h-12" alt="Ordersune Logo" /></a><button class="navbar-close"><svg
              class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg></button></div>
        <div>
          <ul class="divide-y divide-[#d3441ecc]">
            <li>
              <div class="flex items-center"><a href="products.html" class="py-2 px-3">Products </a><button
                  id="dropdownMobileNavbarLink" data-dropdown-toggle="dropdownMobileNavbar"
                  class="flex items-center md:justify-between w-fit py-2 px-3 text-gray-900 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]"><svg
                    class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4" />
                  </svg></button></div>
              <div id="dropdownMobileNavbar"
                class="max-h-[70%] z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow transform-none h-full md:h-[70vh] overflow-auto border shadow">
                <ul class="p-2 text-sm font-medium space-y-3" aria-labelledby="dropdownLargeButton">
                  <li><a href="../../products/pointofsale.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/point-of-sale.png" alt="" />Point of sale</a></li>
                  <li><a href="../../products/kiosk.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/kiosk.png" alt="" />Kiosk Self Service</a></li>
                  <li><a href="../../products/kds.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/kitchen.png" alt="" />Kitchen Display System</a></li>
                  <li><a href="../../products/order-tracking.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/order-tracking.png" alt="" />Order Tracking</a></li>
                  <li><a href="../../products/ecommerce.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/ecommerce.png" alt="" />Ecommerce</a></li>
                  <li><a href="../../products/digital-menu-boards.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/digital.png" alt="" />Digital Menu Boards</a></li>
                  <li><a href="../../products/call-center-ordering.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/call-center.png" alt="" />Call Center Ordering</a></li>
                  <li><a href="../../products/social-media-ordering.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/social-media.png" alt="" />Social Media Ordering</a></li>
                  <li><a href="#" class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/reservations.png" alt="" />Reservations</a></li>
                  <li><a href="../../products/loyalty.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/loyalty-pro.png" alt="" />Loyalty Program</a></li>
                  <li><a href="../../products/payments.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/payments.png" alt="" />Payments </a></li>
                  <li><a href="../../products/inventory.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/inventory-management.png" alt="" />Inventory Management</a></li>
                  <li><a href="../../products/ai-product.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/product-recommendations.png" alt="" />Product Recommendations
                      <br />using AI</a></li>
                  <li><a href="../../products/tableside.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/tableside-ordering.png" alt="" />Tableside Ordering / BYOD</a></li>
                  <li><a href="../../products/advanced-analytics.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/advanced-reports.png" alt="" />Advanced Reports</a></li>
                  <li><a href="../../products/aggregator.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/aggregator.png" alt="" />Aggregator Integration</a></li>
                  <li><a href="../../products/coupons.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/coupons-discounts.png" alt="" />Coupons & Discounts</a></li>
                  <li><a href="../../products/email-sms.html"
                      class="block px-4 py-3 hover:bg-[#D243211A] rounded-lg flex gap-3"><img
                        src="/assets/images/products/email-sms.png" alt="" />Email & SMS Marketing</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#"
                class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Pricing</a>
            </li>
            <li><a href="#"
                class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Solutions</a>
            </li>
            <li><a href="#"
                class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Partners</a>
            </li>
            <li><a href="#"
                class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Resources</a>
            </li>
            <li><a href="#"
                class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Company</a>
            </li>
            <li><a href="#"
                class="block py-2 px-3 rounded hover:bg-[#D243211A] hover:font-semibold hover:text-[#D24321]">Contact
                Us</a></li>
          </ul>
        </div>
      </div>
      <div class="bg-[#d3441ecc] p-6 max-sm:space-y-6">
        <div class="flex max-sm:flex-col items-center max-sm:space-y-2 text-white"><a href="tel:+1-678-368-4899"
            class="flex items-center"><img src="./assets/phoneLogo.png" alt="Phone" class="mr-2 hidden md:block" /><span
              class="mr-4">+1-678-368-4899</span></a><a href="mailto:sales@ordersune.com" class="flex items-center"><img
              src="./assets/mailLogo.png" alt="Mail" class="mr-2 hidden md:block" /><span
              class="mr-8">sales@ordersune.com</span></a></div>
        <div class="flex items-center space-x-4 justify-center max-sm:space-x-10"><a href="https://www.facebook.com"
            target="_blank"><img src="./assets/facebook.png" alt="Facebook" /></a><img src="./assets/twitter.png"
            alt="Twitter" /><img src="./assets/instagram.png" alt="Instagram" /><img src="./assets/linkedin.png"
            alt="LinkedIn" /></div>
      </div>
    </nav>
  </div>
  <div class="bg-[#DC694B] py-4 flex 2xl:justify-center items-center space-x-6 products-nav overflow-auto px-4 hidden"
    id="productsNav"><a href="../../products/pointofsale.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Point-of-Sale.png" alt="Point of Sale"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Point of Sale</div>
      </div>
    </a><a href="../../products/kds.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Kitchen.png" alt="Kitchen"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Kitchen </div>
      </div>
    </a><a href="../../products/digital-menu-boards.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Digital.png" alt="Digital"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Digital </div>
      </div>
    </a><a href="../../products/kiosk.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Kiosk.png" alt="Kiosk"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Kiosk </div>
      </div>
    </a><a href="../../products/order-tracking.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Order.png" alt="Order"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Order </div>
      </div>
    </a><a href="../../products/ecommerce.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Ecommerce.png" alt="Ecommerce"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Ecommerce </div>
      </div>
    </a><a href="../../products/call-center-ordering.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Call-Center.png" alt="Call Center"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Call Center </div>
      </div>
    </a><a href="../../products/social-media-ordering.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Social-Media.png" alt="Social Media"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Social Media </div>
      </div>
    </a><a href="#">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Reservations.png" alt="Reservations"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Reservations </div>
      </div>
    </a><a href="../../products/loyalty.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Loyalty.png" alt="Loyalty"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Loyalty </div>
      </div>
    </a><a href="../../products/payments.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Payments.png" alt="Payments"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Payments </div>
      </div>
    </a><a href="../../products/inventory.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Inventory.png" alt="Inventory"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Inventory </div>
      </div>
    </a><a href="../../products/ai-product.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Product.png" alt="Product"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Product </div>
      </div>
    </a><a href="../../products/tableside.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Tableside.png" alt="Tableside"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Tableside </div>
      </div>
    </a><a href="../../products/advanced-analytics.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Advanced.png" alt="Advanced"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Advanced </div>
      </div>
    </a><a href="../../products/aggregator.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Aggregator.png" alt="Aggregator"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Aggregator </div>
      </div>
    </a><a href="../../products/coupons.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/Coupons.png" alt="Coupons"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          Coupons </div>
      </div>
    </a><a href="../../products/email-sms.html">
      <div class="relative text-center flex flex-col items-center">
        <div><span class="w-fit rounded-full bg-white p-2.5 flex justify-center items-center"><img
              class="relative z-[1]" src="/assets/product-Icons/email.png" alt="email-sms"></span></div>
        <div
          class="text hidden top-6 left-1/2 transform bg-white px-4 py-1.5 rounded-lg min-w-[100px] whitespace-nowrap mt-[-23px] text-sm">
          email-sms</div>
      </div>
    </a></div>
</header>`;
  document.getElementById('header').outerHTML = headerHtml;
}
header();
window.onload = function () {
  let fullpath = window.location.pathname.split('.')[0];
  let path = fullpath.startsWith('/') && fullpath.split('/').pop();
  if (fullpath.includes('products')) {
    document.getElementById('productsNav').classList.remove('hidden')
  }
  if (path === 'index' || path === '') {
    document.getElementById('productsNav').classList.add('hidden')
  }
  // Select all anchor elements within the element with ID 'productsNav'
  document.querySelectorAll('#productsNav a').forEach(anchor => {
    // Add mouseover event listener to each anchor element
    anchor.addEventListener('mouseover', () => {
      // Find the element with class 'text' within the current anchor element
      const textElement = anchor.querySelector('.text');
      if (textElement) {
        // Toggle the 'hidden' class to show the element
        textElement.classList.remove('hidden');
      }
    });

    // Add mouseout event listener to each anchor element
    anchor.addEventListener('mouseout', () => {
      // Find the element with class 'text' within the current anchor element
      const textElement = anchor.querySelector('.text');
      if (textElement) {
        // Toggle the 'hidden' class to hide the element
        textElement.classList.add('hidden');
      }
    });
  });

  // to make current page active in navbar 
  console.log(fullpath);
  document.querySelectorAll('#navbar-default li a').forEach(function (e) {
    if (fullpath.includes('products')) {
      document.getElementById('dropdownHoverButton').parentNode.classList.add('bg-[#D243211A]', 'text-[#D24321]', 'font-semibold')
    }
    if (e.text.trim().toLowerCase() === fullpath.split('/').pop()) {
      if (e.text.trim().toLowerCase() === 'products') {
        e.parentNode.classList.add('bg-[#D243211A]', 'text-[#D24321]', 'font-semibold')
        e.classList.add('text-[#D24321]')
      }
      else
        e.classList.add('bg-[#D243211A]', 'text-[#D24321]', 'font-semibold')
    }
  })

}


function footer() {
  const footerHtml = `<div class="bg-[#F2732299] p-10 md:mx-24 max-sm:px-4 my-20"><div class="contact-form grid lg:grid-cols-2 md:gap-16 gap-8"><div class="demo-form bg-white rounded-xl p-5"><form action=""><big><big><span>Schedule a free demo</span></big></big><div class="name flex flex-wrap"><div class="w-full md:w-1/2 p-2"><label for="" class="block">Name*</label><input type="text" class="w-full p-2 border border-gray-300 rounded-lg"></div><div class="w-full md:w-1/2 p-2"><label for="" class="block">Restaurant Name*</label><input type="text" class="w-full p-2 border border-gray-300 rounded-lg"></div></div><div class="p-2"><label for="" class="block">Email address*</label><input type="email" name="" id="" class="w-full p-2 border border-gray-300 rounded-lg"></div><div class="p-2"><label for="" class="block">Phone number*</label><input type="number" name="" id="" class="w-full p-2 border border-gray-300 rounded-lg"></div><div class="name flex flex-wrap"><div class="w-full md:w-1/2 p-2"><label for="" class="block">City</label><input type="text" class="w-full p-2 border border-gray-300 rounded-lg"></div><div class="w-full md:w-1/2 p-2"><label for="" class="block">Country</label><input type="text" class="w-full p-2 border border-gray-300 rounded-lg"></div></div><div class="p-2"><input type="checkbox" name="" id="" class="mr-2"><p class="inline">By submitting this form, you acknowledge that your information will be processed according to ordersune’s privacy statement.</p></div><div class="submit-button p-2 text-center"><input type="submit" name="" id="" value="submit" class="bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-6 rounded-full cursor-pointer"></div></form></div><div class=" flex justify-center"><img src="/assets/images/schedule.png" alt="" class="w-full max-w-md"></div></div></div><footer class="bg-black text-white md:p-10 py-10"><img src="/assets/images/footerlogo.png" alt="Footer Logo" class="md:mx-12 mx-4"><div class="grid md:grid-cols-12 justify-between md:mx-9 mx-4 mt-8 max-sm:gap-6"><div class="col-span-4"><h3 class="text-xl font-bold mb-3">Products</h3><ul class="list-none p-0 text-[#E0E0E0] text-sm space-y-3"><li><a href="#">Point of Sale (POS)</a></li><li><a href="#">Kitchen Display Systems (KDS)</a></li><li><a href="#">Self Service Ordering (Kiosk)</a></li><li><a href="#">Online Ordering (Web & Mobile Apps)</a></li><li><a href="#">Social Media Ordering (Whatsapp, etc)</a></li><li><a href="#">Digital Menu Boards</a></li><li><a href="#">Bring Your Own Device (BYOD)</a></li><li><a href="#">Inventory Management</a></li><li><a href="#">Reservation Booking</a></li><li><a href="#">Order Tracking</a></li><li><a href="#">QR Ordering</a></li><li><a href="#">Loyalty Program</a></li><li><a href="#">Custom Design for your brand</a></li><li><a href="#">AI powered product recommendations</a></li><li><a href="#">Online Payments & Offline Payments</a></li><li><a href="#">User Management</a></li><li><a href="#">Multi-location Management</a></li></ul></div><div class="col-span-3"><h3 class="text-xl font-bold mb-3">POS System</h3><ul class="list-none p-0 text-sm space-y-3"><li><a href="#">POS Software</a></li><li><a href="#">Cloud POS</a></li><li><a href="#">Android POS</a></li><li><a href="#">iPad POS</a></li><li><a href="#">Tablet POS</a></li><li><a href="#">Web POS</a></li><li><a href="#">Mobile POS</a></li><li><a href="#">Cash Register software</a></li><li><a href="#">Aggregator integrations</a></li><li><a href="#">All-in-One POS Platform</a></li></ul></div><div class="col-span-3"><h3 class="text-xl font-bold mb-3">Business Types</h3><ul class="list-none p-0 text-sm space-y-3"><li><a href="#">Food & Beverage</a></li><li><a href="#">Quick Service Restaurants</a></li><li><a href="#">QSR Chains & Franchises</a></li><li><a href="#">Counter Service</a></li><li><a href="#">Full Service Restaurants</a></li><li><a href="#">Food Trucks</a></li><li><a href="#">Cafes & Coffee Shops</a></li><li><a href="#">Ice Cream & Dessert Shops</a></li><li><a href="#">Juice & Smoothy Bars</a></li><li><a href="#">Bakeries</a></li><li><a href="#">Snack Bars</a></li><li><a href="#">Pop up restaurants & events</a></li><li><a href="#">Bars & pubs</a></li><li><a href="#">Canteens or Cafeterias</a></li><li><a href="#">Concession Stands</a></li></ul></div><div class="col-span-2"><h3 class="text-xl font-bold mb-3">Resources</h3><ul class="list-none p-0 text-sm space-y-3"><li><a href="/pricing.html">Pricing</a></li><li><a href="#">Why OrderSune</a></li><li><a href="#">Sales</a></li><li><a href="#">Support</a></li><li><a href="#">Compare</a></li><li><a href="#">Blog</a></li><li><a href="#">Case Studies</a></li><li><a href="#">Testimonials</a></li></ul></div></div><div class="grid md:grid-cols-12 md:mx-9 mx-4 mt-8 max-sm:gap-6"><div class="col-span-4"><h3 class="text-xl font-bold mb-3">Partners</h3><ul class="list-none p-0 text-sm space-y-3"><li><a href="#">CartUp AI</a></li><li><a href="#">Integrations</a></li><li><a href="#">Payments</a></li><li><a href="#">Aggregators</a></li><li><a href="#">Become a partner</a></li></ul></div><div class="col-span-3"><h3 class="text-xl font-bold mb-3">Company</h3><ul class="list-none p-0 text-sm space-y-3"><li><a href="#">Contact us</a></li><li><a href="#">About us</a></li><li><a href="#">Partnership program</a></li><li><a href="#">Newsroom</a></li><li><a href="#">FAQs</a></li><li><a href="#">Terms of use</a></li><li><a href="#">Privacy Policy</a></li></ul></div><div class="col-span-4"><h3 class="text-xl font-bold">Talk to an expert</h3><form class="flex flex-col"><input type="email" placeholder="your email address" class="bg-black text-white p-3 my-2 border-2 border-white rounded-lg text-center"><p class="text-center">or</p><input type="text" placeholder="your phone number" class="bg-black text-white p-3 my-2 border-2 border-white rounded-lg text-center"><button type="submit" class="bg-green-500 text-white py-2 my-2 rounded-lg cursor-pointer">Let's Connect</button></form></div></div><br><br><hr class="border-gray-700"><div class="text-center mt-8"><div class="flex justify-center space-x-4 py-5"><a href="#"><img src="/assets/images/social/facebook.png" alt="Facebook"></a><a href="#"><img src="/assets/images/social/twitter.png" alt="Twitter"></a><a href="#"><img src="/assets/images/social/instagram.png" alt="Instagram"></a><a href="#"><img src="/assets/images/social/linkedin.png" alt="LinkedIn"></a></div><p class="text-lg font-bold">&copy; 2024 OrderSune LLC</p><p>All rights reserved. OrderSune name and its logo are registered trademarks of OrderSune Company. Unauthorized use is prohibited.</p><br><p>OrderSune specializes in providing advanced POS solutions for Quick Service Restaurants (QSR) and the Food & Beverage (F&B) industry. Our innovative technology ensures efficient services, streamlined operations, and enhanced customer experiences.</p><div class="flex justify-center items-center mt-4"><img src="/assets/images/icons/usa.png" alt="Flags" class="mr-2"><span>US (EN)</span></div></div></footer>`;
  document.getElementById('footer').outerHTML = footerHtml;
}
footer();

document.addEventListener('DOMContentLoaded', function () {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  var prevScrollpos = window.pageYOffset;
  if (window.innerWidth > 768) {
    window.onscroll = function () {

      var currentScrollpos = window.pageYOffset;
      if (prevScrollpos > currentScrollpos) {
        document.getElementsByTagName("header")[0].classList.add("top-0")
      } else {
        document.getElementsByTagName("header")[0].classList.add("top-[-40px]")
      }

      prevScrollpos = currentScrollpos;

    }
  }
});