// let seatLeftCount = 40;
let seatCount = 0;
const ticketClass = 'Economy';
const ticketPrice = 550;


const seatsContainer = document.getElementById('seats-container');
const seats = seatsContainer.querySelectorAll('.btn');

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        seatCount++
        if(seatCount <= 4){
            if (seatCount == 4) {
                document.getElementById('coupon-apply-btn').removeAttribute('disabled')
            }
            document.getElementById('seat-count')
                .innerText = seatCount;
            const seatNumber = e.target;
            seatNumber.style.backgroundColor = '#1DD100';
            seatNumber.style.color = 'white';
            const seatNumbertext = e.target.innerText;
    
            const seatLeft = document.getElementById('seat-left').innerText;
            const seatLeftNumber = parseInt(seatLeft)
            const remainingSeat = seatLeftNumber - 1;
            document.getElementById('seat-left').innerText = remainingSeat;
    
    
            const priceTable = document.getElementById('price-table-container');
    
            const div = document.createElement('div');
            div.classList.add('flex', 'justify-between')
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            p1.innerText = seatNumbertext;
            p2.innerText = ticketClass;
            p3.innerText = ticketPrice;
    
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
    
            priceTable.appendChild(div);


            totalPrice = ticketPrice * seatCount

            document.getElementById('total-price').innerText = totalPrice




        }
        else{
            alert("You can't buy more than 4 tickets")
        }

    })

}

// const  couponCode

function couponApplyBtn() {
    const inputCoupontext = document.getElementById('coupon-input-field').value;
    console.log(inputCoupontext)
    const inputCoupontextValid1 = inputCoupontext.split(' ').join('').toUpperCase()
    const firstLetterUp = inputCoupontext[0].toUpperCase()
    const inputCoupontextValid2 = firstLetterUp + inputCoupontext.slice(1)

    console.log(inputCoupontextValid2)
    if (inputCoupontextValid1 === 'NEW15') {
        const totalPriceText = document.getElementById('total-price').innerText;
        totalPriceNumber = parseInt(totalPriceText);
        discountedPrice = totalPriceNumber * 15/100;
        grandTotalPrice = totalPriceNumber - discountedPrice; 
        console.log(grandTotalPrice)
        document.getElementById('grand-total').innerText = grandTotalPrice

        const discountContainer = document.getElementById('discount')
        const h3One = document.createElement('h3')
        const h3Two = document.createElement('h3')

        h3One.innerText = 'Discount';
        h3Two.innerText = 'BDT'+" " + discountedPrice;

        document.getElementById('discount').appendChild(h3One)
        document.getElementById('discount').appendChild(h3Two)

        
    }
    else if (inputCoupontextValid2 === 'Couple 20') {
        console.log('hehe')
    }
    else {
        alert('Invalid Coupon')
    }
}