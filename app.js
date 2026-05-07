const btn = document.querySelector(".msg-btn");

btn.addEventListener("click", function() {
    document.getElementById("contact-me").scrollIntoView({ behavior: "smooth" });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-item h6').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.textContent.toLowerCase();
        const targetSection = document.getElementById(targetId) || 
                            document.querySelector(`.${targetId}`) || 
                            document.getElementById('home');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add scroll animations
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

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add particle effect to background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '-1';

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = Math.random() * 4 + 'px';
        particle.style.background = 'rgba(255, 255, 255, 0.1)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);
}

createParticles();

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
        100% { transform: translateY(0px) rotate(360deg); }
    }
`;
document.head.appendChild(style);