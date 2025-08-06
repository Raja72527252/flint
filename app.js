// Flint Directors Onboarding Portal - JavaScript Application

// Application Data from JSON
const appData = {
  "steps": [
    {
      "id": 1,
      "title": "Welcome & Introduction",
      "description": "Get started with your Flint journey and meet the team",
      "tagline": "You're not working for us. You're building your own business with us by your side.",
      "video": {
        "title": "Welcome to Flint - Christian's Message",
        "duration": "3:45",
        "transcript": "Welcome to the Flint family. This journey you're starting isn't just about joining a company - it's about building your own thriving business with the full support of our team."
      },
      "downloads": [
        {"name": "Welcome Packet", "type": "PDF", "size": "2.1 MB"},
        {"name": "Getting Started Checklist", "type": "PDF", "size": "890 KB"},
        {"name": "Team Directory", "type": "PDF", "size": "1.2 MB"}
      ],
      "checklist": [
        "Watch welcome video",
        "Download welcome packet",
        "Join Slack workspace",
        "Complete profile setup"
      ]
    },
    {
      "id": 2,
      "title": "Understanding Your Role",
      "description": "Learn about your responsibilities and revenue structure",
      "tagline": "Success is built on clear expectations and unlimited support.",
      "video": {
        "title": "Director Role & Responsibilities",
        "duration": "4:20",
        "transcript": "As a Flint Director, you're an entrepreneur with the backing of our full platform. Here's what that means for your success."
      },
      "downloads": [
        {"name": "Role Overview", "type": "PDF", "size": "1.5 MB"},
        {"name": "Revenue Structure Guide", "type": "PDF", "size": "2.8 MB"},
        {"name": "Performance Metrics", "type": "Excel", "size": "650 KB"}
      ],
      "checklist": [
        "Review role responsibilities",
        "Understand revenue structure",
        "Set initial goals",
        "Schedule mentor meeting"
      ]
    },
    {
      "id": 3,
      "title": "Platform & Tools Training",
      "description": "Master the technology stack that powers your business",
      "tagline": "The right tools make all the difference in your success.",
      "video": {
        "title": "Platform Overview & Integration",
        "duration": "6:15",
        "transcript": "Our integrated platform of HubSpot, Middle, and BrokerEngine gives you everything you need to manage clients and close loans efficiently."
      },
      "downloads": [
        {"name": "HubSpot Quick Start", "type": "PDF", "size": "3.2 MB"},
        {"name": "Middle User Guide", "type": "PDF", "size": "2.7 MB"},
        {"name": "BrokerEngine Manual", "type": "PDF", "size": "4.1 MB"},
        {"name": "Integration Workflow", "type": "PDF", "size": "1.8 MB"}
      ],
      "checklist": [
        "Complete HubSpot training",
        "Access Middle platform",
        "Set up BrokerEngine account",
        "Test integration workflow"
      ]
    },
    {
      "id": 4,
      "title": "Financial Setup",
      "description": "Establish your financial foundation and revenue tracking",
      "tagline": "Build your business on a solid financial foundation.",
      "video": {
        "title": "Financial Structure & Revenue Sharing",
        "duration": "5:30",
        "transcript": "Understanding our revenue sharing model and setting up your financial systems properly is crucial for your success and peace of mind."
      },
      "downloads": [
        {"name": "Revenue Sharing Agreement", "type": "PDF", "size": "2.5 MB"},
        {"name": "Banking Setup Guide", "type": "PDF", "size": "1.7 MB"},
        {"name": "Tax Planning Worksheet", "type": "Excel", "size": "980 KB"},
        {"name": "Financial Tracking Template", "type": "Excel", "size": "1.2 MB"}
      ],
      "checklist": [
        "Sign revenue agreement",
        "Set up business banking",
        "Review tax implications",
        "Configure financial tracking"
      ]
    },
    {
      "id": 5,
      "title": "Partner Network",
      "description": "Connect with our lending partners and build relationships",
      "tagline": "Strong partnerships create opportunities for your clients.",
      "video": {
        "title": "Building Partner Relationships",
        "duration": "4:45",
        "transcript": "Our network of lending partners gives you competitive advantages. Here's how to leverage these relationships for your clients' success."
      },
      "downloads": [
        {"name": "Partner Directory", "type": "PDF", "size": "3.8 MB"},
        {"name": "Introduction Templates", "type": "DOCX", "size": "780 KB"},
        {"name": "Partner Guidelines", "type": "PDF", "size": "2.1 MB"}
      ],
      "checklist": [
        "Review partner directory",
        "Schedule partner introductions",
        "Complete partner onboarding",
        "Set up communication channels"
      ]
    },
    {
      "id": 6,
      "title": "Marketing & Branding",
      "description": "Access marketing resources and establish your brand presence",
      "tagline": "Consistent branding builds trust and recognition in your market.",
      "video": {
        "title": "Marketing Strategy & Brand Guidelines",
        "duration": "5:10",
        "transcript": "Your personal brand, backed by Flint's reputation, is your most valuable asset. Here's how to build and maintain it effectively."
      },
      "downloads": [
        {"name": "Brand Guidelines", "type": "PDF", "size": "4.2 MB"},
        {"name": "Marketing Templates", "type": "ZIP", "size": "12.5 MB"},
        {"name": "Social Media Kit", "type": "ZIP", "size": "8.7 MB"},
        {"name": "Lead Generation Guide", "type": "PDF", "size": "2.9 MB"}
      ],
      "checklist": [
        "Review brand guidelines",
        "Set up marketing materials",
        "Create social media profiles",
        "Launch lead generation campaigns"
      ]
    },
    {
      "id": 7,
      "title": "Launch Preparation",
      "description": "Final steps to launch your Flint director business",
      "tagline": "You're ready to build something amazing. Let's launch your success.",
      "video": {
        "title": "Launch Day & Beyond",
        "duration": "3:55",
        "transcript": "Congratulations on completing your onboarding. Here's what to expect in your first 90 days and how we'll support your growth."
      },
      "downloads": [
        {"name": "Launch Checklist", "type": "PDF", "size": "1.8 MB"},
        {"name": "90-Day Plan Template", "type": "PDF", "size": "2.3 MB"},
        {"name": "Success Metrics Dashboard", "type": "Excel", "size": "1.1 MB"}
      ],
      "checklist": [
        "Complete final review",
        "Confirm all setups",
        "Schedule launch call",
        "Celebrate your achievement!"
      ]
    }
  ],
  "faq_categories": [
    {
      "name": "Legal & Ownership",
      "questions": [
        {
          "question": "What is my legal relationship with Flint?",
          "answer": "You operate as an independent contractor with exclusive territory rights and full platform support."
        },
        {
          "question": "Do I own my client relationships?",
          "answer": "Yes, you maintain ownership of all client relationships you develop and can take them with you if you leave."
        }
      ]
    },
    {
      "name": "Financials & Revenue",
      "questions": [
        {
          "question": "How does the revenue sharing work?",
          "answer": "You receive 60-80% of net revenue based on performance tiers, with monthly payouts and transparent reporting."
        },
        {
          "question": "What are typical earnings in first year?",
          "answer": "Top performers earn $150K-300K+ in their first year, with average performers reaching $75K-125K."
        }
      ]
    },
    {
      "name": "Operations & Systems",
      "questions": [
        {
          "question": "How do I manage my pipeline?",
          "answer": "Use our integrated HubSpot CRM with Middle and BrokerEngine for complete pipeline visibility and management."
        },
        {
          "question": "What support do I get for operations?",
          "answer": "Full operations support including processing, compliance, marketing, and dedicated success manager."
        }
      ]
    }
  ],
  "tools": [
    {
      "name": "HubSpot CRM",
      "description": "Complete customer relationship management",
      "features": ["Lead tracking", "Pipeline management", "Email integration", "Reporting"]
    },
    {
      "name": "Middle Platform",
      "description": "Loan origination and processing",
      "features": ["Application processing", "Document management", "Compliance tracking", "Client portal"]
    },
    {
      "name": "BrokerEngine",
      "description": "Comprehensive mortgage platform",
      "features": ["Loan pricing", "Submission tracking", "Partner network", "Analytics"]
    }
  ],
  "quick_links": [
    {"name": "Slack Group", "url": "https://flint.slack.com", "icon": "fab fa-slack"},
    {"name": "FAQ", "url": "#faq", "icon": "fas fa-question-circle"},
    {"name": "Support Contact", "url": "#support", "icon": "fas fa-headset"},
    {"name": "My Documents", "url": "#documents", "icon": "fas fa-folder-open"}
  ]
};

// Application State
let appState = {
  currentUser: {
    firstName: 'John',
    lastName: 'Director',
    email: 'john@flintdirectors.com',
    phone: '(555) 123-4567',
    location: 'New York, NY'
  },
  currentStep: 1,
  onboardingProgress: {
    step1: { completed: false, videoWatched: false, checklistItems: [false, false, false, false] },
    step2: { completed: false, videoWatched: false, checklistItems: [false, false, false, false] },
    step3: { completed: false, videoWatched: false, checklistItems: [false, false, false, false] },
    step4: { completed: false, videoWatched: false, checklistItems:  [false, false, false, false] },
    step5: { completed: false, videoWatched: false, checklistItems:  [false, false, false, false] },
    step6: { completed: false, videoWatched: false, checklistItems:  [false, false, false, false] },
    step7: { completed: false, videoWatched: false, checklistItems:  [false, false, false, false] }
  },
  completedSteps: 0,
  faqReadItems: [],
  downloadedFiles: []
};

// Initialize Application
$(document).ready(function() {
  console.log('Flint Directors Portal initializing...');
  initializeApp();
});

function initializeApp() {
  // Update user display
  updateUserDisplay();
  
  // Generate initial content
  generateStepsGrid();
  generateProgressDots();
  updateOverallProgress();
  
  // Initialize step 1 by default
  initializeStep(1);
  
  // Setup event listeners
  setupEventListeners();
  
  console.log('App initialized successfully');
}

function setupEventListeners() {
  // Profile form submission
  $('#profileForm').on('submit', handleProfileUpdate);
  
  // Settings form submission
  $('#settingsForm').on('submit', handleSettingsUpdate);
  
  // FAQ search
  $('#faqSearch').on('input', handleFAQSearch);
  
  // Document filters
  $('#documentTypeFilter, #documentStepFilter').on('change', filterDocuments);
  
  console.log('Event listeners configured');
}

// User Interface Functions
function updateUserDisplay() {
  const user = appState.currentUser;
  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
  
  $('#userInitials').text(initials);
  $('#userName').text(`${user.firstName} ${user.lastName}`);
  
  // Update profile form if visible
  $('#profileFirstName').val(user.firstName);
  $('#profileLastName').val(user.lastName);
  $('#profileEmail').val(user.email);
  $('#profilePhone').val(user.phone);
  $('#profileLocation').val(user.location);
}

function generateProgressDots() {
  const dotsContainer = $('#headerProgressDots');
  let dotsHtml = '';
  
  for (let i = 1; i <= 7; i++) {
    const isCompleted = appState.onboardingProgress[`step${i}`].completed;
    const isActive = appState.currentStep === i;
    
    let className = 'progress-dot';
    if (isCompleted) className += ' completed';
    else if (isActive) className += ' active';
    
    dotsHtml += `<div class="${className}" data-step="Step ${i}" onclick="goToStep(${i})"></div>`;
  }
  
  dotsContainer.html(dotsHtml);
}

function generateStepsGrid() {
  const stepsContainer = $('#stepsGrid');
  let stepsHtml = '';
  
  appData.steps.forEach((step, index) => {
    const stepNum = index + 1;
    const isCompleted = appState.onboardingProgress[`step${stepNum}`].completed;
    const isActive = stepNum === appState.currentStep;
    const isLocked = stepNum > appState.currentStep && !isCompleted;
    
    let cardClass = 'step-card';
    let statusClass = 'status-badge';
    let statusText = 'Not Started';
    
    if (isCompleted) {
      cardClass += ' completed';
      statusClass += ' completed';
      statusText = 'Completed';
    } else if (isActive) {
      cardClass += ' active';
      statusClass += ' active';
      statusText = 'In Progress';
    } else if (isLocked) {
      cardClass += ' locked';
      statusClass += ' locked';
      statusText = 'Locked';
    }
    
    stepsHtml += `
      <div class="${cardClass}" onclick="${isLocked ? '' : `goToStep(${stepNum})`}">
        <div class="step-number">${stepNum.toString().padStart(2, '0')}</div>
        <h3 class="step-title">${step.title}</h3>
        <p class="step-description">${step.description}</p>
        <div class="step-status">
          <span class="${statusClass}">${statusText}</span>
          ${isCompleted ? '<i class="fas fa-check-circle ms-2"></i>' : ''}
        </div>
      </div>
    `;
  });
  
  stepsContainer.html(stepsHtml);
}

function updateOverallProgress() {
  const totalSteps = 7;
  const completedSteps = Object.values(appState.onboardingProgress)
    .filter(step => step.completed).length;
  
  const percentage = Math.round((completedSteps / totalSteps) * 100);
  
  $('#overallProgressText').text(`${percentage}%`);
  $('#overallProgressBar').css('width', `${percentage}%`);
  
  // Update progress steps
  const progressStepsHtml = appData.steps.map((step, index) => {
    const stepNum = index + 1;
    const isCompleted = appState.onboardingProgress[`step${stepNum}`].completed;
    const isActive = stepNum === appState.currentStep;
    
    let className = 'progress-step';
    if (isCompleted) className += ' completed';
    else if (isActive) className += ' active';
    
    return `<div class="${className}">${step.title.split(' ')[0]}</div>`;
  }).join('');
  
  $('#progressSteps').html(progressStepsHtml);
  
  // Update header progress dots
  generateProgressDots();
  
  // Update steps grid
  generateStepsGrid();
}

// Navigation Functions
function showView(viewId) {
  $('.view').addClass('hidden');
  $(`#${viewId}`).removeClass('hidden');
}

function showDashboard() {
  showView('dashboardView');
  appState.currentStep = 0;
  updateOverallProgress();
}

function showProfile() {
  showView('profileView');
  updateUserDisplay();
}

function showSettings() {
  showView('settingsView');
}

function showDocuments() {
  showView('documentsView');
  generateDocumentsGrid();
}

function showFAQ() {
  showView('faqView');
  generateFAQContent();
}

function goToStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > 7) return;
  
  // Check if step is accessible
  if (stepNumber > 1) {
    const previousStep = stepNumber - 1;
    if (!appState.onboardingProgress[`step${previousStep}`].completed) {
      showToast('Please complete the previous step first', 'warning');
      return;
    }
  }
  
  appState.currentStep = stepNumber;
  
  // Show step view
  showView(`step${stepNumber}View`);
  
  // Initialize step content
  initializeStep(stepNumber);
  
  // Update progress
  updateOverallProgress();
}

// Step Initialization
function initializeStep(stepNumber) {
  const step = appData.steps[stepNumber - 1];
  if (!step) return;
  
  // Update step header
  $(`#step${stepNumber}Title`).text(step.title);
  $(`#step${stepNumber}Description`).text(step.description);
  
  // Generate downloads
  generateDownloadsGrid(stepNumber, step.downloads);
  
  // Generate checklist
  generateChecklistItems(stepNumber, step.checklist);
  
  // Update step progress
  updateStepProgress(stepNumber);
  
  // Update navigation buttons
  updateStepNavigation(stepNumber);
}

function generateDownloadsGrid(stepNumber, downloads) {
  const container = $(`#step${stepNumber}Downloads`);
  let downloadsHtml = '';
  
  downloads.forEach((download, index) => {
    const iconClass = getFileIcon(download.type);
    const downloadId = `step${stepNumber}_download${index}`;
    const isDownloaded = appState.downloadedFiles.includes(downloadId);
    
    downloadsHtml += `
      <div class="download-item" onclick="downloadFile('${downloadId}', '${download.name}')">
        <div class="download-icon ${download.type.toLowerCase()}">
          <i class="fas ${iconClass}"></i>
        </div>
        <div class="download-info">
          <h6>${download.name}</h6>
          <div class="download-meta">${download.type} • ${download.size}</div>
        </div>
        ${isDownloaded ? '<i class="fas fa-check-circle text-success ms-auto"></i>' : ''}
      </div>
    `;
  });
  
  container.html(downloadsHtml);
}

function generateChecklistItems(stepNumber, checklistItems) {
  const container = $(`#step${stepNumber}Checklist`);
  let checklistHtml = '';
  
  checklistItems.forEach((item, index) => {
    const isCompleted = appState.onboardingProgress[`step${stepNumber}`].checklistItems[index];
    
    checklistHtml += `
      <div class="checklist-item ${isCompleted ? 'completed' : ''}" 
           onclick="toggleChecklistItem(${stepNumber}, ${index})">
        <input type="checkbox" ${isCompleted ? 'checked' : ''} readonly>
        <span class="checklist-text">${item}</span>
        ${isCompleted ? '<i class="fas fa-check text-success ms-auto"></i>' : ''}
      </div>
    `;
  });
  
  container.html(checklistHtml);
}

function updateStepProgress(stepNumber) {
  const stepData = appState.onboardingProgress[`step${stepNumber}`];
  const checklistItems = stepData.checklistItems;
  const completedItems = checklistItems.filter(item => item).length;
  const totalItems = checklistItems.length;
  const videoWatched = stepData.videoWatched;
  
  // Calculate progress (video worth 25%, checklist worth 75%)
  const videoProgress = videoWatched ? 25 : 0;
  const checklistProgress = (completedItems / totalItems) * 75;
  const totalProgress = Math.round(videoProgress + checklistProgress);
  
  $(`#step${stepNumber}ProgressText`).text(`${totalProgress}%`);
  $(`#step${stepNumber}ProgressBar`).css('width', `${totalProgress}%`);
  
  // Enable complete button if progress is 100%
  const completeButton = $(`#step${stepNumber}Complete`);
  if (totalProgress === 100) {
    completeButton.prop('disabled', false);
  } else {
    completeButton.prop('disabled', true);
  }
  
  // Enable next button if step is completed
  const nextButton = $(`#step${stepNumber}Next`);
  if (stepData.completed) {
    nextButton.prop('disabled', false);
  }
}

function updateStepNavigation(stepNumber) {
  // Update next button text and destination
  const nextButton = $(`#step${stepNumber}Next`);
  if (stepNumber < 7) {
    const nextStep = appData.steps[stepNumber];
    nextButton.html(`
      Next Step: ${nextStep.title}
      <i class="fas fa-arrow-right ms-2"></i>
    `);
    nextButton.attr('onclick', `goToStep(${stepNumber + 1})`);
  } else {
    nextButton.html(`
      Complete Onboarding
      <i class="fas fa-check ms-2"></i>
    `);
    nextButton.attr('onclick', 'completeOnboarding()');
  }
}

// Interactive Functions
function startOnboarding() {
  goToStep(1);
  showToast('Welcome to your Flint journey!', 'success');
}

function continueOnboarding() {
  // Find the first incomplete step
  let nextStep = 1;
  for (let i = 1; i <= 7; i++) {
    if (!appState.onboardingProgress[`step${i}`].completed) {
      nextStep = i;
      break;
    }
  }
  
  goToStep(nextStep);
  showToast(`Continuing from Step ${nextStep}`, 'info');
}

function playWelcomeVideo() {
  showVideoModal('Welcome to Flint', 'Christian and the Flint team welcome you to your new journey as a director.');
}

function playStepVideo(stepNumber) {
  const step = appData.steps[stepNumber - 1];
  const video = step.video;
  
  showLoadingOverlay();
  
  setTimeout(() => {
    hideLoadingOverlay();
    
    // Mark video as watched
    appState.onboardingProgress[`step${stepNumber}`].videoWatched = true;
    
    // Show transcript
    $(`#step${stepNumber}Transcript`).collapse('show');
    
    updateStepProgress(stepNumber);
    showToast(`Video "${video.title}" completed!`, 'success');
  }, 2000);
}

function toggleChecklistItem(stepNumber, itemIndex) {
  const currentValue = appState.onboardingProgress[`step${stepNumber}`].checklistItems[itemIndex];
  appState.onboardingProgress[`step${stepNumber}`].checklistItems[itemIndex] = !currentValue;
  
  // Regenerate checklist
  const step = appData.steps[stepNumber - 1];
  generateChecklistItems(stepNumber, step.checklist);
  
  // Update progress
  updateStepProgress(stepNumber);
  
  showToast('Checklist updated', 'info');
}

function completeStep(stepNumber) {
  const stepData = appState.onboardingProgress[`step${stepNumber}`];
  
  // Check if all requirements are met
  const videoWatched = stepData.videoWatched;
  const allChecklistComplete = stepData.checklistItems.every(item => item);
  
  if (!videoWatched || !allChecklistComplete) {
    showToast('Please complete all requirements before marking this step as complete', 'warning');
    return;
  }
  
  // Mark step as completed
  stepData.completed = true;
  
  // Show success modal
  showCompletionModal(stepNumber);
  
  // Update progress
  updateOverallProgress();
  
  showToast(`Step ${stepNumber} completed successfully!`, 'success');
}

function completeOnboarding() {
  // Check if all steps are completed
  const allCompleted = Object.values(appState.onboardingProgress).every(step => step.completed);
  
  if (!allCompleted) {
    showToast('Please complete all previous steps first', 'warning');
    return;
  }
  
  // Show final completion modal
  const modal = new bootstrap.Modal(document.getElementById('completionModal'));
  modal.show();
}

function downloadFile(fileId, fileName) {
  if (!appState.downloadedFiles.includes(fileId)) {
    appState.downloadedFiles.push(fileId);
  }
  
  showToast(`Downloading ${fileName}...`, 'info');
  
  // Simulate download delay
  setTimeout(() => {
    showToast(`${fileName} downloaded successfully`, 'success');
    
    // Update the current step view if applicable
    const currentStepMatch = fileId.match(/step(\d+)/);
    if (currentStepMatch) {
      const stepNumber = parseInt(currentStepMatch[1]);
      const step = appData.steps[stepNumber - 1];
      generateDownloadsGrid(stepNumber, step.downloads);
    }
  }, 1000);
}

function getFileIcon(fileType) {
  const icons = {
    'PDF': 'fa-file-pdf',
    'Excel': 'fa-file-excel',
    'DOCX': 'fa-file-word',
    'ZIP': 'fa-file-archive'
  };
  return icons[fileType] || 'fa-file';
}

// FAQ Functions
function generateFAQContent() {
  generateFAQCategories();
  generateFAQAccordion();
}

function generateFAQCategories() {
  const categoriesContainer = $('#faqCategories');
  let categoriesHtml = '';
  
  appData.faq_categories.forEach((category, index) => {
    categoriesHtml += `
      <div class="faq-category ${index === 0 ? 'active' : ''}" 
           onclick="filterFAQByCategory('${category.name}')">
        ${category.name}
      </div>
    `;
  });
  
  categoriesContainer.html(categoriesHtml);
}

function generateFAQAccordion() {
  const accordionContainer = $('#faqAccordion');
  let accordionHtml = '';
  
  appData.faq_categories.forEach((category, categoryIndex) => {
    category.questions.forEach((faq, questionIndex) => {
      const faqId = `faq_${categoryIndex}_${questionIndex}`;
      const isRead = appState.faqReadItems.includes(faqId);
      
      accordionHtml += `
        <div class="accordion-item" data-category="${category.name}">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed ${isRead ? 'text-success' : ''}" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#${faqId}" onclick="markFAQAsRead('${faqId}')">
              ${isRead ? '<i class="fas fa-check-circle me-2"></i>' : ''}
              ${faq.question}
            </button>
          </h2>
          <div id="${faqId}" class="accordion-collapse collapse" 
               data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              ${faq.answer}
            </div>
          </div>
        </div>
      `;
    });
  });
  
  accordionContainer.html(accordionHtml);
}

function markFAQAsRead(faqId) {
  if (!appState.faqReadItems.includes(faqId)) {
    appState.faqReadItems.push(faqId);
    
    setTimeout(() => {
      generateFAQAccordion();
    }, 100);
  }
}

function filterFAQByCategory(categoryName) {
  $('.faq-category').removeClass('active');
  $(`.faq-category:contains("${categoryName}")`).addClass('active');
  
  const accordionItems = $('.accordion-item');
  if (categoryName === 'All') {
    accordionItems.show();
  } else {
    accordionItems.hide();
    $(`.accordion-item[data-category="${categoryName}"]`).show();
  }
}

function handleFAQSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  const accordionItems = $('.accordion-item');
  
  if (searchTerm.length === 0) {
    accordionItems.show();
    return;
  }
  
  accordionItems.each(function() {
    const questionText = $(this).find('.accordion-button').text().toLowerCase();
    const answerText = $(this).find('.accordion-body').text().toLowerCase();
    
    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

// Documents Functions
function generateDocumentsGrid() {
  const documentsContainer = $('#documentsGrid');
  let documentsHtml = '';
  
  // Combine all documents from all steps
  const allDocuments = [];
  appData.steps.forEach((step, stepIndex) => {
    step.downloads.forEach((download, downloadIndex) => {
      allDocuments.push({
        ...download,
        step: stepIndex + 1,
        id: `step${stepIndex + 1}_download${downloadIndex}`
      });
    });
  });
  
  allDocuments.forEach(doc => {
    const iconClass = getFileIcon(doc.type);
    const isDownloaded = appState.downloadedFiles.includes(doc.id);
    
    documentsHtml += `
      <div class="document-card" data-type="${doc.type}" data-step="${doc.step}">
        <div class="d-flex align-items-center mb-3">
          <div class="download-icon ${doc.type.toLowerCase()} me-3">
            <i class="fas ${iconClass}"></i>
          </div>
          <div>
            <h5 class="mb-1">${doc.name}</h5>
            <small class="text-muted">Step ${doc.step} • ${doc.type} • ${doc.size}</small>
          </div>
        </div>
        
        <div class="d-flex justify-content-between align-items-center">
          <div>
            ${isDownloaded ? 
              '<span class="badge bg-success">Downloaded</span>' : 
              '<span class="badge bg-secondary">Available</span>'
            }
          </div>
          <button class="btn btn--primary btn--sm" 
                  onclick="downloadFile('${doc.id}', '${doc.name}')">
            <i class="fas fa-download me-1"></i>Download
          </button>
        </div>
      </div>
    `;
  });
  
  documentsContainer.html(documentsHtml);
}

function filterDocuments() {
  const typeFilter = $('#documentTypeFilter').val();
  const stepFilter = $('#documentStepFilter').val();
  
  $('.document-card').each(function() {
    const card = $(this);
    const cardType = card.data('type');
    const cardStep = card.data('step').toString();
    
    let showCard = true;
    
    if (typeFilter && cardType !== typeFilter) {
      showCard = false;
    }
    
    if (stepFilter && cardStep !== stepFilter) {
      showCard = false;
    }
    
    if (showCard) {
      card.show();
    } else {
      card.hide();
    }
  });
}

// Form Handlers
function handleProfileUpdate(e) {
  e.preventDefault();
  
  appState.currentUser.firstName = $('#profileFirstName').val();
  appState.currentUser.lastName = $('#profileLastName').val();
  appState.currentUser.phone = $('#profilePhone').val();
  appState.currentUser.location = $('#profileLocation').val();
  
  updateUserDisplay();
  showToast('Profile updated successfully!', 'success');
}

function handleSettingsUpdate(e) {
  e.preventDefault();
  showToast('Settings saved successfully!', 'success');
}

// Support Functions
function showSupport() {
  const modal = new bootstrap.Modal(document.getElementById('supportModal'));
  modal.show();
}

function openLiveChat() {
  showToast('Live chat would open here (demo mode)', 'info');
}

function submitFeedback() {
  showToast('Feedback form would open here (demo mode)', 'info');
}

function contactSupport() {
  showToast('Support contact form would open here (demo mode)', 'info');
}

// Modal Functions
function showVideoModal(title, description) {
  showToast(`Playing video: ${title}`, 'info');
}

function showCompletionModal(stepNumber) {
  const step = appData.steps[stepNumber - 1];
  
  showToast(`🎉 ${step.title} completed! Moving to next step...`, 'success');
  
  setTimeout(() => {
    if (stepNumber < 7) {
      goToStep(stepNumber + 1);
    } else {
      completeOnboarding();
    }
  }, 2000);
}

function startDirectorJourney() {
  showToast('🚀 Welcome to your director journey! You\'re all set to succeed.', 'success');
  showDashboard();
}

function downloadCertificate() {
  showToast('Certificate downloaded successfully!', 'success');
}

// Utility Functions
function showLoadingOverlay() {
  $('#loadingOverlay').removeClass('hidden');
}

function hideLoadingOverlay() {
  $('#loadingOverlay').addClass('hidden');
}

function showToast(message, type = 'info') {
  const toastId = 'toast-' + Date.now();
  const iconClass = {
    'success': 'fas fa-check-circle text-success',
    'error': 'fas fa-exclamation-triangle text-danger',
    'warning': 'fas fa-exclamation-circle text-warning',
    'info': 'fas fa-info-circle text-info'
  }[type];
  
  const bgClass = {
    'success': 'bg-success',
    'error': 'bg-danger',
    'warning': 'bg-warning',
    'info': 'bg-info'
  }[type];
  
  const toastHtml = `
    <div id="${toastId}" class="toast" role="alert">
      <div class="toast-header ${bgClass} text-white">
        <i class="${iconClass} me-2"></i>
        <strong class="me-auto">Flint Directors</strong>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    </div>
  `;
  
  $('#toastContainer').append(toastHtml);
  
  const toast = new bootstrap.Toast(document.getElementById(toastId), {
    delay: type === 'error' ? 5000 : 3000
  });
  toast.show();
  
  // Remove toast element after it's hidden
  $(`#${toastId}`).on('hidden.bs.toast', function() {
    $(this).remove();
  });
}

function signOut() {
  if (confirm('Are you sure you want to sign out?')) {
    showToast('Signed out successfully', 'info');
    // In a real app, this would redirect to login
    location.reload();
  }
}

// Global functions for HTML onclick handlers
window.showDashboard = showDashboard;
window.showProfile = showProfile;
window.showSettings = showSettings;
window.showDocuments = showDocuments;
window.showFAQ = showFAQ;
window.goToStep = goToStep;
window.startOnboarding = startOnboarding;
window.continueOnboarding = continueOnboarding;
window.playWelcomeVideo = playWelcomeVideo;
window.playStepVideo = playStepVideo;
window.toggleChecklistItem = toggleChecklistItem;
window.completeStep = completeStep;
window.completeOnboarding = completeOnboarding;
window.downloadFile = downloadFile;
window.markFAQAsRead = markFAQAsRead;
window.filterFAQByCategory = filterFAQByCategory;
window.showSupport = showSupport;
window.openLiveChat = openLiveChat;
window.submitFeedback = submitFeedback;
window.contactSupport = contactSupport;
window.startDirectorJourney = startDirectorJourney;
window.downloadCertificate = downloadCertificate;
window.signOut = signOut;

// Initialize tooltips and popovers
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
  $('[data-bs-toggle="popover"]').popover();
});

// Accessibility improvements
$(document).ready(function() {
  // Add aria labels for better screen reader support
  $('.progress-dot').each(function(index) {
    $(this).attr('aria-label', `Step ${index + 1} progress indicator`);
  });
  
  // Keyboard navigation support
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      $('.modal.show').modal('hide');
      $('.collapse.show').collapse('hide');
    }
  });
  
  // Focus management for modals
  $('.modal').on('shown.bs.modal', function() {
    $(this).find('button, input, select, textarea').first().focus();
  });
});

console.log('Flint Directors Portal loaded successfully');