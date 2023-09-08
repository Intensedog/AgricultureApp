import React, {useState} from 'react';

let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name:'Carrots',
    tag: 'carrots',
    price: 50,
    incart: 0
  },
  {
    name:'Potato',
    tag: 'spinach',
    price: 60,
    incart: 0
  },
  {
    name:'Spinach',
    tag: 'spinach',
    price: 70,
    incart: 0
  },
  {
    name:'Brocolli',
    tag: 'brocolli',
    price: 80,
    incart: 0
  },
  {
    name:'Garlic',
    tag: 'garlic',
    price: 90,
    incart: 0
  },
]

for (let i=0; i< carts.length; i++){
  carts[i].addEventListener('click', () => {
    cartNumbers();
    /*console.log("added to cart");*/
  })
}

function cartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
 
  productNumbers = parseInt(productNumbers);
  
  if (productNumbers){
    localStorage.setItem('cartnumbers', productNumbers + 1);
  }
  else{
    localStorage.setItem('cartnumbers', 1);
  }
}




function Cart() {
  const [carrot, setCarrot] = useState(0);//quantity
  const [potato, setPotato] = useState(0);//quantity
  
  const carrotprice=70;
  const potatoprice=50;

  let carrottp;
  let potatotp;
  let totalvariable;

  carrottp = carrotprice * carrot;
  potatotp = potatoprice * potato;
  totalvariable = carrottp+potatotp;
  
  /*var array = [1];/*quantity*/
  /*var iterator = array.values();*/

  function carrotminus(){
    if (carrot > 0){
      setCarrot(carrot-1);
    }
    else {
      setCarrot(0);
    }
  }

  function potatominus(){
    if (potato > 0){
      setPotato(potato-1);
    }
    else {
      setPotato(0);
    }
  }

  
  return (
  <div class="cartcenter">
    
    Carrots php70<br/>
    <button onClick={(carrotminus)}>-</button>quantity<button onClick={() => setCarrot(carrot + 1)}>+</button>
    <p id="carrot">Carrots = {carrot} piece/s</p><br/>
    Potato php50<br/>
    <button onClick={(potatominus)}>-</button>quantity<button onClick={() => setPotato(potato + 1)}>+</button>
    <p id="carrot">Potato = {potato} piece/s</p><br/>
    <p>Total = {totalvariable}</p>
  </div>
  );
}

export default Cart;
