const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);


const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


const Window = function(tabs) {
    this.tabs = tabs;
  };
  
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); 
    return this;
  };
  
  Window.prototype.tabClose = function(index) {
  
  
    const tabsBeforeIndex = this.tabs.splice(0, index); 
   const tabsAfterIndex = this.tabs.splice(1);
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
  
  
    return this;
   };
  
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 
  
  
  const finalTabs = socialWindow
    .tabOpen() 
    .join(videoWindow.tabClose(2)) 
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);


  let fixedValue = 4;

  function incrementer() {
    return fixedValue + 1;
  }


  let fixedValue = 4;

function incrementer(n) {
  return n + 1;
}



var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName); 
  return newArr; 
}

function remove(arr, bookName) {
  let newArr = [...arr]; 
  if (newArr.indexOf(bookName) >= 0) {
    
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr; 
  }
}



