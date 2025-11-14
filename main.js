document.addEventListener('DOMContentLoaded', () => {
  // ===== Navbar Toggle =====
  const btn = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1000 && links.classList.contains('open')) {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking nav link (mobile)
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && links.classList.contains('open')) {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ===== Testimonial Slider =====
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  if (testimonials.length > 0 && dots.length > 0) {
    let index = 0;

    function showTestimonial(i) {
      testimonials.forEach(t => t.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));
      testimonials[i].classList.add("active");
      dots[i].classList.add("active");
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showTestimonial(index);
      });
    });

    setInterval(() => {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    }, 4000);
  }

  // ===== Login Form =====
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
      }

      alert("Login successful ✅");
      window.location.href = "index.html";
    });
  }

  // ===== Signup Form =====
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirm = document.getElementById("confirm").value;

      if (password !== confirm) {
        alert("Passwords do not match!");
        return;
      }

      alert(`Welcome, ${name}! Your account has been created.`);
      window.location.href = "login.html";
    });
  }

  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    });
  }
});
