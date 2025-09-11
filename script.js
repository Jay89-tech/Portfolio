// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
function updateActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Call function on page load
updateActiveNavLink();

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize skill bars animation if on page with skills
if (document.querySelector('.skills')) {
    animateSkillBars();
}

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Certificate modal functionality
function openCertificateModal(imageSrc, title, description) {
    // Create modal if it doesn't exist
    let modal = document.querySelector('.certificate-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'certificate-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="" alt="Certificate" class="modal-image">
                <div class="modal-info">
                    <h3 class="modal-title"></h3>
                    <p class="modal-description"></p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .certificate-modal {
                display: none;
                position: fixed;
                z-index: 2000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
            }
            
            .modal-content {
                position: relative;
                background-color: #222;
                margin: 5% auto;
                padding: 20px;
                width: 90%;
                max-width: 800px;
                border-radius: 10px;
                border: 1px solid #ff6b35;
            }
            
            .close-modal {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
            }
            
            .close-modal:hover {
                color: #ff6b35;
            }
            
            .modal-image {
                width: 100%;
                max-height: 400px;
                object-fit: contain;
                margin-bottom: 1rem;
            }
            
            .modal-title {
                color: #ff6b35;
                margin-bottom: 0.5rem;
            }
            
            .modal-description {
                color: #ccc;
            }
        `;
        document.head.appendChild(style);
        
        // Close modal events
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Update modal content
    modal.querySelector('.modal-image').src = imageSrc;
    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-description').textContent = description;
    modal.style.display = 'block';
}

// GitHub Projects Loader
async function loadGitHubProjects(username) {
    try {
        const response = await fetch(`https://api.github.com/users/Jay89-tech/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid && repos.length > 0) {
            projectsGrid.innerHTML = '';
            
            repos.forEach(repo => {
                const projectItem = document.createElement('div');
                projectItem.className = 'project-item';
                
                // Get primary language
                const language = repo.language || 'Unknown';
                
                // Create tech tags from topics or language
                const topics = repo.topics || [language.toLowerCase()];
                const techTags = topics.map(topic => 
                    `<span class="tech-tag">${topic}</span>`
                ).join('');
                
                projectItem.innerHTML = `
                    <div class="project-info">
                        <h3>${repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                        <p>${repo.description || 'No description available'}</p>
                        <div class="project-tech">
                            ${techTags}
                        </div>
                        <div class="project-links">
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i> View Code
                            </a>
                            ${repo.homepage ? 
                                `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer">
                                    <i class="fas fa-external-link-alt"></i> Live Demo
                                </a>` : ''
                            }
                        </div>
                    </div>
                `;
                
                projectsGrid.appendChild(projectItem);
            });
        }
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
    }
}

// Load projects if on projects page
if (window.location.pathname.includes('projects') || document.querySelector('.projects-grid')) {
    // Replace 'yourusername' with your actual GitHub username
    loadGitHubProjects('yourusername');
}

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation on home page
window.addEventListener('load', () => {
    const nameElement = document.querySelector('.hero-content h1 .highlight');
    if (nameElement && window.location.pathname.includes('index') || window.location.pathname === '/') {
        const originalText = nameElement.textContent;
        setTimeout(() => {
            typeWriter(nameElement, originalText, 150);
        }, 1000);
    }
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-item, .project-item, .certificate-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations
animateOnScroll();

// Particle background effect (optional enhancement)
function createParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.id = 'particles';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 107, 53, 0.1)';
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Initialize particles on home page
if (document.querySelector('.hero')) {
    createParticles();
}