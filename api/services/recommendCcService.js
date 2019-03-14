const foodCreditCards = [
  {
    name: 'Name is this',
    interest_rate: '19.99%',
    annual_fee: 'FREE',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: 'This is a sample description'
  },
  {
    name: 'Name is this',
    interest_rate: '19.99%',
    annual_fee: 'FREE',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: 'This is a sample description'
  }
]

const travelCreditCards = [
  {
    name: 'Name is this',
    interest_rate: '19.99%',
    annual_fee: 'FREE',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: 'This is a sample description'
  },
  {
    name: 'Name is this',
    interest_rate: '19.99%',
    annual_fee: 'FREE',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: 'This is a sample description'
  }
]

const drugsCreditCards = [
  {
    name: 'Name is this',
    interest_rate: '19.99%',
    annual_fee: 'FREE',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: 'This is a sample description'
  },
  {
    name: 'Name is this',
    interest_rate: '19.99%',
    annual_fee: 'FREE',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: 'This is a sample description'
  }
]

const shoppingCreditCards = [
  {
    name: 'Name is this',
    interest_rate: '19.99%',
    annual_fee: 'FREE',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: 'This is a sample description'
  },
  {
    name: 'Name is this',
    interest_rate: '19.99%',
    annual_fee: 'FREE',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: 'This is a sample description'
  }
]

module.exports = category => {
  const creditCardMap = {
    Food: foodCreditCards,
    Travel: travelCreditCards,
    Drugs: drugsCreditCards,
    Shopping: shoppingCreditCards
  }

  return creditCardMap[category]
}
