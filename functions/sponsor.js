
        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = navLinks.contains(event.target) || hamburger.contains(event.target);
                if (!isClickInsideNav && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
            
            // FAQ accordion functionality
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
            
            // Load More functionality
            const childrenGrid = document.getElementById('childrenGrid');
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            let visibleChildren = 3; // Start with 3 children visible
            
            // Function to render children
            function renderChildren(startIndex, count) {
                for (let i = startIndex; i < startIndex + count && i < childrenData.length; i++) {
                    const child = childrenData[i];
                    const childCard = document.createElement('div');
                    childCard.className = 'child-card';
                    childCard.innerHTML = `
                        <div class="child-image" style="background-image: url('${child.image}');">
                            <div class="child-info">
                                <h3>${child.name}</h3>
                                <p>${child.age}, ${child.country}</p>
                            </div>
                        </div>
                        <div class="child-details">
                            <div class="child-stats">
                                <div class="child-stat">
                                    <span class="value">${child.grade}</span>
                                    <span class="label">Education</span>
                                </div>
                                <div class="child-stat">
                                    <span class="value">${child.siblings}</span>
                                    <span class="label">Siblings</span>
                                </div>
                                <div class="child-stat">
                                    <span class="value">${child.interests}</span>
                                    <span class="label">Interests</span>
                                </div>
                            </div>
                            <p>${child.description}</p>
                            <a href="#" class="btn">Sponsor ${child.name.split(' ')[0]}</a>
                        </div>
                    `;
                    childrenGrid.appendChild(childCard);
                    
                    // Add animation after a short delay
                    setTimeout(() => {
                        childCard.classList.add('visible');
                    }, 100 * (i % 3));
                }
            }
            
            // Initial render
            renderChildren(0, 3);
            
            // Load more button event
            loadMoreBtn.addEventListener('click', function() {
                renderChildren(visibleChildren, 3);
                visibleChildren += 3;
                
                // Hide button if all children are visible
                if (visibleChildren >= childrenData.length) {
                    loadMoreBtn.style.display = 'none';
                }
            });
            
            // Scroll animations
            const sponsorshipCards = document.querySelectorAll('.sponsorship-card');
            const processSteps = document.querySelectorAll('.process-step');
            const backToTop = document.querySelector('.back-to-top');
            
            // Check if element is in viewport
            function isInViewport(element, offset = 100) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset
                );
            }
            
            // Add scroll classes when element is in viewport
            function checkScroll() {
                // Sponsorship cards
                sponsorshipCards.forEach((card, index) => {
                    if (isInViewport(card, 150)) {
                        setTimeout(() => {
                            card.classList.add('pop-in');
                        }, index * 200);
                    }
                });
                
                // Process steps
                processSteps.forEach((step, index) => {
                    if (isInViewport(step, 150)) {
                        setTimeout(() => {
                            step.classList.add('visible');
                        }, index * 200);
                    }
                });
                
                // Child cards
                const childCards = document.querySelectorAll('.child-card');
                childCards.forEach((card, index) => {
                    if (isInViewport(card, 150)) {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 100);
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