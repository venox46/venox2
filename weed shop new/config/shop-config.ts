// 🔥 CLAY GROUP - SHOP KONFIGURATION 🔥
// Hier kannst du alle Shop-Einstellungen ändern!

export const SHOP_CONFIG = {
  // 🏪 SHOP INFORMATIONEN
  shopName: "CLAY GROUP",
  shopDescription: "Premium Cannabis Zubehör",
  shopTagline: "Qualität die überzeugt",

  // 💰 ZAHLUNGSINFORMATIONEN
  paypal: {
    email: "nicktautenhahn69@gmail.com",
    note: "Freunde & Familie",
  },
  bitcoin: {
    address: "bc1qm79x3hmv5hdlwexxm6qdlvdngr2qj6es46a0kw",
  },

  // 📞 KONTAKT INFORMATIONEN
  telegram: "@venox4",

  // 🎨 DESIGN EINSTELLUNGEN
  colors: {
    primary: "green", // green, blue, red, purple, etc.
    accent: "emerald",
  },

  // 📦 VERSAND EINSTELLUNGEN
  shipping: {
    freeShippingOver: 50, // Kostenloser Versand ab X€
    shippingCost: 5.99, // Versandkosten
  },

  // 🔗 DISCORD WEBHOOK
  discord: {
    webhookUrl:
      "https://discord.com/api/webhooks/1392188665312051370/23xtVWVtnX47sX1h1nhSmt2Olp-L55IbXWIvPlw-QRsvP8f0e_wBcGbvs0KmhwtXhXE0",
  },

  // 🌟 HERO SECTION
  hero: {
    title: "Premium Cannabis Zubehör",
    subtitle: "CLAY GROUP - Qualität die überzeugt",
    features: ["🌿 Premium Quality", "🚚 Diskreter Versand", "🔒 Sichere Zahlung"],
  },

  // 📧 NEWSLETTER
  newsletter: {
    title: "Stay Updated",
    description: "Erhalte exklusive Angebote und neue Produkte zuerst",
  },
}

// 🔥 ANLEITUNG:
//
// 1. SHOP NAME ÄNDERN:
//    shopName: "Dein neuer Shop Name"
//
// 2. ZAHLUNGSDATEN ÄNDERN:
//    paypal: { email: "neue@email.com" }
//    bitcoin: { address: "neue-bitcoin-adresse" }
//
// 3. TELEGRAM ÄNDERN:
//    telegram: "@dein-telegram"
//
// 4. DISCORD WEBHOOK ÄNDERN:
//    webhookUrl: "https://discord.com/api/webhooks/DEINE-NEUE-URL"
//
// 5. FARBEN ÄNDERN:
//    colors: { primary: "blue", accent: "cyan" }
//
// 6. HERO TEXT ÄNDERN:
//    hero: { title: "Neuer Titel", subtitle: "Neuer Untertitel" }
