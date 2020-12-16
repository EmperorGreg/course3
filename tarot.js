var tarot = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'The Hermit', 'The Hanged Man', 'The Devil', 'The Tower', 'The Moon', 'The Sun'];
var current = ['good luck', 'bad luck', ' a good time', 'a bad time'];
var future = ['trust no one', 'trust your gut', 'be patient', 'grab it before its too late'];

const randomTarot = (arr1, arr2, arr3) => {
    var rand1 = Math.floor(Math.random() * arr1.length);
    var rand2 = Math.floor(Math.random() * arr2.length);
    var rand3 = Math.floor(Math.random() * arr3.length);
    
    return 'Your Tarot Card is: ' + arr1[rand1] + ', You are having ' + arr2[rand2] + ', You should ' + arr3[rand3];
    
};

console.log(randomTarot(tarot, current, future));
