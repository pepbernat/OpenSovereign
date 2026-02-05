# Guía de contribución

¡Gracias por tu interés en contribuir a OpenSovereign!

Estas pautas ayudarán a que el proceso de colaboración sea fácil y efectivo.

## Cómo contribuir

1. ⭐ Haz **fork** del repositorio.
2. 📄 Crea un **issue** describiendo tu propuesta o sugerencia.
3. 📦 Crea una rama (`feature/mi-mejora`).
4. 🛠️ Realiza tus cambios.
5. 🔀 Abre un **pull request** describiendo qué haces y por qué.

## Prácticas de Desarrollo

Para mantener un código de alta calidad para nuestro estado digital, sigue estas prácticas:

### 1. Estrategia de Ramas (Branching)

* `main`: Código estable y listo para producción.
* `dev`: Rama de integración para desarrollo en curso.
* `feature/nombre-funcionalidad`: Para nuevas características.
* `fix/descripcion-error`: Para corrección de errores.
* `docs/nombre-doc`: Para actualizaciones de documentación.

### 2. Pruebas (Testing)

* **Unit Tests:** Requeridos para todos los contratos inteligentes (`foundry` o `hardhat`) y scripts críticos.
* **Cobertura:** Apuntar a >80% de cobertura en la lógica central.
* **Ejecutar Tests:** Asegúrate de que `npm test` o `forge test` pasen antes de subir cambios.

### 3. Guía de Estilo

* **Solidity:** Sigue la [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.24/style-guide.html).
* **JavaScript/TypeScript:** Usa `eslint` con configuración estándar.
* **Markdown:** Usa Markdown estándar; asegura que los encabezados sean jerárquicos.

## Cambios en Gobernanza y Constitución

OpenSovereign es software vivo. Para proponer cambios a la [Constitución](../constitution) o al [Modelo de Gobernanza](../governance):

1. **RFC (Solicitud de Comentarios):** Inicia una discusión en el canal *#governance* o abre un PR en estado `draft`.
2. **OIP (Propuesta de Mejora de OpenSovereign):** Sigue la plantilla OIP (carpeta `governance/proposals`) para formalizar tu cambio.
3. **Votación:** Una vez revisada, la propuesta pasa a votación on-chain (o snapshot de señalización).

## Canales de Comunidad

* **Discord:** [Únete a nuestro Discord](#) (placeholder)
* **Discourse:** [Foro de Gobernanza](#) (placeholder)
* **GitHub Discussions:** Úsalo para preguntas y respuestas técnicas.

## Código de Conducta

Antes de contribuir, revisa `CODE_OF_CONDUCT.es.md`. Aplicamos un estándar estricto de respeto mutuo, apropiado para construir una jurisdicción.
