// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add Animation on Scroll (AOS)
  const sections = document.querySelectorAll('.section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Form Submission Handling
  const contactForm = document.querySelector('#contact form');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
  
    // Simulate form submission (replace with actual backend logic)
    console.log('Form Submitted:', { name, email, message });
  
    // Show a success message
    alert('Thank you for reaching out! I will get back to you soon.');
  
    // Reset the form
    contactForm.reset();
  });
  
  // Dynamic Year in Footer
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;
  
  // Toggle Mobile Navigation Menu
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Close Mobile Menu on Link Click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });