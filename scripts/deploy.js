const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Desplegando el contrato con la cuenta:", deployer.address);

    const USDT = await hre.ethers.getContractFactory("USDT");
    const usdt = await USDT.deploy(deployer.address);

    await usdt.deployed();

    console.log("Contrato USDT desplegado en:", usdt.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });