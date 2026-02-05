# Especificación del Módulo de Identidad

## 1. Resumen

El Módulo de Identidad es la base de OpenSovereign. Permite a las personas interactuar con el estado sin renunciar a la propiedad de su ser digital. Se basa en los principios de **Identidad Soberana (SSI)**.

## 2. Método DID

OpenSovereign utiliza un método de identificador descentralizado (DID) que garantiza interoperabilidad y seguridad.

* **Método:** `did:os` (OpenSovereign) o compatible `did:ethr` / `did:key`.
* **Formato:** `did:os:<red>:<hash-clave-publica>`
* **Resolver:** Un resolver público y sin permisos alojado en la blockchain de OpenSovereign y replicado mediante gateways HTTP.

## 3. Credenciales Verificables (VCs)

Utilizamos el estándar W3C Verifiable Credentials.

### 3.1. Credencial de Ciudadanía

Emitida al completar el proceso de incorporación.

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1", "https://opensovereign.org/context/v1"],
  "type": ["VerifiableCredential", "CitizenshipCredential"],
  "issuer": "did:os:governance-contract",
  "issuanceDate": "2026-03-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:os:user-did",
    "citizenshipType": "Resident",
    "rights": ["vote", "transact", "dispute"],
    "goodStanding": true
  },
  "proof": { ... }
}
```

### 3.2. Credencial de Reputación

Credencial dinámica actualizada periódicamente o por eventos.

```json
{
  "type": ["VerifiableCredential", "ReputationScore"],
  "credentialSubject": {
     "id": "did:os:user-did",
     "score": 850,
     "level": "Gold",
     "lastUpdated": "2026-04-15"
  }
}
```

## 4. Flujos de Incorporación (Onboarding)

### 4.1. Nativo Web3

1. **Conectar Wallet:** El usuario conecta Metamask/Rabby.
2. **Firmar Intención:** El usuario firma un mensaje "Solicitando Ciudadanía OpenSovereign".
3. **Depositar Stake:** El usuario deposita la garantía requerida (si aplica) en el Contrato de Gobernanza.
4. **Emitir DID:** El sistema registra `did:os` mapeado a la dirección de la wallet.
5. **Recibir VC:** El usuario recibe la Credencial de Ciudadanía en su wallet.

### 4.2. Puente OIDC (Web2 Friendly)

Para usuarios sin una wallet preexistente, usamos un wrapper OIDC.

1. **Login:** El usuario inicia sesión vía email/proveedor (gestionado por un gateway no custodia).
2. **Generación de Claves:** Se genera una wallet simplificada localmente en el navegador (ej. vía Passkeys).
3. **Creación de DID:** Mismo proceso de registro on-chain.

## 5. Interfaz de Smart Contracts

El Registro de Identidad coordina estos flujos lógicos.

```solidity
interface IIdentityRegistry {
    event IdentityRegistered(address indexed owner, string did);
    event CredentialIssued(bytes32 indexed claimHash, address indexed subject);

    // Registra un nuevo DID para el llamante
    function registerIdentity() external;

    // Emite un hash de credencial on-chain para verificación
    function issueCredential(address subject, bytes32 claimHash) external onlyAuthority;

    // Comprueba si una dirección es un ciudadano válido
    function isCitizen(address user) external view returns (bool);
}
```
