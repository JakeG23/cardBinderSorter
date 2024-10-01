var cardName;
var cardNum = 1;
for(let x = 1; x < 259; x++){
    cardName = "SV01_EN_" + x + "-2x.png";
    const img = document.createElement('img');
    
    img.src = 'https://dz3we2x72f7ol.cloudfront.net/expansions/scarlet-violet/en-us/' + cardName;
    
    img.alt = 'Scarlet and Violet Card ' + cardNum;
    
    img.style.width = '200px';
    img.style.height = '280px';
    img.id = 'SVCard' + cardNum;
    img.onclick = function() {
        cardClicked(x);
    }
    
    const textNode = document.createTextNode(cardNum);
    //document.getElementById('imageContainer').appendChild(textNode);
    document.getElementById('imageContainer').appendChild(img);

    cardNum++;
    
}

function cardClicked(idNum){
    window.location.href = 'SVCards/SVCardPage' + idNum + '.html';
}



