const plantItems = document.querySelectorAll('#plant_container button')
const cartButton = document.getElementById('cart')
const items = localStorage.getItem('items')
let cartItems = items ? JSON.parse(items) : []
console.log(cartButton)
console.log(plantItems)

for (const plant of plantItems) {
    plant.addEventListener('click', function (e) {
        const element = plant.parentNode
        const nameArray = cartItems.map(item => item.name)
        if (nameArray.includes(getCartItem(element).name) === false) {
            cartItems.push(getCartItem(element))
        }
        console.log(cartItems)
        saveItems()
        createList(cartItems)
        $total.textContent = computeTotal()
    })
}

function getCartItem(element) {
    const $image = element.querySelector('.plant_image')
    const $name = element.querySelector('.plant_title')
    const $price = element.querySelector('.plant_price')
    const URL = $image.getAttribute('src')
    const plantName = $name.innerText
    const plantPrice = Number($price.innerText.slice(2))
    const ItemObject = {
        imageURL: URL,
        name: `${plantName}`,
        price: `${plantPrice}`,
        quantity: 1
    }
    return ItemObject
}

function saveItems() {
    localStorage.setItem('items', JSON.stringify(cartItems))
}

function computeSinglePrice() {
    const prices = cartItems.map(item => Number(item.price.slice(2)))
    const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue
    )
    return total
}
const $list = document.querySelector('.list')
// const items = localStorage.getItem('items')
const $total = document.querySelector('.total-price')

const cart = document.querySelector('#cart')
console.log(cart)
function createList(collection) {
    $list.innerHTML = ''
    for (const item of collection) {
        createItem(item)
    }
}
createList(cartItems)
function createItem(item) {
    const $li = document.createElement('li')
    const line = document.createElement('hr')
    const $quantity = document.createElement('form')
    const $perTotal = document.createElement('span')
    const $delete = document.createElement('button')
    $delete.textContent = 'delete'
    $delete.setAttribute('onclick', 'deleteItem(event)')
    $perTotal.textContent = computePerTotal(item)
    $quantity.innerHTML = "<input data-type='minus' type='button' value='-' class='input-minus'><input value=" + item.quantity + " data-type='quantity' class='number-input'><input data-type='plus' type='button' value='+'class='input-plus'> "
    $li.setAttribute('class', 'list-item')
    const span = document.createElement('span')
    span.setAttribute('class', 'name')
    const $image = document.createElement('img')
    const $price = document.createElement('span')
    $price.textContent = item.price
    $image.setAttribute('src', item.imageURL)
    $image.setAttribute('class', 'cart-items')
    span.textContent = item.name
    $li.prepend($image, span, $quantity, $price, $perTotal, $delete)
    $list.append(line, $li)
    return $li
}

function getQuantity(element, value) {
    const itemName = element.querySelector('.name')
    const name = itemName.innerText
    const nameArray = cartItems.map(item => item.name)
    const index = nameArray.indexOf(name)
    return cartItems[index].quantity = value
}

function saveItems() {
    localStorage.setItem('items', JSON.stringify(cartItems))
}
$total.textContent = computeTotal()

$list.addEventListener('input', function (e) {
    e.preventDefault()
    const dataType = e.target.dataset.type
    console.log(dataType)
    if (dataType === 'quantity') {
        const $target = e.target
        if ($target.value) {
            console.log(e.target)
            const $quantity = $target.querySelector('.number-input')
            const parent = $target.parentNode
            const $li = parent.parentNode
            getQuantity($li, $target.value)
            saveItems()
            createList(cartItems)
            $total.textContent = computeTotal()
        }
    }
})

$list.addEventListener('click', function (e) {
    const parent = e.target.parentNode
    const $li = parent.parentNode
    const quantity = parent.querySelector('.number-input')
    const dataType = e.target.dataset.type
    if (dataType === 'minus') {
        if (quantity.value > 1) {
            quantity.value--
            getQuantity($li, quantity.value)
            saveItems()
            createList(cartItems)
            $total.textContent = computeTotal()
        }
    }
    else if (dataType === 'plus') {
        quantity.value++
        console.log(quantity.value)
        getQuantity($li, quantity.value)
        saveItems()
        createList(cartItems)
        $total.textContent = computeTotal()
    }
})

function computePerTotal(item) {
    total = Number(item.price) * item.quantity
    return total.toFixed(2)
}

function deleteItem(e) {
    console.log(e.target)
    const parent = e.target.parentNode
    const $name = parent.querySelector('.name')
    const name = $name.textContent
    const nameArray = cartItems.map(item => item.name)
    const index = nameArray.indexOf(name)
    console.log(parent)
    cartItems.splice(index, 1)
    saveItems()
    createList(cartItems)
    $total.textContent = computeTotal()
}
console.log(cartItems)
function computeTotal() {
    let total = 0
    for (const item of cartItems) {
        total = total + item.price * item.quantity
    }
    return total.toFixed(2)
}

const cartModal = document.querySelector('.cart-modal')
cart.addEventListener('click', function (e) {
    console.log(e.target)
    cartModal.classList.toggle('show')
}
)

cartModal.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target.matches('.cart-modal')) {
        cartModal.classList.remove('show')
    }
})

function deleteAll(e) {
    console.log(e.target)
    if (localStorage.getItem('items')) {
        localStorage.removeItem('items')
        cartItems = []
        createList(cartItems)
        $total.textContent = computeTotal()
    }
}

// toggle button menu for mobile 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})