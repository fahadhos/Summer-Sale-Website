


// console.log('ankta lagse');

let sum = 0;
let serialNumberForItems = 1;
function handleClickCard(target) {
    // console.log('Clicked card');
    // console.log(getElementById('price').innerText);
    /*
    selectedItemContainer eita holo onclick event puro section er upor item name ber korar variable
    */
    const selectedItemContainer = document.getElementById('selected-items');
    console.log( target.childNodes[5].childNodes[3].innerText );
// 
//  itemName holo cart er item der pabe
    const itemName =  target.childNodes[5].childNodes[3].innerText;
    
    const li = document.createElement('li');


    li.innerText = `${serialNumberForItems++}. ${itemName}`;
    selectedItemContainer.appendChild(li);
    selectedItemContainer.classList.add('list-none');

    // for price dhorbo
   
    const price = target.childNodes[5].childNodes[5].innerText.split(' ')[0];
    sum = parseFloat(sum) + parseFloat(price);
    // totalPrice diye sum of item prices 
    const totalPrice = document.getElementById('selected-prices');
// 
    totalPrice.innerText = sum.toFixed(2);
    document.getElementById('cart-empty-warning').classList.add('hidden');

    if (sum > 0) {
        const makePurchaseBtn = document.getElementById('make-purchase-btn');
        makePurchaseBtn.classList.remove('btn-disabled');

        const total = document.getElementById('total');
        total.innerText = sum.toFixed(2);

        // console.log('Peyeche kina dekhlam');
    }
   if ( totalPrice.innerText  == 0) {
       
        console.log('cart empty warning paise'); 
    }
    if (sum >= 200) {
 

        const makeApplyBtn = document.getElementById('coupon-btn');
        makeApplyBtn.classList.remove('btn-disabled');
        
            document.getElementById('msg').classList.remove('hidden');
            // setTimeout(function () {
            //     document.getElementById('msg').classList.add('hidden');
            // }, 2000);
    

    }    // eikhane coupon na pele total final a dekhabe total price kei
}
// eikhane kaj korbe jokhonn sell200 pabe
function handleCoupon(target) {

    console.log(target.value);

    if (target.value == "SELL200") {
        // console.log('coupon pelo')
        const discounted = sum * (20 / 100);
        console.log('pelam discount -- ' + discounted.toFixed(2));
        document.getElementById('selected-discount').innerText = discounted.toFixed(2);
        document.getElementById('msg').classList.add('hidden');
    }
    else if (target.value != "SELL200") {
        document.getElementById('warning').classList.remove('hidden');
        setTimeout(function () {
            document.getElementById('warning').classList.add('hidden');
        }, 2000);
    }

}
// ============================================================
// sell200 pwar por jokhon apply btn user click korbe
function couponBtnHandler(target) {
    if (document.getElementById('coupon-text').value == "SELL200") {
        const totalPrice = document.getElementById('selected-prices').innerText;

        const discounted = totalPrice * (20 / 100);

        document.getElementById('selected-discount').innerText = discounted.toFixed(2);
        console.log('total price: ' + totalPrice);
        console.log('discounted price: ' + discounted.toFixed(2));
        const total = totalPrice - discounted.toFixed(2);
        // console.log(discounted.toFixed(2))
        console.log('oboshisto after coupon added: ' + total.toFixed(2));
        document.getElementById('total').innerText = total.toFixed(2);

    }
}


// reset all korar jonno korlam function
let demo = 0;
function resetAllPrices(target) {
    const totalPrice = document.getElementById('selected-prices');

    totalPrice.innerText = demo.toFixed(2);
    const discounted = document.getElementById('selected-discount');
    discounted.innerText = demo.toFixed(2);
    const total = document.getElementById('total');
    total.innerText = demo.toFixed(2);
    document.getElementById('cart-empty-warning').classList.remove('hidden');
    const selectedItemContainer = document.getElementById('selected-items');
    selectedItemContainer.innerText="";
    console.log(selectedItemContainer.innerText="");

    // coupon text are ta reset kora dorkar
    // coupon-text
    (document.getElementById('coupon-text').value='');

    // 
    const makePurchaseBtn = document.getElementById('make-purchase-btn');
    makePurchaseBtn.classList.add('btn-disabled');

// 

const makeApplyBtn = document.getElementById('coupon-btn');
makeApplyBtn.classList.add('btn-disabled');
}