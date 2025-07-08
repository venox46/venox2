// Produktdaten
const products = [
    {
        title: "Dein Titel",
        price: "€89.99",
        image: "https://cdn.discordapp.com/attachments/1377288531587891283/1390090363859111997/F8E9E51F-AF13-4D8E-BD53-AE62010517D8.png?ex=6866fe09&is=6865ac89&hm=6d56e4a39cf0523e20984be854a448eeb8a2eeb1c8b779a0065356ad6b33eea4&",
        description: "deine Beschreibung"
    },
    {
        title: "Dein Titel",
        price: "€129.99",
        image: "https://cdn.discordapp.com/attachments/1377288531587891283/1390090363859111997/F8E9E51F-AF13-4D8E-BD53-AE62010517D8.png?ex=6866fe09&is=6865ac89&hm=6d56e4a39cf0523e20984be854a448eeb8a2eeb1c8b779a0065356ad6b33eea4&",
        description: "deine Beschreibung"
    },
    {
        title: "Dein Titel",
        price: "€59.99",
        image: "https://cdn.discordapp.com/attachments/1377288531587891283/1390090363859111997/F8E9E51F-AF13-4D8E-BD53-AE62010517D8.png?ex=6866fe09&is=6865ac89&hm=6d56e4a39cf0523e20984be854a448eeb8a2eeb1c8b779a0065356ad6b33eea4&",
        description: "deine Beschreibung"
    },
    {
        title: "Dein Titel",
        price: "€24.99",
        image: "https://cdn.discordapp.com/attachments/1377288531587891283/1390090363859111997/F8E9E51F-AF13-4D8E-BD53-AE62010517D8.png?ex=6866fe09&is=6865ac89&hm=6d56e4a39cf0523e20984be854a448eeb8a2eeb1c8b779a0065356ad6b33eea4&",
        description: "deine Beschreibung"
    }
];

// Hintergrund-Animation
function createBackground() {
    const bgAnimation = document.getElementById('bgAnimation');
    const circleCount = 15;
    
    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        circle.classList.add('bg-circle');
        
        // Zufällige Größe und Position
        const size = Math.random() * 100 + 50;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        
        // Zufällige Animationsdauer und Verzögerung
        circle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        circle.style.animationDelay = `${Math.random() * 5}s`;
        
        bgAnimation.appendChild(circle);
    }
}

// Modal-Funktionen
let currentProductIndex = 0;

function openModal(index) {
    currentProductIndex = index;
    const product = products[index];
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductTitle').textContent = product.title;
    document.getElementById('modalProductPrice').textContent = product.price;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('productQuantity').value = 1;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function changeQuantity(amount) {
    const quantityInput = document.getElementById('productQuantity');
    let newValue = parseInt(quantityInput.value) + amount;
    
    if (newValue < 1) newValue = 1;
    quantityInput.value = newValue;
}

// Lieferoptionen
function selectDeliveryOption(option) {
    // Setze den korrekten Radio Button
    const shippingRadio = document.getElementById('shipping');
    const pickupRadio = document.getElementById('pickup');
    
    if (option === 'shipping') {
        shippingRadio.checked = true;
        pickupRadio.checked = false;
    } else {
        shippingRadio.checked = false;
        pickupRadio.checked = true;
    }
    
    document.getElementById('shippingAddress').style.display = option === 'shipping' ? 'block' : 'none';
    document.getElementById('pickupLocation').style.display = option === 'pickup' ? 'block' : 'none';
    
    // Pflichtfelder anpassen
    const addressFields = document.querySelectorAll('#shippingAddress input');
    addressFields.forEach(field => field.required = option === 'shipping');
}

// Discord-Webhook-Integration
function submitIdea() {
    const ideaInput = document.getElementById('productIdea');
    const idea = ideaInput.value.trim();
    
    if (!idea) {
        alert('Bitte gib eine Produktidee ein!');
        return;
    }

    const webhookUrl = 'https://discord.com/api/webhooks/1391151325277851790/gjYXzrwk8NBEZUsI-B4-HY9-2EeNNZZsV1HZxBRStBp2Lm-edOBZEkOgkpT8snzxONlF';
    const data = {
        content: `Neue Produktidee: ${idea}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Vielen Dank für deine Produktidee! Sie wurde erfolgreich gesendet.');
            ideaInput.value = '';
        } else {
            throw new Error('Fehler beim Senden der Produktidee');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Es ist ein Fehler beim Senden der Produktidee aufgetreten. Bitte versuche es später erneut.');
    });
}

async function sendToDiscord(data) {
    const webhookURL = 'https://discord.com/api/webhooks/1390094250628350053/3U1kf7q3zQOZCIzjkwm5V0IOYH30TNANl1KFa1CgSNdS5rlRG8ybeECvveajCexUW0fG';
    
    const embed = {
        title: "🛒 Neue Bestellung im Venox Shop",
        color: 0x6A0DAD, // Lila
        fields: [
            { name: "Produkt", value: data.product, inline: true },
            { name: "Menge", value: data.quantity, inline: true },
            { name: "Preis", value: data.totalPrice, inline: true },
            { name: "Kunde", value: data.fullName, inline: true },
            { name: "E-Mail", value: data.email, inline: true },
            { name: "Lieferoption", value: data.deliveryMethod === 'shipping' ? 'Versand' : 'Abholung', inline: true },
            { 
                name: data.deliveryMethod === 'shipping' ? "Lieferadresse" : "Treffpunkt", 
                value: data.deliveryMethod === 'shipping' ? 
                    `${data.streetAddress}, ${data.postalCode} ${data.city}, ${data.country}` : 
                    data.meetingPoint 
            },
            { name: "Zahlungsmethode", value: data.paymentMethod, inline: true }
        ],
        timestamp: new Date().toISOString()
    };

    try {
        await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                content: `**Neue Bestellung von ${data.fullName}**`,
                embeds: [embed] 
            })
        });
        return true;
    } catch (error) {
        console.error("Fehler beim Senden an Discord:", error);
        return false;
    }
}

// Checkout-Funktionen
function openCheckoutModal() {
    const product = products[currentProductIndex];
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(product.price.replace('€', ''));
    const total = price * quantity;
    
    // Bestellzusammenfassung füllen
    document.getElementById('checkoutItems').innerHTML = `
        <div class="checkout-item">
            <span>${quantity}x ${product.title}</span>
            <span>€${(price * quantity).toFixed(2)}</span>
        </div>
    `;
    
    document.getElementById('checkoutTotal').innerHTML = `
        <div class="checkout-item">
            <span>Gesamt</span>
            <span>€${total.toFixed(2)}</span>
        </div>
    `;
    
    // Krypto-Beträge aktualisieren
    updateCryptoAmounts(total);
    
    // Standardmäßig Bitcoin-Zahlungsdetails anzeigen
    selectPaymentMethod('bitcoin');
    selectDeliveryOption('shipping');
    
    // Formular zurücksetzen und Erfolgsmeldung ausblenden
    document.getElementById('checkoutForm').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    
    // Modal anzeigen
    document.getElementById('checkoutModal').style.display = "block";
    closeModal();
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = "none";
    document.body.style.overflow = "auto";
}

function selectPaymentMethod(method) {
    // Radio-Button auswählen
    document.getElementById(method).checked = true;
    
    // Alle Zahlungsdetails ausblenden
    document.getElementById('bitcoinDetails').style.display = 'none';
    document.getElementById('moneroDetails').style.display = 'none';
    document.getElementById('paypalDetails').style.display = 'none';
    
    // Ausgewählte Zahlungsmethode anzeigen
    document.getElementById(`${method}Details`).style.display = 'block';
    
    // Krypto-Beträge aktualisieren
    const total = getOrderTotal();
    updateCryptoAmounts(total);
}

function getOrderTotal() {
    const product = products[currentProductIndex];
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const price = parseFloat(product.price.replace('€', ''));
    return price * quantity;
}

function updateCryptoAmounts(total) {
    // Hier würden Sie normalerweise aktuelle Wechselkurse abrufen
    // Für dieses Beispiel verwenden wir feste Kurse
    const btcRate = 50000; // 1 BTC = 50.000 EUR
    const xmrRate = 200;   // 1 XMR = 200 EUR
    
    document.getElementById('bitcoinAmount').textContent = (total / btcRate).toFixed(8);
    document.getElementById('moneroAmount').textContent = (total / xmrRate).toFixed(8);
}

async function completePurchase() {
    // Formular validieren
    const formInputs = document.querySelectorAll('#checkoutForm input[required]');
    let isValid = true;
    
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#f44336';
        } else {
            input.style.borderColor = '#444';
        }
    });
    
    if (!isValid) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus.');
        return;
    }

    // Daten sammeln
    const product = products[currentProductIndex];
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const totalPrice = parseFloat(product.price.replace('€', '')) * quantity;
    
    const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    const orderData = {
        product: product.title,
        quantity: quantity,
        totalPrice: `€${totalPrice.toFixed(2)}`,
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        deliveryMethod: deliveryMethod,
        paymentMethod: paymentMethod.toUpperCase(),
        streetAddress: document.getElementById('streetAddress').value,
        city: document.getElementById('city').value,
        postalCode: document.getElementById('postalCode').value,
        country: document.getElementById('country').value,
        meetingPoint: deliveryMethod === 'pickup' ? document.getElementById('meetingPoint').value : null
    };

    // An Discord senden
    const success = await sendToDiscord(orderData);
    
    if (success) {
        // Erfolgsmeldung anzeigen
        document.getElementById('checkoutForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    } else {
        alert('Fehler beim Senden der Bestellung. Bitte versuchen Sie es später erneut.');
    }
}

// Warenkorb-Funktionen
document.getElementById('addToCartBtn').addEventListener('click', function() {
    const quantity = parseInt(document.getElementById('productQuantity').value);
    alert(`${quantity}x ${products[currentProductIndex].title} wurde zum Warenkorb hinzugefügt!`);
    closeModal();
});

document.getElementById('buyNowBtn').addEventListener('click', function() {
    openCheckoutModal();
});

// Schließen des Modals beim Klicken außerhalb des Inhalts
window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    const checkoutModal = document.getElementById('checkoutModal');
    
    if (event.target == productModal) {
        closeModal();
    }
    
    if (event.target == checkoutModal) {
        closeCheckoutModal();
    }
}

// Initialisierung
window.onload = function() {
    createBackground();
};
