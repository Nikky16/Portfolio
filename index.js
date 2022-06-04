console.log('Welcome to portfolio');

let visible = document.getElementById('visibleIndex');
let nonVisible = document.getElementById('nonVisibleIndex');

let left = document.getElementById('left');
let right = document.getElementById('right');

visible.style.display = 'block';
nonVisible.style.display = 'none';

visible.addEventListener('click', ()=>{
    // console.log('You have clicked on visible button');
    visible.style.display = 'none';
    nonVisible.style.display = 'block';

    // left.style.width = '0%';
    left.style.display = 'none';
    right.style.display = 'block';
    right.style.width = '100%';
})
nonVisible.addEventListener('click', ()=>{
    // console.log('You have clicked on nonVisible button');
    visible.style.display = 'block';
    nonVisible.style.display = 'none';
    // left.style.width = '25%';
    // right.style.widows = '75%';
    left.style.display = 'block';
    right.style.display = 'block';
})

let index1 = document.getElementById('index1');
let index2 = document.getElementById('index2');
let index3 = document.getElementById('index3');
let index4 = document.getElementById('index4');
let index5 = document.getElementById('index5');

let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');
let display3 = document.getElementById('display3');
let display4 = document.getElementById('display4');
let display5 = document.getElementById('display5');

display1.style.display = 'block';
display2.style.display = 'none';
display3.style.display = 'none';
display4.style.display = 'none';
display5.style.display = 'none';

index1.addEventListener('click', ()=>{
    display1.style.display = 'block';
    display2.style.display = 'none';
    display3.style.display = 'none';
    display4.style.display = 'none';
    display5.style.display = 'none';
})
index2.addEventListener('click', ()=>{
    display1.style.display = 'none';
    display2.style.display = 'block';
    display3.style.display = 'none';
    display4.style.display = 'none';
    display5.style.display = 'none';
})
index3.addEventListener('click', ()=>{
    display1.style.display = 'none';
    display2.style.display = 'none';
    display3.style.display = 'block';
    display4.style.display = 'none';
    display5.style.display = 'none';
})
index4.addEventListener('click', ()=>{
    display1.style.display = 'none';
    display2.style.display = 'none';
    display3.style.display = 'none';
    display4.style.display = 'block';
    display5.style.display = 'none';
})
index5.addEventListener('click', ()=>{
    display1.style.display = 'none';
    display2.style.display = 'none';
    display3.style.display = 'none';
    display4.style.display = 'none';
    display5.style.display = 'block';
})