class PortfolioApp {
    constructor() {
        this.initSmoothScroll();
        this.initHeaderScroll();
        this.initTechBadges();
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initHeaderScroll() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            header.style.background = window.scrollY > 100 
                ? 'rgba(255, 255, 255, 0.98)' 
                : 'rgba(255, 255, 255, 0.95)';
        });
    }

    initTechBadges() {
        document.querySelectorAll('.tech-badge').forEach((badge, index) => {
            badge.style.animationDelay = `${index * 0.5}s`;
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});