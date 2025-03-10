function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value.trim();
    const decimalNumber = parseInt(decimalInput, 10);

    if (!/^\d+$/.test(decimalInput)) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    const binaryResult = decimalNumber.toString(2);
    document.getElementById('binaryResult').textContent = `Représentation binaire : ${binaryResult}`;
}