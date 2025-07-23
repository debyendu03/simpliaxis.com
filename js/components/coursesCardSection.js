export function coursesCardSection() {
    const html = `
               <!-- course card section start -->
        <section class="w-100">
            <div style="width: 85%;" class="my-4 mx-auto mb-3">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  <!-- Card 1 -->
${card("asset/imgs/service_container_image_DevOps-Foundation_1723529947.jpg", "DevOps-Foundation", "24", "Jul", "2025", "DevOps Foundation<sup>®</sup> Certification Training", "Core DevOps Principles and practices", "16", "02", "3", "32,999", "65,998", "50")}

<!-- Card 2 -->
${card("asset/imgs/service_container_image_ITIL-4_1723530048.jpg", "ITIL-Foundation", "26", "Jul", "2025", "ITIL 4<sup>®</sup>Foundation Certification Training", "ITIL concepts, Process models, Service Lifecycle", "16", "02 or 04", "5", "45, 999", "91,998", "50")}

<!-- Card 3 -->
${card("asset/imgs/service_container_image_CSPOService_1723198738.jpg", "CSPO", "23", "Jul", "2025", "Certified Scrum Product Owner(CSPO<sup >®</sup >) Certification Training", "Product Backlog Management, Agile Prioritization", "16", "02", "69", "16,499", "32,998", "50")}
                  <!-- Card 4 -->
${card("asset/imgs/service_container_image_DevOps-Foundation_1723529947.jpg", "DevOps-Foundation", "24", "Jul", "2025", "DevOps Foundation<sup>®</sup> Certification Training", "Core DevOps Principles and practices", "16", "02", "3", "32,999", "65,998", "50")}

<!-- Card 5 -->
${card("asset/imgs/service_container_image_ITIL-4_1723530048.jpg", "ITIL-Foundation", "26", "Jul", "2025", "ITIL 4<sup>®</sup>Foundation Certification Training", "ITIL concepts, Process models, Service Lifecycle", "16", "02 or 04", "5", "45, 999", "91,998", "50")}

<!-- Card 6 -->
${card("asset/imgs/service_container_image_CSPOService_1723198738.jpg", "CSPO", "23", "Jul", "2025", "Certified Scrum Product Owner(CSPO<sup >®</sup >) Certification Training", "Product Backlog Management, Agile Prioritization", "16", "02", "69", "16,499", "32,998", "50")}

 
                 
                </div>
                <!-- view more courses section start -->
                <a href="#" class="text-black">
                    <p class="text-center text-decoration-underline mt-4">
                        View more courses
                        <i class="bi bi-arrow-down"></i>
                    </p>
                </a>
                <!-- view more courses section end -->
                <!-- explore courses section start -->
                <div class="text-center mt-5">
                    <button
                        style="background-color: #fa4a23; border-color: #fa4a23"
                        type="button"
                        class="btn btn-danger px-5 py-2 fw-bold text-white"
                    >
                        Explore All Courses
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
                <!-- explore courses section end -->
            </div>
        </section>
        <!-- course card section end -->
    `;
    function card(imgLink, imgAltText, startDate, month, year, courseName, courseDescription, time, days, enrollCount, discountedPrice, originalPrice, discountPercentage) {
        return `
                    <div class="col">
                        <a href="#" class="text-decoration-none" aria-label="DevOps Foundation Certification Training">
                            <div class="card h-100 border border-2 shadow bg-body-tertiary bg-white">
                                <img
                                    src="${imgLink}"
                                    class="card-img-top bg-white px-3 pt-3"
                                    alt="${imgAltText}"
                                />
                                <!-- start date and live classroom -->
                                <div class="bg-white w-100">
                                    <section class="mx-3 mt-2 d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <button type="button" class="btn btn-danger fs-7">
                                             starts ${startDate} ${month} ${year}
                                            </button>
                                            <small class="fw-bold text-body-secondary"
                                                ><span class="px-2">Live Classroom </span></small
                                            >
                                        </div>
                                        <small class="bg-body-secondary p-1 rounded-pill">
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <span class="fw-bold">5.0</span>
                                        </small>
                                    </section>
                                </div>
                                <!-- start date and live classroom end -->
                                <!-- course title and skill you'll gain -->
                                <div class="card-body bg-white">
                                    <h5 class="card-title mb-4 fw-bold">
                                    ${courseName}
                                    
                                    </h5>
                                    <p class="card-text">
                                        <span class="fw-semibold">Skill you'll gain:</span>${courseDescription}
                                    </p>
                                </div>
                                <!-- course title and skill you'll gain end -->

                                <!-- enrolled info start-->
                                <div class="border-rate pb-3 ps-3 bg-white enrolled-info">
                                    <div class="bg-white d-flex flex-column">
                                        <small class="text-body-secondary fw-semibold fs-7">
                                            <i class="bi bi-clock pe-2 text-success"></i>${time} Hrs | ${days} days
                                        </small>
                                        <small class="text-body-secondary fw-semibold fs-7">
                                            <i class="bi bi-people pe-2 text-success"></i>${enrollCount}K+ Enrolled
                                        </small>
                                    </div>
                                </div>
                                <!-- enrolled info end -->

                                <!-- price of the course section -->
                                <div class="bg-white px-3 pb-1 rounded-bottom">
                                    <div class="bg-white d-flex justify-content-between align-items-center border-top">
                                        <div class="bg-white">
                                            <small class="text-body-secondary fw-semibold">Start from</small>
                                            <p>
                                                <i class="bi bi-currency-rupee text-success"></i
                                                ><span class="fw-bold">${discountedPrice} </span>
                                                <small class="fw-semibold text-body-secondary">
                                                    <i class="bi bi-currency-rupee"></i
                                                    ><span class="text-decoration-line-through">${originalPrice}</span>
                                                    <span class="text-success fw-semibold">(${discountPercentage}% OFF)</span>
                                                </small>
                                            </p>
                                        </div>
                                        <input
                                            style="background-color: #01203d; border-color: #01203d"
                                            class="btn btn-primary px-4 fw-semibold"
                                            type="button"
                                            value="Enroll"
                                        />
                                    </div>
                                </div>
                                <!-- price of the course section end -->
                            </div>
                        </a>
                    </div>
                    `
    }
    return html;
}   