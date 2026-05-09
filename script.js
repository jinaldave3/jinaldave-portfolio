function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const projects = [
  {
  title: "AI Financial Insights Dashboard",
  imgSrc: "./assets/ai-fi-dash.png",
  githubLink: "https://github.com/jinaldave3/ai-fi-dash",
  readMore: "./projects/ai-fi-dash.html",
  technologies:
    "⚛ React.js 🎨 Tailwind CSS 📡 Axios 📈 Recharts ⚡ Vite 🟢 Node.js 🚂 Express.js 🤖 OpenAI API 💹 Finnhub API 📊 Yahoo Finance API"
},
  {
    title: "Resume Analyzer Chrome Extension",
    imgSrc: "./assets/resumeAnalyzer.png",
    githubLink: "https://github.com/jinaldave3/resumeAnalyzer",
    readMore: "./projects/resumeAnalyzer.html",
    technologies: "💻 HTML  🎨 CSS  ⚡ JavaScript  🧩 Chrome API (Manifest V3)  🧠 LocalStorage  🔍 DOM Parsing  🧭 Content Scripts"
  },
  {
    title: "Distributed Recommendation System",
    imgSrc: "./assets/sorting.png",
    githubLink: "https://github.com/jinaldave3/distributed-recommendation-system",
    readMore: "./projects/recSystem.html",
    technologies: "⚛ React  🎨 CSS  📦 Node.js  🚂 Express  🧠 Mock ML  📡 Axios 📊 Prometheus  📈 Grafana  🐳 Docker  🧱 Docker Compose"
  },
  {
  title: "Trade Matching System",
  imgSrc: "./assets/tradeMatchingSystem.png",
  githubLink: "https://github.com/jinaldave3/tradeMatchingSystem",
  readMore: "./projects/tradeMatchingSystem.html",
  technologies:
    "☕ Java 🧵 Multithreading 📡 FIX Messaging 🛢 Data Processing ⚙ Concurrent Queues 📊 Reporting System 🖥 Monitoring Services"
},
  {
    title: "Bitcoin Price Tracker",
    imgSrc: "./assets/bitcoin.png",
    githubLink: "https://github.com/jinaldave3/BitcoinPriceTracker",
    readMore: "./projects/bitcoin.html",
    technologies: "⚛ React  🦺 TypeScript  🎨 Tailwind CSS  📡 Axios ⚡ Vite  🌐 Aircode"
  },
  {
    title: "Path Finding Visualizer",
    imgSrc: "./assets/pathfinder.png",
    githubLink: "https://github.com/jinaldave3/PathFinder",
    readMore: "./projects/pathFinder.html",
    technologies: "⚛️ React.js 🎨 CSS3 ⚙️ JavaScript (ES6+)"
  },
  {
    title: "Sorting Visualizer",
    imgSrc: "./assets/sorting.png",
    githubLink: "https://github.com/jinaldave3/SortingVisualizer",
    readMore: "./projects/sorting.html",
    technologies: "⚛️ React.js  🟨 JavaScript (ES6+)  🎨 CSS3  📄 HTML5"
  },
  {
      title: "Chess game",
      imgSrc: "./assets/chess.png",
      githubLink: "https://github.com/jinaldave3/chessgame",
      readMore: "./projects/chess.html",
      technologies: " ☕ Java 🎨 Swing "
  },
  {
    title: "Golden Glow Connect",
    imgSrc: "./assets/goldenglow.png",
    githubLink: "https://github.com/jinaldave3/GoldenGlow",
    readMore: "./projects/goldenGlow.html",
    technologies: "🟨 JavaScript 🤖 GPT model 🔥 Firebase 📄 HTML5 🎨 CSS3"
  },
  {
      title: "Pomodoro App",
      imgSrc: "./assets/pomodoro.png",
      githubLink: "https://github.com/jinaldave3/Pomodoro",
      readMore: "./projects/pomodoro.html",
      technologies: "🖥️ HTML5  🎨 CSS3  ⚙️ JavaScript (ES6+)"
  },
  {
      title: "YouTube Homepage Frontend",
      imgSrc: "./assets/youtube.png",
      githubLink: "https://github.com/jinaldave3/YouTube-homepage",
      readMore: "./projects/youtube.html",
      technologies: "📄 HTML5 🎨 CSS3 🔤 Google Fonts 🖼️ SVG Icons"
  },
  {
    title: "Diet Monitor",
    imgSrc: "./assets/dietmonitor.png",
    githubLink: "https://github.com/jinaldave3/DietMonitor",
    readMore: "./projects/dietMonitor.html",
    technologies: "🍏 SwiftUI 📱 iOS Development 🏗 State Management "
  }
];

// Function to render projects dynamically
function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = ""; // Clear existing projects

  projects.forEach((project, index) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("details-container", "color-container");
      projectElement.setAttribute("id", `project-${index}`);

      projectElement.innerHTML = `
          <div class="article-container">
              <img src="${project.imgSrc}" alt="${project.title}" class="project-img"/>
          </div>
          <h2 class="experience-sub-title project-title">${project.title}</h2>
          <p class="technologies-used"><strong>Technologies:</strong> ${project.technologies}></p> </br>
          <div class="btn-container">
              <button class="btn btn-color-2 project-btn" onclick="location.href='${project.readMore}'">
                  Read More
              </button>
              <button class="btn btn-color-2 project-btn" onclick="location.href='${project.githubLink}'">
                  Github
              </button>
          </div>
      `;

      container.appendChild(projectElement);
  });
}

// Run the function to render projects on page load
document.addEventListener("DOMContentLoaded", renderProjects);