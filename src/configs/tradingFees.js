export const TRADING_FEES = {
  rate: 0.025,
  minFee: 1,
  payer: 'split'
}

export function computeTradeFees(gross) {
  const fee = Math.max(gross * TRADING_FEES.rate, TRADING_FEES.minFee)
  let buyerFee = 0
  let sellerFee = 0

  if (TRADING_FEES.payer === 'buyer') buyerFee = fee
  else if (TRADING_FEES.payer === 'seller') sellerFee = fee
  else {
    buyerFee = fee / 2
    sellerFee = fee / 2
  }

  return {
    fee,
    buyerFee,
    sellerFee,
    buyerTotal: gross + buyerFee,
    sellerNet: gross - sellerFee
  }
}
