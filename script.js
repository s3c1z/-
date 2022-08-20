let phrases = [
  { text: 'надіслати другу смішну гіфку', image: 'https://i.imgur.com/H0Sb8Fa.gif' },
  { text: 'подивитися знижки на авіаквитки', image: 'https://i.imgur.com/NU2Re3k.png' },
  { text: 'розібратися, про що співають репери', image: 'https://i.imgur.com/TtZ2M77.png' },
  { text: 'Юрій Дудь', image: 'https://i.imgur.com/ETgfd1L.png' },
  { text: 'розставити книги на полиці за кольором', image: 'https://i.imgur.com/I1PXdXL.png' },
  { text: 'читати про зарплати у Сан-Франциско', image: 'https://i.imgur.com/4F7MoLG.png' },
  { text: 'прочитати новини та жахнутися в коментарях', image: 'https://i.imgur.com/wX3sTsj.png' },
  { text: 'потрапити в потік сумних пісень та згадати всі помилки молодості', image: 'https://i.imgur.com/UHvTeKq.png' },
  { text: 'подивитися трейлер серіалу і заразом перший сезон', image: 'https://i.imgur.com/BimgIkT.png' },
  { text: 'перевірити непрочитане у Telegram-каналах', image: 'https://i.imgur.com/4lkuio8.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image); 
  
    if (randomElement.text.length > 40) { 
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  }); 