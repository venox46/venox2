// 🔥 CLAY GROUP - JAVASCRIPT 🔥

// 🔧 KONFIGURATION - HIER ALLES ÄNDERN! 🔧
const SHOP_CONFIG = {
  shopName: "CLAY GROUP",
  shopDescription: "Premium Cannabis",
  shopTagline: "Qualität die überzeugt",
  paypal: {
    email: "nicktautenhahn69@gmail.com",
    note: "Freunde & Familie",
  },
  bitcoin: {
    address: "bc1qm79x3hmv5hdlwexxm6qdlvdngr2qj6es46a0kw",
  },
  telegram: "@venox4",
  discord: {
    webhookUrl:
      "https://discord.com/api/webhooks/1392188665312051370/23xtVWVtnX47sX1h1nhSmt2Olp-L55IbXWIvPlw-QRsvP8f0e_wBcGbvs0KmhwtXhXE0",
  },
}

const PRODUCTS_CONFIG = [
  {
    id: 1,
    name: "Blueberry 1g ",
    price: 8.00,
    image1: "https://cdn.discordapp.com/attachments/1377288531587891283/1395925544805073086/f03d8922-1e89-4300-abb7-987a91f848dc.png?ex=687c3878&is=687ae6f8&hm=7add1b04c245a3e1b51c334c28dbba52bc36326563c463aeed8fd2aed386a505&",
    image2: "",
    description:
      "Hochwertiges weed",
    features: ["THC 19-13%", "CBD 1%", "Geschmack fruchtig, beerig, süß", ""],
    category: "Weed",
    soldOut: true,
  },
  {
    id: 2,
    name: "Super Lemon Haze 1g",
    price: 8.00,
    image1: "https://cdn.discordapp.com/attachments/1377288531587891283/1395925544805073086/f03d8922-1e89-4300-abb7-987a91f848dc.png?ex=687c3878&is=687ae6f8&hm=7add1b04c245a3e1b51c334c28dbba52bc36326563c463aeed8fd2aed386a505&",
    image2: "",
    description: "Hochwertiges weed",
    features: ["THC 18-22%", "CBD 1%", "Geschmack Zitrus, fruchtig, erdig, würzig", ""],
    category: "Weed",
    soldOut: true,
  },
  {
    id: 3,
    name: "Blue Dream CBD Genetik 1g",
    price: 10.00,
    image1: "https://cdn.discordapp.com/attachments/1377288531587891283/1395925544805073086/f03d8922-1e89-4300-abb7-987a91f848dc.png?ex=687c3878&is=687ae6f8&hm=7add1b04c245a3e1b51c334c28dbba52bc36326563c463aeed8fd2aed386a505&",
    image2: "",
    description: "Hochwertiges weed",
    features: ["THC 1%", "CBD 10%", "Geschmack Pfeffer, Kiefer, beerig, süß", ""],
    category: "weed",
    soldOut: true,
  },
  {
    id: 4,
    name: "Big Bud 1g",
    price: 8.00,
    image1: "https://cdn.discordapp.com/attachments/1377288531587891283/1395925544805073086/f03d8922-1e89-4300-abb7-987a91f848dc.png?ex=687c3878&is=687ae6f8&hm=7add1b04c245a3e1b51c334c28dbba52bc36326563c463aeed8fd2aed386a505&",
    image2: "",
    description: "Hochwertiges weed",
    features: ["THC 15-18", "CBD 1%", "Geschmack Zitrus, fruchtig, süß, würzig", ""],
    category: "Weed",
  },
]

// Global Variables
let currentProduct = null
let currentQuantity = 1
let selectedDeliveryMethod = ""
let selectedPaymentMethod = ""
let checkoutData = null

// Banner Images
const bannerImages = [
  "https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif",
  "",
]
let currentBannerIndex = 0

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  // Check if all required elements exist
  const elements = [
    'splashScreen',
    'mainContent',
    'homePage',
    'shopPage',
    'productPage',
    'checkoutPage',
    'successPage',
    'customCursor',
    'bannerImage',
    'matrixText',
    'progressBar',
    'progressText'
  ];

  const missingElements = elements.filter(elementId => !document.getElementById(elementId));
  
  if (missingElements.length > 0) {
    console.error('Missing required elements:', missingElements);
    return;
  }

  // Initialize components
  initializeCursor();
  startBannerSlider();
  startSplashScreen();

  // Wait for splash screen to complete
  const splashScreen = document.getElementById('splashScreen');
  const mainContent = document.getElementById('mainContent');

  // Add event listener for when splash screen completes
  const checkSplashComplete = setInterval(() => {
    if (splashScreen.classList.contains('hidden')) {
      clearInterval(checkSplashComplete);
      mainContent.classList.remove('hidden');
      showHome();
    }
  }, 100);
})

// Custom Cursor
function initializeCursor() {
  const cursor = document.getElementById("customCursor")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  })

  document.addEventListener("click", () => {
    cursor.classList.add("cursor-click")
    setTimeout(() => cursor.classList.remove("cursor-click"), 300)
  })
}

// Splash Screen
function startSplashScreen() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"
  let progress = 0
  let splashScreen = document.getElementById('splashScreen');
  let progressBar = document.getElementById('progressBar');
  let progressText = document.getElementById('progressText');
  let matrixText = document.getElementById('matrixText');

  if (!splashScreen || !progressBar || !progressText || !matrixText) {
    console.error('Missing splash screen elements');
    return;
  }

  const matrixInterval = setInterval(() => {
    const randomText = Array(8)
      .fill(0)
      .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
      .join("")
    matrixText.textContent = `LOADING_SYSTEM: ${randomText}`
  }, 50)

  const progressInterval = setInterval(() => {
    progress += 1
    progressBar.style.width = progress + "%"
    progressText.textContent = progress + "%"

    if (progress >= 100) {
      clearInterval(matrixInterval)
      clearInterval(progressInterval)
      
      // Hide splash screen
      setTimeout(() => {
        splashScreen.classList.add('hidden')
      }, 500)
    }
  }, 30)
}

// Banner Slider
function startBannerSlider() {
  setInterval(() => {
    currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length
    document.getElementById("bannerImage").innerHTML =
      `<img src="${bannerImages[currentBannerIndex]}" alt="Banner" class="w-full h-full object-cover">`
  }, 5000)
}

// Navigation Functions
function showHome() {
  hideAllPages()
  document.getElementById("homePage").classList.remove("hidden")
  window.scrollTo(0, 0)
}

function showShop() {
  hideAllPages()
  document.getElementById("shopPage").classList.remove("hidden")
  loadProducts()
  window.scrollTo(0, 0)
}

function showProduct(productId) {
  hideAllPages()
  document.getElementById("productPage").classList.remove("hidden")
  loadProduct(productId)
  window.scrollTo(0, 0)
}

function showCheckout() {
  hideAllPages()
  document.getElementById("checkoutPage").classList.remove("hidden")
  loadCheckout()
  window.scrollTo(0, 0)
}

function showSuccess() {
  hideAllPages()
  document.getElementById("successPage").classList.remove("hidden")
  window.scrollTo(0, 0)
}

function hideAllPages() {
  const pages = ["homePage", "shopPage", "productPage", "checkoutPage", "successPage"]
  pages.forEach((page) => {
    document.getElementById(page).classList.add("hidden")
  })
}

// Load Products
function loadProducts() {
  const grid = document.getElementById("productsGrid")
  grid.innerHTML = ""

  PRODUCTS_CONFIG.forEach((product, index) => {
    const soldOutBadge = product.soldOut ? 
      '<div class="absolute top-4 right-4 bg-red-600/80 text-white px-2 py-1 rounded-full text-xs font-semibold">AUSVERKAUFT</div>' : 
      '<div class="absolute top-4 right-4 bg-green-600/80 text-white px-2 py-1 rounded-full text-xs font-semibold">' + product.category + '</div>'
    
    const buttonContent = product.soldOut ? 
      '<button disabled class="w-full bg-gray-600 text-gray-400 font-semibold py-2 rounded-lg cursor-not-allowed">Ausverkauft</button>' :
      '<button onclick="showProduct(' + product.id + ')" class="w-full bg-green-600 text-white hover:bg-green-700 font-semibold transition-all duration-300 transform group-hover:scale-105 py-2 rounded-lg">Details ansehen</button>'
    
    const productCard = `
            <div class="transform hover:scale-105 transition-all duration-300 animate-fadeInUp product-card" 
                 style="animation-delay: ${index * 0.1}s;">
                <div class="group bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-green-500 transition-all duration-300 hover-glow ${product.soldOut ? 'opacity-75' : ''}">
                    <div class="relative aspect-square overflow-hidden ${product.soldOut ? '' : 'cursor-pointer'}" ${product.soldOut ? '' : 'onclick="showProduct(' + product.id + ')"'}>
                        <img src="${product.image1}" alt="${product.name}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        ${soldOutBadge}
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors">${product.name}</h3>
                        <p class="text-2xl font-bold text-white mb-4">$${product.price.toFixed(2)}</p>
                        ${buttonContent}
                    </div>
                </div>
            </div>
        `
    grid.innerHTML += productCard
  })
}

// Load Product Details
function loadProduct(productId) {
  currentProduct = PRODUCTS_CONFIG.find((p) => p.id === productId)
  currentQuantity = 1

  if (!currentProduct) return

  document.getElementById("productCategory").textContent = currentProduct.category
  document.getElementById("productName").textContent = currentProduct.name
  document.getElementById("productPrice").textContent = `$${currentProduct.price.toFixed(2)}`
  document.getElementById("productDescription").textContent = currentProduct.description
  document.getElementById("mainProductImage").src = currentProduct.image1
  document.getElementById("mainProductImage").alt = currentProduct.name
  document.getElementById("quantity").textContent = currentQuantity
  
  // Update buy button based on sold out status
  const buyButton = document.getElementById("buyButtonText")
  if (currentProduct.soldOut) {
    buyButton.textContent = "AUSVERKAUFT"
    buyButton.parentElement.disabled = true
    buyButton.parentElement.className = "w-full py-4 text-lg font-semibold bg-gray-600 text-gray-400 transition-all rounded-lg cursor-not-allowed"
  } else {
    buyButton.textContent = `Jetzt kaufen - $${(currentProduct.price * currentQuantity).toFixed(2)}`
    buyButton.parentElement.disabled = false
    buyButton.parentElement.className = "w-full py-4 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-all rounded-lg"
  }

  // Load thumbnails
  const thumbnails = document.getElementById("productThumbnails")
  thumbnails.innerHTML = `
        <button onclick="changeProductImage('${currentProduct.image1}')" class="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-green-500">
            <img src="${currentProduct.image1}" alt="${currentProduct.name} 1" class="w-full h-full object-cover">
        </button>
    `

  // Load features
  const features = document.getElementById("productFeatures")
  features.innerHTML = ""
  currentProduct.features.forEach((feature) => {
    features.innerHTML += `
            <li class="flex items-center space-x-2 text-gray-300">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>${feature}</span>
            </li>
        `
  })
}

// Change Product Image
function changeProductImage(imageSrc) {
  document.getElementById("mainProductImage").src = imageSrc

  // Update thumbnail borders
  const thumbnails = document.querySelectorAll("#productThumbnails button")
  thumbnails.forEach((thumb) => {
    const img = thumb.querySelector("img")
    if (img.src === imageSrc) {
      thumb.className = thumb.className.replace("border-dark-600", "border-green-500")
    } else {
      thumb.className = thumb.className.replace("border-green-500", "border-dark-600")
    }
  })
}

// Change Quantity
function changeQuantity(change) {
  currentQuantity = Math.max(1, currentQuantity + change)
  document.getElementById("quantity").textContent = currentQuantity
  document.getElementById("buyButtonText").textContent =
    `Jetzt kaufen - $${(currentProduct.price * currentQuantity).toFixed(2)}`
}

// Buy Now
function buyNow() {
  if (currentProduct && currentProduct.soldOut) {
    alert("Dieses Produkt ist leider ausverkauft!")
    return
  }
  window.open("https://t.me/venox4", "_blank");
}

// Load Checkout
function loadCheckout() {
  if (!checkoutData) return

  const orderSummary = document.getElementById("orderSummary")
  orderSummary.innerHTML = `
        <div class="flex justify-between">
            <span>Produkt:</span>
            <span class="text-white">${checkoutData.product}</span>
        </div>
        <div class="flex justify-between">
            <span>Kategorie:</span>
            <span class="text-green-400">${checkoutData.category}</span>
        </div>
        <div class="flex justify-between">
            <span>Anzahl:</span>
            <span class="text-white">${checkoutData.quantity}</span>
        </div>
        <div class="border-t border-dark-600 pt-2 mt-4">
            <div class="flex justify-between text-xl font-bold">
                <span class="text-white">Gesamt:</span>
                <span class="text-green-400">$${checkoutData.total.toFixed(2)}</span>
            </div>
        </div>
    `

  document.getElementById("bitcoinAmount").textContent = `$${checkoutData.total.toFixed(2)}`

  // Reset form
  document.getElementById("checkoutForm").reset()
  selectedDeliveryMethod = ""
  selectedPaymentMethod = ""
  updateDeliveryUI()
  updatePaymentUI()
}

function selectDelivery(method) {
  selectedDeliveryMethod = method
  updateDeliveryUI()
  
  // Remove any existing warnings
  const existingWarnings = document.querySelectorAll('.delivery-warning, .shipping-warning');
  existingWarnings.forEach(warning => warning.remove());
  
  // Show appropriate warning based on delivery method
  if (method === "Versand") {
    const warning = document.createElement('div')
    warning.className = 'shipping-warning'
    warning.innerHTML = `
      
    `
    document.body.appendChild(warning)
    
    // Remove warning after 10 seconds
    setTimeout(() => {
      const warning = document.querySelector('.shipping-warning')
      if (warning) {
        warning.remove()
      }
    }, 10000)
  } else if (method === "Abholung") {
    const warning = document.createElement('div')
    warning.className = 'delivery-warning'
    warning.innerHTML = `
      <div class="warning-icon">⚠️</div>
      <div class="warning-text">
        <strong>Abholhinweis:</strong><br>
        Bitte kontaktiere uns nach dem Kauf, um die Abholung zu vereinbaren.<br>
        Wir werden dir die genaue Adresse und Uhrzeit mitteilen.
      </div>
    `
    document.body.appendChild(warning)
    
    // Remove warning after 5 seconds
    setTimeout(() => {
      const warning = document.querySelector('.delivery-warning')
      if (warning) {
        warning.remove()
      }
    }, 5000)
  }
  
  // Check if both brain checkout and shipping are selected
  if (selectedPaymentMethod === 'brain' && method === 'shipping') {
    // Show warning message
    const warning = document.createElement('div')
    warning.className = 'delivery-warning'
    warning.innerHTML = `
      <div class="warning-icon">⚠️</div>
      <div class="warning-text">
        <strong>Wichtiger Hinweis:</strong>
        Brain-Checkout und Versand können nicht kombiniert werden. Bitte wähle eine andere Kombination.
      </div>
    `
    document.body.appendChild(warning)
    
    // Remove warning after 5 seconds
    setTimeout(() => {
      const warning = document.querySelector('.delivery-warning')
      if (warning) {
        warning.remove()
      }
    }, 5000)
    
    // Reset selection
    selectedDeliveryMethod = ''
    updateDeliveryUI()
    return
  }

  const formTitle = document.getElementById("formTitle")
  const shippingFields = document.getElementById("shippingFields")
  const pickupInfo = document.getElementById("pickupInfo")

  if (method === "Versand") {
    formTitle.textContent = "Versandinformationen"
    shippingFields.classList.remove("hidden")
    pickupInfo.classList.add("hidden")

    // Make shipping fields required
    const shippingInputs = shippingFields.querySelectorAll("input")
    shippingInputs.forEach((input) => (input.required = true))
  } else {
    formTitle.textContent = "Kontaktinformationen"
    shippingFields.classList.add("hidden")
    pickupInfo.classList.remove("hidden")

    // Remove required from shipping fields
    const shippingInputs = shippingFields.querySelectorAll("input")
    shippingInputs.forEach((input) => (input.required = false))
  }
}

// Update Delivery UI
function updateDeliveryUI() {
  const versandBtn = document.getElementById("deliveryVersand")
  const abholungBtn = document.getElementById("deliveryAbholung")

  versandBtn.className = versandBtn.className.replace(/border-green-500|bg-green-500\/10/g, "")
  abholungBtn.className = abholungBtn.className.replace(/border-blue-500|bg-blue-500\/10/g, "")

  if (selectedDeliveryMethod === "Versand") {
    versandBtn.className = versandBtn.className.replace("border-dark-600", "border-green-500 bg-green-500/10")
  } else if (selectedDeliveryMethod === "Abholung") {
    abholungBtn.className = abholungBtn.className.replace("border-dark-600", "border-blue-500 bg-blue-500/10")
  }
}

// Select Payment Method
function selectPayment(method) {
  selectedPaymentMethod = method
  updatePaymentUI()
}

// Update Payment UI
function updatePaymentUI() {
  const paypalBtn = document.getElementById("paymentPayPal")
  const bitcoinBtn = document.getElementById("paymentBitcoin")
  const paypalInfo = document.getElementById("paypalInfo")
  const bitcoinInfo = document.getElementById("bitcoinInfo")

  // Reset classes
  paypalBtn.className = paypalBtn.className.replace(/border-blue-500|bg-blue-500\/10/g, "border-dark-600")
  bitcoinBtn.className = bitcoinBtn.className.replace(/border-orange-500|bg-orange-500\/10/g, "border-dark-600")

  paypalInfo.classList.add("hidden")
  bitcoinInfo.classList.add("hidden")

  if (selectedPaymentMethod === "PayPal") {
    paypalBtn.className = paypalBtn.className.replace("border-dark-600", "border-blue-500 bg-blue-500/10")
    paypalInfo.classList.remove("hidden")
  } else if (selectedPaymentMethod === "Bitcoin") {
    bitcoinBtn.className = bitcoinBtn.className.replace("border-dark-600", "border-orange-500 bg-orange-500/10")
    bitcoinInfo.classList.remove("hidden")
  }
}

// Copy to Clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Show copied feedback (you could add a toast notification here)
    console.log("Copied to clipboard:", text)
  })
}

// Handle Checkout Form Submit
document.getElementById("checkoutForm").addEventListener("submit", async function (e) {
  e.preventDefault()

  if (!selectedPaymentMethod) {
    alert("Bitte wähle eine Zahlungsmethode aus!")
    return
  }

  if (!selectedDeliveryMethod) {
    alert("Bitte wähle eine Liefermethode aus!")
    return
  }

  const submitButton = document.getElementById("submitButton")
  submitButton.textContent = "Bestellung wird verarbeitet..."
  submitButton.disabled = true

  // Get form data
  const formData = new FormData(this)
  const orderData = {
    ...checkoutData,
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    paymentMethod: selectedPaymentMethod,
    deliveryMethod: selectedDeliveryMethod,
    orderDate: new Date().toISOString(),
  }

  // Add shipping data only if shipping is selected
  if (selectedDeliveryMethod === "Versand") {
    orderData.address = formData.get("address")
    orderData.city = formData.get("city")
    orderData.postalCode = formData.get("postalCode")
    orderData.country = formData.get("country")
  }

  // Send to Discord
  try {
    // Send to Discord
    await sendToDiscord(orderData)
  } catch (error) {
    console.error('Fehler beim Senden der Discord-Nachricht:', error)
    // Don't block checkout if Discord fails
  }

  setTimeout(() => {
    submitButton.textContent = "Kauf bestätigen"
    submitButton.disabled = false

    // Show success page
    const successMessage = document.getElementById("successMessage")
    const telegramInfo = document.getElementById("telegramInfo")

    if (selectedDeliveryMethod === "Abholung") {
      successMessage.textContent = `Deine Bestellung ist eingegangen! Melde dich bei ${SHOP_CONFIG.telegram} auf Telegram für den Abholtermin.`
      telegramInfo.classList.remove("hidden")
    } else {
      successMessage.textContent =
        "Deine Bestellung wird nun verpackt und bald versendet. Du erhältst eine Bestätigung per E-Mail."
      telegramInfo.classList.add("hidden")
    }

    showSuccess()
  }, 2000)
})

// Send to Discord
async function sendToDiscord(orderData) {
  const embed = {
    title: `🛒 Neue Bestellung - ${SHOP_CONFIG.shopName}!`,
    color: 0x22c55e,
    fields: [
      { name: "🌿 Produkt", value: orderData.product, inline: true },
      { name: "📦 Kategorie", value: orderData.category || "N/A", inline: true },
      { name: "🔢 Anzahl", value: orderData.quantity.toString(), inline: true },
      { name: "💰 Gesamtpreis", value: `$${orderData.total.toFixed(2)}`, inline: true },
      { name: "💳 Zahlungsmethode", value: orderData.paymentMethod, inline: true },
      { name: "🚚 Lieferung", value: orderData.deliveryMethod, inline: true },
      { name: "👤 Vorname", value: orderData.firstName, inline: true },
      { name: "👤 Nachname", value: orderData.lastName, inline: true },
      { name: "📧 E-Mail", value: orderData.email, inline: true },
      { name: "📱 Telefon", value: orderData.phone, inline: true },
      { name: "📅 Bestelldatum", value: new Date().toLocaleString("de-DE"), inline: false },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: `${SHOP_CONFIG.shopName} - Cannabis Zubehör | Bestellung zur Bearbeitung`,
      icon_url: "https://cdn-icons-png.flaticon.com/512/3176/3176363.png",
    },
  }

  // Add shipping data only if shipping is selected
  if (orderData.deliveryMethod === "Versand") {
    embed.fields.push(
      { name: "🏠 Straße & Hausnummer", value: orderData.address || "N/A", inline: false },
      { name: "🏙️ Stadt", value: orderData.city || "N/A", inline: true },
      { name: "📮 Postleitzahl", value: orderData.postalCode || "N/A", inline: true },
      { name: "🌍 Land", value: orderData.country || "N/A", inline: true },
    )
  }

  // Add pickup info if pickup is selected
  if (orderData.deliveryMethod === "Abholung") {
    embed.fields.push({
      name: "📞 Abholung Info",
      value: `Kunde soll sich bei ${SHOP_CONFIG.telegram} auf Telegram melden für Abholtermin!`,
      inline: false,
    })
  }

  try {
    await fetch(SHOP_CONFIG.discord.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })
  } catch (error) {
    console.error("Error sending to Discord:", error)
  }
}

// 🔥 ANLEITUNG ZUM BEARBEITEN:
//
// 1. SHOP KONFIGURATION ÄNDERN:
//    - Ändere SHOP_CONFIG oben in der Datei
//    - PayPal E-Mail, Bitcoin Adresse, Telegram, Discord Webhook
//
// 2. PRODUKTE HINZUFÜGEN/ÄNDERN:
//    - Ändere PRODUCTS_CONFIG Array
//    - Neue Produkte hinzufügen oder bestehende bearbeiten
//
// 3. BILDER ÄNDERN:
//    - Ändere image1 und image2 URLs in PRODUCTS_CONFIG
//    - Ändere bannerImages Array für Homepage Banner
//
// 4. PREISE ÄNDERN:
//    - Ändere price Werte in PRODUCTS_CONFIG
//
// 5. TEXTE ÄNDERN:
//    - Ändere name, description, features in PRODUCTS_CONFIG
//    - Ändere shopName, shopDescription in SHOP_CONFIG
//
// 6. FARBEN ÄNDERN:
//    - Ändere CSS Klassen in style.css
//    - Ändere Tailwind Farben in HTML
//
// 7. NEUE FUNKTIONEN HINZUFÜGEN:
//    - Füge neue Funktionen am Ende dieser Datei hinzu
//    - Vergiss nicht die HTML Elemente zu erstellen
