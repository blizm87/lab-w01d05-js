var remListItem = function(){
  this.parentNode.remove();
}

var remComplete = function (){
  this.removeAttribute('class','complete');
  this.addEventListener('click',remListItem);
}

var addComplete = function (){
  this.setAttribute('class','complete');
  this.addEventListener('click', remComplete);
}

var renderText = function () {
  var newLiItem = document.createElement('li');
  var inputTextItem = document.createElement('span');
  var xOutItem = document.createElement('span');
  var getInput = event.target.value;
  var textList = document.querySelector('.todos');

  if (event.keyCode === 13){
    newLiItem.setAttribute('class','todo');
    inputTextItem.addEventListener('click', addComplete);
    xOutItem.addEventListener('click',remListItem);
    inputTextItem.innerHTML = getInput;
    xOutItem.innerHTML = ' x';
    textList.appendChild(newLiItem);
    newLiItem.appendChild(inputTextItem);
    newLiItem.appendChild(xOutItem);
    event.target.value=" ";
  }
}

var textBox1 = document.querySelector('input.new-todo');
textBox1.addEventListener('keyup', renderText);

