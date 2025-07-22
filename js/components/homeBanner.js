export function homeBanner() {
  return `
    <section
      style="background-color: #f0f9ff"
      class="home-banner-sec w-100 justify-content-center d-flex pb-5 rounded-5 rounded-top-0"
    >
      <div class="d-flex justify-content-center mt-4 mb-4" style="width: 87vw">
        <div class="home-ban-title-sec w-50">
          <!-- home banner text section -->
          <div class="home-ban-title-sec-text">
            <div class="card border border-0" style="background-color: #f0f9ff">
              <div class="card-body">
                <h5 class="card-title fw-bold fs-2 border-primary">
                  Enhance skills with our specialists - anytime, anywhere
                </h5>
                <p style="color: #4f6882; background-color: #f0f9ff" class="card-text mt-3 mb-4">
                  Prepare to take the next step in your career with the leading training provider
                  globally. Begin your immersive learning journey with us.
                </p>
                <a href="#" class="btn rounded-1 fw-bold py-2 px-4 button">Explore Courses</a>
              </div>
            </div>
          </div>
          <!-- slider section -->
          <div class="home-ban-title-sec-slide ">
            <section class="trusted-by-section">
              <h6 class="mb-4">Trusted by</h6>
              <div class="marquee me-5 mb-3">
                <div class="marquee-content w-50">
                           <img src="asset/logos/cplog4.webp" alt="Infosys" height="42" class="p-1" />
                            <img src="asset/logos/cplog6.webp" alt="Bosch" height="37" class="p-1" />
                            <img src="asset/logos/cplog3.webp" alt="Capgemini" height="40" class="p-1" />
                            <img src="asset/logos/cplog1.webp" alt="KPMG" height="45" class="p-1" />
                            <img src="asset/logos/cplog2.webp" alt="Accenture" height="40" class="p-1" />
                            <img src="asset/logos/cplog5.webp" alt="Cognizant" height="32" class="p-1" />
                            <img src="asset/logos/cplog8.webp" alt="Deloitte" height="32" class="p-1" />
                            <img src="asset/logos/cplog9.webp" alt="Hexaware" height="60" class="p-1" />
                            <img src="asset/logos/cplog10.webp" alt="Thomson Reuters" height="75" class="p-1" />
                            <img src="asset/logos/cplog12.webp" alt="Wells Fargo" height="65" class="p-1" />
                                     <img src="asset/logos/cplog4.webp" alt="Infosys" height="42" class="p-1" />
                            <img src="asset/logos/cplog6.webp" alt="Bosch" height="37" class="p-1" />
                            <img src="asset/logos/cplog3.webp" alt="Capgemini" height="40" class="p-1" />
                            <img src="asset/logos/cplog1.webp" alt="KPMG" height="45" class="p-1" />
                            <img src="asset/logos/cplog2.webp" alt="Accenture" height="40" class="p-1" />
                          <img src="asset/logos/cplog5.webp" alt="Cognizant" height="32" class="p-1" />
                         
                     
                </div>
              </div>
              <p style="display: inline" class="subtitle">and 6,000+ companies across the globe</p>
            </section>
          </div>
          <!-- Rated by Learners -->
          <div>
            <section>
              <div class="card mx-3 border border-0" style="max-width: 420px; background-color: #f0f9ff">
                <div class="row g-0">
                  <div class="col-md-4 d-flex align-items-center">
                    <img
                      src="asset/imgs/enrollers.png"
                      class="img-fluid rounded-start"
                      alt="enrollers img"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <small class="text-body-secondary">Rated by Learners</small>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          <i class="bi bi-star-fill text-warning me-1"></i>
                          <span style="color: black" class="fw-bold">4.9/5 </span
                          ><span> •10,000+ Reviews</span></small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <!-- home banner video side -->
        <div class="home-ban-vdo-container w-50 p-4">
          <div class="position-relative">
            <img
              class="position-absolute top-0 end-0 z-0 pt-1"
              src="asset/imgs/homban-dots.webp"
              width="160"
              height="155"
              alt=""
            />
          </div>
          <div class="home-ban-vdo position-relative">
            <img
              class="img-fluid rounded-4 position-absolute top-0 end-0 me-4 mt-5 border border-white"
              width="450"
              height="280"
              src="asset/imgs/first_banner_video_thumbnail_Homepage_1730890442.webp"
              alt="home banner video's thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  `;
} 