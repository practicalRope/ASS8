function createNavNode(){
    const nav = document.createElement('nav'),
    prev = document.createElement('button'),
    nex = document.createElement('button'),
    text = document.createElement('span');

    prev.type = 'button';
    prev.innerText = "◄ previous";
    prev.id = "subPrev";
    prev.onclick = previous;

    nex.type = 'button';
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
    this.n.setAttribute('class','hide artist');
}
Node.prototype.show = function(){
    this.n.setAttribute('class','show artist');
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


window.addEventListener('keydown',(k)=>{
    if(1===1){
        // console.log("elem=>"+similar.getBoundingClientRect().top);
        // console.log("screen=>"+window.screen.height);
        
        
        if(k.key === 'ArrowLeft') {
            previous();
            k.preventDefault();
        }
        if(k.key === 'ArrowRight') {
            next();
            k.preventDefault();
        }
    }
},false);

// It would be cool to do touch, but time is of the essence
// and i havent done this before, so responsiveness could become buggy
// window.addEventListener('touchstart',(t)=>{

// },false)
// window.addEventListener('touchmove',(t)=>{

// },false)




// NAV scrolling
function ProgressBar(){
    this.value = 0;
    
    this.bar = document.createElement('div');
    this.bar.id = 'pBar'
    this.progress = document.createElement('div');
    this.bar.appendChild(this.progress);
    
    document.body.appendChild(this.bar);

    this.updateProgress();
    return this;
}

ProgressBar.prototype.updateProgress = function(){
    let rootHeight = document.querySelector(':root').offsetHeight - window.innerHeight;
    let val = (window.scrollY / rootHeight) * 100;
    this.progress.style.width = val +'%';
    return this;
}

let progress = new ProgressBar();

window.addEventListener('scroll',e=>{
    progress.updateProgress();
},false);

