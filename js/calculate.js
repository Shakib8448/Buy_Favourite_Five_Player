// function createSelectedLi(event1,event2){
//     const placesUL =document.querySelector('#places-container ul')
//     const li = document.createElement('li');
//     li.innerText = event2;

// }
document.getElementById('sommo').addEventListener('click',function(){
    const sommoField = document.getElementById('sommo-sarkar');
    const sommoString = sommoField.innerText;
    // createSelectedLi(event1,sommoString);
    console.log(sommoString);

});