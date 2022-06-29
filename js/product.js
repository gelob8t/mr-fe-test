window.product = () => {
  const productURL = 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
  const productImage = document.querySelector('.js-product-image')
  const productTitle = document.querySelector('.js-product-title')
  const productPrice = document.querySelector('.js-product-price')
  const productInfo = document.querySelector('.js-product-desc')
  const productSize = document.querySelector('.js-product-size')

  fetch(productURL)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    productImage.setAttribute('src', data.imageURL)
    productImage.setAttribute('alt', data.title.trim())
    productTitle.textContent = data.title.trim()
    productPrice.textContent = '$' + data.price.toFixed(2)
    productInfo.textContent = data.description
    let sizeContainer = ''
    for(var i in data.sizeOptions) {
      sizeContainer += '<span class="size"><input onchange="selectSize(this);" type="radio" id="'+ data.sizeOptions[i].id + '-' + data.sizeOptions[i].label +'" name="size" value="'+ data.sizeOptions[i].label +'" /><label for="'+ data.sizeOptions[i].id + '-' + data.sizeOptions[i].label +'">'+ data.sizeOptions[i].label +'</label></span>'
    }
    productSize.innerHTML = sizeContainer
  })
}

selectSize = (input) => {
  const selectedSize = document.querySelector('.product__info--variant---radio .selected') 
  console.log(input.value)
  selectedSize.textContent = input.value
}

document.addEventListener('DOMContentLoaded', () => {
  window.product()
})
