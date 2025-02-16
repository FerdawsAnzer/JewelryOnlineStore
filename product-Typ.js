


function changeItem(imageId,priceId,descriptionId,fileName,newPrice,newDescription){
   let img= document.querySelector(`#${imageId}`);
   img.setAttribute('src',fileName);

//change the price
let price = document.querySelector(`#${priceId}`);
price.textContent=newPrice;
  
//change the description 
let description =
 document.querySelector(`#${descriptionId}`);
description.innerHTML= newDescription;
}



window.onload = function() {
  // Retrieve the count from local storage
  var savedCount = localStorage.getItem('basketCount');
  // If count exists in local storage, update the displayed count
  if(savedCount !== null) {
    var basketCountElement = document.getElementById('cartcount');
    basketCountElement.textContent = savedCount;
  }
};

function addToBasket() {
  var basketCountElement = document.getElementById('cartcount');
  var currentCount = parseInt(basketCountElement.textContent);
  currentCount += 1;
  basketCountElement.textContent = currentCount;
  localStorage.setItem('basketCount', currentCount);
}




