// Professional Portfolio Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for internal links
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

    // Add animation delay for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });

    // Add contact form validation if form exists
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name && email && message) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Add typing animation for subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        setTimeout(typeWriter, 500);
    }

    // Add hover effects for skill items
    const skillItems = document.querySelectorAll('.skill-category li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Console message for developers
    console.log('👋 Hello! Thanks for checking out my portfolio code.');
    console.log('💼 Interested in working together? Reach out at joe@xmrt.io');
    console.log('🚀 Built with passion from Costa Rica 🇨🇷');
});

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');

    if (isDark) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Email obfuscation protection
function sendEmail() {
    const user = 'joe';
    const domain = 'xmrt.io';
    const subject = 'Portfolio Contact';
    const email = user + '@' + domain;

    window.location.href = `mailto:${email}?subject=${subject}`;
}

// Social media links with analytics
function trackSocialClick(platform) {
    console.log(`Social media click: ${platform}`);
    // Add analytics tracking here if needed
}

// Print-friendly version
function printResume() {
    window.print();
}

// Copy contact info to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Contact information copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}