import { navbar } from './components/navbar.js';
import { homeBanner } from './components/homeBanner.js';
import { partners } from './components/partners.js';
import { certificationCoursesNavbar } from './components/certificationCoursesNavbar.js';
import { coursesCardSection } from './components/coursesCardSection.js';
import { comboCourseBanners } from './components/comboCourseBanners.js';
import { freePracticeTestBanner } from './components/freePracticeTestBanner.js';
import { liveWebinarsBanner } from './components/LiveWebinarsBanner.js';
import { individualAndCorporateSection } from './components/individualAndCorporateSection.js';
import { trainerCardSection } from "./components/trainerCardSection.js"
import { growCareerFasterSection } from './components/growCareerFasterSection.js';
import { learnersReviewsSection } from './components/learnersReviewsSection.js';
import { ourClients } from './components/ourClients.js';
import { blogSection } from './components/blogSection.js';
import { counsellingSection } from "./components/counsellingSection.js";
import { footer } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-placeholder');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar();
    }

    const homeBannerContainer = document.getElementById('home-banner-placeholder');
    if (homeBannerContainer) {
        homeBannerContainer.innerHTML = homeBanner();
    }

    const partnersContainer = document.getElementById('partners-placeholder');
    if (partnersContainer) {
        partnersContainer.innerHTML = partners();
    }

    const certificationCoursesNavbarContainer = document.getElementById('certification-courses-nav-placeholder');
    if (certificationCoursesNavbarContainer) {
        certificationCoursesNavbarContainer.innerHTML = certificationCoursesNavbar();
    }

    const coursesCardSectionContainer = document.getElementById('courses-card-section-placeholder');
    if (coursesCardSectionContainer) {
        coursesCardSectionContainer.innerHTML = coursesCardSection();
    }

    const comboCourseBannersContainer = document.getElementById('combo-course-banners-placeholder');
    if (comboCourseBannersContainer) {
        comboCourseBannersContainer.innerHTML = comboCourseBanners();
    }

    const freePracticeTestBannerContainer = document.getElementById('free-practice-test-banner-section-placeholder');
    if (freePracticeTestBannerContainer) {
        freePracticeTestBannerContainer.innerHTML = freePracticeTestBanner();
    }

    const liveWebinarsBannerContainer = document.getElementById('live-webinars-banner-section-placeholder');
    if (liveWebinarsBannerContainer) {
        liveWebinarsBannerContainer.innerHTML = liveWebinarsBanner();
    }

    const individualAndCorporateSectionContainer = document.getElementById('individual-corporate-benefits-section-placeholder');
    if (individualAndCorporateSectionContainer) {
        individualAndCorporateSectionContainer.innerHTML = individualAndCorporateSection();
    }
    const trainerCardSectionContainer = document.getElementById('trainer-card-section-placeholder');
    if (trainerCardSectionContainer) {
        trainerCardSectionContainer.innerHTML = trainerCardSection();
    }
    const growCareerFasterSectionContainer = document.getElementById('grow-career-faster-section-placeholder');
    if (growCareerFasterSectionContainer) {
        growCareerFasterSectionContainer.innerHTML = growCareerFasterSection();
    }
    const learnersReviewsSectionContainer = document.getElementById('learners-reviews-section-placeholder');
    if (learnersReviewsSectionContainer) {
        learnersReviewsSectionContainer.innerHTML = learnersReviewsSection();
    }
    const ourClientsSectionContainer = document.getElementById('our-clients-section-placeholder');
    if (ourClientsSectionContainer) {
        ourClientsSectionContainer.innerHTML = ourClients();
    }

    const blogSectionContainer = document.getElementById('our-latest-blogs-section-placeholder');
    if (blogSectionContainer) {
        blogSectionContainer.innerHTML = blogSection();
    }
    const counsellingSectionContainer = document.getElementById("counselling-section-placeholder")
    if (counsellingSectionContainer) {
        counsellingSectionContainer.innerHTML = counsellingSection();
    }
    const footerContainer = document.getElementById('footer-placeholder');
    if (footerContainer) {
        footerContainer.innerHTML = footer();
    }
}); 