export function certificationCoursesNavbar() {
  const html = `
<!-- Professional Certification & Training Courses Section -->
<div class="mt-5 pt-3">
    <div class="card text-center border-0">
        <div class="card-body">
            <p class="card-text fs-7 fw-medium text-secondary-emphasis">CHOOSE THE BETTER COURSE FOR YOUR CAREER</p>
            <h5 class="card-title fs-2 fw-semibold">Professional Certification & Training Courses</h5>
        </div>
    </div>
</div>

<!-- Courses Navbar Section -->
<div class="d-flex justify-content-center">
    <nav class="navbar bg-white w-100">
        <div class="course-navbar container-fluid border border-success rounded-3 py-2 px-3 mx-auto">
            <div class="navbar-scroll-container w-100">
                <ul class="navbar-nav d-flex flex-row coursesNavbar fw-semibold">
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="#">All Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="#">AGILE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="#">SAFe</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="#">PROJECT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="#">BUSINESS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="#">DEVOPS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="#">SERVICE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="#">QUALITY</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

  `;

  setTimeout(() => {
    const ul = document.querySelector(".coursesNavbar");
    if (!ul) return;
    const liItems = ul.querySelectorAll("li");
    liItems.forEach((li) => {
      li.addEventListener("click", () => {
        liItems.forEach((item) => item.classList.remove("custom-active"));
        li.classList.add("custom-active");
      });
    });
  }, 0);

  return html;
}
