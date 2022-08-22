function createSelectedLi(event1){
    const liItem = document.getElementById("ol-item").getElementsByTagName("li").length;
    if( parseInt(liItem)+1>5){
        alert('Select Limit is:-5,,,!!You cross The Limit!!')
        return;
    } 
    else{
    const placesUL =document.querySelector('#places-container ol')
    const li = document.createElement('li');
    li.innerText = event1;
    placesUL.append(li);}

}