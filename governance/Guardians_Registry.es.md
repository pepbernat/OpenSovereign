# Registro de Guardianes

Este documento sirve como especificación fuera de cadena (off-chain) para el contrato del Registro de Guardianes en cadena. Rastrea a los miembros actuales del Consejo de Guardianes, sus claves públicas y la expiración de sus mandatos.

## Consejo Actual (Época 1)

| Nombre/Alias | DID | Clave Pública (Ed25519) | Vencimiento del Mandato |
| :--- | :--- | :--- | :--- |
| **Alice (Presidenta)** | `did:os:alice` | `0x123...abc` | 2027-12-31 |
| **Bob** | `did:os:bob` | `0x456...def` | 2026-12-31 |
| **Charlie** | `did:os:charlie` | `0x789...ghi` | 2027-12-31 |
| **Diana** | `did:os:diana` | `0xabc...jkl` | 2026-12-31 |
| **Evan** | `did:os:evan` | `0xdef...mno` | 2027-12-31 |

## Reglas Operativas

### 1. Rotación

Los mandatos son escalonados para que ~50% del consejo se someta a elección cada año. Esto asegura continuidad mientras permite una renovación democrática regular.

### 2. Claves de Emergencia

En caso de un error catastrófico en el contrato central de gobernanza, 4 de 5 Guardianes deben firmar una transacción para pausar módulos específicos (Interruptor de Circuito).

### 3. Restricción de Diversidad

No más de 2 Guardianes pueden estar afiliados a la misma entidad corporativa u organización externa. La violación de esta regla resulta en la descalificación automática del miembro más nuevo.
