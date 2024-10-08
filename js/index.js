function showModal() {
    document.getElementById('donationModal').classList.remove('hidden');
}

document.getElementById('blog').addEventListener('click', function (event) {
    window.location.href = 'blog.html';
})

document.getElementById('btn-donation').classList.add('bg-[#B4F461]');
document.getElementById('btn-donation').classList.add('hover:bg-[rgba(180,244,97,.7)]');

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
    {
        alert('Invalid Donation amount');
        document.getElementById('form').reset();
    }
    else {
        document.getElementById('amount-noakhali').innerText = presentAmountNoakhali.toFixed(2);
        document.getElementById('available-amount').innerText = totalPresentAmount.toFixed(2);
        showModal();
        document.getElementById('form').reset();

        
        const currentDate = new Date();

        // Create the new donation message
        const donationMessage = `
        <div class ="mb-8 border-2 p-8 rounded-[16px] mx-auto max-w-[1140px]">
        <div class="">
            <p class = "font-black text-xl">${newlyAddedToNoakhali.toFixed(2)} Taka is Donated for Flood at Noakhali, Bangladesh</p>
            <p class="mt-4 font-light">Date: ${currentDate}</p>
        </div>
        </div>
    `;
        document.getElementById('donation-history').innerHTML += donationMessage;
    }
})

document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    const newlyAddedToFeni = parseFloat(document.getElementById('input-donate-feni').value);
    const previousAmountFeni = parseFloat(document.getElementById('amount-feni').innerText);
    const totalAvaiableAmount = parseFloat(document.getElementById('available-amount').innerText);
    const presentAmountFeni = newlyAddedToFeni + previousAmountFeni;
    const totalPresentAmount = totalAvaiableAmount - newlyAddedToFeni;
    if (newlyAddedToFeni < 0 || isNaN(presentAmountFeni))
    {
        alert('Invalid Donation amount');
        document.getElementById('form').reset();
    }
    else {
        document.getElementById('amount-feni').innerText = presentAmountFeni.toFixed(2);
        document.getElementById('available-amount').innerText = totalPresentAmount.toFixed(2);
        showModal();
        document.getElementById('form1').reset();
    }
    const currentDate = new Date();

    // Create the new donation message
    const donationMessage = `
        <div class ="mb-8 border-2 p-8 rounded-[16px] mx-auto max-w-[1140px]">
        <div class="">
            <p class = "font-black text-xl">${newlyAddedToFeni.toFixed(2)} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
            <p class="mt-4 font-light">Date: ${currentDate}</p>
        </div>
        </div>
    `;
    document.getElementById('donation-history').innerHTML += donationMessage;
})

document.getElementById('btn-donate-movement').addEventListener('click', function (event) {
    const newlyAddedToMovement = parseFloat(document.getElementById('input-donate-movement').value);
    const previousAmountMovement = parseFloat(document.getElementById('amount-movement').innerText);
    const totalAvaiableAmount = parseFloat(document.getElementById('available-amount').innerText);
    const presentAmountMovement = newlyAddedToMovement + previousAmountMovement;
    const totalPresentAmount = totalAvaiableAmount - newlyAddedToMovement;
    if (newlyAddedToMovement < 0 || isNaN(presentAmountMovement))
    {
        alert('Invalid Donation amount');
        document.getElementById('form').reset();
    }
    else {
        document.getElementById('amount-movement').innerText = presentAmountMovement.toFixed(2);
        document.getElementById('available-amount').innerText = totalPresentAmount.toFixed(2);
        showModal();
        document.getElementById('form2').reset();
    }
    const currentDate = new Date();

    // Create the new donation message
    const donationMessage = `
        <div class ="mb-8 border-2 p-8 rounded-[16px] mx-auto max-w-[1140px]">
        <div class="">
            <p class = "font-black text-xl">${newlyAddedToMovement.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p class="mt-4 font-light">Date: ${currentDate}</p>
        </div>
        </div>
    `;
    document.getElementById('donation-history').innerHTML += donationMessage;
})

document.getElementById('btn-history').addEventListener('click', function (event) {
    document.getElementById('donation-history').classList.remove('hidden')
    document.getElementById('cards').classList.add('hidden');
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donation').classList.remove('hover:bg-[rgba(180,244,97,.7)]');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
    document.getElementById('btn-history').classList.add('hover:bg-[rgba(180,244,97,.7)]');
})

document.getElementById('btn-donation').addEventListener('click', function (event) {
    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('donation-history').classList.add('hidden');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('hover:bg-[rgba(180,244,97,.7)]');
    document.getElementById('btn-donation').classList.remove('hidden');
    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');
    document.getElementById('btn-donation').classList.add('hover:bg-[rgba(180,244,97,.7)]');
})