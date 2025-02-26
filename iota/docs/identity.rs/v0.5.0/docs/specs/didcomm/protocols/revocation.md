---
title: Revocation
sidebar_label: Revocation
---

:::info

The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at [GitHub #464](https://github.com/iotaledger/identity.rs/discussions/464).

:::

- Version: 0.1
- Status: `IN-PROGRESS`
- Last Updated: 2021-10-18

## Overview

Allows to request revocation of an issued [verifiable credential](https://www.w3.org/TR/vc-data-model/), either by the holder or a trusted-party. If the revoker is unable to revoke the credential themselves, they may delegate the revocation to the issuer, in which case they take on the role of trusted-party in their request.

### Relationships

- [revocation-options](./revocation-options.md): this may be preceded by the the [revocation-options](./revocation-options.md) protocol for the [trusted-party](#roles) to discover the available [`RevocationInfo` types](#RevocationInfo).
- [presentation](./presentation.md): this may include a [presentation](./presentation.md) by the [revoker](#roles) to request additional information, such as the entire credential being revoked or authorization information.

### Example Use-Cases

- A member of an organisation asks the organisation to revoke their membership.
- A subsidiary of a company asks central to revoke a credential concerning one of their customers.

### Roles

- Trusted-Party: has the authority to request the revocation of verifiable credentials. May also be the holder of the credential but not necessarily.
- Revoker: able to revoke the verifiable credential. May also be the [issuer](https://www.w3.org/TR/vc-data-model/#dfn-issuers) of the credential but not necessarily.

### Interaction

![RevocationDiagram](/img/didcomm/revocation.drawio.svg)

<div style={{textAlign: 'center'}}>

<sub>For guidance on diagrams see the <a href="../../overview#diagrams">corresponding section in the overview</a>.</sub>

</div>

## Messages

### 1. revocation-request {#revocation-request}

- Type: `iota/revocation/0.1/revocation-request`
- Role: [trusted-party](#roles)

Sent by the [trusted-party](#roles) or holder to request revocation of an issued verifiable credential. This message conveys which credential should be revoked and which method should be used. The [revoker](#roles) MAY require this to be a [signed DIDComm message](https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message) for auditing purposes and reject unsigned requests.

#### Structure

```json
{
  "revocationInfo": RevocationInfo, // REQUIRED
}
```

| Field                               | Description                                                                                                                 | Required |
| :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :------- |
| [`revocationInfo`](#RevocationInfo) | Contains information sufficient to specify which credential should be revoked. See [`revocationInfo`](#RevocationInfo).[^1] | ✔        |

[^1] If an unsupported `revocationInfo` type is received, the [revoker](#roles) MUST issue a problem-report. The specific problem-report descriptor is `invalid-revocation-type` but if privacy is a concern, a [revoker](#roles) may send a more generic descriptor such as `reject-request` to avoid disclosing its capabilities more than the [revocation-options](./revocation-options.md#Considerations) protocol would reveal.

#### Examples

1. Request to revoke a credential by identifier using "CredentialRevocation2021":

```json
{
  "revocationInfo": {
    "revocationInfoType": "CredentialRevocation2021",
    "credentialId": "0495e938-3cb7-4228-bb73-c642ec6390c8"
  }
}
```

2. Request to revoke all credentials signed by a specific [verification method](https://w3c-ccg.github.io/lds-ed25519-2020/#verification-method) identified by `#keys2` using "KeyRevocation2021":

```json
{
  "revocationInfo": {
    "revocationInfoType": "KeyRevocation2021",
    "key": "did:example:76e12ec712ebc6f1c221ebfeb1f#keys-2"
  }
}
```

### 2. revocation-response {#revocation-response}

- Type: `iota/revocation/0.1/revocation-response`
- Role: [revoker](#roles)

Sent by the [revoker](#roles) as soon as the revocation is performed to indicate the current status.

#### Structure

```json
{
  "status": "revoked" | "pending",
}
```

| Field    | Description                                                          | Required |
| :------- | :------------------------------------------------------------------- | :------- |
| `status` | Current status of the revocation, either `revoked` or `pending`.[^1] | ✔        |

[^1] The status should be `revoked` if the credential or signing key is confirmed to be revoked, and `pending` if the revocation has been accepted but not yet performed or committed. For instance, a revocation that updates a DID document may require waiting for the update transaction to be confirmed, or it could be queued for a batch update. If the [revoker](#roles) is unable to perform the revocation or rejects the request for any reason, they MUST instead respond with a [`problem-report`](#problem-reports). Care should be taken not to reveal which credentials are under the control of the revoker to prevent privacy-revealing brute-force attacks.

The [trusted-party](#roles) SHOULD verify that the credential is actually revoked after this message is received. The [revocation protocol](#Revocation) MAY be polled by a [trusted-party](#roles) by re-sending the same request to confirm revocation if the status of `pending` is received. In the case of a public ledger, however, the [trusted-party](#roles) can query the public state of the verification method themselves to confirm revocation.

#### Examples

1. Response to a [revocation-request](#revocation-request) where the [revoker](#roles) confirms revocation directly:

```json
{
  "status": "revoked"
}
```

2. Response to a [revocation-request](#revocation-request) where the [revoker](#roles) confirms the revocation was scheduled, but can only be confirmed at a later point:

```json
{
  "status": "pending"
}
```

## RevocationInfo {#RevocationInfo}

The `RevocationInfo` object contains the information necessary for a [revoker](#roles) to revoke a verifiable credential. For instance, this may include the `id` field of the credential, in which case a [revoker](#roles) must maintain a map to the signing key used for each credential to revoke them. It could also be the identifier for the signing key itself on the DID document of the issuer. Implementors are free to construct their own `RevocationInfo` types as different singing schemes may require different information for revocation.

Implementors MUST adhere to at least one of the types below, either [KeyRevocation2021](#keyrevocation2021) or [CredentialRevocation2021](#credentialrevocation2021). Implementors MAY define additional types as-needed. A valid `RevocationInfo` type MUST have a `revocationInfoType` field.

### KeyRevocation2021

- Type: `KeyRevocation2021`

Allows a particular cryptographic public key linked as a verification method to be specified for revocation. This may reference any singular verification method such as [Ed25519VerificationKey2018](https://www.w3.org/TR/did-spec-registries/#ed25519verificationkey2018) or [RsaVerificationKey2018](https://www.w3.org/TR/did-spec-registries/#rsaverificationkey2018). Verification methods that hold multiple keys as a collection could, for example, encode the index of the key to be revoked in the [query](https://www.w3.org/TR/did-core/#dfn-did-queries) of the [DIDUrl](https://www.w3.org/TR/did-core/#did-url-syntax).

See the [DID Spec Registry for more verification method types](https://www.w3.org/TR/did-spec-registries/#verification-method-types).

Note that revoking a verification method revokes all verifiable credentials signed with its key.

#### Structure

```json
{
  "revocationInfoType": string, // REQUIRED
  "key": DIDUrl,                // REQUIRED
}
```

| Field                | Description                                                                                                                                                                                           | Required |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| `revocationInfoType` | String indicating the `RevocationInfo` type, MUST be `"KeyRevocation2021"`.                                                                                                                           | ✔        |
| `key`                | String conforming to the [DIDUrl syntax](https://www.w3.org/TR/did-core/#did-url-syntax) identifying a [verification method](https://www.w3.org/TR/did-core/#verification-methods) to be revoked.[^1] | ✔        |

[^1] the [fragment](https://www.w3.org/TR/did-core/#dfn-did-fragments) MUST reference a valid verification method. The DID document referenced need not belong to the revoker necessarily, as they could forward or delegate the request to the actual owner or controller. The [query](https://www.w3.org/TR/did-core/#dfn-did-queries) MAY include extra information needed to identify the particular signing key.

#### Example

1. Specify a single key or verification method to revoke:

```json
{
  "revocationInfoType": "KeyRevocation2021",
  "key": "did:example:76e12ec712ebc6f1c221ebfeb1f#keys-1"
}
```

### CredentialRevocation2021

- Type: `CredentialRevocation2021`

Allows requesting the revocation of a verifiable credential by its identifier field. This implies that the revoker needs to keep track of the relevant method of revocation and additional information such as the verification method used to sign it to be able to revoke the credential.

```json
{
  "revocationInfoType": string, // REQUIRED
  "credentialId": string,       // REQUIRED
}
```

| Field                | Description                                                                                                                                                            | Required |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| `revocationInfoType` | String indicating the `RevocationInfo` type, MUST be `"CredentialRevocation2021"`.                                                                                     | ✔        |
| `credentialId`       | A [URI](https://www.w3.org/TR/vc-data-model/#dfn-uri) corresponding to the [id property](https://www.w3.org/TR/vc-data-model/#identifiers) of a verifiable credential. | ✔        |

#### Examples

1. Specify the identifier of the credential to revoke:

```json
{
  "revocationInfoType": "CredentialRevocation2021",
  "credentialId": "1dd5bbc6-b0bc-4f82-94a9-c723e11075b5"
}
```

### CredentialStatusRevocation2021

- Type: `CredentialStatusRevocation2021`

Request the revocation of a verifiable credential by sending its corresponding [credential status](https://www.w3.org/TR/vc-data-model/#status) information. The [revoker](#roles) should ensure that this information is correct and that the requester is authorized.

```json
{
  "revocationInfoType": string,          // REQUIRED
  "credentialStatus": CredentialStatus,  // REQUIRED
}
```

| Field                                                             | Description                                                                              | Required |
| :---------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :------- |
| `revocationInfoType`                                              | String indicating the `RevocationInfo` type, MUST be `"CredentialStatusRevocation2021"`. | ✔        |
| [`credentialStatus`](https://www.w3.org/TR/vc-data-model/#status) | A [credential status](https://www.w3.org/TR/vc-data-model/#status) object.[^1]           | ✔        |

[^1] This SHOULD correspond with one of the supported credential status methods in the [verifiable credentials extension registry](https://w3c-ccg.github.io/vc-extension-registry/#status-methods).

#### Examples

1. Specifying a [Credential Status List 2017](https://w3c-ccg.github.io/vc-csl2017/) entry:

```json
{
  "revocationInfoType": "CredentialStatusRevocation2021",
  "credentialStatus": {
    "id": "https://example.edu/status/24",
    "type": "CredentialStatusList2017"
  }
}
```

2. Specifying a [Revocation List 2020](https://w3c-ccg.github.io/vc-status-rl-2020/) entry:

```json
{
  "revocationInfoType": "CredentialStatusRevocation2021",
  "credentialStatus": {
    "id": "https://dmv.example.gov/credentials/status/3#94567",
    "type": "RevocationList2020Status",
    "revocationListIndex": "94567",
    "revocationListCredential": "https://example.com/credentials/status/3"
  }
}
```

### Problem Reports {#problem-reports}

The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports.

For guidance on problem-reports and a list of general codes see [problem reports](../resources/problem-reports.md).

| Code                                                             | Message                                   | Description                                                                                                                                                                                                           |
| :--------------------------------------------------------------- | :---------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `e.p.msg.iota.revocation.reject-request`                         | [revocation-request](#revocation-request) | The [revoker](#roles) rejects a request for any reason, e.g. the revoker does not have the authority to revoke the particular credential or key, or a relayed revocation request to another [revoker](#roles) failed. |
| `e.p.msg.iota.revocation.reject-request.invalid-revocation-type` | [revocation-request](#revocation-request) | The [revoker](#roles) rejects a request due to an unrecognised, unsupported, or otherwise invalid `revocationInfoType`.                                                                                               |
| `e.p.msg.iota.revocation.reject-request.invalid-revocation-info` | [revocation-request](#revocation-request) | The [revoker](#roles) rejects a request due to a malformed or otherwise invalid `revocationInfo`.                                                                                                                     |
| `e.p.msg.iota.revocation.presentation-failed`                    | [revocation-request](#revocation-request) | The [revoker](#roles) terminates the protocol due to a failed presentation from the [trusted-party](#roles), e.g. failed to prove permission to revoke the particular credential.                                     |

## Considerations

This section is non-normative.

The revoker needs to check if the credential may actually be revoked and if the trusted party actually has the authority to request the revocation.

## Unresolved Questions

- Should the trusted party be able to prove that the revoker claimed to have revoked the credential by making him include a signature in the `revocation-response`, or is it sufficient that they can query the signing key or revocation material in the case of a public ledger?
- Should revocation-options include the credential status sub-types for `CredentialStatusRevocation2021`?
- Separate revocation-notification (https://github.com/hyperledger/aries-rfcs/blob/main/features/0183-revocation-notification/README.md) flow for notifying the holder that their credential was revoked, optionally including the reason? Dual entry for a holder to request the revocation reason?
- Include reason-code/reason-comment in the request? Could be used by the revoker for auditing/validating the request but overall seems not useful - trusted-party would store those reasons internally, holder comments aren't very useful. Can be achieved via embedded presentation and self-signed credentials?

## Related Work

- Aries Hyperledger: https://github.com/hyperledger/aries-rfcs/blob/main/features/0183-revocation-notification/README.md

## Further Reading

- https://www.w3.org/TR/vc-data-model/
- https://hyperledger-indy.readthedocs.io/projects/hipe/en/latest/text/0011-cred-revocation/README.html
