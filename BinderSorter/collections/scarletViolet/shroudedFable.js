var cardName;
var cardNum = 1;
for(let x = 1; x < 100; x++){
    cardName = "SV6pt5_EN_" + x + ".png";
    const img = document.createElement('img');
    
    img.src = 'https://dz3we2x72f7ol.cloudfront.net/expansions/shrouded-fable/en-us/' + cardName;
    
    img.alt = 'Shrouded Fable Card ' + cardNum;
    
    img.style.width = '200px';
    img.style.height = '280px';
    img.id = 'SFCard' + cardNum;
    
    const textNode = document.createTextNode(cardNum);
    //document.getElementById('imageContainer').appendChild(textNode);
    document.getElementById('imageContainer').appendChild(img);

    cardNum++;
    
}