export function footer() {
    const html = `
    <!-- first row start -->
    <div class="container-fluid px-2 px-md-0" style="width: 100%">
        <div class="row mx-auto py-3 flex-column flex-md-row">
            <div class="col-12 col-md-6 mb-4 mb-md-0">
                <!-- Company -->
                <div class="footer-group mb-3">
                    <button class="footer-toggle d-md-none w-100 text-start fw-bold mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#footer-company-list" aria-expanded="false" aria-controls="footer-company-list">Company <span class="float-end bi bi-chevron-down"></span></button>
                    <p class="fw-bold mb-2 d-none d-md-block">Company</p>
                    <ul class="list-unstyled collapse d-md-block" id="footer-company-list">
                        <li><a href="#" class="text-secondary text-decoration-none">About us</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Accreditation</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Careers</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Customer Speak</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Contact us</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Grievance Redressal</a></li>
                    </ul>
                </div>
                <!-- Offerings -->
                <div class="footer-group mb-3">
                    <button class="footer-toggle d-md-none w-100 text-start fw-bold mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#footer-offerings-list" aria-expanded="false" aria-controls="footer-offerings-list">Offerings <span class="float-end bi bi-chevron-down"></span></button>
                    <p class="fw-bold mb-2 d-none d-md-block">Offerings</p>
                    <ul class="list-unstyled collapse d-md-block" id="footer-offerings-list">
                        <li><a href="#" class="text-secondary text-decoration-none">Live virtual (Online)</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Classroom (In-Person)</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Agile services</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Refer and earn</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Blog as a guest</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Corporate training</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Training Schedule</a></li>
                    </ul>
                </div>
                <!-- Resources -->
                <div class="footer-group mb-3">
                    <button class="footer-toggle d-md-none w-100 text-start fw-bold mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#footer-resources-list" aria-expanded="false" aria-controls="footer-resources-list">Resources <span class="float-end bi bi-chevron-down"></span></button>
                    <p class="fw-bold mb-2 d-none d-md-block">Resources</p>
                    <ul class="list-unstyled collapse d-md-block" id="footer-resources-list">
                        <li><a href="#" class="text-secondary text-decoration-none">Blogs</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Webinars</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Trainers</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Course info</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Combo Courses</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Practice Tests</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Learning Path</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">E-Learning</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Quiz</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Questions</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <!-- Newsletter, Connect, Payment -->
                <div class="mb-4">
                    <p class="fw-bold mb-2">Get Our Weekly Newsletter :</p>
                    <form class="d-flex flex-column flex-sm-row mb-3 gap-2" role="search w-100 ">
                        <input class="form-control me-2" type="email" placeholder="Email*" aria-label="Email" style="border: 1px solid #000" />
                        <button class="btn btn-dark fw-bold px-3 d-flex align-items-center justify-content-center" type="submit">
                            Subscribe <i class="bi bi-chevron-right ms-2"></i>
                        </button>
                    </form>
                    <div class="mb-3">
                        <span class="fw-bold pe-2">Connect with us :</span>
                        <div class="mt-2 d-flex flex-wrap gap-2">
                            <a href="#" class="me-2"><i class="bi bi-linkedin fs-4"></i></a>
                            <a href="#" class="me-2"><i class="bi bi-facebook fs-4"></i></a>
                            <a href="#" class="me-2"><i class="bi bi-instagram fs-4"></i></a>
                            <a href="#" class="me-2"><i class="bi bi-twitter fs-4"></i></a>
                        </div>
                    </div>
                    <div class="mb-3">
                        <span class="fw-bold">We Accept</span>
                        <div class="mt-2 d-flex flex-wrap gap-2">
                            <img src="asset/logos/payment-logos/paypal.webp" alt="PayPal" height="18" />
                            <img src="asset/logos/payment-logos/razorpayfooter.webp" alt="Razorpay" height="18" />
                            <img src="asset/logos/payment-logos/stripe.webp" alt="Stripe" height="18" />
                            <img src="asset/logos/payment-logos/splitfooter.webp" alt="Splitit" height="18" />
                            <img src="asset/logos/payment-logos/americal-express.webp" alt="American Express" height="18" />
                            <img src="asset/logos/payment-logos/mastercard.webp" alt="Mastercard" height="18" />
                            <img src="asset/logos/payment-logos/afterpay.webp" alt="Afterpay" height="18" />
                            <img src="asset/logos/payment-logos/visa.webp" alt="Visa" height="18" />
                            <img src="asset/logos/payment-logos/klarnafooter.webp" alt="Klarna" height="18" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- first row end -->
    <!-- second row start -->
    <div class="container-fluid pb-2" style="width: 100%">
        <div class="row mx-auto flex-column flex-md-row align-items-start justify-content-between">
            <div class="col-12 col-md-6 mb-4 mb-md-0">
                <!-- Partner with us -->
                <div class="footer-group mb-3">
                    <button class="footer-toggle d-md-none w-100 text-start fw-bold mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#footer-partner-list" aria-expanded="false" aria-controls="footer-partner-list">Partner with us <span class="float-end bi bi-chevron-down"></span></button>
                    <p class="fw-bold mb-2 d-none d-md-block">Partner with us</p>
                    <ul class="list-unstyled collapse d-md-block" id="footer-partner-list">
                        <li><a href="#" class="text-secondary text-decoration-none">Become an Instructor</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Hire from Us</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Become a Training Partner</a></li>
                    </ul>
                </div>
                <!-- Support -->
                <div class="footer-group mb-3">
                    <button class="footer-toggle d-md-none w-100 text-start fw-bold mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#footer-support-list" aria-expanded="false" aria-controls="footer-support-list">Support <span class="float-end bi bi-chevron-down"></span></button>
                    <p class="fw-bold mb-2 d-none d-md-block">Support</p>
                    <ul class="list-unstyled collapse d-md-block" id="footer-support-list">
                        <li><a href="#" class="text-secondary text-decoration-none">FAQ</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Terms and conditions</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Privacy policy</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Cancellation and refund</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none">Html Sitemap</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <!-- Contact Card -->
                <div class="p-4 rounded-3 shadow mb-4 border border-2 bg-body-tertiary rounded-4 bg-white">
                    <div class="row g-4">
                        <div class="col-6 col-sm-4">
                            <div class="d-flex align-items-center">
                                <img src="https://flagcdn.com/us.svg" width="28" class="me-2" alt="USA flag" />
                                <small class="fw-bold text-dark small">USA</small>
                            </div>
                            <span class="text-secondary small">+1-361-998-9988</span>
                        </div>
                        <div class="col-6 col-sm-4">
                            <div class="d-flex align-items-center">
                                <img src="https://flagcdn.com/ca.svg" width="28" class="me-2" alt="Canada flag" />
                                <small class="fw-bold text-dark small">Canada</small>
                            </div>
                            <span class="text-secondary small">+1-249-500-3143</span>
                        </div>
                        <div class="col-6 col-sm-4">
                            <div class="d-flex align-items-center">
                                <img src="https://flagcdn.com/in.svg" width="28" class="me-2" alt="India flag" />
                                <small class="fw-bold text-dark small">India</small>
                            </div>
                            <span class="text-secondary small">+91 9036554933</span>
                        </div>
                        <div class="col-6 col-sm-4">
                            <div class="d-flex align-items-center">
                                <img src="https://flagcdn.com/gb.svg" width="28" class="me-2" alt="UK flag" />
                                <small class="fw-bold text-dark small">UK</small>
                            </div>
                            <span class="text-secondary small">+44-1414890048</span>
                        </div>
                        <div class="col-6 col-sm-4">
                            <div class="d-flex align-items-center">
                                <img src="https://flagcdn.com/au.svg" width="28" class="me-2" alt="Australia flag" />
                                <small class="fw-bold text-dark small">Australia</small>
                            </div>
                            <span class="text-secondary small">+61-272025160</span>
                        </div>
                        <div class="col-6 col-sm-4">
                            <div class="d-flex align-items-center">
                                <img src="https://flagcdn.com/sg.svg" width="28" class="me-2" alt="Singapore flag" />
                                <small class="fw-bold text-dark small">Singapore</small>
                            </div>
                            <span class="text-secondary small">+65 31592313</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mt-4" />
    </div>
    <!-- second row end -->
    <!-- third row start -->
    <div class="container-fluid" style="width: 100%">
        <div class="row mb-5">
            <p class="fw-bold mb-3">Top Categories</p>
            <div class="d-flex flex-wrap align-items-center">
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">AGILE </small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">SAFe</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">PROJECT</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >BUSINESS</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >Generative AI</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >Microcredentials</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">DEVOPS</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">SERVICE</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">QUALITY</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >CLOUD COMPUTING</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >DATA SCIENCE</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >TECHNOLOGY</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">OTHERS</small>
                </a>
            </div>
        </div>
    </div>
    <!-- third row end -->
    <!-- fourth row start -->
    <div class="container-fluid" style="width: 100%">
        <div class="row mb-5">
            <p class="fw-bold mb-3">Top Courses</p>
            <div class="d-flex flex-wrap align-items-center">
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CSM</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CSPO</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">A-CSM</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">A-CSPO</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CAL 1</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CSD</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">PMP</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >Leading SAFe®</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >SAFe POPM</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">SSM</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">SPC</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >SAFe RTE</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">LPM</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >ITIL 4 Foundation</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >PRINCE2®</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">F&P</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >PRINCE2® Foundation</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >PRINCE2® Practitioner</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >SAFe® DevOps</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >SAFe APM</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CAPM</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">PgMP</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CSP-SM</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">JIRA</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">PSM I</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CBAP®</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">ECBA</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary pe-3 me-3">DevOps</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3"
                        >Foundation</small
                    >
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CAF</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CASP 1</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CCBA®</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">PMT</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">A-CSD</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">SSGB</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">CM</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">PSPO</small>
                </a>
                <a href="#" class="text-decoration-none">
                    <small class="text-secondary border-end border-1 border-secondary pe-3 me-3">PSD</small>
                </a>
            </div>
        </div>
    </div>
    <!-- fourth row end -->
    <!-- fifth row start -->
    <div class="container-fluid">
        <div class="row mb-5">
            <div class="text-secondary text-center small mb-4">
                Disclaimer : Certified Scrum Master(CSM®),Advanced Certified Scrum Master(A-CSM®), Certified Scrum Professional ScrumMaster(CSP-SM®), Certified Scrum Product Owner (CSPO®), Advanced Certified Scrum Product Owner (A-CSPO®), Certified Scrum Professional Product Owner(CSP-PO®), Certified Scrum Developer (CSD®), Certified Scrum Professional(CSP®), Certified Agile Leadership(CAL-I®,CAL-II®), Scrum Education Units(SEU®),Certified Scrum Trainer (CST®),Certified Enterprise Coach(CEC®), and Certified Team Coach(CTC®), are registered trademarks of Scrum Alliance®.
                <p class="footer-custom-disclaimer-text d-none" id="footer-custom-disclaimer-text">
                    Profession Scrum Master (PSM-I®, PSM-II®, PSM-III®), Profession Scrum Product Owner (PSPO-I®, PSPO-II®, PSPO-III®), Profession Scrum Developer (PSD-I®), Scaled Professional Scrum(SPS®),Professional Scrum With Kanban(PSK-I®) , Prove your knowledge of Professional Agile Leadership(PAL-I®), Prove your knowledge of Evidence-Based Management™ (PAL-EBM®), Prove Your Scrum with User Experience Knowledge(PSU-I®) and Professional Scrum Trainer(PST®) are registered trademarks of Scrum.org®. SimpliAxis INC is a Professional Training Network member of Scrum.org®.
                    <br />
                    <br />
                    Certified Business Analysis Professional (CBAP®), Certification of Capability in Business Analysis(CCBA®), Entry Certificate in Business Analysis(ECBA®), Agile Analysis Certification(AAC®), Certification in Business Data Analytics(CBDA®), Certificate in Cybersecurity Analysis(CCA®), Certificate in Product Ownership Analysis(CPOA®) are registered trademarks of International Institute of Business Analysis(IIBA®). SimpliAxis INC is an Premier Level Endorsed Education Provider of IIBA®.
                    <br />
                    <br />
                    SAFe Agilist Certification (SA®), SAFe Program Consultant Certification (SPC®),SAFe Program Consultant Trainer Certification (SPCT®),SAFe Practitioner Certification(SP®),SAFe Release Train Engineer Certification (RTE®),SAFe Scrum Master Certification (SSM®),SAFe Advanced Scrum Master Certification (SASM®),SAFe DevOps Practitioner Certification(SDP®),Agile Product Manager Certification (APM®),Lean Portfolio Manager Certification (LPM®),Product Owner / Product Manager Certification (POPM®),SAFe Architect Certification (ARCH®),Agile Software Engineer Certification (ASE®) and SAFe Government Practitioner Certification (SGP®), Scaled Agile Framework® and SAFe® are registered trademarks of Scaled Agile, Inc.®. SimpliAxis INC is a Silver Partner of Scaled Agile, Inc®.
                    <br />
                    <br />
                    DevOps Foundation®, DevOps Leader®, SRE Foundation℠, SRE Practitioner℠, DevSecOps Foundation℠, Continuous Testing Foundation℠, Certified Agile Service Manager®, Continuous Delivery Ecosystem Foundation℠ and Value Stream Management Foundation® are registered trademarks of DevOps Institute. SimpliAxis INC is a Registered Education Partner (REP) of the DevOps Institute (DOI) ®.
                    <br />
                    <br />
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
            </div>
            <div class="d-flex justify-content-center small">
                <span id="footer-custom-disclaimer-read-more-text" class="text-secondary text-decoration-underline cursor-pointer">READ MORE</span>
            </div>
        </div>
    </div>
    <!-- fifth row end -->
    <!-- sixth row start -->
    <div class="container-fluid">
        <hr class="mt-3" />
        <div class="row">
            <p class="text-center text-secondary py-2">
                <a href="#" class="fw-bold text-secondary">Our privacy policy </a> © 2018-2025, Simpliaxis Solutions Private Limited. All Rights Reserved
            </p>
        </div>
    </div>
    <!-- sixth row end -->
    <!-- seventh row start -->
    <div class="container-fluid">
        <div class="row">
            <div id="sticky-contact-bar" class="sticky-contact-bar d-flex align-items-center justify-content-center text-white">
                <div class="container-fluid p-0">
                    <div class="row g-0">
                        <div class="col-12 col-md-8 d-flex">
                            <div class="flex-fill d-flex align-items-center justify-content-center sticky-bar-left">
                                <i class="bi bi-telephone me-2"></i> Request a call back
                            </div>
                            <div class="flex-fill d-flex align-items-center justify-content-center sticky-bar-left">
                                <i class="bi bi-headset me-2"></i> Quick Enquiry
                            </div>
                        </div>
                        <div class="col-12 col-md-4 d-flex align-items-center justify-content-center sticky-bar-right">
                            <i class="bi bi-envelope me-2"></i> hello@simpliaxis.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- seventh row end -->
   
    `;

    setTimeout(() => {
        const readMore = document.getElementById("footer-custom-disclaimer-read-more-text");
        if (readMore) {
            readMore.addEventListener("click", () => {
                const disclaimer = document.getElementById("footer-custom-disclaimer-text");
                if (readMore.innerText === "READ MORE") {
                    disclaimer.classList.remove("d-none");
                    readMore.innerText = "READ LESS";
                } else {
                    disclaimer.classList.add("d-none");
                    readMore.innerText = "READ MORE";
                }
            });
        }
    }, 0);

    setTimeout(() => {
        function handleFooterCollapse() {
            const isDesktop = window.innerWidth >= 768;
            document.querySelectorAll('.footer-group ul').forEach(ul => {
                if (isDesktop) {
                    ul.classList.add('show');
                } else {
                    ul.classList.remove('show');
                }
            });
        }
        window.addEventListener('resize', handleFooterCollapse);
        window.addEventListener('DOMContentLoaded', handleFooterCollapse);
    }, 0);

    return html;
} 