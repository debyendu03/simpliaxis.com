export function navbar() {
  return `
    <nav class="navbar navbar-expand-lg shadow-sm navbar-custom">
      <div class="container-fluid py-1 navbar-custom-container">
        <!-- Logo -->
        <img class="navbar-custom-img" src="asset/imgs/SimpliaxisLogo.webp" alt="" />
        <!-- Mobile Toggle Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Navbar Content -->
        <div class="collapse navbar-collapse" id="mainNavbar">
          <!-- Left: All Courses Dropdown -->
          <ul class="navbar-nav border rounded-2 mx-3 me-3">
            <li class="nav-item dropdown navbar-custom-dropdown">
              <a
                class="nav-link dropdown-toggle px-2 fw-semibold"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                ><i class="bi bi-list"></i> All Courses</a
              >
              <ul class="dropdown-menu navbar-custom-dropdown-list" aria-labelledby="coursesDropdown">
                <li><a class="dropdown-item" href="#">Course 1</a></li>
                <li><a class="dropdown-item" href="#">Course 2</a></li>
              </ul>
            </li>
          </ul>
          <!-- Center: Search Bar -->
          <form class="d-flex mx-auto my-2 my-lg-0 w-25 navbar-custom-search-sec">
            <span class=" " id="basic-addon1"><li class="search-img bi bi-search list-unstyled px-0 py-1 m-0"></li></span>
            <input
              type="text"
              class="border border-secondary-subtle px-2 w-100"
              placeholder="What you want to learn today?"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </form>
          <!-- Right: Links & Icons -->
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#"
                >Combo Courses <sup class="badge fw-normal bg-secondary p-1 rounded-5">New</sup></a
              >
            </li>
            <li class="nav-item dropdown navbar-custom-dropdown">
              <a
                class="nav-link fw-semibold dropdown-toggle"
                href="#"
                id="elearningDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                E-learning
              </a>
              <ul class="dropdown-menu navbar-custom-dropdown-list" aria-labelledby="elearningDropdown">
                <li><a class="dropdown-item" href="#">Option A</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown navbar-custom-dropdown">
              <a
                class="nav-link fw-semibold dropdown-toggle"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul class="dropdown-menu navbar-custom-dropdown-list" aria-labelledby="resourcesDropdown">
                <li><a class="dropdown-item" href="#">Blog</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#">Corporate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold icon" href="#"><i class="bi bi-telephone-fill"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold text-decoration-underline" href="#">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link icon" href="#"><i class="bi bi-cart"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
} 