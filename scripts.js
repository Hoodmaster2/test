document.addEventListener('DOMContentLoaded', function() {
    const apiKeyBtn = document.getElementById('apiKeyBtn');
    const balanceBtn = document.getElementById('balanceBtn');
    const orderBtn = document.getElementById('orderBtn');
    const statusBtn = document.getElementById('statusBtn');
    const apiKeyModal = document.getElementById('apiKeyModal');
    const closeModal = document.getElementById('closeModal');
    const saveApiKey = document.getElementById('saveApiKey');
    const apiKeyInput = document.getElementById('apiKeyInput');
    const results = document.getElementById('results');
    const resultData = document.getElementById('resultData');
    
    let apiKey = localStorage.getItem('apiKey');
    
    apiKeyBtn.addEventListener('click', () => {
        apiKeyInput.value = apiKey || '';
        apiKeyModal.style.display = 'block';
    });
    
    balanceBtn.addEventListener('click', () => {
        if (!apiKey) {
            apiKeyInput.value = apiKey || '';
            apiKeyModal.style.display = 'block';
        } else {
            checkBalance(apiKey);
        }
    });
    
    orderBtn.addEventListener('click', () => {
        if (!apiKey) {
            apiKeyInput.value = apiKey || '';
            apiKeyModal.style.display = 'block';
        } else {
            showOrderPrompt(apiKey);
        }
    });
    
    statusBtn.addEventListener('click', () => {
        if (!apiKey) {
            apiKeyInput.value = apiKey || '';
            apiKeyModal.style.display = 'block';
        } else {
            showStatusPrompt(apiKey);
        }
    });
    
    saveApiKey.addEventListener('click', () => {
        apiKey = apiKeyInput.value.trim();
        localStorage.setItem('apiKey', apiKey);
        apiKeyModal.style.display = 'none';
    });
    
    closeModal.addEventListener('click', () => {
        apiKeyModal.style.display = 'none';
    });

    function checkBalance(apiKey) {
        const response = { balance: '0.6113962', currency: 'USD' };
        displayResult(response);
    }

    function showOrderPrompt(apiKey) {
        // Implement the order prompt and API call here
        const serviceID = prompt('Enter the service ID:');
        if (serviceID) {
            placeOrder(apiKey, serviceID);
        }
    }

    function showStatusPrompt(apiKey) {
        // Implement the status prompt and API call here
        const orderID = prompt('Enter the order ID:');
        if (orderID) {
            checkOrderStatus(apiKey, orderID);
        }
    }

    function placeOrder(apiKey, serviceID) {
        // Implement the API call to place an order here
        const response = { order: 23501 };
        displayResult(response);
    }

    function checkOrderStatus(apiKey, orderID) {
        // Implement the API call to check order status here
        const response = { charge: '0.27819', start_count: '3572', status: 'Partial', remains: '157', currency: 'USD' };
        displayResult(response);
    }

    function displayResult(response) {
        resultData.innerHTML = `<pre>${JSON.stringify(response, null, 4)}</pre>`;
        results.style.display = 'block';
    }
});
