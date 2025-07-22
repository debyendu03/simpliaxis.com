export function liveWebinarsBanner() {
    return `
        <section id="live-webinars-banner-section" class="live-webinars-banner-section mb-5">
            <div class="container-fluid px-0 mx-auto" style="width: 85%">
                <div class="rounded-3 overflow-hidden d-flex align-items-center live-webinars-banner-bg">
                    <div class="mx-auto">
                        <img
                            src="asset/imgs/webhome1.webp"
                            alt="Live Webinars Banner Person"
                            class="img-fluid live-webinars-banner-person"
                            style="max-width: 250px"
                        />
                    </div>
                    <div class="col-md-8 py-3 px-4">
                        <p class="fw-bold fs-4 text-dark mb-2">
                            Exclusive Live Webinars- <span class="text-danger">No Cost, Just Learnings!</span>
                        </p>
                        <div class="d-flex mb-3">
                            <div class="me-5">
                                <div class="mb-2  fw-semibold">
                                    <i class="bi bi-patch-check-fill text-success me-1 fs-7"></i> LIVE EXPERT SESSIONS
                                </div>
                                <div class="mb-2 fw-semibold">
                                        <i class="bi bi-patch-check-fill text-success me-1 fs-7"></i> 100% INTERACTIVE
                                </div>
                            </div>
                            <div class="ms-5">
                                <div class="mb-2 fw-semibold">
                                    <i class="bi bi-patch-check-fill text-success me-1 fs-7"></i> ABSOLUTELY FREE
                                </div>
                                <div class="mb-2 fw-semibold">
                                    <i class="bi bi-patch-check-fill text-success me-1 fs-7"></i> REAL-WORLD INSIGHTS
                                </div>
                            </div>
                        </div>
                        <a
                            style="background: #0d223f"
                            href="#"
                            class="btn custom-btn-color px-4 py-3 fw-bold fs-7 rounded-1 text-white"
                            >Register Now <i class="bi bi-chevron-right ms-1 fs-7 fw-bold"></i
                        ></a>
                    </div>
                </div>
            </div>
        </section>
    `;
}