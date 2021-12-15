let result = document.getElementById('result');

const storage = window.localStorage;
storage.setItem('size', '22');
storage.setItem('family', 'Material');
storage.setItem('color', 'Red');

function write(){
    let value = storage.getItem('size')
    result.innerHTML = value + ' ' + storage.getItem('family') + ' ' + storage.getItem('color');
    result.style.fontSize = value;
    result.style.fontFamily = storage.getItem('family');
    result.style.color = storage.getItem('color');

}

write();
write();