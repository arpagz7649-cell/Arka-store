let selectedDiamond = null;
let price = 0;

function selectDiamond(amount, cost) {
    selectedDiamond = amount;
    price = cost;
    alert("Anda memilih " + amount + " Diamonds seharga Rp " + cost);
}

function processOrder() {
    const userId = document.getElementById('user_id').value;
    const zoneId = document.getElementById('zone_id').value;
    const payment = document.getElementById('payment_method').value;

    if (!userId || !selectedDiamond) {
        alert("Master, tolong lengkapi ID dan jumlah Diamond dulu ya!");
        return;
    }

    // Nanti di sini data dikirim ke Backend menggunakan Fetch API
    console.log("Pesanan:", {
        game: "Mobile Legends",
        id: userId + zoneId,
        diamond: selectedDiamond,
        total: price,
        method: payment
    });

    alert("Pesanan diproses! Menghubungkan ke sistem pembayaran...");
}
