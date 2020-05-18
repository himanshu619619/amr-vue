<template>
  <!-- Start Preloader Area -->

  <header class="header-area fixed-top">
    <div class="top-header-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="header-content-left">
              <p>Welcome To Qfix Experts, Theme for Repair Shop</p>
            </div>
          </div>

          <div class="col-lg-6">
            <ul class="header-content-right">
              <li>
                <a href="mailto:info@hello.com">
                  <i class="bx bx-envelope"></i>
                  Email: info@qfix.com
                </a>
              </li>

              <li>
                <a href="tel:+822456974">
                  <i class="bx bx-phone-call"></i>
                  Call Us For Inquiry: +822456974
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Navbar Area -->
    <div class="nav-area">
      <div class="navbar-area">
        <!-- Menu For Mobile Device -->
        <div class="mobile-nav">
          <a href="index.html" class="logo">
            <img src="assets/img/logo.png" alt="Logo" />
          </a>
        </div>

        <!-- Menu For Desktop Device -->
        <div class="main-nav">
          <nav class="navbar navbar-expand-md navbar-light">
            <div class="container">
              <a class="navbar-brand" href="index.html">
                <img src="assets/img/logo.png" alt="Logo" />
              </a>

              <div
                class="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav m-auto">
                  <li class="nav-item">
                    <a href="#" class="nav-link dropdown-toggle active">
                      Home
                      <i class="bx bx-plus"></i>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="about.html" class="nav-link">About</a>
                  </li>

                  <li class="nav-item">
                    <a
                      href="services-style-two.html"
                      class="nav-link dropdown-toggle"
                    >
                      Services
                      <i class="bx bx-plus"></i>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="contact.html" class="nav-link">Contact</a>
                  </li>
                </ul>
                <!-- Start Other Option -->
                <div class="others-option">
                  <div class="subscribe">
                    <a href="#subscribe">
                      Get A Quote
                    </a>
                  </div>

                  <div class="search-wrap">
                    <div class="other-option">
                      <div class="search-box-item">
                        <i class="search-btn bx bx-search"></i>
                        <i class="close-btn bx bx-x"></i>
                        <div class="search-overlay search-popup">
                          <div class="search-box">
                            <form class="search-form">
                              <input
                                class="search-input"
                                name="search"
                                placeholder="Search"
                                type="text"
                              />
                              <button class="search-button" type="submit">
                                <i class="bx bx-search"></i>
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  Props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped></style>
