const texts = [
  "Java Developer",
  "DSA Enthusiast",
  "Problem Solver",
  "Software Engineer Aspirant"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeWriter() {
  if (!typingElement) return;

  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent =
      currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1500);
      return;
    }
  } else {
    typingElement.textContent =
      currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}

typeWriter();


const revealElements = document.querySelectorAll(
  ".section, .stat-card, .project-card"
);

function revealOnScroll() {
  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
  window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 80;
    const y = (window.innerHeight / 2 - e.clientY) / 80;

    heroImage.style.transform =
      `translate(${x}px, ${y}px)`;
  });
}


const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) =>
      item.classList.remove("active")
    );

    this.classList.add("active");
  });
});


window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#60a5fa"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#60a5fa",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

const topBtn = document.getElementById("topBtn");

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#60a5fa"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#60a5fa",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 100
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});