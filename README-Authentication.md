# Flint Directors Portal - Authentication Flow

## Overview
The portal now implements a proper authentication system where users must login before accessing the main application.

## Entry Point Flow

### 1. **app-entry.html** - Main Entry Point
- This is the new starting page of the application
- Shows a loading screen with Flint branding
- Automatically checks if user is already logged in
- Redirects to appropriate page based on authentication status

### 2. **Authentication Check Logic**
- **If user is logged in AND session is valid (< 24 hours)**: Redirects to `index.html` (Dashboard)
- **If user is NOT logged in OR session expired**: Redirects to `login.html`

### 3. **Login Process (login.html)**
- User enters email and password
- On successful login:
  - Sets authentication flags in localStorage:
    - `flint_logged_in`: 'true'
    - `flint_login_timestamp`: Current timestamp
    - `flint_user_email`: User's email address
  - Shows success notification
  - Redirects to `index.html` after 1.5 seconds

### 4. **Protected Pages (index.html, resources.html)**
- Both pages check authentication on load
- If not authenticated or session expired:
  - Clears localStorage
  - Redirects to `app-entry.html`
- If authenticated:
  - Updates user display with email-based name
  - Shows personalized content

### 5. **Logout Process**
- Available from user profile dropdown on both pages
- Clears all authentication data from localStorage
- Shows logout notification
- Redirects to `app-entry.html`

## Session Management

### Session Duration
- Sessions last for 24 hours
- After 24 hours, users are automatically logged out

### User Display
- User's display name is derived from their email (part before @)
- Avatar is generated using the display name
- Welcome messages are personalized

## File Structure

```
flint-directors-portal/
├── app-entry.html          # Main entry point (NEW)
├── login.html              # Login page (UPDATED)
├── index.html              # Dashboard (PROTECTED)
├── resources.html          # Resources page (PROTECTED)
├── app.js                  # Main JavaScript (UPDATED)
└── style.css               # Styles (UPDATED)
```

## Usage Instructions

### For Users
1. Navigate to the portal
2. Will be automatically redirected to login if not authenticated
3. Enter credentials on login page
4. Access dashboard and resources after successful login
5. Session persists for 24 hours
6. Use "Sign Out" to manually logout

### For Development
1. Start with `app-entry.html` as the main entry point
2. All protected pages automatically enforce authentication
3. User data is stored in localStorage for session management
4. Logout functionality is available on all protected pages

## Security Features

1. **Session Expiration**: 24-hour automatic logout
2. **Authentication Guards**: All protected pages check auth status
3. **Automatic Cleanup**: Expired sessions are automatically cleared
4. **Secure Logout**: Complete data cleanup on logout
5. **Entry Point Control**: Single entry point manages flow

## Navigation Flow

```
app-entry.html
    ↓
    ├── [Not Logged In] → login.html → [Success] → index.html
    └── [Logged In] → index.html
                          ↓
                          ├── resources.html (accessible)
                          └── [Logout] → app-entry.html
```
