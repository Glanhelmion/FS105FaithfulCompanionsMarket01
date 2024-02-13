export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = state => {
  // Calculate Item Price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  // Calculate Shipping Price (If order over £100 then free or $15.00)
  state.shippingPrice = addDecimals(state.itemsPrice > 500 ? 0 : 15)

  // Calculate Tax Price (20% VAT)
  state.taxPrice = addDecimals(Number(0.09 * state.itemsPrice).toFixed(2))

  // Calculate Total Price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2)

  localStorage.setItem('cart', JSON.stringify(state))

  return state
}