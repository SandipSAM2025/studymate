/* ==========================================================================
   StudyNotes – Data Store & Logic
   ========================================================================== */

// 1. Subjects Data
const subjects = [
  {
    id: "ds",
    name: "Data Science",
    icon: "📊",
    description: "Covers data wrangling, exploratory analysis, statistical modeling, and insights extraction from raw data."
  },
  {
    id: "wt",
    name: "Web Technology",
    icon: "🌐",
    description: "Client-server architecture, semantic HTML5, modern CSS grids/flexbox, and DOM manipulation with Vanilla JS."
  },
  {
    id: "ml",
    name: "Machine Learning",
    icon: "🤖",
    description: "Supervised and unsupervised algorithms, model evaluation, regression, classification, and neural basics."
  },
  {
    id: "se",
    name: "Software Engineering",
    icon: "⚙️",
    description: "SDLC methodologies, Agile, Scrum frameworks, design patterns, testing strategies, and software architecture."
  },
  {
    id: "hrm",
    name: "Human Resource Management",
    icon: "👥",
    description: "Talent acquisition, organizational behavior, employee appraisal, corporate culture, and conflict resolution."
  },
  {
    id: "cs",
    name: "Cyber Security",
    icon: "🛡️",
    description: "Threat vectors, symmetric & asymmetric encryption, network defenses, firewalls, and ethical vulnerability auditing."
  }
];

// 2. Sample Study Notes
const notes = [
  {
    id: 1,
    subject: "Data Science",
    topic: "Exploratory Data Analysis (EDA)",
    explanation: "EDA is the critical first step in data analysis where datasets are investigated to summarize their core characteristics, detect anomalies, test hypotheses, and verify assumptions using summary statistics and visualization.",
    importantPoints: [
      "Distinguishes between numerical (continuous/discrete) and categorical data.",
      "Identifies missing values (imputation via mean/median vs. row dropping).",
      "Detects outliers through box plots and Z-score methods."
    ],
    definition: {
      term: "Outlier",
      text: "A data point that deviates significantly from the overall pattern of observations in a sample."
    },
    isExamImportant: true
  },
  {
    id: 2,
    subject: "Web Technology",
    topic: "Document Object Model (DOM)",
    explanation: "The DOM is a language-independent programming interface for web documents. It represents the page so programs can manipulate document structure, style, and content in real time.",
    importantPoints: [
      "Constructed as a hierarchical tree of objects and nodes.",
      "Allows JavaScript to attach Event Listeners (e.g., click, submit).",
      "Manipulations should be minimized to avoid layout thrashing and reflows."
    ],
    definition: {
      term: "DOM Node",
      text: "The basic unit of a DOM tree; every element, attribute, and text piece is represented as a node."
    },
    isExamImportant: true
  },
  {
    id: 3,
    subject: "Machine Learning",
    topic: "Supervised vs. Unsupervised Learning",
    explanation: "Supervised learning algorithms train on labeled datasets containing both input features and known ground truths. Unsupervised learning deals with unlabeled data and discovers hidden structures.",
    importantPoints: [
      "Supervised tasks: Regression (continuous target) and Classification (discrete target).",
      "Unsupervised tasks: Clustering (e.g., K-Means) and Dimensionality Reduction (PCA).",
      "Evaluation requires separate Train/Test splits to prevent overfitting."
    ],
    definition: {
      term: "Overfitting",
      text: "When a model learns the training data too well, memorizing noise and performing poorly on unseen real-world test data."
    },
    isExamImportant: true
  },
  {
    id: 4,
    subject: "Software Engineering",
    topic: "Agile vs. Waterfall Methodology",
    explanation: "Waterfall follows a strictly sequential phase-by-phase development flow, while Agile promotes iterative cycles (sprints), continuous stakeholder collaboration, and rapid response to requirements changes.",
    importantPoints: [
      "Waterfall excels in projects with fixed, unchangeable requirements (e.g., aerospace).",
      "Agile breaks delivery into 1-4 week sprints yielding working increments.",
      "Key Agile ceremonies include Sprint Planning, Daily Standups, and Retrospectives."
    ],
    definition: {
      term: "Sprint",
      text: "A short, time-boxed period during which a development team completes a set amount of work."
    },
    isExamImportant: false
  },
  {
    id: 5,
    subject: "Human Resource Management",
    topic: "Performance Appraisal Methods",
    explanation: "The systematic evaluation of an employee's job performance, achievements, productivity, and contribution to company objectives over a specified duration.",
    importantPoints: [
      "360-Degree Feedback collects insights from peers, managers, and subordinates.",
      "Management by Objectives (MBO) aligns individual goals with organizational targets.",
      "Helps identify promotion readiness and personalized training requirements."
    ],
    definition: {
      term: "360-Degree Appraisal",
      text: "A feedback mechanism collecting confidential evaluations from all surrounding colleagues, supervisors, and internal stakeholders."
    },
    isExamImportant: false
  },
  {
    id: 6,
    subject: "Cyber Security",
    topic: "Symmetric vs. Asymmetric Cryptography",
    explanation: "Cryptography transforms plain text into unreadable ciphertext to guarantee confidentiality, data integrity, and non-repudiation across insecure channels.",
    importantPoints: [
      "Symmetric uses one shared secret key for encryption and decryption (AES, DES).",
      "Asymmetric uses a Public/Private key pair (RSA, Elliptic Curves).",
      "Hybrid systems use asymmetric keys to securely exchange a fast symmetric session key."
    ],
    definition: {
      term: "Ciphertext",
      text: "The encrypted output produced by passing plain text through a cryptographic algorithm."
    },
    isExamImportant: true
  },
  {
    id: 7,
    subject: "Data Science",
    topic: "Bias-Variance Tradeoff",
    explanation: "The conflict in supervised learning where models with high bias fail to learn relevant patterns (underfitting), while models with high variance become sensitive to noise (overfitting).",
    importantPoints: [
      "High Bias: Overly simplistic models (e.g., linear regression on non-linear data).",
      "High Variance: Overly complex models (e.g., deep unpruned decision trees).",
      "Optimal balance minimizes the total expected generalisation error."
    ],
    definition: {
      term: "Model Bias",
      text: "The error introduced by approximating an intricate real-world problem with an overly simple algorithm."
    },
    isExamImportant: true
  },
  {
    id: 8,
    subject: "Web Technology",
    topic: "Asynchronous JavaScript & Promises",
    explanation: "Asynchronous programming lets the single-threaded JavaScript engine perform long-running network operations without freezing the main browser UI thread.",
    importantPoints: [
      "A Promise has 3 states: Pending, Fulfilled, or Rejected.",
      "`async/await` syntax provides clean syntactic sugar over native promises.",
      "The Event Loop monitors the Call Stack and moves callbacks from the Microtask Queue."
    ],
    definition: {
      term: "Event Loop",
      text: "The continuous runtime mechanism that offloads async operations and pushes resolved callbacks back to the execution stack."
    },
    isExamImportant: true
  }
];

// 3. Application State
let activeSubjectFilter = "All";
let searchKeyword = "";

// 4. DOM Elements
const subjectGrid = document.getElementById("subjectGrid");
const filterPillsContainer = document.getElementById("filterPills");
const notesGrid = document.getElementById("notesGrid");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const resultsCountEl = document.getElementById("resultsCount");
const noResultsEl = document.getElementById("noResults");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");
const currentYearSpan = document.getElementById("currentYear");

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  currentYearSpan.textContent = new Date().getFullYear();
  initTheme();
  renderSubjects();
  renderFilterPills();
  renderNotes();
  bindEvents();
});

// ==========================================================================
// Theme Handling (Light / Dark with localStorage)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("studynotes_theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "☀️️";
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.textContent = "🌙";
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("studynotes_theme", isDark ? "dark" : "light");
}

// ==========================================================================
// Render Functions
// ==========================================================================
function renderSubjects() {
  subjectGrid.innerHTML = subjects.map(sub => {
    const count = notes.filter(n => n.subject === sub.name).length;
    return `
      <div class="subject-card">
        <div>
          <div class="subject-card-icon">${sub.icon}</div>
          <h3 class="subject-card-title">${sub.name}</h3>
          <p class="subject-card-desc">${sub.description}</p>
        </div>
        <div class="subject-card-footer">
          <span class="note-count-badge">${count} Note${count !== 1 ? 's' : ''} Available</span>
          <button class="btn btn-outline" onclick="selectSubjectFilter('${sub.name}')">View Notes &rarr;</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderFilterPills() {
  const categories = ["All", ...subjects.map(s => s.name)];
  filterPillsContainer.innerHTML = categories.map(cat => `
    <button 
      class="filter-pill ${activeSubjectFilter === cat ? 'active' : ''}" 
      data-filter="${cat}"
    >
      ${cat}
    </button>
  `).join("");

  // Attach event listener to pills
  filterPillsContainer.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      activeSubjectFilter = pill.getAttribute("data-filter");
      updatePillStates();
      renderNotes();
    });
  });
}

function updatePillStates() {
  document.querySelectorAll(".filter-pill").forEach(pill => {
    if (pill.getAttribute("data-filter") === activeSubjectFilter) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}

function renderNotes() {
  const query = searchKeyword.trim().toLowerCase();

  // Filter notes by search text and subject
  const filtered = notes.filter(note => {
    const matchesSubject = (activeSubjectFilter === "All" || note.subject === activeSubjectFilter);
    const matchesQuery = 
      note.topic.toLowerCase().includes(query) ||
      note.explanation.toLowerCase().includes(query) ||
      note.subject.toLowerCase().includes(query) ||
      note.definition.term.toLowerCase().includes(query) ||
      note.importantPoints.some(pt => pt.toLowerCase().includes(query));

    return matchesSubject && matchesQuery;
  });

  // Toggle No-Results State
  if (filtered.length === 0) {
    notesGrid.innerHTML = "";
    noResultsEl.classList.remove("hidden");
    resultsCountEl.textContent = "0 notes found";
    return;
  }

  noResultsEl.classList.add("hidden");
  resultsCountEl.textContent = `Showing ${filtered.length} of ${notes.length} note${notes.length !== 1 ? 's' : ''}`;

  // Populate Notes Grid
  notesGrid.innerHTML = filtered.map(note => `
    <article class="note-card">
      <div class="note-card-header">
        <span class="note-subject-tag">${note.subject}</span>
        ${note.isExamImportant ? '<span class="exam-badge">⭐ Important for Exam</span>' : ''}
      </div>

      <h3 class="note-topic-title">${note.topic}</h3>
      <p class="note-explanation">${note.explanation}</p>

      <div class="note-section-title">Key Exam Takeaways</div>
      <ul class="note-points-list">
        ${note.importantPoints.map(pt => `<li>${pt}</li>`).join("")}
      </ul>

      <div class="note-definition-box">
        <div class="note-definition-label">Definition: ${note.definition.term}</div>
        <p class="note-definition-text">"${note.definition.text}"</p>
      </div>
    </article>
  `).join("");
}

// Global hook to bridge subject cards & footer links with notes filter
window.selectSubjectFilter = function(subjectName) {
  activeSubjectFilter = subjectName;
  updatePillStates();
  renderNotes();

  const notesSection = document.getElementById("notes");
  if (notesSection) {
    notesSection.scrollIntoView({ behavior: "smooth" });
  }
};

// ==========================================================================
// Event Listeners
// ==========================================================================
function bindEvents() {
  // Theme Toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Search Input Handler
  searchInput.addEventListener("input", (e) => {
    searchKeyword = e.target.value;
    clearSearchBtn.classList.toggle("show", searchKeyword.length > 0);
    renderNotes();
  });

  // Clear Search
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchKeyword = "";
    clearSearchBtn.classList.remove("show");
    renderNotes();
    searchInput.focus();
  });

  // Reset Filters Button
  resetFiltersBtn.addEventListener("click", () => {
    activeSubjectFilter = "All";
    searchKeyword = "";
    searchInput.value = "";
    clearSearchBtn.classList.remove("show");
    updatePillStates();
    renderNotes();
  });

  // Mobile Navbar Toggle
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Auto close mobile menu upon clicking links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}
