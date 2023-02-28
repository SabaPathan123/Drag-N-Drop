const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

for(const empty of empties){
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('drop',dragDrop);
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}

function dragStart(){
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible',0);
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}