// Custom JavaScript for Career Fund

document.addEventListener('DOMContentLoaded', function() {
    console.log('Career Fund site loaded');
    
    // Payment Calculator Functionality
    const depositSlider = document.getElementById('deposit-slider');
    const paymentsSlider = document.getElementById('payments-slider');
    const frequencySlider = document.getElementById('frequency-slider');
    const depositValue = document.getElementById('deposit-value');
    const paymentsValue = document.getElementById('payments-value');
    const frequencyValue = document.getElementById('frequency-value');
    const paymentAmount = document.getElementById('payment-amount');
    
    // Frequency options mapping
    const frequencyOptions = ['Weekly', 'Bi-weekly', 'Monthly'];
    
    // Constants
    const PROGRAM_COST = 4000;
    const PLAN_FEE = 300;
    const TOTAL_COST = PROGRAM_COST + PLAN_FEE;
    
    // Format currency
    function formatCurrency(amount) {
        return '$' + amount.toLocaleString('en-US');
    }
    
    // Calculate payment amount
    function calculatePayment() {
        const deposit = parseInt(depositSlider.value);
        const payments = parseInt(paymentsSlider.value);
        const frequencyIndex = parseInt(frequencySlider.value);
        
        const remaining = TOTAL_COST - deposit;
        
        // Calculate payment based on frequency
        let paymentPerPeriod;
        if (frequencyIndex === 0) { // Weekly
            paymentPerPeriod = remaining / payments;
        } else if (frequencyIndex === 1) { // Bi-weekly
            paymentPerPeriod = remaining / (payments / 2);
        } else { // Monthly
            paymentPerPeriod = remaining / (payments / 4);
        }
        
        paymentAmount.textContent = formatCurrency(Math.ceil(paymentPerPeriod));
    }
    
    // Update deposit slider
    if (depositSlider) {
        depositSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            depositValue.textContent = formatCurrency(value);
            calculatePayment();
        });
    }
    
    // Update payments slider
    if (paymentsSlider) {
        paymentsSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            paymentsValue.textContent = value + ' weeks';
            calculatePayment();
        });
    }
    
    // Update frequency slider
    if (frequencySlider) {
        frequencySlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            frequencyValue.textContent = frequencyOptions[value];
            calculatePayment();
        });
    }
    
    // Initialize calculation
    calculatePayment();
    
    // Growth Services Tabs Functionality
    const serviceTabs = document.querySelectorAll('.service-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (serviceTabs.length > 0) {
        serviceTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                serviceTabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                const targetContent = document.getElementById(targetTab + '-content');
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});
