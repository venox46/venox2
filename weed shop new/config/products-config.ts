// 🔥 CLAY GROUP - PRODUKTE KONFIGURATION 🔥
// Hier kannst du ALLES bearbeiten: Bilder, Preise, Namen, Beschreibungen, Features!

export interface Product {
  id: number
  name: string
  price: number
  image1: string
  image2: string
  description: string
  features: string[]
  category: string
}

export const PRODUCTS_CONFIG: Product[] = [
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

// 🔥 ANLEITUNG ZUM BEARBEITEN:
//
// 1. NEUES PRODUKT HINZUFÜGEN:
//    Kopiere einen Eintrag und ändere die ID auf die nächste Nummer
//
// 2. PREIS ÄNDERN:
//    price: 99.99  // Neuer Preis
//
// 3. BILDER ÄNDERN:
//    image1: "https://neue-url.com/bild1.jpg"
//    image2: "https://neue-url.com/bild2.jpg"
//
// 4. NAME ÄNDERN:
//    name: "Neuer Produktname"
//
// 5. BESCHREIBUNG ÄNDERN:
//    description: "Neue Beschreibung hier..."
//
// 6. FEATURES ÄNDERN:
//    features: ["Feature 1", "Feature 2", "Feature 3"]
//
// 7. KATEGORIE ÄNDERN:
//    category: "Neue Kategorie"
//
// 8. PRODUKT LÖSCHEN:
//    Lösche den ganzen Eintrag {...}
//
// BEISPIEL FÜR NEUES PRODUKT:
// {
//   id: 13,
//   name: "Super Bong XL",
//   price: 149.99,
//   image1: "https://example.com/bong1.jpg",
//   image2: "https://example.com/bong2.jpg",
//   description: "Die beste Bong ever!",
//   features: ["Riesig", "Glas", "Cool"],
//   category: "Bongs",
// },
