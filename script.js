const shopName = "Tatak Biyaya";
const currentYear = 2026;
let runningTotal = 299.00 + 250.00 + 199.00;

const stockCount = 12;
const orderTotal = 500;
const isMember = true;
const isShopOpen = true;

// 1. Dynamic Shop Name
const shopTitleElements = document.querySelectorAll('#shop-title');
shopTitleElements.forEach(element => {
    element.textContent = shopName;
});

// 2. Dynamic Footer Copyright
const footerElement = document.getElementById('footer-copyright');
if (footerElement) {
    footerElement.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

// 3. Product Count & Computed Catalog Total
const productCountElement = document.getElementById('product-count');
if (productCountElement) {
    productCountElement.textContent = "Total Products Available: 3 items";
}

const computedTotalElement = document.getElementById('computed-total');
if (computedTotalElement) {
    computedTotalElement.textContent = `₱${runningTotal.toFixed(2)}`;
}

// 4. Stock Status Logic (if / else if / else)
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

// 5. Free Delivery Check (&& and ternary operator)
const deliveryFeeElement = document.getElementById('delivery-fee');
const finalTotalElement = document.getElementById('final-total');
if (deliveryFeeElement && finalTotalElement) {
    const isFreeDelivery = orderTotal >= 500 && isMember === true;
    const deliveryFee = isFreeDelivery ? 0 : 150;
    const finalTotal = orderTotal + deliveryFee;

    deliveryFeeElement.textContent = `₱${deliveryFee}`;
    finalTotalElement.textContent = `₱${finalTotal}`;
}

// 6. Shop Open or Closed (ternary operator)
const shopStatusElement = document.getElementById('shop-status');
if (shopStatusElement) {
    shopStatusElement.textContent = isShopOpen === true ? "Open today" : "Closed today";
}

// 7. Console logs
console.log('Shop Name:', shopName);
console.log('Current Year:', currentYear);
console.log('Running Total:', runningTotal);

// --- INTERACTIVITY (CLICKABLE BUTTONS & SIZES) ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Size Badge Selection Interactivity
    const sizeBadges = document.querySelectorAll('.size-badges .badge');
    
    sizeBadges.forEach(badge => {
        badge.addEventListener('click', () => {
            const parent = badge.parentElement;
            if (parent) {
                const siblings = parent.querySelectorAll('.badge');
                siblings.forEach(s => s.classList.remove('selected'));
            }
            badge.classList.add('selected');
        });
    });

    // Add to Cart / Enquiry Button Interactivity
    const cartButtons = document.querySelectorAll('.btn-primary');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            let itemName = "Item";
            let selectedSize = "";
            
            const productDetail = button.closest('.product-detail-info') || button.closest('.enquiry-section') || button.closest('main');
            
            if (productDetail) {
                const titleHeading = document.querySelector('h2');
                if (titleHeading) {
                    itemName = titleHeading.textContent;
                }

                const activeSizeBadge = document.querySelector('.badge.selected');
                if (activeSizeBadge) {
                    selectedSize = activeSizeBadge.textContent;
                }
            }

            if (selectedSize !== "") {
                alert(`Successfully processed enquiry/cart for "${itemName}" (Size: ${selectedSize})! 🛒`);
            } else {
                alert(`Successfully processed enquiry/cart for "${itemName}"! 🛒`);
            }
        });
    });

});
