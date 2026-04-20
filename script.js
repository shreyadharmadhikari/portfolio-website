const themeSwitcher = document.getElementById("theme-switcher");
const themeToggle = document.querySelector("#theme-switcher > div"); // Define this once at the top
const rootEle = document.documentElement;

// 1. Get initial state
const currentTheme = localStorage.getItem("theme") || "dark";
rootEle.setAttribute("data-theme", currentTheme);

// 2. Set the initial position of the circle
if (currentTheme === "light") {
  themeToggle.classList.add("light");
} else {
  themeToggle.classList.remove("light");
}

// 3. Click Listener
themeSwitcher.addEventListener("click", () => {
  themeToggle.classList.toggle("light");

  if (themeToggle.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    rootEle.setAttribute("data-theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    rootEle.setAttribute("data-theme", "dark");
  }
});

const sidebarMenu = document.getElementById("menu-icon");
const navLinks = document.getElementById("navLinks");
const anchorLinks = document.querySelectorAll("#navLinks > a");
anchorLinks.forEach((a) => {
  a.addEventListener("click", () => {
    const sectionText = a.textContent.toLowerCase();
    const sectionToShow = document.getElementById(`${sectionText}`);
    sectionToShow.scrollIntoView((behavior = "smooth"), (block = "start"));
  });
});

const handleResize = () => {
  const deviceWidth = window.innerWidth;

  if (deviceWidth <= 850) {
    sidebarMenu.classList.add("visible");
    navLinks.classList.add("sidebar");
    navLinks.classList.remove("close");
  } else {
    sidebarMenu.classList.remove("visible");
    sidebarMenu.classList.remove("expanded"); // Remove 'X' state
    sidebarMenu.textContent = "☰";
    navLinks.classList.remove("sidebar");
    navLinks.classList.remove("visible"); // Hide the mobile menu
    navLinks.classList.remove("close"); // Clean up animation classes
  }
};

// 1. Run it immediately on page load
handleResize();

// 2. Attach the "Watcher" to the window
window.addEventListener("resize", handleResize);

sidebarMenu.addEventListener("click", () => {
  sidebarMenu.classList.toggle("expanded");

  if (sidebarMenu.classList.contains("expanded")) {
    sidebarMenu.textContent = "ⓧ";
    navLinks.classList.add("visible");

    anchorLinks.forEach((a) => {
      a.addEventListener("click", () => {
        setTimeout(() => {
          sidebarMenu.textContent = "☰";
          navLinks.classList.remove("close");
          sidebarMenu.classList.remove("expanded");
          navLinks.classList.remove("visible");
        }, 360);
        navLinks.classList.add("close");
      });
    });
  } else {
    setTimeout(() => {
      navLinks.classList.remove("close");
    }, 360);
    sidebarMenu.textContent = "☰";
    navLinks.classList.remove("visible");
    sidebarMenu.classList.remove("expanded");
    navLinks.classList.add("close");
  }
});

const viewProjectsBtn = document.querySelector("#view-projects");

viewProjectsBtn.addEventListener("click", () => {
  window.location.href = "#projects";
});

const hireMeBtn = document.querySelector("#hireMe-btn");

hireMeBtn.addEventListener("click", () => {
  window.location.href = "#contact";
});

const contactIcons = document.querySelectorAll("#contact .contact-icon");

contactIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const contactThrough = icon.getAttribute("data-social");
    if (contactThrough === "mail") {
      const email = "shreyad292000@gmail.com";
      window.open(`mailto:${email}`, "_blank");
    } else if (contactThrough === "linkedin") {
      const linkedin = "https://www.linkedin.com/in/shreya-dharmadhikari/";
      window.open(linkedin, "_blank");
    } else if (contactThrough === "github") {
      const github = "https://github.com/shreyadharmadhikari";
      window.open(github, "_blank");
    }
  });
});
