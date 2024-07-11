// mockPaymentApi.js

const mockPaymentApi = {
    processPayment: (amount, cardDetails) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate API call delay
          if (cardDetails.number.startsWith('4')) {
            resolve({ success: true, transactionId: Math.random().toString(36).substr(2, 9) });
          } else {
            reject({ success: false, error: 'Invalid card number' });
          }
        }, 1500);
      });
    },
    
    getPaymentHistory: (userId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate API call delay
          resolve([
            { id: '1', amount: 100, date: '2024-07-01' },
            { id: '2', amount: 50, date: '2024-07-05' },
            { id: '3', amount: 75, date: '2024-07-10' },
          ]);
        }, 1000);
      });
    }
  };
  
  export default mockPaymentApi;