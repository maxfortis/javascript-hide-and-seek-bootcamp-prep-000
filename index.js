function getFirstSelector(selector){
    return document.querySelector(selector);

}
function nestedTarget(){
  return document.querySelector('#nested div .target')

}
function increaseRankBy(n){
var items = document.querySelectorAll('ul.ranked-list li');
for ( var i = 0; i < items.length; i++){
  items[i].innerHTML = parseInt(items[i].innerHTML) + n;




}

}
function deepestChild() {
  let list = document.getElementById('grand-node').querySelectorAll('div');
  return list[list.length-1];
}
