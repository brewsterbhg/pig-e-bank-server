const foodCreditCards = [
  {
    name: 'Blue Cash Preferred',
    interest_rate: 'Variable',
    annual_fee: '$95',
    image:
      'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/blue-cash-preferred.png',
    description: `
    Earn $250 Back after you spend $1,000 in purchases on your new Card in your first 3 months of Card Membership.
    \nEARN 6% CASH BACK at US supermarkets, on up to $6,000 per year in purchases (then 1%).
    `,
    signup_url:
      'https://www.americanexpress.com/us/credit-cards/card-application/apply/blue-cash-preferred-credit-card/36501-10-0?pmccode=796&intlink=US-Acq-Shop-Consumer-CardDetails-BCP-Prospect-Apply-BCP-Header#/'
  },
  {
    name: 'Capital One Savor',
    interest_rate: 'Variable',
    annual_fee: '$95',
    image:
      'https://www.capitalone.com/assets/credit-cards/img/ui-elements/shimmer4.png',
    description: `Earn unlimited 4% cash back on dining and entertainment, 2% at grocery stores and 1% on all other purchases.`,
    signup_url: 'https://applynow.capitalone.com/?productId=5523'
  }
]

const travelCreditCards = [
  {
    name: 'BMO World Elite',
    interest_rate: '19.99%',
    annual_fee: '$120',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: `
      Get up to $540 in value in your first year!
      \nWelcome offer: Get 35,000 points and the $150 annual fee waived in the first year ($250 value towards a flight booked on bmorewards.com + $150 value).`,
    signup_url:
      'https://www.bmo.com/main/personal/credit-cards/single/bmo-world-elite-mastercard/'
  },
  {
    name: 'Scotiabank Platinum American Express',
    interest_rate: '19.99%',
    annual_fee: '$399',
    image:
      'https://www.scotiabank.com/content/dam/scotiabank/canada/en/card-arts/Amex_Platinum_ENG.png',
    description: `
      Use your Card and book travel through Scotia Rewards Travel Service, our full-service travel agency.
      \nRedeem for travel anywhere, anytime, with no travel restrictions.`,
    signup_url:
      'https://www.scotiabank.com/ca/en/personal/credit-cards/american-express/platinum-card.html'
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
