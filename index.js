


const textElement = document.getElementById('text');
const readMoreButton = document.getElementById('read-more');

const originalText = textElement.innerHTML;
const truncatedText = originalText.slice(0, 200); // Change the number of characters to show

let isTruncated = true;

readMoreButton.addEventListener('click', () => {
  if (isTruncated) {
    textElement.innerHTML = originalText;
    readMoreButton.textContent = 'Read Less';
  } else {
    textElement.innerHTML = truncatedText;
    readMoreButton.textContent = 'Read More';
  }
  
  isTruncated = !isTruncated;
});

// For the second section
const Element = document.getElementById('text2');
const KnowMore = document.getElementById('read-more2');

const Text = Element.innerHTML;
const NewText = Text.slice(0, 100); // Change the number of characters to show

let Truncated = true;

KnowMore.addEventListener('click', () => {
  if (Truncated) {
    Element.innerHTML = Text;
    KnowMore.textContent = 'Read Less';
  } else {
    Element.innerHTML = NewText;
    KnowMore.textContent = 'Read More';
  }
  
  Truncated = !Truncated;
});


// for the third section






const NewElement = document.getElementById('text3');
const NewTap = document.getElementById('know_more');

const NEW = Element.innerHTML;
const NewTex = NEW.slice(0, 150);

let Trunew = true;

NewTap.addEventListener('click', () => {
  if (Trunew) {
    NewElement.innerHTML = NEW;
    NewTap.textContent = 'React Info';
  } else {
    NewElement.innerHTML = NewTex;
    NewTap.textContent = 'Show More...';
  }

  Trunew = !Trunew;
});


// const NewElement = document.getElementById('tex3')
// const MoreInfo = document.getElementById('know_more')


// const NEW = Element.innerHTML 
// const NewTap = NEW.slice(0, 150)

// let Trunew = true;

// NewTap.addEventListener('click', () => {
//   if (Trunew) {
//     Element.innerHTML = Text;
//     NewTap.textContent = 'React Info'
//   } else {
//     Element.innerHTML = Tapnew;
//     NewTap.textContent ='show more...'
//   }
//     Trunew = !Trunew

// })








