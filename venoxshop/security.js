// 🔒 CLAY GROUP - SICHERHEITSSYSTEM 🔒

// Sicherheitskonfiguration
const SECURITY_CONFIG = {
  // Anti-Debugging
  antiDebug: true,
  // Anti-Inspect
  antiInspect: true,
  // Anti-Console
  antiConsole: true,
  // Anti-RightClick
  antiRightClick: true,
  // Anti-DevTools
  antiDevTools: true,
  // Rate Limiting
  rateLimit: {
    enabled: true,
    maxRequests: 100,
    timeWindow: 60000, // 1 Minute
  },
  // Session Protection
  sessionProtection: true,
  // Data Encryption
  encryption: true,
  // IP Blocking (basic)
  ipBlocking: true,
  // Content Security Policy
  csp: true,
  // XSS Protection
  xssProtection: true,
  // CSRF Protection
  csrfProtection: true
}

// 🔒 SICHERHEITSSYSTEM INITIALISIERUNG
class SecuritySystem {
  constructor() {
    this.requestCount = 0
    this.lastRequestTime = Date.now()
    this.blockedIPs = new Set()
    this.suspiciousActivities = []
    this.sessionToken = this.generateSessionToken()
    
    this.init()
  }

  init() {
    if (SECURITY_CONFIG.antiDebug) this.enableAntiDebug()
    if (SECURITY_CONFIG.antiInspect) this.enableAntiInspect()
    if (SECURITY_CONFIG.antiConsole) this.enableAntiConsole()
    if (SECURITY_CONFIG.antiRightClick) this.enableAntiRightClick()
    if (SECURITY_CONFIG.antiDevTools) this.enableAntiDevTools()
    if (SECURITY_CONFIG.sessionProtection) this.enableSessionProtection()
    if (SECURITY_CONFIG.encryption) this.enableEncryption()
    if (SECURITY_CONFIG.csp) this.enableCSP()
    if (SECURITY_CONFIG.xssProtection) this.enableXSSProtection()
    if (SECURITY_CONFIG.csrfProtection) this.enableCSRFProtection()
    
    this.startMonitoring()
  }

  // 🔍 ANTI-DEBUGGING
  enableAntiDebug() {
    const debuggerCheck = () => {
      const startTime = performance.now()
      debugger
      const endTime = performance.now()
      
      if (endTime - startTime > 100) {
        this.handleSecurityViolation('Debugger detected')
        this.redirectToBlockedPage()
      }
    }

    setInterval(debuggerCheck, 1000)
    
    // Zusätzliche Anti-Debugging Methoden
    const originalConsole = console
    console = {
      ...originalConsole,
      log: () => this.handleSecurityViolation('Console access attempted'),
      warn: () => this.handleSecurityViolation('Console access attempted'),
      error: () => this.handleSecurityViolation('Console access attempted'),
      info: () => this.handleSecurityViolation('Console access attempted')
    }
  }

  // 🔍 ANTI-INSPECT
  enableAntiInspect() {
    let devtools = { open: false, orientation: null }
    
    setInterval(() => {
      const threshold = 160
      const widthThreshold = window.outerWidth - window.innerWidth > threshold
      const heightThreshold = window.outerHeight - window.innerHeight > threshold
      
      if (widthThreshold || heightThreshold) {
        if (!devtools.open) {
          devtools.open = true
          this.handleSecurityViolation('DevTools detected')
          this.redirectToBlockedPage()
        }
      } else {
        devtools.open = false
      }
    }, 500)
  }

  // 🔍 ANTI-CONSOLE
  enableAntiConsole() {
    // Console Override
    const noop = () => {}
    const methods = ['log', 'warn', 'error', 'info', 'debug', 'trace', 'dir', 'dirxml', 'group', 'groupCollapsed', 'groupEnd', 'time', 'timeEnd', 'timeLog', 'profile', 'profileEnd', 'count', 'countReset', 'clear', 'table', 'assert']
    
    methods.forEach(method => {
      console[method] = () => {
        this.handleSecurityViolation(`Console method ${method} called`)
        return noop()
      }
    })
  }

  // 🔍 ANTI-RIGHT-CLICK
  enableAntiRightClick() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      this.handleSecurityViolation('Right-click attempted')
      return false
    })
    
    document.addEventListener('selectstart', (e) => {
      e.preventDefault()
      this.handleSecurityViolation('Text selection attempted')
      return false
    })
    
    document.addEventListener('dragstart', (e) => {
      e.preventDefault()
      this.handleSecurityViolation('Drag attempted')
      return false
    })
  }

  // 🔍 ANTI-DEVTOOLS
  enableAntiDevTools() {
    // Element Inspector Detection
    let devtools = false
    
    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160
      const heightThreshold = window.outerHeight - window.innerHeight > 160
      
      if (widthThreshold || heightThreshold) {
        if (!devtools) {
          devtools = true
          this.handleSecurityViolation('DevTools opened')
          this.redirectToBlockedPage()
        }
      } else {
        devtools = false
      }
    }
    
    setInterval(detectDevTools, 1000)
    
    // Firebug Detection
    if (window.console && (window.console.firebug || window.console.exception)) {
      this.handleSecurityViolation('Firebug detected')
      this.redirectToBlockedPage()
    }
  }

  // 🔐 SESSION PROTECTION
  enableSessionProtection() {
    // Session Token Validation
    if (!this.validateSessionToken()) {
      this.handleSecurityViolation('Invalid session token')
      this.redirectToBlockedPage()
    }
    
    // Session Timeout
    let lastActivity = Date.now()
    const sessionTimeout = 30 * 60 * 1000 // 30 Minuten
    
    const updateActivity = () => {
      lastActivity = Date.now()
    }
    
    const checkSession = () => {
      if (Date.now() - lastActivity > sessionTimeout) {
        this.handleSecurityViolation('Session timeout')
        this.redirectToBlockedPage()
      }
    }
    
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'].forEach(event => {
      document.addEventListener(event, updateActivity, true)
    })
    
    setInterval(checkSession, 60000) // Check every minute
  }

  // 🔐 ENCRYPTION
  enableEncryption() {
    // Simple XOR Encryption for sensitive data
    this.encrypt = (text, key = 'CLAY_GROUP_SECURITY_2024') => {
      let result = ''
      for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length))
      }
      return btoa(result)
    }
    
    this.decrypt = (encryptedText, key = 'CLAY_GROUP_SECURITY_2024') => {
      const decoded = atob(encryptedText)
      let result = ''
      for (let i = 0; i < decoded.length; i++) {
        result += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length))
      }
      return result
    }
  }

  // 🛡️ CONTENT SECURITY POLICY
  enableCSP() {
    const cspMeta = document.createElement('meta')
    cspMeta.httpEquiv = 'Content-Security-Policy'
    cspMeta.content = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com;
      style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com;
      img-src 'self' data: https: blob:;
      font-src 'self' https:;
      connect-src 'self' https://discord.com;
      frame-src 'none';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `
    document.head.appendChild(cspMeta)
  }

  // 🛡️ XSS PROTECTION
  enableXSSProtection() {
    // Input Sanitization
    this.sanitizeInput = (input) => {
      return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
    }
    
    // Form Input Protection
    document.addEventListener('input', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        e.target.value = this.sanitizeInput(e.target.value)
      }
    })
  }

  // 🛡️ CSRF PROTECTION
  enableCSRFProtection() {
    // CSRF Token Generation
    this.csrfToken = this.generateCSRFToken()
    
    // Add CSRF token to all forms
    document.addEventListener('submit', (e) => {
      if (e.target.tagName === 'FORM') {
        const tokenInput = document.createElement('input')
        tokenInput.type = 'hidden'
        tokenInput.name = '_csrf'
        tokenInput.value = this.csrfToken
        e.target.appendChild(tokenInput)
      }
    })
  }

  // 📊 MONITORING
  startMonitoring() {
    // Rate Limiting
    if (SECURITY_CONFIG.rateLimit.enabled) {
      this.monitorRateLimit()
    }
    
    // Suspicious Activity Detection
    this.monitorSuspiciousActivity()
    
    // Performance Monitoring
    this.monitorPerformance()
  }

  monitorRateLimit() {
    const checkRateLimit = () => {
      const now = Date.now()
      if (now - this.lastRequestTime < SECURITY_CONFIG.rateLimit.timeWindow) {
        this.requestCount++
        if (this.requestCount > SECURITY_CONFIG.rateLimit.maxRequests) {
          this.handleSecurityViolation('Rate limit exceeded')
          this.redirectToBlockedPage()
        }
      } else {
        this.requestCount = 1
        this.lastRequestTime = now
      }
    }
    
    // Monitor all user interactions
    ['click', 'submit', 'keypress', 'scroll'].forEach(event => {
      document.addEventListener(event, checkRateLimit, true)
    })
  }

  monitorSuspiciousActivity() {
    // Monitor for suspicious patterns
    const suspiciousPatterns = [
      /eval\(/,
      /Function\(/,
      /setTimeout\(/,
      /setInterval\(/,
      /document\.write\(/,
      /innerHTML\s*=/,
      /outerHTML\s*=/,
      /javascript:/,
      /data:text\/html/,
      /vbscript:/
    ]
    
    // Monitor script execution
    const originalEval = window.eval
    window.eval = (code) => {
      this.handleSecurityViolation('Eval function called')
      return originalEval(code)
    }
    
    // Monitor DOM manipulation
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const html = node.outerHTML || node.innerHTML
              suspiciousPatterns.forEach(pattern => {
                if (pattern.test(html)) {
                  this.handleSecurityViolation('Suspicious DOM manipulation detected')
                }
              })
            }
          })
        }
      })
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  monitorPerformance() {
    // Monitor for performance anomalies that might indicate attacks
    const originalFetch = window.fetch
    window.fetch = (...args) => {
      const startTime = performance.now()
      return originalFetch(...args).then(response => {
        const endTime = performance.now()
        if (endTime - startTime > 5000) { // 5 seconds
          this.handleSecurityViolation('Suspicious network activity detected')
        }
        return response
      })
    }
  }

  // 🚨 SECURITY VIOLATION HANDLING
  handleSecurityViolation(violation) {
    const violationData = {
      type: violation,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      sessionToken: this.sessionToken,
      ip: this.getClientIP()
    }
    
    this.suspiciousActivities.push(violationData)
    
    // Log violation
    console.warn('Security violation detected:', violation)
    
    // Send to monitoring system (if available)
    this.reportViolation(violationData)
    
    // Block user if multiple violations
    if (this.suspiciousActivities.length > 5) {
      this.blockUser()
    }
  }

  // 🚫 USER BLOCKING
  blockUser() {
    this.blockedIPs.add(this.getClientIP())
    localStorage.setItem('blocked_user', 'true')
    this.redirectToBlockedPage()
  }

  // 🔄 REDIRECT TO BLOCKED PAGE
  redirectToBlockedPage() {
    // Create blocked page content
    document.body.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        color: #ff0000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: monospace;
        z-index: 999999;
      ">
        <h1 style="font-size: 3rem; margin-bottom: 2rem;">🚫 ACCESS DENIED 🚫</h1>
        <p style="font-size: 1.5rem; text-align: center; max-width: 600px;">
          Unauthorized access detected.<br>
          Your IP has been logged and reported.<br>
          Further attempts will result in permanent blocking.
        </p>
        <div style="margin-top: 2rem; font-size: 1rem; color: #666;">
          Security System: CLAY GROUP v2.0
        </div>
      </div>
    `
    
    // Prevent any further interaction
    document.addEventListener('click', (e) => e.preventDefault(), true)
    document.addEventListener('keydown', (e) => e.preventDefault(), true)
  }

  // 📡 REPORTING
  reportViolation(violationData) {
    // Send violation report to Discord webhook
    if (window.SHOP_CONFIG && window.SHOP_CONFIG.discord && window.SHOP_CONFIG.discord.webhookUrl) {
      const embed = {
        title: '🚨 SECURITY VIOLATION DETECTED',
        color: 0xff0000,
        fields: [
          { name: 'Violation Type', value: violationData.type, inline: true },
          { name: 'Timestamp', value: violationData.timestamp, inline: true },
          { name: 'URL', value: violationData.url, inline: false },
          { name: 'User Agent', value: violationData.userAgent.substring(0, 100) + '...', inline: false },
          { name: 'Session Token', value: violationData.sessionToken, inline: true },
          { name: 'IP Address', value: violationData.ip || 'Unknown', inline: true }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: 'CLAY GROUP Security System',
          icon_url: 'https://cdn-icons-png.flaticon.com/512/3176/3176363.png'
        }
      }
      
      fetch(window.SHOP_CONFIG.discord.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] })
      }).catch(err => console.error('Failed to report violation:', err))
    }
  }

  // 🔧 UTILITY FUNCTIONS
  generateSessionToken() {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
  }

  generateCSRFToken() {
    return 'csrf_' + Math.random().toString(36).substr(2, 15) + '_' + Date.now()
  }

  validateSessionToken() {
    const storedToken = localStorage.getItem('session_token')
    if (!storedToken) {
      localStorage.setItem('session_token', this.sessionToken)
      return true
    }
    return storedToken === this.sessionToken
  }

  getClientIP() {
    // This is a basic implementation - in production you'd get this from server
    return 'client_ip_' + Math.random().toString(36).substr(2, 9)
  }
}

// 🔒 INITIALIZE SECURITY SYSTEM
let securitySystem

// Initialize security system after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if user is already blocked
  if (localStorage.getItem('blocked_user') === 'true') {
    securitySystem = new SecuritySystem()
    securitySystem.redirectToBlockedPage()
    return
  }
  
  // Initialize security system
  securitySystem = new SecuritySystem()
  
  // Override global functions for additional protection
  window.eval = () => {
    securitySystem.handleSecurityViolation('Global eval called')
    return undefined
  }
  
  // Protect against iframe embedding
  if (window.self !== window.top) {
    securitySystem.handleSecurityViolation('Website embedded in iframe')
    securitySystem.redirectToBlockedPage()
  }
})

// 🔒 EXPORT SECURITY FUNCTIONS
window.SecuritySystem = SecuritySystem
window.securitySystem = securitySystem

// 🔒 ADDITIONAL PROTECTIONS
// Prevent access to sensitive objects
Object.defineProperty(window, 'localStorage', {
  get: function() {
    securitySystem?.handleSecurityViolation('localStorage access attempted')
    return null
  }
})

Object.defineProperty(window, 'sessionStorage', {
  get: function() {
    securitySystem?.handleSecurityViolation('sessionStorage access attempted')
    return null
  }
})

// Prevent access to sensitive APIs
const sensitiveAPIs = ['navigator', 'screen', 'history', 'location']
sensitiveAPIs.forEach(api => {
  if (window[api]) {
    const original = window[api]
    window[api] = new Proxy(original, {
      get: function(target, prop) {
        securitySystem?.handleSecurityViolation(`${api} API access attempted`)
        return target[prop]
      }
    })
  }
})

console.log('🔒 CLAY GROUP Security System initialized successfully') 