# Ejemplos Funcionales

Este directorio contiene implementaciones de referencia y ejemplos para demostrar los módulos principales de OpenSovereign.

## Contenido

### 1. Registro de Identidad (IdentityRegistry.sol)

Un contrato inteligente en Solidity que implementa la lógica básica de Identidad Auto-Soberana (SSI).

- Permite a los usuarios registrar un DID.
- Permite a la autoridad emitir credenciales.

### 2. Script de Registro y Pago (register_citizen_pay_fee.js)

Un script de JavaScript (Node.js) que simula el flujo de usuario:

- Registra una identidad.
- Firma el contrato social para unirse a la Ciudadanía.
- Paga una tasa en la Tesorería.

**Uso:**

```bash
npm install
node register_citizen_pay_fee.js
```

### 3. Simulación de Voto (voting_simulation.py)

Un script en Python que calcula el Poder de Voto según el modelo de gobernanza.

- Muestra cómo el "Skin in the Game" (Stake bloqueado) y la Reputación afectan al peso del voto.

**Uso:**

```bash
python3 voting_simulation.py
```
