function createSelectedLi(event1){
    const liItem = document.getElementById("ul-item").getElementsByTagName("li").length;
    console.log(parseInt(liItem)+1);
    if( parseInt(liItem)+1>5){
        alert('Select Limit is:-5,,,!!You cross The Limit!!')
        return;
    } 
    else{
    const placesUL =document.querySelector('#places-container ul')
    const li = document.createElement('li');
    li.innerText = event1;
    placesUL.append(li);}

}
document.getElementById('sommo').addEventListener('click',function(){
    const sommoField = document.getElementById('sommo-sarkar');
    const sommoString = sommoField.innerText;
    createSelectedLi(sommoString);
    document.getElementById("sommo").disabled = true;
});
document.getElementById('musaddek').addEventListener('click',function(){
    const musaddekField = document.getElementById('musaddek-id');
    const musaddekString = musaddekField.innerText;
    createSelectedLi(musaddekString);
    document.getElementById("musaddek").disabled = true;
});
document.getElementById('musfiq').addEventListener('click',function(){
    const musfiqField = document.getElementById('musfiq-id');
    const musfiqString = musfiqField.innerText;
    createSelectedLi(musfiqString);
    document.getElementById("musfiq").disabled = true;
});
document.getElementById('mustafiz').addEventListener('click',function(){
    const mustafizField = document.getElementById('mustafiz-id');
    const mustafizString = mustafizField.innerText;
    createSelectedLi(mustafizString);
    document.getElementById("mustafiz").disabled = true;
});
document.getElementById('shakib').addEventListener('click',function(){
    const shakibField = document.getElementById('shakib-id');
    const shakibString = shakibField.innerText;
    createSelectedLi(shakibString);
    document.getElementById("shakib").disabled = true;
});
document.getElementById('tamim').addEventListener('click',function(){
    const tamimField = document.getElementById('tamim-id');
    const tamimString = tamimField.innerText;
    createSelectedLi(tamimString);
    document.getElementById("tamim").disabled = true;

});

