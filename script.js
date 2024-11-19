document.addEventListener('scroll', function () {
    const jobs = document.querySelectorAll('.job');
    jobs.forEach(job => {
        const rect = job.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            job.classList.add('visible');
        }
    });
});

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  
    // ปิดเมนูเมื่อคลิกลิงก์
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const body = document.body;
  
    const navbarHeight = navbar.offsetHeight; // ความสูง Navbar
    body.style.paddingTop = `${navbarHeight}px`; // เพิ่ม Padding
  });