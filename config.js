// Restaurant Configuration File
// Update these values with your actual business details

const RESTAURANT_CONFIG = {
    // Payment Details
    telebirr: {
        number: "0912345678",
        merchantName: "Habesha RasTaurant"
    },
    
    bank: {
        name: "Commercial Bank of Ethiopia (CBE)",
        accountNumber: "1000123456789",
        accountHolder: "HABESHA RASTURANT PLC"
    },
    
    // Contact Information
    contact: {
        phone: "+251-XXX-XXXXXX",
        email: "info@habesharastaurant.com",
        address: "Bole Road, Addis Ababa, Ethiopia"
    },
    
    // Business Hours
    hours: {
        open: "9:00 AM",
        close: "11:00 PM",
        days: "Monday - Sunday"
    }
};

// Export for use in HTML (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RESTAURANT_CONFIG;
}
