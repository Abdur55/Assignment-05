
const buttonOne = document.getElementById('button-click1')
const buttonTwo = document.getElementById('button-click2')



//  Show history page 

    document.getElementById('button-click1').
    addEventListener('click', function(){

  const historiesPage = document.getElementById('histories-page').classList.add('hidden')
    
     buttonOne.style.background = 'green'
    buttonTwo.style.background = '';


    const donatingPage = document.getElementById('donation-page').classList.remove('hidden')

    })


//  Donation page 

document.getElementById('button-click2').
addEventListener('click', function(){

    const historiesPage = document.getElementById('histories-page').classList.remove('hidden')

    const donatingPage = document.getElementById('donation-page').classList.add('hidden')

     buttonOne.style.background = '';
    buttonTwo.style.background = 'green';

})


// test history page 1

// document.getElementById('button-click1')
// .addEventListener('click', function(){


// const historiPage = document.getElementById('histories-page').classList.add('hidden')


// const donationPage = document.getElementById('donation-page').classList.remove('hidden')


// })


// test donation page 2

// document.getElementById('button-click2')
// .addEventListener('click', function(){

//     const historiPage = document.getElementById('histories-page').classList.remove('hidden')


// const donationPage = document.getElementById('donation-page').classList.add('hidden')

// })
