
const buttonOne = document.getElementById('button-click1')
const buttonTwo = document.getElementById('button-click2')



//  Show history page 

    document.getElementById('button-click1').
    addEventListener('click', function(){

  const historiesPage = document.getElementById('histories-page').classList.add('hidden')
    
  buttonOne.classList.add('bg-[#B4F461]')
    buttonTwo.classList.remove('bg-[#B4F461]');


    const donatingPage = document.getElementById('donation-page').classList.remove('hidden')

    })


//  Donation page 

document.getElementById('button-click2').
addEventListener('click', function(){

    const historiesPage = document.getElementById('histories-page').classList.remove('hidden')

    const donatingPage = document.getElementById('donation-page').classList.add('hidden')
buttonOne.classList.remove('bg-[#B4F461]')
buttonTwo.classList.add('bg-[#B4F461]')

 

})


