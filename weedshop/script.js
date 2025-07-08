// 🔥 CLAY GROUP - JAVASCRIPT 🔥

// 🔧 KONFIGURATION - HIER ALLES ÄNDERN! 🔧
const SHOP_CONFIG = {
  shopName: "CLAY GROUP",
  shopDescription: "Premium Cannabis Zubehör",
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
    name: "Premium Glass Bong",
    price: 89.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description:
      "Hochwertige Glas-Bong aus borosilicatglas. Perfekt für ein sauberes und geschmackvolles Raucherlebnis.",
    features: ["Borosilicatglas", "Abnehmbarer Kopf", "Stabile Basis", "Leicht zu reinigen"],
    category: "Bongs",
  },
  {
    id: 2,
    name: "Ceramic Grinder Set",
    price: 34.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Premium Keramik-Grinder für perfekt zerkleinerte Kräuter. Langlebig und effizient.",
    features: ["Keramik-Zähne", "4-teilig", "Magnetverschluss", "Pollenfänger"],
    category: "Grinder",
  },
  {
    id: 3,
    name: "Rolling Papers Premium",
    price: 12.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Hochwertige Rolling Papers aus natürlichen Materialien. Dünn und gleichmäßig brennend.",
    features: ["Natürliche Materialien", "Dünn & gleichmäßig", "Langsam brennend", "32 Blättchen"],
    category: "Papers",
  },
  {
    id: 4,
    name: "Vaporizer Deluxe",
    price: 199.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Professioneller Vaporizer mit präziser Temperaturkontrolle für optimale Verdampfung.",
    features: ["Digitale Temperaturkontrolle", "Keramik-Heizkammer", "USB-C Aufladung", "LED Display"],
    category: "Vaporizer",
  },
  {
    id: 5,
    name: "Smoking Pipe Classic",
    price: 45.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Klassische Smoking Pipe aus hochwertigem Material. Zeitloses Design trifft Funktionalität.",
    features: ["Hochwertiges Material", "Ergonomisches Design", "Abnehmbarer Kopf", "Leicht zu reinigen"],
    category: "Pipes",
  },
  {
    id: 6,
    name: "Dab Rig Professional",
    price: 129.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Professionelle Dab Rig für Konzentrate. Optimale Kühlung und Geschmack.",
    features: ["Borosilicatglas", "Perkolator-System", "Titanium Nail", "Stabile Basis"],
    category: "Dab Rigs",
  },
  {
    id: 7,
    name: "Storage Jar Set",
    price: 24.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Luftdichte Aufbewahrungsgläser für optimale Frische deiner Kräuter.",
    features: ["Luftdichter Verschluss", "UV-Schutz", "Verschiedene Größen", "Geruchsneutral"],
    category: "Storage",
  },
  {
    id: 8,
    name: "Lighter Collection",
    price: 19.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Premium Feuerzeug-Kollektion mit verschiedenen Designs und zuverlässiger Funktion.",
    features: ["Nachfüllbar", "Windresistent", "Verschiedene Designs", "Langlebig"],
    category: "Accessories",
  },
  {
    id: 9,
    name: "Cleaning Kit Pro",
    price: 29.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Komplettes Reinigungs-Set für alle deine Smoking-Utensilien. Hält alles sauber und funktionsfähig.",
    features: ["Reinigungslösung", "Bürsten-Set", "Pfeifenreiniger", "Mikrofasertücher"],
    category: "Cleaning",
  },
  {
    id: 10,
    name: "Bubbler Glass",
    price: 67.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Kompakter Glas-Bubbler für unterwegs. Wasserfiltration in handlicher Größe.",
    features: ["Kompakte Größe", "Wasserfiltration", "Borosilicatglas", "Portable"],
    category: "Bubblers",
  },
  {
    id: 11,
    name: "Rolling Tray Wooden",
    price: 39.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Handgefertigtes Holz-Rolling-Tray mit erhöhten Rändern. Perfekt für das Drehen von Joints.",
    features: ["Handgefertigt", "Erhöhte Ränder", "Natürliches Holz", "Rutschfest"],
    category: "Trays",
  },
  {
    id: 12,
    name: "Scale Digital Precision",
    price: 54.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    description: "Präzise Digitalwaage für exakte Messungen. Kompakt und diskret.",
    features: ["0.01g Genauigkeit", "Kompaktes Design", "Auto-Off Funktion", "Kalibriergewicht"],
    category: "Scales",
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
  "https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
]
let currentBannerIndex = 0

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initializeCursor()
  startSplashScreen()
  startBannerSlider()
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

  const matrixInterval = setInterval(() => {
    const randomText = Array(8)
      .fill(0)
      .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
      .join("")
    document.getElementById("matrixText").textContent = `LOADING_SYSTEM: ${randomText}`
  }, 50)

  const progressInterval = setInterval(() => {
    progress += 1
    document.getElementById("progressBar").style.width = progress + "%"
    document.getElementById("progressText").textContent = progress + "%"

    if (progress >= 100) {
      clearInterval(progressInterval)
      clearInterval(matrixInterval)
      setTimeout(() => {
        document.getElementById("splashScreen").style.opacity = "0"
        setTimeout(() => {
          document.getElementById("splashScreen").classList.add("hidden")
          document.getElementById("mainContent").classList.remove("hidden")
        }, 500)
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
}

function showShop() {
  hideAllPages()
  document.getElementById("shopPage").classList.remove("hidden")
  loadProducts()
}

function showProduct(productId) {
  hideAllPages()
  document.getElementById("productPage").classList.remove("hidden")
  loadProduct(productId)
}

function showCheckout() {
  hideAllPages()
  document.getElementById("checkoutPage").classList.remove("hidden")
  loadCheckout()
}

function showSuccess() {
  hideAllPages()
  document.getElementById("successPage").classList.remove("hidden")
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
    const productCard = `
            <div class="transform hover:scale-105 transition-all duration-300 animate-fadeInUp product-card" 
                 style="animation-delay: ${index * 0.1}s;">
                <div class="group bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl overflow-hidden border border-dark-600 hover:border-green-500 transition-all duration-300 hover-glow">
                    <div class="relative aspect-square overflow-hidden cursor-pointer" onclick="showProduct(${product.id})">
                        <img src="${product.image1}" alt="${product.name}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute top-4 right-4 bg-green-600/80 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            ${product.category}
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors">${product.name}</h3>
                        <p class="text-2xl font-bold text-white mb-4">$${product.price.toFixed(2)}</p>
                        <button onclick="showProduct(${product.id})" class="w-full bg-green-600 text-white hover:bg-green-700 font-semibold transition-all duration-300 transform group-hover:scale-105 py-2 rounded-lg">
                            Details ansehen
                        </button>
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
  document.getElementById("buyButtonText").textContent =
    `Jetzt kaufen - $${(currentProduct.price * currentQuantity).toFixed(2)}`

  // Load thumbnails
  const thumbnails = document.getElementById("productThumbnails")
  thumbnails.innerHTML = `
        <button onclick="changeProductImage('${currentProduct.image1}')" class="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-green-500">
            <img src="${currentProduct.image1}" alt="${currentProduct.name} 1" class="w-full h-full object-cover">
        </button>
        <button onclick="changeProductImage('${currentProduct.image2}')" class="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-dark-600">
            <img src="${currentProduct.image2}" alt="${currentProduct.name} 2" class="w-full h-full object-cover">
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
  if (!currentProduct) return

  checkoutData = {
    product: currentProduct.name,
    price: currentProduct.price,
    quantity: currentQuantity,
    total: currentProduct.price * currentQuantity,
    category: currentProduct.category,
  }

  showCheckout()
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

// Select Delivery Method
function selectDelivery(method) {
  selectedDeliveryMethod = method
  updateDeliveryUI()

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
