var cardName;
var cardNum = 1;
for(let x = 1; x < 219; x++){
    cardName = "SV05_EN_" + x + ".png";
    const img = document.createElement('img');
    
    img.src = 'https://dz3we2x72f7ol.cloudfront.net/expansions/temporal-forces/en-us/' + cardName;
    
    img.alt = 'Temporal Forces Card ' + cardNum;
    
    img.style.width = '200px';
    img.style.height = '280px';
    img.id = 'TFCard' + cardNum;
    
    const textNode = document.createTextNode(cardNum);
    //document.getElementById('imageContainer').appendChild(textNode);
    document.getElementById('imageContainer').appendChild(img);

    cardNum++;
    
}