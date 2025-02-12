// Smooth Scrolling for Navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Collapsible Sections
document.querySelectorAll(".collapsible").forEach(section => {
  section.addEventListener("click", function() {
    this.classList.toggle("expanded");
  });
});

// Fetch Diagrams from Wikimedia
const diagramLinks = {
  "mets-img": "https://upload.wikimedia.org/wikipedia/commons/6/69/Metabolic_syndrome_diagram.svg",
  "dyslipidemia-img": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Lipid_metabolism.svg",
  "hypertriglyceridemia-img": "https://upload.wikimedia.org/wikipedia/commons/4/45/Triglyceride_structure.svg",
  "atherogenesis-img": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Atheroma_formation.svg"
};

Object.keys(diagramLinks).forEach(id => {
  document.getElementById(id).src = diagramLinks[id];
});