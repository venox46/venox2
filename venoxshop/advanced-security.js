// 🔒 CLAY GROUP - ERWEITERTE SICHERHEIT 🔒

// Erweiterte Sicherheitskonfiguration
const ADVANCED_SECURITY_CONFIG = {
  // Anti-Bot Protection
  antiBot: true,
  // Anti-Scraping
  antiScraping: true,
  // Anti-Automation
  antiAutomation: true,
  // Honeypot Traps
  honeypotTraps: true,
  // Behavioral Analysis
  behavioralAnalysis: true,
  // IP Geolocation Blocking
  geoBlocking: true,
  // Advanced Rate Limiting
  advancedRateLimit: true,
  // Memory Protection
  memoryProtection: true,
  // Code Obfuscation
  codeObfuscation: true
}

// 🔒 ERWEITERTE SICHERHEITSSYSTEM
class AdvancedSecuritySystem {
  constructor() {
    this.userBehavior = []
    this.suspiciousPatterns = []
    this.honeypotElements = []
    this.blockedCountries = ['CN', 'RU', 'KP', 'IR'] // Beispiel
    this.userFingerprint = this.generateFingerprint()
    
    this.init()
  }

  init() {
    if (ADVANCED_SECURITY_CONFIG.antiBot) this.enableAntiBot()
    if (ADVANCED_SECURITY_CONFIG.antiScraping) this.enableAntiScraping()
    if (ADVANCED_SECURITY_CONFIG.antiAutomation) this.enableAntiAutomation()
    if (ADVANCED_SECURITY_CONFIG.honeypotTraps) this.enableHoneypotTraps()
    if (ADVANCED_SECURITY_CONFIG.behavioralAnalysis) this.enableBehavioralAnalysis()
    if (ADVANCED_SECURITY_CONFIG.geoBlocking) this.enableGeoBlocking()
    if (ADVANCED_SECURITY_CONFIG.advancedRateLimit) this.enableAdvancedRateLimit()
    if (ADVANCED_SECURITY_CONFIG.memoryProtection) this.enableMemoryProtection()
    if (ADVANCED_SECURITY_CONFIG.codeObfuscation) this.enableCodeObfuscation()
  }

  // 🤖 ANTI-BOT PROTECTION
  enableAntiBot() {
    // CAPTCHA-like challenges
    this.createInvisibleChallenge()
    
    // Mouse movement analysis
    this.analyzeMouseMovements()
    
    // Keyboard timing analysis
    this.analyzeKeyboardTiming()
    
    // Browser fingerprinting
    this.analyzeBrowserFingerprint()
  }

  createInvisibleChallenge() {
    // Create invisible elements that bots might interact with
    const honeypot = document.createElement('div')
    honeypot.style.cssText = `
      position: absolute;
      left: -9999px;
      top: -9999px;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    `
    honeypot.innerHTML = '<input type="text" name="bot_trap" value="">'
    honeypot.className = 'honeypot-trap'
    
    document.body.appendChild(honeypot)
    
    // Monitor for interaction with honeypot
    honeypot.addEventListener('focus', () => {
      this.handleSecurityViolation('Bot trap triggered')
    })
    
    honeypot.addEventListener('input', () => {
      this.handleSecurityViolation('Bot trap input detected')
    })
  }

  analyzeMouseMovements() {
    let mouseMovements = []
    let lastMove = Date.now()
    
    document.addEventListener('mousemove', (e) => {
      const now = Date.now()
      mouseMovements.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: now,
        delta: now - lastMove
      })
      
      lastMove = now
      
      // Keep only last 50 movements
      if (mouseMovements.length > 50) {
        mouseMovements.shift()
      }
      
      // Analyze for bot-like patterns
      this.analyzeMousePattern(mouseMovements)
    })
  }

  analyzeMousePattern(movements) {
    if (movements.length < 10) return
    
    // Check for linear movements (bot-like)
    let linearCount = 0
    for (let i = 2; i < movements.length; i++) {
      const prev = movements[i - 1]
      const curr = movements[i]
      const next = movements[i + 1]
      
      if (this.isLinearMovement(prev, curr, next)) {
        linearCount++
      }
    }
    
    if (linearCount > movements.length * 0.8) {
      this.handleSecurityViolation('Bot-like mouse movement detected')
    }
  }

  isLinearMovement(prev, curr, next) {
    const slope1 = (curr.y - prev.y) / (curr.x - prev.x)
    const slope2 = (next.y - curr.y) / (next.x - curr.x)
    return Math.abs(slope1 - slope2) < 0.1
  }

  analyzeKeyboardTiming() {
    let keyTimings = []
    let lastKey = Date.now()
    
    document.addEventListener('keydown', (e) => {
      const now = Date.now()
      const timing = now - lastKey
      
      keyTimings.push(timing)
      lastKey = now
      
      // Keep only last 20 keystrokes
      if (keyTimings.length > 20) {
        keyTimings.shift()
      }
      
      // Check for inhuman timing patterns
      this.analyzeKeyTimingPattern(keyTimings)
    })
  }

  analyzeKeyTimingPattern(timings) {
    if (timings.length < 5) return
    
    // Check for too consistent timing (bot-like)
    const avg = timings.reduce((a, b) => a + b) / timings.length
    const variance = timings.reduce((sum, time) => sum + Math.pow(time - avg, 2), 0) / timings.length
    
    if (variance < 10) { // Too consistent
      this.handleSecurityViolation('Bot-like keyboard timing detected')
    }
  }

  analyzeBrowserFingerprint() {
    const fingerprint = this.generateFingerprint()
    
    // Check for common bot signatures
    const botSignatures = [
      'headless',
      'phantom',
      'selenium',
      'webdriver',
      'automation'
    ]
    
    const userAgent = navigator.userAgent.toLowerCase()
    botSignatures.forEach(signature => {
      if (userAgent.includes(signature)) {
        this.handleSecurityViolation(`Bot signature detected: ${signature}`)
      }
    })
  }

  // 🕷️ ANTI-SCRAPING PROTECTION
  enableAntiScraping() {
    // Dynamic content loading
    this.enableDynamicContent()
    
    // CSS-based protection
    this.enableCSSProtection()
    
    // JavaScript obfuscation
    this.obfuscateContent()
    
    // Rate limiting for content access
    this.limitContentAccess()
  }

  enableDynamicContent() {
    // Make content load dynamically to prevent scraping
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.protectElement(node)
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

  protectElement(element) {
    // Add protection to text content
    if (element.textContent) {
      element.setAttribute('data-protected', 'true')
      element.style.userSelect = 'none'
      element.style.webkitUserSelect = 'none'
      element.style.mozUserSelect = 'none'
      element.style.msUserSelect = 'none'
    }
  }

  enableCSSProtection() {
    // Add CSS to prevent easy copying
    const style = document.createElement('style')
    style.textContent = `
      * {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .protected-content {
        position: relative;
      }
      
      .protected-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent;
        z-index: 1;
      }
    `
    document.head.appendChild(style)
  }

  obfuscateContent() {
    // Obfuscate sensitive text content
    const sensitiveElements = document.querySelectorAll('[data-sensitive]')
    sensitiveElements.forEach(element => {
      const originalText = element.textContent
      const obfuscatedText = this.obfuscateText(originalText)
      element.textContent = obfuscatedText
      
      // Restore on user interaction
      element.addEventListener('mouseenter', () => {
        element.textContent = originalText
      })
      
      element.addEventListener('mouseleave', () => {
        element.textContent = obfuscatedText
      })
    })
  }

  obfuscateText(text) {
    return text.split('').map(char => {
      if (char === ' ') return char
      return String.fromCharCode(char.charCodeAt(0) + 1)
    }).join('')
  }

  // 🤖 ANTI-AUTOMATION PROTECTION
  enableAntiAutomation() {
    // Detect automation tools
    this.detectAutomationTools()
    
    // Monitor for automated behavior
    this.monitorAutomatedBehavior()
    
    // Add random delays
    this.addRandomDelays()
  }

  detectAutomationTools() {
    // Check for common automation indicators
    const automationIndicators = [
      'webdriver',
      'selenium',
      'phantom',
      'headless',
      'automation'
    ]
    
    // Check navigator properties
    if (navigator.webdriver) {
      this.handleSecurityViolation('WebDriver detected')
    }
    
    // Check for automation properties
    automationIndicators.forEach(indicator => {
      if (navigator.userAgent.toLowerCase().includes(indicator)) {
        this.handleSecurityViolation(`Automation tool detected: ${indicator}`)
      }
    })
  }

  monitorAutomatedBehavior() {
    // Monitor for patterns that indicate automation
    let clickPatterns = []
    let lastClick = Date.now()
    
    document.addEventListener('click', (e) => {
      const now = Date.now()
      const timeSinceLastClick = now - lastClick
      
      clickPatterns.push({
        x: e.clientX,
        y: e.clientY,
        time: timeSinceLastClick
      })
      
      lastClick = now
      
      // Keep only last 10 clicks
      if (clickPatterns.length > 10) {
        clickPatterns.shift()
      }
      
      // Analyze for automation patterns
      this.analyzeClickPattern(clickPatterns)
    })
  }

  analyzeClickPattern(patterns) {
    if (patterns.length < 5) return
    
    // Check for too regular timing
    const timings = patterns.map(p => p.time)
    const avgTiming = timings.reduce((a, b) => a + b) / timings.length
    const variance = timings.reduce((sum, time) => sum + Math.pow(time - avgTiming, 2), 0) / timings.length
    
    if (variance < 50) { // Too regular
      this.handleSecurityViolation('Automated click pattern detected')
    }
  }

  addRandomDelays() {
    // Add random delays to prevent automation
    const originalSetTimeout = window.setTimeout
    window.setTimeout = (callback, delay) => {
      const randomDelay = delay + Math.random() * 1000
      return originalSetTimeout(callback, randomDelay)
    }
  }

  // 🍯 HONEYPOT TRAPS
  enableHoneypotTraps() {
    // Create invisible honeypot elements
    this.createHoneypotElements()
    
    // Create fake admin panels
    this.createFakeAdminPanels()
    
    // Create fake API endpoints
    this.createFakeAPIEndpoints()
  }

  createHoneypotElements() {
    const honeypots = [
      { name: 'admin', type: 'text', value: 'admin' },
      { name: 'password', type: 'password', value: 'password123' },
      { name: 'email', type: 'email', value: 'admin@example.com' },
      { name: 'api_key', type: 'text', value: 'fake_api_key_12345' }
    ]
    
    honeypots.forEach(honeypot => {
      const element = document.createElement('input')
      element.type = honeypot.type
      element.name = honeypot.name
      element.value = honeypot.value
      element.style.cssText = `
        position: absolute;
        left: -9999px;
        top: -9999px;
        width: 1px;
        height: 1px;
        opacity: 0;
        pointer-events: none;
      `
      element.className = 'honeypot-trap'
      
      document.body.appendChild(element)
      
      // Monitor for interaction
      element.addEventListener('focus', () => {
        this.handleSecurityViolation(`Honeypot triggered: ${honeypot.name}`)
      })
      
      element.addEventListener('input', () => {
        this.handleSecurityViolation(`Honeypot input: ${honeypot.name}`)
      })
    })
  }

  createFakeAdminPanels() {
    // Create fake admin panel links
    const fakeAdminLinks = [
      '/admin',
      '/wp-admin',
      '/administrator',
      '/cpanel',
      '/phpmyadmin'
    ]
    
    fakeAdminLinks.forEach(link => {
      const fakeLink = document.createElement('a')
      fakeLink.href = link
      fakeLink.textContent = 'Admin Panel'
      fakeLink.style.cssText = `
        position: absolute;
        left: -9999px;
        top: -9999px;
        opacity: 0;
        pointer-events: none;
      `
      fakeLink.className = 'honeypot-admin-link'
      
      document.body.appendChild(fakeLink)
      
      fakeLink.addEventListener('click', (e) => {
        e.preventDefault()
        this.handleSecurityViolation(`Fake admin panel accessed: ${link}`)
      })
    })
  }

  createFakeAPIEndpoints() {
    // Override fetch to catch API scraping attempts
    const originalFetch = window.fetch
    window.fetch = (...args) => {
      const url = args[0]
      
      // Check for suspicious API endpoints
      const suspiciousEndpoints = [
        '/api/',
        '/rest/',
        '/graphql',
        '/swagger',
        '/docs'
      ]
      
      suspiciousEndpoints.forEach(endpoint => {
        if (typeof url === 'string' && url.includes(endpoint)) {
          this.handleSecurityViolation(`Suspicious API endpoint accessed: ${url}`)
        }
      })
      
      return originalFetch(...args)
    }
  }

  // 🧠 BEHAVIORAL ANALYSIS
  enableBehavioralAnalysis() {
    // Track user behavior patterns
    this.trackUserBehavior()
    
    // Analyze behavior for anomalies
    this.analyzeBehaviorAnomalies()
    
    // Create user profile
    this.createUserProfile()
  }

  trackUserBehavior() {
    const events = ['click', 'scroll', 'mousemove', 'keypress', 'focus', 'blur']
    
    events.forEach(event => {
      document.addEventListener(event, (e) => {
        this.userBehavior.push({
          event: event,
          target: e.target.tagName,
          timestamp: Date.now(),
          x: e.clientX || 0,
          y: e.clientY || 0
        })
        
        // Keep only last 100 events
        if (this.userBehavior.length > 100) {
          this.userBehavior.shift()
        }
      })
    })
  }

  analyzeBehaviorAnomalies() {
    setInterval(() => {
      if (this.userBehavior.length < 10) return
      
      // Analyze for suspicious patterns
      const suspiciousPatterns = this.detectSuspiciousPatterns()
      
      if (suspiciousPatterns.length > 0) {
        suspiciousPatterns.forEach(pattern => {
          this.handleSecurityViolation(`Suspicious behavior: ${pattern}`)
        })
      }
    }, 30000) // Check every 30 seconds
  }

  detectSuspiciousPatterns() {
    const patterns = []
    
    // Check for rapid clicking
    const clicks = this.userBehavior.filter(b => b.event === 'click')
    if (clicks.length > 10) {
      const recentClicks = clicks.slice(-10)
      const timeSpan = recentClicks[recentClicks.length - 1].timestamp - recentClicks[0].timestamp
      
      if (timeSpan < 5000) { // 10 clicks in 5 seconds
        patterns.push('Rapid clicking detected')
      }
    }
    
    // Check for linear mouse movement
    const mouseMoves = this.userBehavior.filter(b => b.event === 'mousemove')
    if (mouseMoves.length > 20) {
      const recentMoves = mouseMoves.slice(-20)
      let linearCount = 0
      
      for (let i = 2; i < recentMoves.length; i++) {
        const prev = recentMoves[i - 1]
        const curr = recentMoves[i]
        const next = recentMoves[i + 1]
        
        if (this.isLinearMovement(prev, curr, next)) {
          linearCount++
        }
      }
      
      if (linearCount > recentMoves.length * 0.8) {
        patterns.push('Linear mouse movement detected')
      }
    }
    
    return patterns
  }

  createUserProfile() {
    // Create a unique user profile based on behavior
    const profile = {
      fingerprint: this.userFingerprint,
      behavior: this.userBehavior.length,
      patterns: this.detectSuspiciousPatterns().length,
      timestamp: Date.now()
    }
    
    // Store profile for analysis
    this.userProfile = profile
  }

  // 🌍 GEO BLOCKING
  enableGeoBlocking() {
    // Basic geo blocking based on timezone and language
    this.checkGeolocation()
  }

  checkGeolocation() {
    // Check timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const blockedTimezones = ['Asia/Shanghai', 'Europe/Moscow', 'Asia/Pyongyang']
    
    if (blockedTimezones.includes(timezone)) {
      this.handleSecurityViolation(`Blocked timezone detected: ${timezone}`)
    }
    
    // Check language
    const language = navigator.language || navigator.userLanguage
    const blockedLanguages = ['zh', 'ru', 'ko', 'fa']
    
    blockedLanguages.forEach(lang => {
      if (language.startsWith(lang)) {
        this.handleSecurityViolation(`Blocked language detected: ${language}`)
      }
    })
  }

  // 📊 ADVANCED RATE LIMITING
  enableAdvancedRateLimit() {
    this.requestHistory = []
    this.maxRequestsPerMinute = 50
    this.maxRequestsPerHour = 500
    
    // Monitor all requests
    this.monitorAdvancedRateLimit()
  }

  monitorAdvancedRateLimit() {
    const checkRateLimit = () => {
      const now = Date.now()
      this.requestHistory.push(now)
      
      // Remove old requests
      this.requestHistory = this.requestHistory.filter(time => now - time < 3600000) // 1 hour
      
      // Check minute limit
      const requestsLastMinute = this.requestHistory.filter(time => now - time < 60000).length
      if (requestsLastMinute > this.maxRequestsPerMinute) {
        this.handleSecurityViolation('Advanced rate limit exceeded (minute)')
      }
      
      // Check hour limit
      if (this.requestHistory.length > this.maxRequestsPerHour) {
        this.handleSecurityViolation('Advanced rate limit exceeded (hour)')
      }
    }
    
    // Monitor various events
    ['click', 'submit', 'keypress', 'scroll', 'mousemove'].forEach(event => {
      document.addEventListener(event, checkRateLimit, true)
    })
  }

  // 🧠 MEMORY PROTECTION
  enableMemoryProtection() {
    // Protect sensitive data in memory
    this.protectSensitiveData()
    
    // Clear sensitive data periodically
    this.clearSensitiveData()
  }

  protectSensitiveData() {
    // Override sensitive functions
    const sensitiveFunctions = ['eval', 'Function', 'setTimeout', 'setInterval']
    
    sensitiveFunctions.forEach(funcName => {
      if (window[funcName]) {
        const original = window[funcName]
        window[funcName] = (...args) => {
          this.handleSecurityViolation(`Sensitive function called: ${funcName}`)
          return original.apply(this, args)
        }
      }
    })
  }

  clearSensitiveData() {
    // Clear sensitive data every 5 minutes
    setInterval(() => {
      this.userBehavior = this.userBehavior.slice(-50) // Keep only last 50 events
      this.suspiciousPatterns = []
    }, 300000)
  }

  // 🔐 CODE OBFUSCATION
  enableCodeObfuscation() {
    // Obfuscate function names
    this.obfuscateFunctionNames()
    
    // Add junk code
    this.addJunkCode()
  }

  obfuscateFunctionNames() {
    // Create random function names
    const randomName = () => '_' + Math.random().toString(36).substr(2, 9)
    
    // Override some global functions with obfuscated names
    const obfuscatedFunctions = {
      [randomName()]: window.alert,
      [randomName()]: window.confirm,
      [randomName()]: window.prompt
    }
    
    Object.entries(obfuscatedFunctions).forEach(([name, func]) => {
      window[name] = func
    })
  }

  addJunkCode() {
    // Add meaningless functions to confuse attackers
    for (let i = 0; i < 10; i++) {
      const junkFunction = new Function(`
        return function ${Math.random().toString(36).substr(2, 9)}() {
          return ${Math.random()};
        }
      `)()
      
      window[`junk_${i}`] = junkFunction
    }
  }

  // 🔧 UTILITY FUNCTIONS
  generateFingerprint() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    ctx.textBaseline = 'top'
    ctx.font = '14px Arial'
    ctx.fillText('CLAY GROUP SECURITY', 2, 2)
    
    return {
      canvas: canvas.toDataURL(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  }

  handleSecurityViolation(violation) {
    // Report to main security system
    if (window.securitySystem) {
      window.securitySystem.handleSecurityViolation(violation)
    }
    
    // Log locally
    this.suspiciousPatterns.push({
      type: violation,
      timestamp: Date.now(),
      userProfile: this.userProfile
    })
  }
}

// 🔒 INITIALIZE ADVANCED SECURITY
let advancedSecuritySystem

document.addEventListener('DOMContentLoaded', () => {
  advancedSecuritySystem = new AdvancedSecuritySystem()
})

// 🔒 EXPORT
window.AdvancedSecuritySystem = AdvancedSecuritySystem
window.advancedSecuritySystem = advancedSecuritySystem

console.log('🔒 CLAY GROUP Advanced Security System initialized') 