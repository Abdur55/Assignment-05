// add money to the account

// Modal showing 
const modal_one = document.getElementById('my_modal_1');
const modal_two = document.getElementById('my_modal_2')
const modal_three = document.getElementById('my_modal_3')



document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault()


        const inputAdd = document.getElementById('input-add-money').value;

        console.log(inputAdd)
        const parseInputAdd = parseFloat(inputAdd)
        const addToCash = parseFloat(document.getElementById('cash-out').innerText);

        if (isNaN(inputAdd)) {
            alert('Please enter a number')
            return;
        }


        if (inputAdd > 0 && inputAdd <= addToCash) {


            modal_one.showModal()



            const addToMoney = parseFloat(document.getElementById('add-to-money').innerText);
            const parsAddToMoney = parseFloat(addToMoney)

            const total = parseInputAdd + parsAddToMoney;

            document.getElementById('add-to-money').innerText = total;

            const totalCashOut = addToCash - parseInputAdd;
            document.getElementById('cash-out').innerText = totalCashOut;

// Histories section will be showed =============================================================
            const div = document.createElement('div');
            div.classList.add('p-7','border', 'rounded-md');
        
            const h3 = document.createElement('h3');
            h3.innerText = `${inputAdd} Tk  is Donated for famine-2024 at Noakhali, Bangladesh`;
            div.appendChild(h3);
        
            const p = document.createElement('p');
           p.innerText = `Date: ${getDateTime()}`
        
            div.append(p)
        
            document.getElementById('histories-page').appendChild(div)


        } else {
            alert('Please enter a valid amount number')
        }

    })



// Tow add money 2

document.getElementById('btn2-add2-money2')
    .addEventListener('click', function (event) {
        event.preventDefault()


        const input2Add2 = document.getElementById('input2-add2-money2').value;
        const parse2Input2 = parseFloat(input2Add2)
       
        const addToCash = parseFloat(document.getElementById('cash-out').innerText);

        if (isNaN(input2Add2)) {
            alert('Please enter a number')
            return;
        }


        if (input2Add2 > 0 && input2Add2 <= addToCash) {


            modal_two.showModal()



            const addToMoney = parseFloat(document.getElementById('add-money').innerText);
            const parsAddToMoney = parseFloat(addToMoney)

            const total = parse2Input2 + parsAddToMoney;

            document.getElementById('add-money').innerText = total;

            const totalCashOut = addToCash - parse2Input2;
            document.getElementById('cash-out').innerText = totalCashOut;


            // Histories section will be showed =============================================================
            const div = document.createElement('div');
            div.classList.add('p-7','border', 'rounded-md');
        
            const h3 = document.createElement('h3');
            h3.innerText = `${input2Add2} Tk is Donated for famine-2024 in Feni, Bangladesh`;
            div.appendChild(h3);
        
            const p = document.createElement('p');
           p.innerText = `Date: ${getDateTime()}`
        
            div.append(p)
        
            document.getElementById('histories-page').appendChild(div)


        } else {
            alert('Please enter a valid amount number')
        }

    })


// add money three ----------===
document.getElementById('btn3-add3-money3')
    .addEventListener('click', function (event) {
        event.preventDefault()


        const inputAdd3 = document.getElementById('input3-add3-money3').value;
        const parseInput3 = parseFloat(inputAdd3);
       
        const addToCash = parseFloat(document.getElementById('cash-out').innerText);

        if (isNaN(inputAdd3)) {
            alert('Please enter a number')
            return;
        }


        if (inputAdd3 > 0 && inputAdd3 <= addToCash) {


            modal_three.showModal()



            const addMoney3 = document.getElementById('add-money3').innerText;

            const paresMoney3 = parseFloat(addMoney3);
            console.log(paresMoney3);
    
            const total = parseInput3 + paresMoney3;
            console.log(total)
    
            document.getElementById('add-money3').innerText = total;
    
            const addToCash = document.getElementById('cash-out').innerText;
    
            const paresCashAdd = parseFloat(addToCash);
    
            const total3 = paresCashAdd - parseInput3;
            console.log(total3)
    
            document.getElementById('cash-out').innerText = total3;


                        // Histories section will be showed =============================================================
            const div = document.createElement('div');
            div.classList.add('p-7','border', 'rounded-md');
        
            const h3 = document.createElement('h3');
            h3.innerText = `${inputAdd3} Tk is Donated Aid for Injured in the Quota Movement in Bangladesh`;
            div.appendChild(h3);
        
            const p = document.createElement('p');
           p.innerText = `Date: ${getDateTime()}`
        
            div.append(p)
        
            document.getElementById('histories-page').appendChild(div)

        } else {
            alert('Please enter a valid amount number')
        }

    })





