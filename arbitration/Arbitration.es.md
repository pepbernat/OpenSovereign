# Especificación del Módulo de Arbitraje

## 1. Resumen

El Módulo de Arbitraje (Sistema de Justicia) es el mecanismo para resolver disputas entre ciudadanos sin depender de tribunales centralizados. Prioriza la restitución sobre el castigo y utiliza un sistema de jurado descentralizado.

## 2. Tipos de Disputas

1. **Disputas Contractuales:** Incumplimiento de smart contracts o acuerdos de servicio off-chain (ej. freelancing, ventas).
2. **Violaciones de Conducta:** Incumplimientos del Principio de No Agresión (ej. acoso, fraude).
3. **Desafíos de Gobernanza:** Impugnación de una propuesta de gobernanza por inconstitucional.

## 3. El Proceso de Resolución

### 3.1. Fase 1: Mediación Automatizada (Opcional)

Las partes pueden optar por un mediador algorítmico (IA o lógica simple) para sugerir un acuerdo. Si se acepta, la disputa termina.

### 3.2. Fase 2: Arbitraje Descentralizado (Estilo Kleros)

Si la mediación falla, la disputa va a un jurado.

* **Staking:** Ambas partes depositan una tarifa. El perdedor paga.
* **Selección de Jurados:** Los jurados son seleccionados pseudo-aleatoriamente de un grupo de ciudadanos que hacen staking de reputación/tokens.
* **Evidencia:** Las partes suben evidencia encriptada a IPFS.
* **Votación:** Los jurados votan sobre el resultado. La mayoría decide.

### 3.3. Fase 3: Apelación

Una parte perdedora puede apelar a un grupo de jurados más grande pagando una tarifa significativamente mayor. Este proceso puede repetirse hasta que el costo sea prohibitivo o se alcance el "Alto Tribunal" (Guardianes de la Constitución).

## 4. Ejecución de Decisiones

* **Escrows de Smart Contract:** Para disputas contractuales, los fondos en garantía se liberan automáticamente según el fallo.
* **Penalización de Reputación:** Para violaciones de conducta, la reputación del ofensor se penaliza automáticamente.
* **Exilio:** En casos extremos, la decisión activa la función `slashCitizen` en el módulo de Ciudadanía.

## 5. Jurados

* **Incentivos:** Los jurados ganan tarifas de arbitraje por votación honesta (coherencia con la mayoría).
* **Penalizaciones:** Los jurados que votan incoherentemente pierden sus tokens/reputación en staking.
