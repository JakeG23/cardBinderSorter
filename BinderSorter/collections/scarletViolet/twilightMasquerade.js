var cardName;
var cardNum = 1;
for(let x = 1; x < 227; x++){
    cardName = "SV06_EN_" + x + ".png";
    const img = document.createElement('img');
    
    img.src = 'https://dz3we2x72f7ol.cloudfront.net/expansions/twilight-masquerade/en-us/' + cardName;
    
    img.alt = 'Twilight Masquerade Card ' + cardNum;
    
    img.style.width = '200px';
    img.style.height = '280px';
    img.id = 'TMCard' + cardNum;
    
    const textNode = document.createTextNode(cardNum);
    //document.getElementById('imageContainer').appendChild(textNode);
    document.getElementById('imageContainer').appendChild(img);

    cardNum++;
    
}