const products = [{
    id : 1 ,
    name : 'parde' ,
    price : 120 ,
    Image:'./assets/img/parde/IMG_20230102_135440_570.jpg'
},
{
    id : 2 ,
    name : 'parde2' ,
    price : 400 ,
    Image:'./assets/img/parde/IMG_20230102_135447_740.jpg'
}]

let cart = {
    items:[],
    total : 0,
}

const renderProduct = ()=>{
    const productDiv = document.querySelector('.products')
    productDiv.innerHTML = ''

    products.forEach((item,index) => {
      productDiv.innerHTML += ` 
      <div class="product">
      <div class="product--image">
          <img src=${item.Image}>
      </div>
      <h2 class="product--title">${item.name}</h2>
      <h3 class="product--price">${item.price} تومان</h3>
      <button class="add-to-cart" onclick="addToCart(${index})">افزودن به سبد خرید</button>
  </div>`
  })
}

const renderCartIems = ()=>{
   const cartDiv = document.querySelector('.cart--items')
    cartDiv.innerHTML = ''

    const totalPriceEl = document.querySelector('.cart--title-price')
    let totalPrice = 0
    if(cart.items.length === 0){
        cartDiv.innerHTML = 'محصولی وجود ندارد'
    }
    cart.items.forEach((item) => {
        totalPrice += item.total
        cartDiv.innerHTML += `
    <div class="cart--item">
        <div class="col-md-4">
            <h3 class="cart--item-title">${item.name}</h3>
        </div>
        
        <div class="col-md-4">
            <div class="qty">${item.qty}</div>
        </div>
        <div class="col-md-4">
            <button class="cart--item-remove" onclick="removeFromCart('${item.name}')" >حذف</button>
        </div>
    </div>
        `
    })
    totalPriceEl.innerHTML =`مجموع: ${totalPrice} تومان`

}

const addToCart = (productIndex)=>{
const product = products[productIndex]

let existingProduct = false

let newCartItems = cart.items.reduce((state,item) => {
    if(item.name === product.name){
        existingProduct = true
        const newItem = {
            ...item,
            qty: item.qty + 1,
            total: (item.qty + 1) * item.price
        }
        return[...state,newItem]
    }
    return[...state,item]
}, [])

if(!existingProduct){
    newCartItems.push({
        ...product,
        qty: 1,
        total: product.price,
    })
}

cart = {
    ...cart,
    items: newCartItems,
}

renderCartIems()

}

const removeFromCart = (productName)=>{
   let newCartItems = cart.items.reduce((state,item) => {
       if(item.name === productName){
        const newItem = {
            ...item,
            qty: item.qty - 1 ,
            total:(item.qty -1) * item.price
        }
        if(newItem.qty > 0){
            return[...state, newItem]
        }
        else{
            return state
        }
       }
       return[...state,item]
    },[])
    cart={
        ...cart,
        items:newCartItems
    }
    renderCartIems()

}

renderProduct()
renderCartIems()

