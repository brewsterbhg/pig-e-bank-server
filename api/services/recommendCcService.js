const foodCreditCards = (total, type) => [
  {
    name: 'Blue Cash Preferred',
    interest_rate: '15.24% - 26.24%',
    annual_fee: '$95',
    image:
      'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/blue-cash-preferred.png',
    description: `You've spent $${total} on ${type} in the last few days. With this credit card EARN 6% CASH BACK at US supermarkets, on up to $6,000 per year in purchases.`,
    signup_url:
      'https://www.americanexpress.com/us/credit-cards/card-application/apply/blue-cash-preferred-credit-card/36501-10-0?pmccode=796&intlink=US-Acq-Shop-Consumer-CardDetails-BCP-Prospect-Apply-BCP-Header#/'
  },
  {
    name: 'Capital One Savor',
    interest_rate: '16.74% - 25.74%',
    annual_fee: '$95',
    image:
      'https://www.capitalone.com/assets/credit-cards/img/savor-card-art.png',
    description: `You've spent $${total} on ${type} in the last few days. With this credit card you can earn unlimited 4% cash back on dining and entertainment, 2% at grocery stores and 1% on all other purchases.`,
    signup_url: 'https://applynow.capitalone.com/?productId=5523'
  }
]

const travelCreditCards = (total, type) => [
  {
    name: 'BMO World Elite',
    interest_rate: '19.99%',
    annual_fee: '$120',
    image:
      'https://www.bmo.com/assets/images/credit-cards/bmo-rewards-world-elite-mastercard.webp',
    description: `You've spent $${total} on ${type} in the last few days. This credit card offers a $250 value towards a flight booked on bmorewards.com`,
    signup_url:
      'https://www.bmo.com/main/personal/credit-cards/single/bmo-world-elite-mastercard/'
  },
  {
    name: 'Scotiabank Platinum American Express',
    interest_rate: '19.99%',
    annual_fee: '$399',
    image:
      'https://www.scotiabank.com/content/dam/scotiabank/canada/en/card-arts/Amex_Platinum_ENG.png',
    description: `You've spent $${total} on ${type} in the last few days. Redeem for travel anywhere, anytime, with no travel restrictions.`,
    signup_url:
      'https://www.scotiabank.com/ca/en/personal/credit-cards/american-express/platinum-card.html'
  }
]

const drugsCreditCards = (total, type) => [
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

const shoppingCreditCards = (total, type) => [
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

module.exports = (total, category) => {
  const creditCardMap = {
    Food: foodCreditCards(total, category),
    Travel: travelCreditCards(total, category),
    Drugs: drugsCreditCards(total, category),
    Shopping: shoppingCreditCards(total, category)
  }

  return creditCardMap[category]
}
