# Demo Token USDT en Arbitrum Sepolia

Este proyecto es una implementación de demostración de un token USDT (Tether USD) en la red de prueba Arbitrum Sepolia. El contrato es un token ERC20 estándar con funcionalidades adicionales de propiedad (Ownable).

### Contract address
[0x961bf3bf61d3446907e0db83c9c5d958c17a94f6](https://sepolia.arbiscan.io/token/0x961bf3bf61d3446907e0db83c9c5d958c17a94f6)

## Características

- Token ERC20 estándar (Demo)
- Nombre: Tether USD
- Símbolo: USDT
- Decimales: 6
- Suministro inicial: 1,000,000 USDT

## Requisitos previos

- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior)
- Cuenta en Arbitrum Sepolia con ETH para gas

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/TomasDmArg/demo-erc20
   cd demo-erc20
   ```

2. Instala las dependencias:
   ```
   yarn
   ```

3. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```
   PRIVATE_KEY=tu_clave_privada_aqui
   ARBISCAN_API_KEY=tu_api_key_de_arbiscan_aqui
   ```

## Compilación

Para compilar el contrato, ejecuta:

```
npx hardhat compile
```

## Despliegue

Para desplegar el contrato en Arbitrum Sepolia:

1. Asegúrate de tener ETH en tu cuenta de Arbitrum Sepolia.
2. Ejecuta el script de despliegue:
   ```
   npx hardhat run scripts/deploy.js --network arbitrumSepolia
   ```
3. Guarda la dirección del contrato desplegado para futuras interacciones.

## Verificación del contrato

Para verificar el contrato en Arbiscan Sepolia:

1. Asegúrate de tener configurada la `ARBISCAN_API_KEY` en tu archivo `.env`.
2. Ejecuta el script de verificación:
   ```
   npx hardhat run scripts/verify.js --network arbitrumSepolia
   ```

## Interacción con el contrato

### Transferencia de tokens

Para transferir tokens, puedes usar el script `transfer-usdt.js`:

1. Edita el script para establecer la dirección del contrato, la dirección del destinatario y la cantidad a transferir.
2. Ejecuta el script:
   ```
   npx hardhat run scripts/transfer-usdt.js --network arbitrumSepolia
   ```

### Otras interacciones

Puedes interactuar con otras funciones del contrato (como `approve`, `transferFrom`, etc.) creando scripts similares o usando la consola de Hardhat.