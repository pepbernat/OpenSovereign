# Modelo de Gobernanza v0.1

OpenSovereign busca resolver el "problema de la plutocracia" de las DAOs tradicionales (donde 1 token = 1 voto) y el "problema de ineficiencia" de las democracias tradicionales.

## 1. Principios Fundamentales

- **No Plutocracia:** El poder económico (tokens) no equivale a poder político.
- **Resistencia Sybil:** Un humano, una voz (ponderada).
- **Piel en el Juego (Skin in the Game):** La participación requiere compromiso a largo plazo.
- **Salida > Voz:** El control definitivo sobre el poder es la facilidad para abandonar la jurisdicción.

## 2. Fórmula de Poder de Voto

El poder de voto (VP) se calcula dinámicamente:

`VP = (Puntaje_Identidad * 1) + (Puntaje_Reputacion * 0.5) + (Multiplicador_Stake_Bloqueado)`

### 2.1. Puntaje de Identidad (Prueba de Humanidad)

- Humano único validado (DID): Base 100 VP.
- Cuenta no verificada: 0 VP (no puede votar en gobernanza, solo interacciones económicas).

### 2.2. Puntaje de Reputación (Meritocracia)

- Ganado por contribuir al estado (código, arbitraje, servicio comunitario).
- Intransferible.
- Decae con el tiempo (se debe mantener la actividad).

### 2.3. Stake Bloqueado en el Tiempo

- Los tokens pueden bloquearse para mostrar compromiso.
- **Efecto Multiplicador:** Bloquear por 4 años da más peso que bloquear por 1 semana.
- **Tope:** El impacto del staking está limitado para prevenir dominio de ballenas (ej. max 2x multiplicador).

## 3. Sistema de Propuestas (El "Estado API")

Gobernar es ejecutar transacciones en el kernel del estado.

### 3.1. Ciclo de Vida de una Propuesta

1. **Borrador:** Discusión fuera de cadena (off-chain).
2. **Patrocinio:** Debe ser patrocinada por un ciudadano con alta reputación.
3. **Depósito:** Tarifa anti-spam (devuelta si pasa o logra % min de votos).
4. **Votación:** Ventana de Votación Cuadrática (QV).
5. **Ejecución:** Automática vía smart contract o Veto Multisig (Guardianes de la Constitución).

## 4. Pesos y Contrapesos

- **La Constitución:** Reglas centrales inmutables (requiere hard fork para cambiar).
- **Consejo de Guardianes:** Un pequeño grupo electo con poder *solo de veto* para detener propuestas inconstitucionales. No pueden iniciar propuestas.
- **Veto Ciudadano:** Una supermayoría de ciudadanos puede anular al Consejo.
