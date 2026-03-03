// ============================================
// NoDriver4j Website — Interactive Features
// ============================================

// ---------- 1. Mobile Navigation Toggle ----------

const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

// ---------- 2. FAQ Accordion ----------

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");
  const answer   = item.querySelector(".faq-answer");

  question.addEventListener("click", function () {
    const isOpen = item.classList.contains("open");

    // Close all items first
    faqItems.forEach(function (other) {
      other.classList.remove("open");
      other.querySelector(".faq-answer").style.maxHeight = null;
    });

    // Toggle the clicked item
    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ---------- 3. Download Button Placeholder ----------

function handleDownload(event) {
  event.preventDefault();
  alert("Downloads are not available yet. Check back soon!");
}