const img = document.createElement('img');
var max = 50;
for(let x = 1; x < max; x++){
    img.src = 'SVImages/SV0' + x + '_EN_' + x + '-2x.png';
    
    document.getElementById('image-container').appendChild(img);

}


