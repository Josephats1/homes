      // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Scroll animations
            const sections = document.querySelectorAll('.section');
            const programCards = document.querySelectorAll('.program-card');
            const impactItems = document.querySelectorAll('.impact-item');
            const donationOptions = document.querySelectorAll('.donation-option');
            const storyCards = document.querySelectorAll('.story-card');
            const backToTop = document.querySelector('.back-to-top');
            
            // Check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            // Add visible class when element is in viewport
            function checkScroll() {
                // Sections
                sections.forEach(section => {
                    if (isInViewport(section)) {
                        section.classList.add('visible');
                    }
                });
                
                // Program cards
                programCards.forEach((card, index) => {
                    if (isInViewport(card)) {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 400);
                    }
                });
                
                // Impact items
                impactItems.forEach((item, index) => {
                    if (isInViewport(item)) {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200);
                    }
                });
                
                // Donation options
                donationOptions.forEach((option, index) => {
                    if (isInViewport(option)) {
                        setTimeout(() => {
                            option.classList.add('visible');
                        }, index * 200);
                    }
                });
                
                // Story cards
                storyCards.forEach((card, index) => {
                    if (isInViewport(card)) {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    }
                });
                
                // Back to top button
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }
            
            // Initial check on page load
            checkScroll();
            
            // Check on scroll
            window.addEventListener('scroll', checkScroll);
            
            // Back to top functionality
            backToTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });