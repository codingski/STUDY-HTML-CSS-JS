

const content = document.querySelector('.itemList');

content.innerHTML = `
<li class="item"><img src="./data/img/blue_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_t.png"><span class="item__describe">female, large size</span> </li>
`
function getTshirt() {
  content.innerHTML = `
  <li class="item"><img src="./data/img/blue_t.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/pink_t.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/yellow_t.png"><span class="item__describe">female, large size</span> </li>
  `
}

function getSkirt() {
  content.innerHTML = `
  <li class="item"><img src="./data/img/blue_s.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/pink_s.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/yellow_s.png"><span class="item__describe">female, large size</span> </li>
  `
}

function getPants() {
  content.innerHTML = `
  <li class="item"><img src="./data/img/blue_p.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/pink_p.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/yellow_p.png"><span class="item__describe">female, large size</span> </li>
  `
}

function blue() {
  content.innerHTML = `
  <li class="item"><img src="./data/img/blue_p.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/blue_s.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/blue_t.png"><span class="item__describe">female, large size</span> </li>
  `
}

function yellow() {
  content.innerHTML = `
  <li class="item"><img src="./data/img/yellow_p.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/yellow_s.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/yellow_t.png"><span class="item__describe">female, large size</span> </li>
  `
}

function pink() {
  content.innerHTML = `
  <li class="item"><img src="./data/img/pink_p.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/pink_s.png"><span class="item__describe">female, large size</span> </li>
  <li class="item"><img src="./data/img/pink_t.png"><span class="item__describe">female, large size</span> </li>
  `
}
/*
for(var i=0; i < 10; i++) {
    var elem = document.createElement('li');
    elem.innerHTML = `<a href="/"> ${i}`;
    document.getElementById('list').append(elem);
  }
*/

function main() {
  content.innerHTML = `
<li class="item"><img src="./data/img/blue_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/blue_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/pink_t.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_p.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_s.png"><span class="item__describe">female, large size</span> </li>
<li class="item"><img src="./data/img/yellow_t.png"><span class="item__describe">female, large size</span> </li>
`
}