export function counsellingSection() {
    return `
      <!-- have more questions or require individualized guidance? start -->
<div class="container-fluid mb-4 query-banner-bg rounded-0">
    <div
        class="counselling-wrapper counselling-content px-3 px-md-4 px-lg-5 d-flex align-items-center justify-content-between mx-auto"
    >
        <img src="asset/imgs/home-req-img.webp" alt="Counselling session illustration" class="counselling-img img-fluid" />

        <div class="counselling-text text-white text-center flex-grow-1 mx-lg-4">
            <small class="small fw-medium d-block">STILL QUESTIONS? ANSWERS ARE HERE!</small>
            <h6 class="fw-bold mt-2">Now, schedule a free counselling session</h6>
        </div>

        <span class="d-flex align-items-center justify-content-center">
            <button type="button" class="btn query-btn-orange fw-bold fs-6 rounded-1 py-2 py-md-3 px-3 px-md-4">
                Request a call back
                <i class="bi bi-chevron-right ms-2"></i>
            </button>
        </span>
    </div>
</div>
<!-- have more questions or require individualized guidance? end -->

    `;
}