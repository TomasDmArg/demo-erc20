const hre = require("hardhat");

async function main() {
    // Dirección del contrato USDT desplegado
    const usdtAddress = "0x961bf3bf61d3446907E0Db83C9c5D958c17A94f6";

    // Dirección del destinatario
    const recipientAddress = "0x7d184747Ad8a21fb1418c888ACff02bF3756E34b";

    // Cantidad a transferir (en unidades más pequeñas, considerando los decimales)
    const amount = hre.ethers.utils.parseUnits("100000", 6); // 10 USDT, asumiendo 6 decimales

    // Conectar al contrato
    const USDT = await hre.ethers.getContractFactory("USDT");
    const usdt = await USDT.attach(usdtAddress);

    // Realizar la transferencia
    console.log(`Transfiriendo ${amount} USDT a ${recipientAddress}...`);
    const tx = await usdt.transfer(recipientAddress, amount);

    // Esperar a que la transacción sea minada
    await tx.wait();

    console.log(`Transferencia completada. Hash de la transacción: ${tx.hash}`);

    // Verificar el balance después de la transferencia
    const balance = await usdt.balanceOf(recipientAddress);
    console.log(`Nuevo balance del destinatario: ${hre.ethers.utils.formatUnits(balance, 6)} USDT`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });