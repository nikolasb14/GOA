// bank.js

function deposit() {
    var amount = parseFloat(document.getElementById('amountInput').value);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount for deposit.');
      return;
    }
  
    var currentBalance = parseFloat(document.getElementById('accountBalance').innerText);
    var newBalance = currentBalance + amount;
    document.getElementById('accountBalance').innerText = newBalance.toFixed(2);
    resetInput();
  }
  
  function withdraw() {
    var amount = parseFloat(document.getElementById('amountInput').value);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount for withdrawal.');
      return;
    }
  
    var currentBalance = parseFloat(document.getElementById('accountBalance').innerText);
    if (amount > currentBalance) {
      alert('Insufficient funds for withdrawal.');
      return;
    }
  
    var newBalance = currentBalance - amount;
    document.getElementById('accountBalance').innerText = newBalance.toFixed(2);
    resetInput();
  }
  
  function resetInput() {
    document.getElementById('amountInput').value = '';
  }