const shopName = "Tatak Biyaya";
const currentYear = 2026;
let runningTotal = 299.00 + 250.00 + 199.00;

const stockCount = 12;
const orderTotal = 500;
const isMember = true;
const isShopOpen = true;

const shopTitleElements = document.querySelectorAll('#shop-title');
shopTitleElements.forEach(element => {
    element.textContent = shopName;
});

const footerElement = document.getElementById('footer-copyright');
if (footerElement) {
    footerElement.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

const productCountElement = document.getElementById('product-count');
if (productCountElement) {
    productCountElement.textContent = "Total Products Available: 3 items";
}

const computedTotalElement = document.getElementById('computed-total');
if (computedTotalElement) {
    computedTotalElement.textContent = `₱${runningTotal.toFixed(2)}`;
}

const stockStatusElement = document.getElementById('stock-status');
if (stockStatusElement) {
    let stockMessage = "";
    if (stockCount > 10) {
        stockMessage = "In stock";
    } else if (stockCount >= 1 && stockCount <= 10) {
        stockMessage = "Only a few left";
    } else {
        stockMessage = "Sold out";
    }
    stockStatusElement.textContent = stockMessage;
}

const deliveryFeeElement = document.getElementById('delivery-fee');
const finalTotalElement = document.getElementById('final-total');
if (deliveryFeeElement && finalTotalElement) {
    const isFreeDelivery = orderTotal >= 500 && isMember === true;
    const deliveryFee = isFreeDelivery ? 0 : 150;
    const finalTotal = orderTotal + deliveryFee;

    deliveryFeeElement.textContent = `₱${deliveryFee}`;
    finalTotalElement.textContent = `₱${finalTotal}`;
}

const shopStatusElement = document.getElementById('shop-status');
if (shopStatusElement) {
    shopStatusElement.textContent = isShopOpen === true ? "Open today" : "Closed today";
}

console.log('Shop Name:', shopName);
console.log('Current Year:', currentYear);
console.log('Running Total:', runningTotal);
