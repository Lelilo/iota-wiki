# Interface: Balance

A balance

## Table of contents

### Properties

- [baseCoin](Balance.md#basecoin)
- [requiredStorageDeposit](Balance.md#requiredstoragedeposit)
- [nativeTokens](Balance.md#nativetokens)
- [nfts](Balance.md#nfts)
- [aliases](Balance.md#aliases)
- [foundries](Balance.md#foundries)
- [potentiallyLockedOutputs](Balance.md#potentiallylockedoutputs)

## Properties

### baseCoin

• **baseCoin**: [`BaseCoinBalance`](BaseCoinBalance.md)

The balance of the base coin

---

### requiredStorageDeposit

• **requiredStorageDeposit**: [`RequiredStorageDeposit`](RequiredStorageDeposit.md)

The required storage deposit for the outputs

---

### nativeTokens

• **nativeTokens**: [`NativeTokenBalance`](NativeTokenBalance.md)[]

The balance of the native tokens

---

### nfts

• **nfts**: `string`[]

Nft outputs

---

### aliases

• **aliases**: `string`[]

Alias outputs

---

### foundries

• **foundries**: `string`[]

Foundry outputs

---

### potentiallyLockedOutputs

• **potentiallyLockedOutputs**: `Object`

Outputs with multiple unlock conditions and if they can currently be spent or not. If there is a
TimelockUnlockCondition or ExpirationUnlockCondition this can change at any time

#### Index signature

▪ [outputId: `string`]: `boolean`
