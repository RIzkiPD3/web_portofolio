// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Modal Logic
const modal = document.getElementById("profileModal");
const openBtn = document.querySelector(".btn-profile");
const closeBtn = document.querySelector(".close-btn");

openBtn?.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = "block";
});

closeBtn?.addEventListener('click', function() {
  modal.style.display = "none";
});

window.addEventListener('click', function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
const currentMode = localStorage.getItem("theme");

if (currentMode === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "🌙";
}

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});

// === Dynamic My Projects + Dynamic View Project ===
const myProjects = [
  {
    title: "Project 1",
    desc: "Ini adalah project pertama saya saat saya mengikuti revou fundamental course yakni Kalkulator BMI.",
    img: "Images/BMI Calculator.jpg",
    link: "https://revou-fundamental-course.github.io/30-oct-23-Rekka02/"
  },
  {
    title: "Project 2",
    desc: "API backend untuk aplikasi mobile delivery.",
    img: "Images/sample-project.jpg",
    link: "#"
  },
  {
    title: "Project 3",
    desc: "Platform e-commerce dengan integrasi payment gateway.",
    img: "Images/sample-project.jpg",
    link: "#"
  }
];

const projectList = document.querySelector('.project-list');
const viewSection = document.querySelector('#view-project');
const viewContainer = document.querySelector('.project-detail');

function updateViewProject(project) {
  if (viewContainer) {
    viewContainer.innerHTML = `
      <img src="${project.img}" alt="${project.title}" style="width:100%; max-height:400px; object-fit:cover; border-radius:10px; box-shadow:0 0 15px var(--accent-color);">
      <p style="margin-top:1rem; font-size:1.1rem; line-height:1.6;">${project.desc}</p>
      <a href="${project.link}" target="_blank" style="display:inline-block; margin-top:1rem; padding:0.5rem 1.5rem; background:var(--accent-color); color:#000; font-weight:bold; border-radius:8px; text-decoration:none;">
        Lihat Proyek
      </a>
    `;
  }
}

if (projectList) {
  myProjects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="#view-project" class="btn-view" style="display:inline-block; margin-top:1rem; padding:0.4rem 1rem; background:var(--accent-color); color:#000; font-weight:bold; border-radius:6px; text-decoration:none;" data-id="${index}">
        View
      </a>
    `;
    projectList.appendChild(card);
  });

  // Set click events to update view-project content
  document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = parseInt(e.currentTarget.getAttribute('data-id'));
      updateViewProject(myProjects[id]);
    });
  });
}
