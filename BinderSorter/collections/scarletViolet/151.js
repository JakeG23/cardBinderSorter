var cardName;
var cardNum = 1;
for(let x = 1; x < 208; x++){
    cardName = "SV3pt5_EN_" + x + ".png";
    const img = document.createElement('img');
    
    img.src = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/' + cardName;
    
    img.alt = '151 Card ' + cardNum;
    
    img.style.width = '200px';
    img.style.height = '280px';
    img.id = '151Card' + cardNum;
    
    const textNode = document.createTextNode(cardNum);
    //document.getElementById('imageContainer').appendChild(textNode);
    document.getElementById('imageContainer').appendChild(img);

    cardNum++;
    
}