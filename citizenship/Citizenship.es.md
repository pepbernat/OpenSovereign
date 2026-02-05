# Especificación del Módulo de Ciudadanía

## 1. Resumen

La ciudadanía en OpenSovereign no es un derecho de nacimiento, sino un acuerdo voluntario. Define la relación entre el individuo y el colectivo, basada en derechos y responsabilidades mutuos.

## 2. Criterios de Entrada

Para convertirse en ciudadano (Residente), un individuo debe cumplir criterios específicos que aseguren su alineación con la comunidad.

* **Verificación de Identidad:** Debe poseer una *Credencial de Ciudadanía* válida (ver [Identidad](../identity/Identity.es.md)).
* **Stake:** Un depósito reembolsable (ej. 100 Tokens OS) bloqueado en el Contrato de Gobernanza para prevenir ataques Sybil.
* **Patrocinio:** Los nuevos ciudadanos deben ser avalados por 1 ciudadano existente con un Puntaje de Reputación positivo.
* **Juramento:** Firma criptográfica del Contrato Social.

## 3. El Contrato Social

El Contrato Social es un acuerdo digital legalmente vinculante.

> "Yo, [Nombre/DID], me uno voluntariamente a OpenSovereign. Acepto respetar el Principio de No Agresión, resolver disputas a través del Módulo de Arbitraje y contribuir a la infraestructura común. Reconozco mi derecho a salir en cualquier momento."

### 3.1. Implementación Técnica

El contrato se almacena como un hash IPFS referenciado en el smart contract. Firmarlo implica:

1. Llamar a `joinState(ipfsHash)` en el contrato.
2. La data de la transacción incluye la firma del usuario sobre el hash.

## 4. Sistema de Reputación

La reputación es una medida cuantitativa de la contribución y confiabilidad de un ciudadano.

* **Acumulación:**
  * **Participación:** Votar en propuestas de gobernanza (+1 punto).
  * **Servicio:** Actuar como jurado o validador (+5 puntos).
  * **Revisión por Pares:** Avales de otros ciudadanos de alta reputación.
* **Penalización (Slashing):**
  * **Malversación:** Culpable en arbitraje (-10 a -100 puntos).
  * **Inactividad:** Decadencia gradual si inactivo por > 1 año.

## 5. Pérdida de Ciudadanía

La ciudadanía puede ser revocada voluntaria o involuntariamente.

* **Salida Voluntaria:** Un ciudadano llama a `exitState()`.
  * **Resultado:** Se devuelve el stake (menos multas pendientes). La reputación se congela.
* **Revocación Involuntaria (Exilio):**
  * **Desencadenante:** Cometer un crimen grave (Violación de No Agresión) confirmado por el Alto Tribunal de Arbitraje.
  * **Resultado:** El stake es penalizado (slashed). La identidad es puesta en lista negra.

## 6. Smart Contracts

```solidity
interface ICitizenship {
    function joinState(string calldata contractHash) external payable;
    function exitState() external;
    function slashCitizen(address citizen, uint256 amount, string reason) external onlyArbitrator;
}
```
