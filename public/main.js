window.addEventListener('load', function(e) {
  window.setInterval(keyloader, 2000);
});

let arr = ['GENRE', 'POPULARITY', 'RANKING', 'YEAR-BY'];
let i = 1;
let content = ['movie', 'tv', 'casts', 'reviews'];
function keyloader() {
  if (i >= arr.length) {
    i = 0;
  }
  let loader = document.querySelector('span.keyload');
  let val = loader.innerHTML;
  loader.innerHTML = arr[i];
  let changer = document.querySelector('.content-changer');
  changer.innerHTML = content[i];
  i++;
}
