var remListItem = function(){
  this.parentNode.remove();
  tasksCompleted = document.querySelectorAll('.complete').length;
  taskTotal = document.querySelectorAll('li').length;
  document.querySelector('#counter').textContent= 'Completed ' + tasksCompleted + ' out of ' + taskTotal;

}

var remComplete = function (){
  this.removeAttribute('class','complete');
  tasksCompleted = document.querySelectorAll('.complete').length;
  document.querySelector('#counter').textContent= 'Completed ' + tasksCompleted + ' out of ' + taskTotal;
  this.addEventListener('click',remListItem);

}

var addComplete = function (){
  this.setAttribute('class','complete');
  tasksCompleted = document.querySelectorAll('.complete').length;
  document.querySelector('#counter').textContent= 'Completed ' + tasksCompleted + ' out of ' + taskTotal;
  this.addEventListener('click',remComplete);
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
    inputTextItem.innerHTML = getInput;
    xOutItem.innerHTML = ' x';
    textList.appendChild(newLiItem);
    newLiItem.appendChild(inputTextItem);
    newLiItem.appendChild(xOutItem);
    taskTotal = document.querySelectorAll('li').length;
    xOutItem.addEventListener('click',remListItem);
    document.querySelector('#counter').textContent= 'Completed ' + tasksCompleted + ' out of ' + taskTotal;
    event.target.value=" ";

  }
}

var tasksCompleted = 0;
var taskTotal = 0;
document.querySelector('#counter').textContent= 'Completed ' + tasksCompleted + ' out of ' + taskTotal;

var textBox1 = document.querySelector('input.new-todo');
textBox1.addEventListener('keyup', renderText);


