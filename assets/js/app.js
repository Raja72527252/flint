// Flint Directors Onboarding Portal JavaScript

// ================================
// AUTHENTICATION SYSTEM
// ================================

// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    checkAuthStatus();
    initializeApp();
    
    // Debug: Check if logout button exists
    const logoutButton = document.querySelector('[onclick="handleLogout()"]');
    console.log('Logout button found:', logoutButton);
});

// Check authentication status
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('flint_logged_in');
    const loginSection = document.getElementById('loginSection');
    const mainApplication = document.getElementById('mainApplication');
    
    if (isLoggedIn === 'true') {
        // User is logged in, show main application
        loginSection.style.display = 'none';
        mainApplication.style.display = 'block';
        setTimeout(() => {
            mainApplication.classList.add('show');
        }, 100);
    } else {
        // User is not logged in, show login form
        loginSection.style.display = 'flex';
        mainApplication.style.display = 'none';
    }
}

// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginFormElement');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    const signupForm = document.getElementById('signupFormElement');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    const forgotPasswordForm = document.getElementById('forgotPasswordFormElement');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }
});

// Login function
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Simple authentication (in real app, this would be server-side)
    if (username && password) {
        // For demo purposes, accept any non-empty credentials
        // In production, this would validate against a secure backend
        
        // Store login status
        localStorage.setItem('flint_logged_in', 'true');
        localStorage.setItem('flint_username', username);
        
        if (rememberMe) {
            localStorage.setItem('flint_remember_me', 'true');
        }
        
        // Show success and transition to main app
        showLoginSuccess();
        
    } else {
        showLoginError('Please enter both username and password');
    }
}

// Show login success and transition
function showLoginSuccess() {
    const loginBtn = document.querySelector('.login-btn');
    const originalText = loginBtn.innerHTML;
    
    // Show loading state
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Logging in...';
    loginBtn.disabled = true;
    
    setTimeout(() => {
        // Hide login section and show main application
        const loginSection = document.getElementById('loginSection');
        const mainApplication = document.getElementById('mainApplication');
        
        loginSection.style.display = 'none';
        mainApplication.style.display = 'block';
        
        setTimeout(() => {
            mainApplication.classList.add('show');
        }, 100);
        
        // Reset button
        loginBtn.innerHTML = originalText;
        loginBtn.disabled = false;
        
        // Clear form
        document.getElementById('loginForm').reset();
        
    }, 1500);
}

// Show login error
function showLoginError(message) {
    // Remove any existing error
    const existingError = document.querySelector('.login-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'login-error alert alert-danger mt-3';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle me-2"></i>${message}`;
    
    // Add to login form
    const loginForm = document.getElementById('loginFormElement');
    loginForm.appendChild(errorDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Handle logout
function handleLogout() {
    console.log('handleLogout function called');
    
    // Show confirmation
    if (confirm('Are you sure you want to logout?')) {
        console.log('User confirmed logout');
        
        // Clear login data
        localStorage.removeItem('flint_logged_in');
        localStorage.removeItem('flint_username');
        localStorage.removeItem('flint_remember_me');
        
        // Show logout animation
        const mainApplication = document.getElementById('mainApplication');
        if (mainApplication) {
            mainApplication.classList.remove('show');
            
            setTimeout(() => {
                // Hide main application and show login
                mainApplication.style.display = 'none';
                const loginSection = document.getElementById('loginSection');
                if (loginSection) {
                    loginSection.style.display = 'flex';
                }
            }, 500);
        }
    }
}

// Ensure handleLogout is globally available
window.handleLogout = handleLogout;

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('passwordToggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        toggleIcon.className = 'fas fa-eye';
    }
}

// Make togglePassword globally available
window.togglePassword = togglePassword;

// ================================
// SIGNUP, FORGOT PASSWORD & FORM SWITCHING
// ================================

// Show Login Form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'none';
}

// Show Signup Form
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('forgotPasswordForm').style.display = 'none';
}

// Show Forgot Password Form
function showForgotPassword() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validation
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        showSignupError('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        showSignupError('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        showSignupError('Password must be at least 6 characters long');
        return;
    }
    
    if (!agreeTerms) {
        showSignupError('Please agree to the Terms & Conditions');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showSignupError('Please enter a valid email address');
        return;
    }
    
    // Show success and simulate account creation
    showSignupSuccess(firstName, lastName, email);
}

// Show signup success
function showSignupSuccess(firstName, lastName, email) {
    const signupBtn = document.querySelector('#signupFormElement .login-btn');
    const originalText = signupBtn.innerHTML;
    
    // Show loading state
    signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Creating Account...';
    signupBtn.disabled = true;
    
    setTimeout(() => {
        // Store user info
        localStorage.setItem('flint_logged_in', 'true');
        localStorage.setItem('flint_user_email', email);
        localStorage.setItem('flint_username', `${firstName} ${lastName}`);
        
        // Show success message
        showSignupError(`Account created successfully! Welcome, ${firstName}!`, 'success');
        
        setTimeout(() => {
            // Hide login section and show main application
            const loginSection = document.getElementById('loginSection');
            const mainApplication = document.getElementById('mainApplication');
            
            loginSection.style.display = 'none';
            mainApplication.style.display = 'block';
            
            setTimeout(() => {
                mainApplication.classList.add('show');
            }, 100);
            
            // Reset form
            document.getElementById('signupFormElement').reset();
            signupBtn.innerHTML = originalText;
            signupBtn.disabled = false;
        }, 2000);
    }, 2000);
}

// Show signup error/success
function showSignupError(message, type = 'error') {
    // Remove existing messages
    const existingError = document.querySelector('#signupFormElement .login-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create message
    const errorDiv = document.createElement('div');
    errorDiv.className = `login-error alert ${type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`;
    const icon = type === 'success' ? 'check-circle' : 'exclamation-triangle';
    errorDiv.innerHTML = `<i class="fas fa-${icon} me-2"></i>${message}`;
    
    // Add to signup form
    const signupForm = document.getElementById('signupFormElement');
    signupForm.appendChild(errorDiv);
    
    // Remove after 5 seconds (unless it's success message)
    if (type !== 'success') {
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
}

// Handle Forgot Password
function handleForgotPassword(event) {
    event.preventDefault();
    
    const email = document.getElementById('resetEmail').value;
    
    if (!email) {
        showForgotPasswordError('Please enter your email address');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showForgotPasswordError('Please enter a valid email address');
        return;
    }
    
    // Show success
    showForgotPasswordSuccess(email);
}

// Show forgot password success
function showForgotPasswordSuccess(email) {
    const resetBtn = document.querySelector('#forgotPasswordFormElement .login-btn');
    const originalText = resetBtn.innerHTML;
    
    // Show loading state
    resetBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    resetBtn.disabled = true;
    
    setTimeout(() => {
        // Show success message
        showForgotPasswordError(`Password reset link sent to ${email}! Check your inbox.`, 'success');
        
        setTimeout(() => {
            // Go back to login form
            showLogin();
            
            // Reset form
            document.getElementById('forgotPasswordFormElement').reset();
            resetBtn.innerHTML = originalText;
            resetBtn.disabled = false;
        }, 3000);
    }, 2000);
}

// Show forgot password error/success
function showForgotPasswordError(message, type = 'error') {
    // Remove existing messages
    const existingError = document.querySelector('#forgotPasswordFormElement .login-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create message
    const errorDiv = document.createElement('div');
    errorDiv.className = `login-error alert ${type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`;
    const icon = type === 'success' ? 'check-circle' : 'exclamation-triangle';
    errorDiv.innerHTML = `<i class="fas fa-${icon} me-2"></i>${message}`;
    
    // Add to forgot password form
    const forgotForm = document.getElementById('forgotPasswordFormElement');
    forgotForm.appendChild(errorDiv);
    
    // Remove after 5 seconds (unless it's success message)
    if (type !== 'success') {
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
}

// Toggle password visibility for signup forms
function toggleSignupPassword() {
    const passwordInput = document.getElementById('signupPassword');
    const toggleIcon = document.getElementById('signupPasswordToggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        toggleIcon.className = 'fas fa-eye';
    }
}

function toggleConfirmPassword() {
    const passwordInput = document.getElementById('confirmPassword');
    const toggleIcon = document.getElementById('confirmPasswordToggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        toggleIcon.className = 'fas fa-eye';
    }
}

// Make functions globally available
window.showLogin = showLogin;
window.showSignup = showSignup;
window.showForgotPassword = showForgotPassword;
window.toggleSignupPassword = toggleSignupPassword;
window.toggleConfirmPassword = toggleConfirmPassword;

// Initialize app after authentication
function initializeApp() {
    // Only run if user is logged in
    if (localStorage.getItem('flint_logged_in') === 'true') {
        // Update user display name if available
        const username = localStorage.getItem('flint_username');
        if (username) {
            const userDisplayElements = document.querySelectorAll('.user-display-name');
            userDisplayElements.forEach(element => {
                element.textContent = username;
            });
            
            // Update avatar with username
            const avatarElements = document.querySelectorAll('.user-avatar');
            avatarElements.forEach(element => {
                element.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=FFAF9C&color=4D0032&bold=true&size=40`;
            });
        }
    }
}

// Application Data
const appData = {
  "flint_values": [
    {
      "title": "Trust",
      "description": "Building lasting relationships through transparency and reliability",
      "icon": "fa-handshake"
    },
    {
      "title": "Integrity", 
      "description": "Maintaining the highest ethical standards in all our dealings",
      "icon": "fa-shield-alt"
    },
    {
      "title": "Excellence",
      "description": "Delivering exceptional service and outcomes for every client",
      "icon": "fa-star"
    },
    {
      "title": "Innovation",
      "description": "Leveraging cutting-edge technology and processes",
      "icon": "fa-lightbulb"
    },
    {
      "title": "Community",
      "description": "Supporting and growing together as one Flint family",
      "icon": "fa-users-cog"
    },
    {
      "title": "Growth",
      "description": "Continuous learning and development for lasting success",
      "icon": "fa-chart-line"
    }
  ],
  "tech_stack": [
    {
      "name": "HubSpot",
      "description": "CRM and Marketing Automation",
      "icon": "fa-chart-line"
    },
    {
      "name": "BrokerEngine",
      "description": "Loan Origination Platform", 
      "icon": "fa-cogs"
    },
    {
      "name": "AOL",
      "description": "Application Processing System",
      "icon": "fa-file-alt"
    },
    {
      "name": "FlintEngine",
      "description": "Back Office Support Team",
      "icon": "fa-users"
    },
    {
      "name": "FlintMedia",
      "description": "Marketing and Content Platform",
      "icon": "fa-bullhorn"
    }
  ],
  "onboarding_steps": [
    {
      "step": 1,
      "title": "Welcome & Introduction",
      "description": "Learn about Flint's mission, values, and unique business model",
      "estimated_time": "30 minutes",
      "icon": "fa-play-circle"
    },
    {
      "step": 2, 
      "title": "Legal & Compliance Setup",
      "description": "Complete legal requirements, ABN setup, and compliance documentation",
      "estimated_time": "45 minutes",
      "icon": "fa-gavel"
    },
    {
      "step": 3,
      "title": "Accounting & Financial Orientation", 
      "description": "Set up accounting systems, understand revenue flows and financial planning",
      "estimated_time": "60 minutes",
      "icon": "fa-calculator"
    },
    {
      "step": 4,
      "title": "Operational Training",
      "description": "Master Flint's technology stack and operational processes",
      "estimated_time": "90 minutes",
      "icon": "fa-cogs"
    },
    {
      "step": 5,
      "title": "Branding & Marketing Launch",
      "description": "Develop personal brand and launch marketing campaigns",
      "estimated_time": "75 minutes",
      "icon": "fa-bullhorn"
    },
    {
      "step": 6,
      "title": "Partnership & Growth Strategy",
      "description": "Build strategic partnerships and develop growth plans",
      "estimated_time": "60 minutes",
      "icon": "fa-handshake"
    },
    {
      "step": 7,
      "title": "Continuous Support & Feedback",
      "description": "Access ongoing support and feedback mechanisms", 
      "estimated_time": "30 minutes",
      "icon": "fa-headset"
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Mitchell",
      "role": "Flint Director, Sydney",
      "quote": "Joining Flint transformed my business. The support system and technology are unmatched.",
      "rating": 5
    },
    {
      "name": "Michael Chen", 
      "role": "Flint Director, Melbourne",
      "quote": "The Directors model gives me complete control while having enterprise-level support.",
      "rating": 5
    },
    {
      "name": "Emma Thompson",
      "role": "Flint Director, Brisbane", 
      "quote": "Best decision I made for my mortgage broking career. The results speak for themselves.",
      "rating": 5
    }
  ],
  "support_channels": [
    {
      "name": "Live Chat",
      "description": "Instant support during business hours",
      "icon": "fa-comments",
      "availability": "Mon-Fri 9AM-6PM AEST"
    },
    {
      "name": "Phone Support",
      "description": "Direct line to Flint support team", 
      "icon": "fa-phone",
      "number": "1300 FLINT"
    },
    {
      "name": "Slack Community",
      "description": "Connect with other Flint Directors",
      "icon": "fa-slack",
      "members": "150+ active members"
    },
    {
      "name": "Email Support",
      "description": "Detailed support via email",
      "icon": "fa-envelope", 
      "email": "support@flintgroup.au"
    }
  ]
};

// Global Variables
let currentSection = 'landing';
let completedSteps = new Set();

// Journey Progress System - Total 100 Points
const journeyProgress = {
  stepPoints: {
    1: 10,  // Welcome & Introduction
    2: 25,  // Legal & Ownership
    3: 20,  // Financial Setup & Revenue
    4: 15,  // Technology & Tools
    5: 10,  // Branding & Marketing
    6: 10,  // Operations & Compliance
    7: 10   // Launch Preparation
  },
  
  // Calculate total earned points
  getTotalPoints() {
    let total = 0;
    completedSteps.forEach(step => {
      total += this.stepPoints[step] || 0;
    });
    return total;
  },
  
  // Calculate overall percentage
  getOverallPercentage() {
    return Math.round((this.getTotalPoints() / 100) * 100);
  },
  
  // Get step completion status
  getStepStatus(stepNumber) {
    if (completedSteps.has(stepNumber)) {
      return 'completed';
    } else if (stepNumber === this.getCurrentStep()) {
      return 'current';
    } else {
      return 'pending';
    }
  },
  
  // Get current step (next incomplete step)
  getCurrentStep() {
    for (let i = 1; i <= 7; i++) {
      if (!completedSteps.has(i)) {
        return i;
      }
    }
    return 7; // All completed
  },
  
  // Update progress display
  updateDisplay() {
    const totalPoints = this.getTotalPoints();
    const percentage = this.getOverallPercentage();
    
    // Update main progress circle
    $('.progress-percentage').text(`${percentage}%`);
    
    // Update progress ring visual
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
      const circumference = 2 * Math.PI * 25; // radius is 25
      const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
      circle.style.strokeDasharray = strokeDasharray;
    }
    
    // Update stats
    $('.stat-number').first().text(totalPoints);
    $('.stat-label').first().text('Points Earned');
    
    // Update individual step cards
    this.updateStepCards();
  },
  
  // Update step cards based on completion status
  updateStepCards() {
    for (let stepNum = 1; stepNum <= 7; stepNum++) {
      const card = $(`.journey-card[onclick*="step${stepNum}"]`);
      const status = this.getStepStatus(stepNum);
      
      // Remove all status classes
      card.removeClass('completed current pending');
      
      // Add current status class
      card.addClass(status);
      
      // Update step icon
      const stepIcon = card.find('.step-icon');
      stepIcon.removeClass('completed current pending').addClass(status);
      
      // Update status badge
      const statusBadge = card.find('.status-badge');
      const pointsSpan = card.find('.points');
      
      if (status === 'completed') {
        statusBadge.html('Completed');
        statusBadge.removeClass('current pending').addClass('completed');
      } else if (status === 'current') {
        statusBadge.html('<i class="fas fa-play"></i> Available');
        statusBadge.removeClass('completed pending').addClass('current');
      } else {
        statusBadge.html('<i class="fas fa-lock"></i> Locked');
        statusBadge.removeClass('completed current').addClass('pending');
      }
    }
  }
};

// Initialize when DOM is ready
$(document).ready(function() {
    console.log('Initializing Flint Directors Portal...');
    
    // Load saved progress
    loadProgress();
    console.log('After loadProgress - completedSteps:', Array.from(completedSteps));
    console.log('Initial highest unlocked step:', highestUnlockedStep());
    
    // Generate dynamic content
    generateDynamicContent();
    
    // Setup dark mode
    setupDarkMode();
    
    // Update progress display using new journey progress system
    journeyProgress.updateDisplay();
    
    // Update navigation step status
    updateNavigationStepStatus();
    
    // Update home page step cards
    updateHomePageStepCards();
    
    // Setup mobile navigation
    updateMobileNextButton();
    
    console.log('Flint Directors Portal initialized successfully');
    
    // Update all step navigation onclick attributes
    updateAllStepNavigationLinks();
    
    // Initialize step navigation UI
    updateStepNavigationUI();
});

// Navigation Function - Main function for section switching with step access control
function navigateToSection(sectionId) {
    console.log(`Navigating to section: ${sectionId}`);
    
    // Check if it's a step and if user has access
    if (sectionId.startsWith('step')) {
        const stepNumber = parseInt(sectionId.replace('step', ''));
        if (!isStepAccessible(stepNumber)) {
            // Show access denied notification
            showNotification(`Step ${stepNumber} is locked. Complete previous steps first!`, 'warning');
            return false;
        }
    }
    
    // Hide all sections
    $('.section-page').removeClass('active');
    
    // Show target section
    $('#' + sectionId).addClass('active');
    
    // Update navigation active state
    $('.navbar-nav .nav-link').removeClass('active');
    $('.navbar-nav a[onclick*="' + sectionId + '"]').addClass('active');
    
    // Update current section
    currentSection = sectionId;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update mobile button
    updateMobileNextButton();
    
    // Update step progress if viewing a step
    updateStepProgress();
    
    // Update step navigation UI
    if (sectionId.startsWith('step')) {
        const stepNumber = parseInt(sectionId.replace('step', ''));
        updateStepNavigationUI(stepNumber);
    }
    
    return false; // Prevent any default action
}


/* === Ascending step logic (robust) === */
function highestUnlockedStep() {
    let max = 0;
    if (completedSteps && completedSteps.size) {
        completedSteps.forEach(n => { if (n > max) max = n; });
    }
    // Next available step is highest completed + 1, but at least step 1
    const next = Math.min(max + 1, 7);
    return Math.max(next, 1);
}

function isStepAccessible(stepNum) { 
    // Step is accessible if it's <= highest unlocked step
    return stepNum <= highestUnlockedStep(); 
}
// Complete Step Function
function completeStep(stepNumber) {
    console.log(`Completing step: ${stepNumber}`);
    console.log('Before completion - completedSteps:', Array.from(completedSteps));
    
    // Add to completed steps
    completedSteps.add(stepNumber);
    console.log('After completion - completedSteps:', Array.from(completedSteps));
    console.log('Highest unlocked step:', highestUnlockedStep());
    
    // Save progress
    saveProgress();
    
    // Update displays using new journey progress system
    journeyProgress.updateDisplay();
    
    // Update navigation step status
    updateNavigationStepStatus();
    
    // Update home page step cards
    updateHomePageStepCards();
    
    // Update step navigation UI
    updateStepNavigationUI();
    
    // Show completion notification
    showNotification(`Step ${stepNumber} completed! Step ${stepNumber + 1} is now available!`, 'success');
    
    // Check if all steps completed
    if (completedSteps.size === 7) {
        setTimeout(() => {
            showCompletionModal();
        }, 1500);
    } else {
        // Auto-navigate to next step after a delay
        const nextStep = Math.min(stepNumber + 1, 7);
        if (nextStep <= 7) {
            setTimeout(() => {
                console.log(`Auto-navigating to step ${nextStep}`);
                navigateToSection(`step${nextStep}`);
            }, 2000); // 2 second delay for user to see the notification
        }
    }
}

// Save Step Progress
function saveStep(stepNumber) {
    console.log(`Saving progress for step ${stepNumber}`);
    
    // Save form data for the specific step
    const formId = `form-step${stepNumber}`;
    const form = document.getElementById(formId);
    
    if (form) {
        const formData = new FormData(form);
        const data = {};
        
        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Save to localStorage
        localStorage.setItem(`step${stepNumber}_data`, JSON.stringify(data));
        localStorage.setItem(`step${stepNumber}_saved`, new Date().toISOString());
        
        // Show save confirmation
        showNotification(`Step ${stepNumber} progress saved successfully!`, 'success');
        
        console.log(`Step ${stepNumber} data saved:`, data);
    } else {
        console.warn(`Form not found for step ${stepNumber}`);
        showNotification(`Unable to save Step ${stepNumber} - form not found`, 'warning');
    }
}

// Show Video Modal
function showVideoModal() {
    console.log('Showing video modal');
    $('#videoModal').modal('show');
}

// Open YouTube Video in new tab
function openYouTubeVideo(videoId) {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, '_blank');
}

// Play YouTube Video inline in container
function playYouTubeInline(videoId, containerId) {
    const container = document.getElementById(containerId) || document.querySelector('.video-player');
    if (!container) return;
    
    // Store original dimensions
    const originalWidth = container.offsetWidth;
    const originalHeight = container.offsetHeight;
    const computedStyle = window.getComputedStyle(container);
    const originalBorderRadius = computedStyle.borderRadius;
    
    // Use a working video ID if the current one doesn't work
    const workingVideoId = videoId === 'dQw4w9WgXcQ' ? 'M7lc1UVf-VE' : videoId;
    
    // Create iframe for YouTube video
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${workingVideoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    
    // Set exact dimensions to match original container
    iframe.style.width = originalWidth + 'px';
    iframe.style.height = originalHeight + 'px';
    iframe.style.borderRadius = originalBorderRadius;
    iframe.style.border = 'none';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    
    // Maintain container exact size
    container.style.width = originalWidth + 'px';
    container.style.height = originalHeight + 'px';
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.display = 'block';
    
    // Replace container content with iframe
    container.innerHTML = '';
    container.appendChild(iframe);
    container.classList.add('playing');
    
    // Disable hover effects when playing
    container.style.cursor = 'default';
    container.style.transform = 'none';
    container.style.transition = 'none';
}

// Show FAQ Modal
function showFaqModal() {
    console.log('Showing FAQ modal');
    $('#faqModal').modal('show');
}

// Show Completion Modal
function showCompletionModal() {
    console.log('Showing completion modal');
    
    // Mark all steps as completed
    for (let i = 1; i <= 7; i++) {
        completedSteps.add(i);
    }
    
    saveProgress();
    updateProgressDisplay();
    generateOnboardingSteps();
    
    $('#completionModal').modal('show');
}

// Generate Dynamic Content
function generateDynamicContent() {
    generateOnboardingSteps();
    generateTestimonials();
    generateSupportChannels();
    generateValuesGrid();
    generateTechStackGrid();
    generateSupportResourcesGrid();
}

function generateOnboardingSteps() {
    const container = $('#onboardingSteps');
    if (container.length === 0) return;
    
    container.empty();
    
    // Display only first 6 steps in the main grid
    const mainSteps = appData.onboarding_steps.slice(0, 6);
    
    mainSteps.forEach(step => {
        const isCompleted = completedSteps.has(step.step);
        const statusBadge = isCompleted ? 
            '<span class="status status--success">Completed</span>' :
            '<span class="status status--info">Not Started</span>';
        
        const stepCard = `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="step-card" onclick="navigateToSection('step${step.step}')">
                    <div class="step-card-header">
                        <div class="step-number">
                            <i class="fas ${step.icon || 'fa-circle'}"></i>
                        </div>
                        <div>
                            <h4>${step.title}</h4>
                            <p class="lead">${step.description}</p>
                        </div>
                    </div>
                    <div class="step-meta">
                        <span class="step-time"><i class="fas fa-clock me-1"></i>${step.estimated_time}</span>
                        ${statusBadge}
                    </div>
                </div>
            </div>
        `;
        container.append(stepCard);
    });
}

function generateTestimonials() {
    const container = $('#testimonialsContainer');
    if (container.length === 0) return;
    
    container.empty();
    
    appData.testimonials.forEach((testimonial, index) => {
        const isActive = index === 0 ? 'active' : '';
        const stars = '★'.repeat(testimonial.rating);
        
        const testimonialSlide = `
            <div class="carousel-item ${isActive}">
                <div class="testimonial-item">
                    <div class="testimonial-quote">
                        "${testimonial.quote}"
                    </div>
                    <div class="testimonial-author">${testimonial.name}</div>
                    <div class="testimonial-role">${testimonial.role}</div>
                    <div class="testimonial-rating">${stars}</div>
                </div>
            </div>
        `;
        container.append(testimonialSlide);
    });
}

function generateSupportChannels() {
    const container = $('#supportChannels');
    if (container.length === 0) return;
    
    container.empty();
    
    appData.support_channels.forEach(channel => {
        const supportItem = `
            <div class="support-item">
                <div class="support-icon">
                    <i class="fas ${channel.icon}"></i>
                </div>
                <div class="support-details">
                    <h6>${channel.name}</h6>
                    <p>${channel.description}</p>
                    ${channel.availability ? `<small class="d-block">${channel.availability}</small>` : ''}
                    ${channel.number ? `<small class="d-block">${channel.number}</small>` : ''}
                    ${channel.email ? `<small class="d-block">${channel.email}</small>` : ''}
                    ${channel.members ? `<small class="d-block">${channel.members}</small>` : ''}
                </div>
            </div>
        `;
        container.append(supportItem);
    });
}

function generateValuesGrid() {
    const container = $('#valuesGrid');
    if (container.length === 0) return;
    
    container.empty();
    
    appData.flint_values.forEach((value, index) => {
        const valueCard = `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="value-card">
                    <div class="value-icon">
                        <i class="fas ${value.icon}"></i>
                    </div>
                    <h4>${value.title}</h4>
                    <p>${value.description}</p>
                </div>
            </div>
        `;
        container.append(valueCard);
    });
}

function generateTechStackGrid() {
    const container = $('#techStackGrid');
    if (container.length === 0) return;
    
    container.empty();
    
    appData.tech_stack.forEach(tech => {
        const techCard = `
            <div class="col-lg-4 col-md-6">
                <div class="tech-item">
                    <div class="tech-icon">
                        <i class="fas ${tech.icon}"></i>
                    </div>
                    <h5>${tech.name}</h5>
                    <p>${tech.description}</p>
                </div>
            </div>
        `;
        container.append(techCard);
    });
}

function generateSupportResourcesGrid() {
    const container = $('#supportResourcesGrid');
    if (container.length === 0) return;
    
    container.empty();
    
    appData.support_channels.forEach(channel => {
        const resourceCard = `
            <div class="col-lg-3 col-md-6">
                <div class="card h-100">
                    <div class="card__body text-center">
                        <i class="fas ${channel.icon} fa-2x mb-3 text-primary"></i>
                        <h5>${channel.name}</h5>
                        <p>${channel.description}</p>
                        <button class="btn btn--sm btn--primary">Access Now</button>
                    </div>
                </div>
            </div>
        `;
        container.append(resourceCard);
    });
}

// Progress Management
function updateProgressDisplay() {
    const totalSteps = appData.onboarding_steps.length;
    const completed = completedSteps.size;
    const overallProgress = Math.round((completed / totalSteps) * 100);
    
    // Update progress circles
    $('.progress-circle .progress-text').text(`${overallProgress}%`);
    
    // Update progress bar
    $('.progress-bar-fill').css('width', `${overallProgress}%`);
    
    // Update step indicators
    appData.onboarding_steps.forEach(step => {
        const indicator = $(`.step-indicator[data-step="${step.step}"]`);
        if (completedSteps.has(step.step)) {
            indicator.addClass('completed');
        } else {
            indicator.removeClass('completed');
        }
    });
}

function updateStepProgress() {
    // Update individual step progress
    const stepMatch = currentSection.match(/step(\d+)/);
    if (stepMatch) {
        const stepNumber = parseInt(stepMatch[1]);
        const progress = completedSteps.has(stepNumber) ? 100 : 25;
        $(`.progress-circle[data-step="${stepNumber}"] .progress-text`).text(`${progress}%`);
    }
}

// Mobile Navigation
function updateMobileNextButton() {
    const btn = $('#mobileNextBtn');
    const stepMatch = currentSection.match(/step(\d+)/);
    
    if (stepMatch) {
        const currentStepNum = parseInt(stepMatch[1]);
        const nextStepNum = currentStepNum + 1;
        
        if (nextStepNum <= 7) {
            btn.text(`Next Step (${nextStepNum})`);
            btn.off('click').on('click', function() {
                completeStep(currentStepNum);
                navigateToSection(`step${nextStepNum}`);
            });
            btn.show();
        } else {
            btn.text('Complete Onboarding');
            btn.off('click').on('click', function() {
                completeStep(currentStepNum);
                showCompletionModal();
            });
            btn.show();
        }
    } else if (currentSection === 'landing') {
        btn.text('Start Onboarding');
        btn.off('click').on('click', function() {
            navigateToSection('step1');
        });
        btn.show();
    } else {
        btn.hide();
    }
}

// Show Notification Function
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    $('.notification').remove();
    
    // Create notification element
    const notification = $(`
        <div class="notification notification-${type}">
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" onclick="$(this).parent().remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `);
    
    // Add to body
    $('body').append(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.fadeOut(300, function() {
            $(this).remove();
        });
    }, 5000);
}

// Check Step Access Function
function checkStepAccess(stepNumber) {
    console.log(`Checking access for step ${stepNumber}`);
    console.log('Current completedSteps:', Array.from(completedSteps));
    console.log('Highest unlocked step:', highestUnlockedStep());
    console.log('Is step accessible:', isStepAccessible(stepNumber));
    
    if (isStepAccessible(stepNumber)) {
        console.log(`Access granted for step ${stepNumber}`);
        navigateToSection(`step${stepNumber}`);
        updateStepNavigationUI(stepNumber);
    } else {
        console.log(`Access denied for step ${stepNumber}`);
        showNotification(`Step ${stepNumber} is locked. Complete previous steps first!`, 'warning');
    }
}

// Update Step Navigation UI - Synchronize all step navigation elements
function updateStepNavigationUI(currentStep = null) {
    // If no current step provided, detect from active section
    if (!currentStep) {
        const activeSection = $('.section-page.active').attr('id');
        if (activeSection && activeSection.startsWith('step')) {
            currentStep = parseInt(activeSection.replace('step', ''));
        }
    }
    
    // Update all step navigation instances
    $('.step-navigation').each(function() {
        $(this).find('.step-nav-item').each(function() {
            const $item = $(this);
            const $connector = $item.next('.step-nav-connector');
            const stepNum = parseInt($item.find('.step-number').text());
            
            // Remove all classes first
            $item.removeClass('current completed locked');
            $connector.removeClass('completed');
            
            if (completedSteps.has(stepNum)) {
                // Step completed
                $item.addClass('completed');
                $connector.addClass('completed');
            } else if (stepNum === currentStep) {
                // Current step
                $item.addClass('current');
            } else if (!isStepAccessible(stepNum)) {
                // Step locked
                $item.addClass('locked');
            }
            
            // Update click handler to match access
            if (isStepAccessible(stepNum)) {
                $item.attr('onclick', `checkStepAccess(${stepNum})`);
                $item.css('cursor', 'pointer');
                $item.css('opacity', '1');
            } else {
                $item.attr('onclick', `checkStepAccess(${stepNum})`);
                $item.css('cursor', 'not-allowed');
                $item.css('opacity', '0.5');
            }
        });
    });
}

// Update Navigation Step Status
function updateNavigationStepStatus() {
    for (let stepNum = 1; stepNum <= 7; stepNum++) {
        const stepLink = $(`.step-link[data-step="${stepNum}"]`);
        const stepStatus = $(`#step${stepNum}-status`);
        
        if (completedSteps.has(stepNum)) {
            // Step completed
            stepStatus.text('Completed').removeClass('available locked').addClass('completed');
            stepLink.removeClass('disabled');
        } else if (isStepAccessible(stepNum)) {
            // Step available
            stepStatus.text('Available').removeClass('completed locked').addClass('available');
            stepLink.removeClass('disabled');
        } else {
            // Step locked
            stepStatus.text('🔒 Locked').removeClass('completed available').addClass('locked');
            stepLink.addClass('disabled');
        }
    }
}

// Update Home Page Step Cards
function updateHomePageStepCards() {
    // Update main progress stats
    const totalPoints = journeyProgress.getTotalPoints();
    const percentage = journeyProgress.getOverallPercentage();
    
    // Update progress display
    $('#home-progress-percentage').text(`${percentage}%`);
    $('#home-points-earned').text(totalPoints);
    
    // Update progress ring
    const progressRing = $('.progress-ring-circle');
    if (progressRing.length > 0) {
        const circumference = 2 * Math.PI * 25; // radius is 25
        const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
        progressRing.css('stroke-dasharray', strokeDasharray);
    }
    
    // Update individual step cards
    for (let stepNum = 1; stepNum <= 7; stepNum++) {
        const journeyCard = $(`#journey-step${stepNum}`);
        
        if (journeyCard.length > 0) {
            // Remove all status classes
            journeyCard.removeClass('completed current pending locked');
            
            // Get step elements
            const stepIcon = journeyCard.find('.step-icon');
            const statusBadge = journeyCard.find('.status-badge');
            const pointsSpan = journeyCard.find('.points');
            const continueBtn = journeyCard.find('.continue-btn');
            
            if (completedSteps.has(stepNum)) {
                // Step completed
                journeyCard.addClass('completed');
                stepIcon.removeClass('current pending locked').addClass('completed');
                
                statusBadge.html('Completed');
                statusBadge.removeClass('current pending locked').addClass('completed');
                
                continueBtn.hide();
                
            } else if (isStepAccessible(stepNum)) {
                // Step available
                const currentStep = journeyProgress.getCurrentStep();
                if (stepNum === currentStep) {
                    // Current step (next to be completed)
                    journeyCard.addClass('current');
                    stepIcon.removeClass('completed pending locked').addClass('current');
                    
                    statusBadge.html('<i class="fas fa-play"></i> In Progress');
                    statusBadge.removeClass('completed pending locked').addClass('current');
                    
                    pointsSpan.removeClass('earned available').addClass('earning');
                    pointsSpan.text(`0/${journeyProgress.stepPoints[stepNum]} pts`);
                    
                    continueBtn.show();
                } else {
                    // Available step (can be accessed)
                    journeyCard.addClass('available');
                    stepIcon.removeClass('completed current locked').addClass('available');
                    
                    statusBadge.html('<i class="fas fa-unlock"></i> Available');
                    statusBadge.removeClass('completed current locked').addClass('available');
                    
                    pointsSpan.removeClass('earned earning').addClass('available');
                    pointsSpan.text(`${journeyProgress.stepPoints[stepNum]} pts`);
                    
                    continueBtn.hide();
                }
            } else {
                // Step locked
                journeyCard.addClass('locked');
                stepIcon.removeClass('completed current available').addClass('pending');
                
                statusBadge.html('<i class="fas fa-lock"></i> Locked');
                statusBadge.removeClass('completed current available').addClass('pending');
                
                pointsSpan.removeClass('earned earning').addClass('available');
                pointsSpan.text(`${journeyProgress.stepPoints[stepNum]} pts`);
                
                continueBtn.hide();
            }
        }
    }
    
    // Update step navigation items
    $('.step-nav-item').each(function() {
        const stepNavItem = $(this);
        const onclickAttr = stepNavItem.attr('onclick');
        if (onclickAttr) {
            const stepMatch = onclickAttr.match(/checkStepAccess\((\d+)\)/);
            if (stepMatch) {
                const stepNum = parseInt(stepMatch[1]);
                stepNavItem.removeClass('completed current pending locked');
                
                if (completedSteps.has(stepNum)) {
                    stepNavItem.addClass('completed');
                } else if (isStepAccessible(stepNum)) {
                    if (stepNum === journeyProgress.getCurrentStep()) {
                        stepNavItem.addClass('current');
                    }
                } else {
                    stepNavItem.addClass('locked');
                }
            }
        }
    });
}

// Update All Step Navigation Links
function updateAllStepNavigationLinks() {
    // Update all elements with onclick="navigateToSection('stepX')"
    $('[onclick*="navigateToSection(\'step"]').each(function() {
        const element = $(this);
        const onclick = element.attr('onclick');
        const stepMatch = onclick.match(/navigateToSection\('step(\d+)'\)/);
        
        if (stepMatch) {
            const stepNum = parseInt(stepMatch[1]);
            const newOnclick = onclick.replace(
                `navigateToSection('step${stepNum}')`,
                `checkStepAccess(${stepNum})`
            );
            element.attr('onclick', newOnclick);
        }
    });
    
    // Update all elements with onclick="navigateToSection("stepX")"
    $('[onclick*="navigateToSection(\\"step"]').each(function() {
        const element = $(this);
        const onclick = element.attr('onclick');
        const stepMatch = onclick.match(/navigateToSection\("step(\d+)"\)/);
        
        if (stepMatch) {
            const stepNum = parseInt(stepMatch[1]);
            const newOnclick = onclick.replace(
                `navigateToSection("step${stepNum}")`,
                `checkStepAccess(${stepNum})`
            );
            element.attr('onclick', newOnclick);
        }
    });
}

// Reset Progress Function (for testing)
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
        completedSteps.clear();
        saveProgress();
        journeyProgress.updateDisplay();
        updateNavigationStepStatus();
        updateHomePageStepCards();
        showNotification('Progress has been reset. You can now start from Step 1.', 'info');
        navigateToSection('landing');
    }
}

// Test Complete Step 1 Function (for testing)
function testCompleteStep1() {
    console.log('Testing Step 1 completion...');
    completeStep(1);
}

// Test Complete Step 2 Function (for testing)
function testCompleteStep2() {
    console.log('Testing Step 2 completion...');
    completeStep(2);
}

// Check Current Progress (for debugging)
function checkProgress() {
    console.log('=== CURRENT PROGRESS ===');
    console.log('Completed Steps:', Array.from(completedSteps));
    console.log('Highest Unlocked Step:', highestUnlockedStep());
    console.log('Total Points:', journeyProgress.getTotalPoints());
    console.log('Overall Percentage:', journeyProgress.getOverallPercentage());
    
    for (let i = 1; i <= 7; i++) {
        console.log(`Step ${i} accessible:`, isStepAccessible(i));
    }
}

// Dark Mode
function setupDarkMode() {
    const toggle = $('#darkModeToggle');
    if (toggle.length === 0) return;
    
    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode !== null) {
        setDarkMode(savedMode === 'true');
    } else {
        setDarkMode(prefersDark);
    }
    
    toggle.on('click', function(e) {
        e.preventDefault();
        const isDark = document.documentElement.getAttribute('data-color-scheme') === 'dark';
        setDarkMode(!isDark);
    });
}

function setDarkMode(enabled) {
    const toggle = $('#darkModeToggle');
    
    if (enabled) {
        document.documentElement.setAttribute('data-color-scheme', 'dark');
        toggle.html('<i class="fas fa-sun"></i>');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.setAttribute('data-color-scheme', 'light');
        toggle.html('<i class="fas fa-moon"></i>');
        localStorage.setItem('darkMode', 'false');
    }
}

// Progress Persistence
function saveProgress() {
    const progressData = {
        completedSteps: Array.from(completedSteps)
    };
    localStorage.setItem('flintProgress', JSON.stringify(progressData));
}

function loadProgress() {
    const saved = localStorage.getItem('flintProgress');
    if (saved) {
        try {
            const progressData = JSON.parse(saved);
            completedSteps = new Set(progressData.completedSteps || []);
        } catch (e) {
            console.error('Error loading progress:', e);
            completedSteps = new Set();
        }
    }
}

// Notifications
function showNotification(message, type = 'info') {
    const notification = `
        <div class="notification notification--${type}">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    $('body').append(notification);
    
    setTimeout(() => {
        $('.notification').fadeOut(300, function() {
            $(this).remove();
        });
    }, 3000);
}

// Add notification styles
$('<style>')
    .prop('type', 'text/css')
    .html(`
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-base);
            padding: var(--space-16) var(--space-20);
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: var(--space-12);
            min-width: 300px;
            animation: slideInRight 0.3s ease;
        }
        
        .notification--success {
            border-color: var(--color-success);
            background: var(--color-bg-3);
        }
        
        .notification i {
            color: var(--color-success);
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `)
    .appendTo('head');

// Profile and Settings Functions
function showProfileSettings() {
    alert('Profile settings will be implemented here. This would typically open a profile management modal or page.');
}

function showSettings() {
    alert('Settings panel will be implemented here. This would typically open a settings modal with preferences, notifications, etc.');
}

function showHelp() {
    // Show FAQ modal or help documentation
    showFaqModal();
}

function logout() {
    // Clear any stored user data
    localStorage.removeItem('userProgress');
    localStorage.removeItem('completedSteps');
    
    // Show confirmation
    if (confirm('Are you sure you want to sign out?')) {
        // Redirect to login page
        window.location.href = 'login.html';
    }
    
    return false; // Prevent default link behavior
}

// Support Modal Function
function showSupportModal() {
    const supportModal = new bootstrap.Modal(document.getElementById('supportModal'));
    supportModal.show();
}

console.log('Flint Directors Portal JavaScript loaded successfully');

/* === Overall Progress JS (navbar bar under nav) === */
function updateOverallProgressBar(){
  const total = 7;
  const done = completedSteps ? completedSteps.size : 0;
  const pct = Math.round((done/total)*100);
  const bar = document.getElementById('overallProgressBar');
  const label = document.getElementById('overallProgressLabel');
  if(bar){ bar.style.width = pct + '%'; }
  if(label){ label.textContent = 'Step ' + done + ' of ' + total; }
}
// Decorate journeyProgress.updateDisplay to also update bar & cards
(function(){
  try{
    if (window.journeyProgress && typeof journeyProgress.updateDisplay === 'function'){
      const _origUpd = journeyProgress.updateDisplay.bind(journeyProgress);
      journeyProgress.updateDisplay = function(){
        const r = _origUpd();
        updateOverallProgressBar();
        try { generateOnboardingSteps(); } catch(e){}
        return r;
      }
    } else {
      document.addEventListener('DOMContentLoaded', updateOverallProgressBar);
    }
  } catch(e){}
})();

// ================================
// FORM SAVE FUNCTIONALITY
// ================================

/**
 * Save form data for a specific step
 * @param {string} stepId - The step identifier (e.g., 'step1', 'step2', etc.)
 */
function saveStepForm(stepId) {
    const form = document.getElementById(`form-${stepId}`);
    const saveButton = document.querySelector(`#form-${stepId} .btn-save`);
    
    if (!form || !saveButton) {
        console.error(`Form or save button not found for ${stepId}`);
        return;
    }
    
    // Show saving state
    const originalText = saveButton.innerHTML;
    saveButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Saving...';
    saveButton.classList.add('saving');
    saveButton.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const data = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Add timestamp
    data.savedAt = new Date().toISOString();
    data.stepId = stepId;
    
    // Save to localStorage
    const storageKey = `flint_${stepId}_data`;
    
    try {
        localStorage.setItem(storageKey, JSON.stringify(data));
        
        // Show success state
        setTimeout(() => {
            saveButton.innerHTML = '<i class="fas fa-check me-2"></i>Saved!';
            saveButton.classList.remove('saving');
            saveButton.classList.add('saved');
            
            // Show success notification
            showSaveNotification('Form data saved successfully!', 'success');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                saveButton.innerHTML = originalText;
                saveButton.classList.remove('saved');
                saveButton.disabled = false;
            }, 3000);
            
        }, 1000); // Simulate save delay
        
    } catch (error) {
        console.error('Error saving form data:', error);
        
        // Show error state
        setTimeout(() => {
            saveButton.innerHTML = '<i class="fas fa-exclamation-triangle me-2"></i>Error!';
            saveButton.classList.remove('saving');
            
            // Show error notification
            showSaveNotification('Failed to save form data. Please try again.', 'error');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                saveButton.innerHTML = originalText;
                saveButton.disabled = false;
            }, 3000);
            
        }, 1000);
    }
}

/**
 * Load saved form data for a specific step
 * @param {string} stepId - The step identifier
 */
function loadStepForm(stepId) {
    const form = document.getElementById(`form-${stepId}`);
    const storageKey = `flint_${stepId}_data`;
    
    if (!form) {
        return;
    }
    
    try {
        const savedData = localStorage.getItem(storageKey);
        
        if (savedData) {
            const data = JSON.parse(savedData);
            
            // Populate form fields
            Object.keys(data).forEach(key => {
                if (key === 'savedAt' || key === 'stepId') return;
                
                const field = form.querySelector(`[name="${key}"]`);
                if (field) {
                    if (field.type === 'checkbox') {
                        field.checked = data[key] === 'on' || data[key] === true;
                    } else {
                        field.value = data[key];
                    }
                }
            });
            
            console.log(`Loaded saved data for ${stepId}:`, data);
        }
    } catch (error) {
        console.error(`Error loading saved data for ${stepId}:`, error);
    }
}

/**
 * Show save notification
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('success' or 'error')
 */
function showSaveNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.save-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `save-notification alert alert-${type === 'success' ? 'success' : 'danger'}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease;
    `;
    
    const icon = type === 'success' ? 'check-circle' : 'exclamation-triangle';
    notification.innerHTML = `
        <i class="fas fa-${icon} me-2"></i>${message}
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

/**
 * Get all saved form data
 * @returns {Object} Object containing all saved step data
 */
function getAllSavedData() {
    const allData = {};
    
    for (let i = 1; i <= 7; i++) {
        const stepId = `step${i}`;
        const storageKey = `flint_${stepId}_data`;
        
        try {
            const savedData = localStorage.getItem(storageKey);
            if (savedData) {
                allData[stepId] = JSON.parse(savedData);
            }
        } catch (error) {
            console.error(`Error loading data for ${stepId}:`, error);
        }
    }
    
    return allData;
}

// Make functions globally available
window.saveStepForm = saveStepForm;
window.loadStepForm = loadStepForm;
window.getAllSavedData = getAllSavedData;

// Auto-load saved data when navigating to steps
document.addEventListener('DOMContentLoaded', function() {
    // Load saved data for all steps on page load
    for (let i = 1; i <= 7; i++) {
        loadStepForm(`step${i}`);
    }
});

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .save-notification {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        margin-bottom: 0;
    }
    
    .save-notification .btn-close {
        background: none;
        border: none;
        font-size: 1.2rem;
        opacity: 0.7;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    }
    
    .save-notification .btn-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);
