const cart = () => {
	const buttonCart = document.getElementById('cart-button')
	const modalCart = document.querySelector('.modal-cart')
	const close = document.querySelector('.close')
	const body = modalCart.querySelector('.modal-body')
	const buttonSend = modalCart.querySelector('.button-primary')
	const cleanCart = modalCart.querySelector('.clear-cart')
	const modalThanks = document.querySelector('.modal-thanks')
	const modalPrice = modalCart.querySelector('.modal-pricetag')


	const resetCart = () => {
		body.innerHTML =''
		localStorage.removeItem('cart')
		modalCart.classList.remove('is-open')
		modalThanks.style.display ='flex'
		modalThanks.textContent = 'спасибо за заказ'
		
		setTimeout(() => {
			modalThanks.style.display ='none'
		}, 650);
		
	}

	const clearCart = () => {
		body.innerHTML =''
		localStorage.removeItem('cart')
		modalCart.classList.remove('is-open')
	}

		const incrementCount = (id) => {
		const cartArray = JSON.parse(localStorage.getItem('cart'))

		cartArray.map((item) => {
			if(item.id === id){
				item.count++
			}
			return item
		})

		localStorage.setItem('cart' , JSON.stringify(cartArray))
		renderItems(cartArray)

	}

	const decrementCount = (id) => {
		const cartArray = JSON.parse(localStorage.getItem('cart'))

		cartArray.map((item) => {
			if(item.id === id){
				item.count = item.count > 0 ? item.count - 1 : 0
			}
			return item
		})

		localStorage.setItem('cart' , JSON.stringify(cartArray))
		renderItems(cartArray)
		
	}

	const renderItems = (data) => {
		modalPrice.textContent = 0
		let sum = 0
	
		body.innerHTML =''
		data.forEach(({name, price, id, count}) =>{

			const cartElem = document.createElement('div')
			cartElem.classList.add('food-row')

			cartElem.innerHTML =`
					<span class="food-name">${name}</span>
					<strong class="food-price">${price} ₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec" data-index="${id}">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button btn-inc" data-index="${id}">+</button>
					</div>
			`
			if(count >1){
				sum =sum + (price*count)
			}	else if(count ===1){
				sum += price
			}
			

			body.append(cartElem)
		})
		modalPrice.textContent = sum
		
		
	}

	body.addEventListener('click' , (e) => {
		e.preventDefault()
		if(e.target.classList.contains('btn-inc')){
			incrementCount(e.target.dataset.index)

		}	else if(e.target.classList.contains('btn-dec')){
			decrementCount(e.target.dataset.index)
		}
		
	} )

	buttonSend.addEventListener('click', () => {
		const cartArray = localStorage.getItem('cart')

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: cartArray
		})
		.then(response => {
			if (response.ok) {
				resetCart()
			}
			
		})
		.catch(e => {
			console.error(e);
		})
	})

	buttonCart.addEventListener('click' , () => {
		modalPrice.textContent = 0
		modalCart.classList.add('is-open')
		if(localStorage.getItem('cart')){
			renderItems(JSON.parse(localStorage.getItem('cart')))
		}
	})
	cleanCart.addEventListener('click' , () => {
		clearCart()
	})

	

	close.addEventListener('click' , () => {
		modalCart.classList.remove('is-open') 
	})
	
}

export default cart
// cart()