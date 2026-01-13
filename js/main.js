// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for anchor links
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

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic form validation
        if (name && email && message) {
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();

            // In a real implementation, you would do something like:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, message })
            // });
        }
    });
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add year to footer
const footer = document.querySelector('.footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2026', currentYear);
}

// Modal functionality for info sections
const modal = document.getElementById('infoModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');

const modalContent = {
    skills: {
        title: 'Technical Skills',
        content: `
            <h3>Programming Languages</h3>
            <div>
                <span class="skill-item">JavaScript (ES6+)</span>
                <span class="skill-item">Python</span>
                <span class="skill-item">Java</span>
                <span class="skill-item">TypeScript</span>
                <span class="skill-item">SQL</span>
            </div>

            <h3>Frontend Development</h3>
            <div>
                <span class="skill-item">React.js</span>
                <span class="skill-item">Vue.js</span>
                <span class="skill-item">HTML5</span>
                <span class="skill-item">CSS3/SASS</span>
                <span class="skill-item">Tailwind CSS</span>
                <span class="skill-item">Bootstrap</span>
            </div>

            <h3>Backend Development</h3>
            <div>
                <span class="skill-item">Node.js</span>
                <span class="skill-item">Express.js</span>
                <span class="skill-item">Django</span>
                <span class="skill-item">RESTful APIs</span>
                <span class="skill-item">GraphQL</span>
            </div>

            <h3>Databases & Tools</h3>
            <div>
                <span class="skill-item">MongoDB</span>
                <span class="skill-item">PostgreSQL</span>
                <span class="skill-item">MySQL</span>
                <span class="skill-item">Git/GitHub</span>
                <span class="skill-item">Docker</span>
                <span class="skill-item">AWS</span>
            </div>
        `
    },
    experience: {
        title: 'Work Experience',
        content: `
            <h3>Senior Software Engineer - Tech Mahindra</h3>
            <p><em>September 2022 - December 2023</em></p>
            <ul>
                <li>Developed and maintained C++ backend applications for high-volume financial transaction processing, ensuring performance, scalability, and reliability.</li>
                <li>Leveraged Python and Pro*C to implement automation and data-processing scripts for transaction validation</li>
                <li>Automated build, test, and deployment pipelines using Jenkins and Git, enabling 25% faster release cycles</li>
                <li>Designed and optimized database schemas, indexes, and SQL queries for large transactional data stores/li>
            </ul>

            <h3>Software Engineer - Accenture</h3>
            <p><em>January 2020 - september 2022</em></p>
            <ul>
                <li>Refactored legacy C++ backend systems for modern platforms, improving scalability and 20% increase in throughput for telecom services</li>
                <li>Involved in the migration of legacy C++ backend systems from on-premises infrastructure to Microsoft Azure</li>
                <li>Worked with design team to implement pixel-perfect UI components</li>
                <li>Developed and maintained C++ modules with multithreading, asynchronous I/O, and TCP/UDP sockets, optimizing high-concurrency network operations</li>
            </ul>

            <h3>Associate Software Engineer</h3>
            <p><em>Febuary 2018 - December 2019</em></p>
            <ul>
                <li>Developed and maintained C++ backend modules on Linux/Unix systems.</li>
                <li>Implemented object-oriented design and multithreading for networked applications, reducing latency in real-time communications.</li>
                <li>Assisted in integration testing, production deployments, and legacy system refactoring.</li>
            </ul>
        `
    },
    resume: {
        title: 'Resume & CV',
        content: `
            <p>Download my complete resume to learn more about my experience, education, and accomplishments.</p>

            <h3>What's Included</h3>
            <ul>
                <li>Detailed work experience and responsibilities</li>
                <li>Educational background and certifications</li>
                <li>Technical skills and proficiencies</li>
                <li>Notable projects and achievements</li>
                <li>Professional references available upon request</li>
            </ul>

            <p style="margin-top: 2rem;">
                <a href="documents/resume.pdf" class="resume-link" download style="display: inline-block; text-decoration: none;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Full Resume (PDF)
                </a>
            </p>

            <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
                Last updated: January 2026
            </p>
        `
    },
    projects: {
        title: 'Featured Projects',
        content: `
            <h3>ChatEngine</h3>
            <ul>
                <li>Developed ChatEngine, a full-stack AI chat application using React, TypeScript, Python, and FastAPI with 8 microservices architecture. </li>
                <li>Implemented multi-model evaluation system querying 6 AI models concurrently via Groq API, achieving 3x faster response time through parallel processing.</li>
                <li>Built real- time WebSocket communication for streaming responses and designed PostgreSQL database schema supporting conversation history.</li>
            </ul>
            <p><strong>Technologies:</strong> React, Node.js, Python, Docker, TypeScript, FastAPI</p>

            <h3>Portfolio Website</h3>
            <p>This responsive portfolio website showcasing my work and skills.</p>
            <ul>
                <li>Modern, responsive design</li>
                <li>Interactive UI components</li>
                <li>Blog integration</li>
                <li>Contact form with email notifications</li>
            </ul>
            <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript, Responsive Design</p>
        `
    },
    education: {
        title: 'Education & Certifications',
        content: `
            <h3>Bachelor of Science in Computer Science</h3>
            <p><strong>University Name</strong> | Graduated 2020</p>
            <ul>
                <li>GPA: 4.0/4.0</li>
                <li>Relevant Coursework: Artificial Intelligence, Computer Architecture, Cyber Security, Database Systems</li>
            </ul>

            <h3>Professional Certifications</h3>
            <ul>
                <li>AWS Certified Developer - Associate</li>
                <li>MongoDB Certified Developer</li>
                <li>Meta React Developer Professional Certificate</li>
                <li>Google UX Design Professional Certificate</li>
            </ul>

            <h3>Continuous Learning</h3>
            <ul>
                <li>Advanced React Patterns - Frontend Masters</li>
                <li>Node.js Design Patterns - Udemy</li>
                <li>System Design Fundamentals - Coursera</li>
            </ul>
        `
    }
};

// Add click handlers to clickable info sections
document.querySelectorAll('.info-section.clickable').forEach(section => {
    section.addEventListener('click', function() {
        const modalType = this.getAttribute('data-modal');
        const content = modalContent[modalType];

        if (content) {
            modalBody.innerHTML = `
                <h2>${content.title}</h2>
                ${content.content}
            `;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal when clicking the X
modalClose.addEventListener('click', function() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
});
