export function counsellingSection() {
    return `
       <!-- have more questions or require individualized guidance? start -->
            <div class="container-fluid mb-4 query-banner-bg rounded-0">
                <div style="width: 85%" class="px-5 d-flex align-items-center justify-content-between mx-auto">
                    <img src="asset/imgs/home-req-img.webp" alt="counselling img" width="210px" class="img-fluid" />

                    <div class="text-white text-center">
                        <small class="small fw-medium">STILL QUESTIONS? ANSWERS ARE HERE!</small>
                        <h6 class="fs-3 fw-bold mt-2">Now, schedule a free counselling session</h6>
                    </div>

                    <span class="d-flex align-items-center position-relative"
                        ><a href="#" class="btn query-btn-orange fw-bold fs-6 rounded-1 py-3 px-4"
                            >Request a call back</a
                        >
                        <li
                            class="bi bi-chevron-right list-unstyled text-white fw-bold position-absolute end-0 pe-2"
                        ></li>
                    </span>
                </div>
            </div>
                <!-- have more questions or require individualized guidance? end -->
    `;
}