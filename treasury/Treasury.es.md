# Especificación del Módulo de Tesorería

## 1. Resumen

La Tesorería es el motor financiero de OpenSovereign. Sigue un mandato estricto de transparencia y minimalismo. Los fondos se utilizan únicamente para mantener la infraestructura común, no para la redistribución de riqueza.

## 2. Flujos de Ingresos

OpenSovereign genera ingresos a través de tarifas de uso voluntarias, no mediante impuestos forzosos sobre la renta.

* **Tarifas de Transacción:** Un pequeño porcentaje de las transacciones procesadas por la red (gas fees).
* **Tarifas de Servicio:** Tarifas por el uso de servicios específicos como Arbitraje o emisión de Identidad.
* **Impuesto Harberger (Opcional, Experimental):** Aplicado solo a recursos comunes escasos (ej. espacios de nombres premium).
* **Donaciones:** Contribuciones voluntarias al bien público.

## 3. Presupuesto y Gasto

El gasto se basa en propuestas y requiere la aprobación de la comunidad.

1. **Envío de Propuesta:** Cualquier ciudadano puede enviar una propuesta de gasto detallando monto, destinatario y propósito.
2. **Verificación:** Un comité técnico verifica la viabilidad y seguridad de la propuesta.
3. **Votación:** Los ciudadanos votan. El umbral de aprobación depende del monto solicitado (mayor monto = mayor consenso necesario).
4. **Ejecución:** Los fondos aprobados se transmiten (vía Superfluid o similar) en lugar de pagarse en sumas globales, permitiendo la cancelación si no se cumplen los entregables.

## 4. Auditoría

* **Dashboard en Tiempo Real:** Todas las entradas y salidas de la tesorería son visibles en un dashboard público de explorador de bloques.
* **Pruebas Criptográficas:** La solvencia es verificable on-chain 24/7.
* **Etiquetado:** cada transacción se etiqueta con una categoría (Infraestructura, Seguridad, Legal) para facilitar el análisis.

## 5. Smart Contracts

```solidity
interface ITreasury {
    event Deposit(address indexed sender, uint256 amount, string reason);
    event ProposalCreated(uint256 id, address recipient, uint256 amount);
    event ProposalExecuted(uint256 id);

    // Crear una propuesta de gasto
    function createProposal(address recipient, uint256 amount, string calldata description) external returns (uint256);

    // Votar en una propuesta
    function vote(uint256 proposalId, bool support) external;

    // Ejecutar una propuesta aprobada
    function executeProposal(uint256 proposalId) external;
}
```
