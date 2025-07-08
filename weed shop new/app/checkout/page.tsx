"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ArrowLeft, CreditCard, Bitcoin, Copy, Check, Truck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SHOP_CONFIG } from "@/config/shop-config"

export default function CheckoutPage() {
  const [checkoutData, setCheckoutData] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [deliveryMethod, setDeliveryMethod] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [copied, setCopied] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })

  useEffect(() => {
    const data = localStorage.getItem("checkoutData")
    if (data) {
      setCheckoutData(JSON.parse(data))
    }
  }, [])

  // Formular beim Laden zurücksetzen
  useEffect(() => {
    resetForm()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    })
    setPaymentMethod("")
    setDeliveryMethod("")
  }

  const sendToDiscord = async (orderData: any) => {
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

    // Nur Versanddaten hinzufügen wenn VERSAND gewählt wurde
    if (orderData.deliveryMethod === "Versand") {
      embed.fields.push(
        { name: "🏠 Straße & Hausnummer", value: orderData.address || "N/A", inline: false },
        { name: "🏙️ Stadt", value: orderData.city || "N/A", inline: true },
        { name: "📮 Postleitzahl", value: orderData.postalCode || "N/A", inline: true },
        { name: "🌍 Land", value: orderData.country || "N/A", inline: true },
      )
    }

    // Abholung Info nur bei Abholung hinzufügen
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!paymentMethod) {
      alert("Bitte wähle eine Zahlungsmethode aus!")
      return
    }

    if (!deliveryMethod) {
      alert("Bitte wähle eine Liefermethode aus!")
      return
    }

    setIsLoading(true)

    // Nur relevante Daten für die gewählte Liefermethode senden
    const orderData = {
      ...checkoutData,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      paymentMethod,
      deliveryMethod,
      orderDate: new Date().toISOString(),
    }

    // Versanddaten nur hinzufügen wenn Versand gewählt wurde
    if (deliveryMethod === "Versand") {
      orderData.address = formData.address
      orderData.city = formData.city
      orderData.postalCode = formData.postalCode
      orderData.country = formData.country
    }

    await sendToDiscord(orderData)

    // Formulardaten nach erfolgreichem Versand löschen
    localStorage.removeItem("checkoutData")
    resetForm()

    setTimeout(() => {
      setIsLoading(false)
      setOrderComplete(true)
    }, 2000)
  }

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-dark-800 rounded-xl border border-green-500">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Bestellung erfolgreich!</h1>
          <p className="text-gray-300 mb-6">
            {deliveryMethod === "Abholung"
              ? `Deine Bestellung ist eingegangen! Melde dich bei ${SHOP_CONFIG.telegram} auf Telegram für den Abholtermin.`
              : "Deine Bestellung wird nun verpackt und bald versendet. Du erhältst eine Bestätigung per E-Mail."}
          </p>
          {deliveryMethod === "Abholung" && (
            <div className="bg-blue-500/10 border border-blue-500 rounded-lg p-4 mb-6">
              <p className="text-blue-400 font-semibold">📱 Telegram: {SHOP_CONFIG.telegram}</p>
              <p className="text-gray-300 text-sm mt-1">Für Abholtermin kontaktieren</p>
            </div>
          )}
          <Link href="/shop">
            <Button className="w-full bg-green-600 text-white hover:bg-green-700">Weiter shoppen</Button>
          </Link>
        </div>
      </main>
    )
  }

  if (!checkoutData) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Keine Produktdaten gefunden</h1>
          <Link href="/shop">
            <Button className="bg-green-600 hover:bg-green-700">Zurück zum Shop</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark-900/95 backdrop-blur-sm border-b border-dark-600">
        <div className="container mx-auto px-4 py-4">
          <Link href="/shop" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück zum Shop</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Checkout</h1>

          {/* Order Summary */}
          <div className="bg-dark-800 rounded-xl p-6 mb-8 border border-green-500">
            <h2 className="text-2xl font-semibold text-white mb-4">Bestellübersicht</h2>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Produkt:</span>
                <span className="text-white">{checkoutData.product}</span>
              </div>
              <div className="flex justify-between">
                <span>Kategorie:</span>
                <span className="text-green-400">{checkoutData.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Anzahl:</span>
                <span className="text-white">{checkoutData.quantity}</span>
              </div>
              <div className="border-t border-dark-600 pt-2 mt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Gesamt:</span>
                  <span className="text-green-400">${checkoutData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="bg-dark-800 rounded-xl p-6 mb-6 border border-dark-600">
            <h2 className="text-2xl font-semibold text-white mb-6">Lieferung</h2>

            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setDeliveryMethod("Versand")}
                className={`w-full p-4 rounded-lg border-2 transition-all flex items-center space-x-4 ${
                  deliveryMethod === "Versand"
                    ? "border-green-500 bg-green-500/10"
                    : "border-dark-600 hover:border-gray-400"
                }`}
              >
                <Truck className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <span className="text-white font-semibold block">Versand</span>
                  <span className="text-gray-400 text-sm">Lieferung an deine Adresse</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMethod("Abholung")}
                className={`w-full p-4 rounded-lg border-2 transition-all flex items-center space-x-4 ${
                  deliveryMethod === "Abholung"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-dark-600 hover:border-gray-400"
                }`}
              >
                <MapPin className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <span className="text-white font-semibold block">Abholung</span>
                  <span className="text-gray-400 text-sm">Kontakt über {SHOP_CONFIG.telegram} auf Telegram</span>
                </div>
              </button>
            </div>
          </div>

          {/* Shipping Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-dark-800 rounded-xl p-6 border border-dark-600">
              <h2 className="text-2xl font-semibold text-white mb-6">
                {deliveryMethod === "Abholung" ? "Kontaktinformationen" : "Versandinformationen"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Vorname *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Nachname *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-300 mb-2">E-Mail *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Telefon *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none"
                  />
                </div>
              </div>

              {deliveryMethod === "Versand" && (
                <>
                  <div className="mt-4">
                    <label className="block text-gray-300 mb-2">Straße & Hausnummer *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Stadt *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">PLZ *</label>
                      <input
                        type="text"
                        name="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Land *</label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-600 text-white rounded-lg border border-dark-400 focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {deliveryMethod === "Abholung" && (
                <div className="mt-4 bg-blue-500/10 border border-blue-500 rounded-lg p-4">
                  <h3 className="text-blue-400 font-semibold mb-2">📱 Abholung Info:</h3>
                  <p className="text-gray-300 text-sm">
                    Nach der Bestellung melde dich bei <strong>{SHOP_CONFIG.telegram}</strong> auf Telegram um einen
                    Abholtermin zu vereinbaren.
                  </p>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-dark-800 rounded-xl p-6 border border-dark-600">
              <h2 className="text-2xl font-semibold text-white mb-6">Zahlungsmethode</h2>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("PayPal")}
                  className={`w-full p-4 rounded-lg border-2 transition-all flex items-center space-x-4 ${
                    paymentMethod === "PayPal"
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-dark-600 hover:border-gray-400"
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-blue-500" />
                  <span className="text-white font-semibold">PayPal</span>
                </button>

                {paymentMethod === "PayPal" && (
                  <div className="bg-blue-500/10 border border-blue-500 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">PayPal Zahlung:</h3>
                    <p className="text-gray-300 mb-2">
                      Sende das Geld per <strong>{SHOP_CONFIG.paypal.note}</strong> an:
                    </p>
                    <div className="flex items-center space-x-2 bg-dark-600 p-3 rounded-lg">
                      <span className="text-blue-400 font-mono">{SHOP_CONFIG.paypal.email}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(SHOP_CONFIG.paypal.email)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setPaymentMethod("Bitcoin")}
                  className={`w-full p-4 rounded-lg border-2 transition-all flex items-center space-x-4 ${
                    paymentMethod === "Bitcoin"
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-dark-600 hover:border-gray-400"
                  }`}
                >
                  <Bitcoin className="w-6 h-6 text-orange-500" />
                  <span className="text-white font-semibold">Bitcoin</span>
                </button>

                {paymentMethod === "Bitcoin" && (
                  <div className="bg-orange-500/10 border border-orange-500 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">Bitcoin Zahlung:</h3>
                    <p className="text-gray-300 mb-2">
                      Sende ${checkoutData.total.toFixed(2)} an diese Bitcoin-Adresse:
                    </p>
                    <div className="flex items-center space-x-2 bg-dark-600 p-3 rounded-lg">
                      <span className="text-orange-400 font-mono text-sm break-all">{SHOP_CONFIG.bitcoin.address}</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(SHOP_CONFIG.bitcoin.address)}
                        className="text-orange-400 hover:text-orange-300 flex-shrink-0"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white transition-all"
              size="lg"
            >
              {isLoading ? "Bestellung wird verarbeitet..." : "Kauf bestätigen"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
