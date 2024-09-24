function showModal() {
    document.getElementById('donationModal').classList.remove('hidden');
}

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('donationModal').classList.add('hidden');
});

document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
    const newlyAddedToNoakhali = parseFloat(document.getElementById('input-donate-noakhali').value);
    const previousAmountNoakhali = parseFloat(document.getElementById('amount-noakhali').innerText);
    const totalAvaiableAmount = parseFloat(document.getElementById('available-amount').innerText);
    const presentAmountNoakhali = newlyAddedToNoakhali + previousAmountNoakhali;
    const totalPresentAmount = totalAvaiableAmount - newlyAddedToNoakhali;
    if (newlyAddedToNoakhali < 0 || isNaN(presentAmountNoakhali))
        alert('Invalid Donation amount');
    else {
        document.getElementById('amount-noakhali').innerText = presentAmountNoakhali.toFixed(2);
        document.getElementById('available-amount').innerText = totalPresentAmount.toFixed(2);
        document.getElementById('form').reset();
        showModal();
    }
})

document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    const newlyAddedToFeni = parseFloat(document.getElementById('input-donate-feni').value);
    const previousAmountFeni = parseFloat(document.getElementById('amount-feni').innerText);
    const totalAvaiableAmount = parseFloat(document.getElementById('available-amount').innerText);
    const presentAmountFeni = newlyAddedToFeni + previousAmountFeni;
    const totalPresentAmount = totalAvaiableAmount - newlyAddedToFeni;
    if (newlyAddedToFeni < 0 || isNaN(presentAmountFeni))
        alert('Invalid Donation amount');
    else {
        document.getElementById('amount-feni').innerText = presentAmountFeni.toFixed(2);
        document.getElementById('available-amount').innerText = totalPresentAmount.toFixed(2);
        document.getElementById('form').reset();
        showModal();
    }
})

document.getElementById('btn-donate-movement').addEventListener('click', function (event) {
    const newlyAddedToMovement = parseFloat(document.getElementById('input-donate-movement').value);
    const previousAmountMovement = parseFloat(document.getElementById('amount-movement').innerText);
    const totalAvaiableAmount = parseFloat(document.getElementById('available-amount').innerText);
    const presentAmountMovement = newlyAddedToMovement + previousAmountMovement;
    const totalPresentAmount = totalAvaiableAmount - newlyAddedToMovement;
    if (newlyAddedToMovement < 0 || isNaN(presentAmountMovement))
        alert('Invalid Donation amount');
    else {
        document.getElementById('amount-movement').innerText = presentAmountMovement.toFixed(2);
        document.getElementById('available-amount').innerText = totalPresentAmount.toFixed(2);
        document.getElementById('form').reset();
        showModal();
    }
})
