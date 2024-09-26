var cards = [];
var cardName;
var cardNum = 1;
for(let x = 1; x < 253; x++){
    cardName = "SV01_EN_" + x + "-2x.png";
    cards.push(cardName);
    
}

cards.forEach(function(card){
    const img = document.createElement('img');
    
    // Set the src attribute to the image URL
    img.src = 'SVImages/'+ card; // Change to your image URL
    
    // Optionally set other attributes
    img.alt = 'Scarlet and Violet Card ' + cardNum;
    
    img.style.width = '200px'; // Set width
    img.style.height = '280px'; // Set height
    img.id = 'SVCard' + cardNum;
    
    // Append the image to the image container
    const textNode = document.createTextNode(cardNum);
    //document.getElementById('imageContainer').appendChild(textNode);
    document.getElementById('imageContainer').appendChild(img);

    cardNum++;
});


