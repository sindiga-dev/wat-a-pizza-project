let information = [];;
function create(){
    const dynamicSection = document.getElementById('dynamic');
    let lineBreak = document.createElement('br');
    let categoryLable = document.createElement('label');
    categoryLable.setAttribute('class','new');
    categoryLable.innerText = 'Category Name';
    let category = document.createElement('input');
    category.setAttribute('type','text');
    category.setAttribute('class','new');
    category.setAttribute('id','category');
    let itemLable = document.createElement('label');
    itemLable.setAttribute('class','new');
    itemLable.innerText = 'Item Name';
    let itemName = document.createElement('input');
    itemName.setAttribute('type','text');
    itemName.setAttribute('class','new');
    itemName.setAttribute('id','item');
    let priceLable = document.createElement('label');
    priceLable.setAttribute('class','new');
    priceLable.innerText = 'Price';
    let itemPrice = document.createElement('input');
    itemPrice.setAttribute('type','text');
    itemPrice.setAttribute('class','new');
    itemPrice.setAttribute('id','price');
    let quantityLable = document.createElement('label');
    quantityLable.setAttribute('class','new');
    quantityLable.innerText = 'Quantity';
    let itemQuantity = document.createElement('input');
    itemQuantity.setAttribute('type','text');
    itemQuantity.setAttribute('class','new');
    itemQuantity.setAttribute('id','quantity');
    let amountLable = document.createElement('label');
    amountLable.setAttribute('class','new');
    amountLable.innerText = 'Amount';
    let itemAmount = document.createElement('input');
    itemAmount.setAttribute('type','text');
    itemAmount.setAttribute('class','new');
    itemAmount.setAttribute('id','amount');
    dynamicSection.append(categoryLable);
    dynamicSection.append(category);
    dynamicSection.append(itemLable);
    dynamicSection.append(itemName);
    dynamicSection.append(priceLable);
    dynamicSection.append(itemPrice);
    dynamicSection.append(quantityLable);
    dynamicSection.append(itemQuantity);
    dynamicSection.append(amountLable);
    dynamicSection.append(itemAmount);
    dynamicSection.append(lineBreak);
}


function total(value){
    let total = document.forms['orderform']['amount'].value;
    let quantity = document.forms['orderform']['quantity'].value;
    let totalAmount = document.forms['orderform']['amount'].value = total*quantity;
}

function info(){
    document.getElementById('price').defaultValue = 0;
    document.getElementById('quantity').defaultValue = 0;
    let orderid = document.getElementById('orderid').value;
    if (orderid==''){
        document.getElementById('iderror').innerHTML = "*Kindly fill the order id.";
        return false;
    }
    let name = document.getElementById('customername').value;
    if (name==''){
        document.getElementById('nameerror').innerHTML = "*Kindly fill the name.";
        return false;
    }
    if(!isNaN(name)){
        document.getElementById('nameerror').innerHTML = "*Kindly enter a valid name."
        return false;
    }
    let email = document.getElementById('email').value;
    if (email=='' || !('@'in email)){
        document.getElementById('emailerror').innerHTML = "*Kindly provide correct email.";
        return false;
    }
    let number = document.getElementById('number').value;
    if (isNaN(number) || number<10){
        document.getElementById('emailerror').innerHTML = "*Kindly enter a valid number.";
        return false;
    }
    let date = document.getElementById('date').value;
    let address = document.getElementById('address').value;
    if (address.length<=10 || address==''){
        document.getElementById('addresserror').innerHTML = '*Kindly enter valid address.'
        return false;
    }
    let category = document.getElementById('category').value;
    if (category==''){
        category.setAttribute('placeholder', '*Kindly fill the category.').style(color,'red');
        return false;
    }
    let item = document.getElementById('item').value;
    if (item==''){
        alert("*Kindly enter item.");
    }
    let price = document.getElementById('price').value;
    if(isNaN(price)){
        alert("*Kindly enter valid price.");
    }
    let quantity = document.getElementById('quantity').value;
    if(isNaN(quantity)){
        alert("*Kindly enter correct quantity.")
    }
    let amount = document.getElementById('amount').value = price*quantity;
    information.append(orderid);
    information.append(name);
    information.append(email);
    information.append(number);
    information.append(date);
    information.append(address);
    information.append(category);
    information.append(item);
    information.append(price);
    information.append(quantity);
    information.append(amount);
    console.log(information);
    alert("Total amount to be paid:"+ totalAmount);
}
