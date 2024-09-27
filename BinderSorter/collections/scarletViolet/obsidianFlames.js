var cardName;
var cardNum = 1;
for(let x = 1; x < 231; x++){
    cardName = "SV03_EN_" + x + ".png";
    const img = document.createElement('img');
    
    img.src = 'https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/' + cardName;
    
    img.alt = 'Obsidian Flames Card ' + cardNum;
    
    img.style.width = '200px';
    img.style.height = '280px';
    img.id = 'OFCard' + cardNum;
    
    const textNode = document.createTextNode(cardNum);
    //document.getElementById('imageContainer').appendChild(textNode);
    document.getElementById('imageContainer').appendChild(img);

    cardNum++;
    
}