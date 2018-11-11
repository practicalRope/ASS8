function createNavNode(){
    const nav = document.createElement('nav'),
    prev = document.createElement('button'),
    nex = document.createElement('button'),
    text = document.createElement('span');

    prev.innerText = "◄ previous";
    prev.id = "subPrev";
    prev.onclick = previous;

    nex.innerText = "next ►";
    nex.id = "subNext";
    nex.onclick = next;

    nav.id = 'subNav';
    nav.appendChild(prev);
    nav.appendChild(text);
    nav.appendChild(nex);

    let o = {
        navbox: nav,
        prevButton: prev,
        nextButton: nex,
        text: text
    };
    return o;
}

function Node(i,n){
    this.idx = i;
    this.n = n;
    this.title = n.querySelector('h3').innerText;
}
Node.prototype.hide = function(){
    this.n.style.display = 'none';
}
Node.prototype.show = function(){
    this.n.style.removeProperty('display');
}

const domNodes = document.querySelectorAll('.artist');
const navigation = createNavNode();
let currentIdx = 0;
let nodes = [];


domNodes.forEach((n,i) =>{
    nodes.push(new Node(i,domNodes[i]));
});
update();
similar.appendChild(navigation.navbox);


function next(){
    currentIdx++;
    update()
}
function previous(){
    currentIdx--;
    update()
}


function update(){
    if(currentIdx > nodes.length - 1) currentIdx = 0;
    if(currentIdx < 0) currentIdx = nodes.length - 1;

    nodes.forEach((n,i)=>{
        i===currentIdx ? n.show() : n.hide();
    });
    
    navigation.text.innerText = `${currentIdx+1} / ${nodes.length}`;
}








