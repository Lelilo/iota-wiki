# Interface: IInputSigningData

Data for transaction inputs for signing and ordering of unlock blocks

## Table of contents

### Properties

- [output](IInputSigningData.md#output)
- [outputMetadata](IInputSigningData.md#outputmetadata)
- [chain](IInputSigningData.md#chain)

## Properties

### output

• **output**: `OutputTypes`

The output

---

### outputMetadata

• **outputMetadata**: `IOutputMetadataResponse`

The output metadata

---

### chain

• `Optional` **chain**: [`IBip32Chain`](../api_ref.md#ibip32chain)

The chain derived from seed, only for ed25519 addresses
