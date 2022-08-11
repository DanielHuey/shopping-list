function validate() {
  let itemName = document.getElementById('item').value;
  let itemPrice = document.getElementById('price').value;
  let itemButton = document.getElementById('createItem');
  
  if(itemName && itemPrice>0){
    itemButton.disabled=false;
  }else{
    itemButton.disabled=true;
  }
}

function clicked() {
  //Getting The Objects 
  let itemName = document.getElementById('item')
  let itemPrice = document.getElementById('price')
  //take focus back to Name input
  itemName.focus();
  
  //Creating an item in the shopping list
  //Create the elements
  let finalItem = document.createElement("div");
  let finalName = document.createElement("div");
  let finalPrice = document.createElement("div");
  let x = document.createElement("div");
    
  //Assign the classNamees
  finalItem.className = 'item';
  finalName.className = 'n';
  finalPrice.className = 'p';
  x.className = 'x';
  
  //Set the values using text nodes
  let _name = document.createTextNode(itemName.value);
  let _price = document.createTextNode(itemPrice.value);
  finalName.appendChild(_name);
  finalPrice.appendChild(_price);
  //or simply use innerHTML
  x.innerHTML='&#8709;';
  
  //append the elements to the finalItem object
  finalItem.appendChild(finalName);
  finalItem.appendChild(finalPrice);
  finalItem.appendChild(x);
  
  //onclick listener
  x.onclick = function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    getShowTotal();
  }
  
  //add finalItem to body
  document.getElementById('listHolder').appendChild(finalItem);
  
  //disable the button again
  getShowTotal();
  clearInputs();
  validate();
}

function clearInputs() {
  let itemName = document.getElementById('item')
  let itemPrice = document.getElementById('price')
  
  itemName.value = '';
  itemPrice.value = '';
}

function resetList() {
  let listHolder = document.getElementById("listHolder");
  listHolder.innerHTML = '';
  getShowTotal();
}

function getShowTotal() {
  let total = 0;
  let totalHolder = document.getElementById('totalHolder');
  let prices = document.getElementsByClassName("p");
  
  for (var i = 0; i < prices.length; i++) {
    
    total = total+parseFloat(prices[i].innerHTML);
  }
  if(total!=0){
    totalHolder.innerHTML = 'TOTAL: ' + total;
  }else{
    totalHolder.innerHTML = '🗿';
  }
}
//Project Finished.
