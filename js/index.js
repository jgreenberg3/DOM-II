// Your code goes here

// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

// FIRST EVENT: Select all paragraphs, change text to random color on single Click Event

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (object){
    object.addEventListener("click", function(){
        changeTextRandom(object);
    });
});

// SECOND EVENT: Select all h1 tags, change text to random color on Scroll Event

const allDivs = document.querySelectorAll('div');

allDivs.forEach(function (object){
    object.addEventListener("mouseover", function(){
        changeTextRandom(object);
    })
})

function changeTextRandom(object){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    object.style.color = `#${randomColor}`;
    console.log(randomColor);
}

// THIRD EVENT: Make Div's disappear when dragged and dropped

allDivs.forEach(function (object){
    object.addEventListener("drag", function(){
        setInterval(makeDisappear(object), 10);
        makeAppear(object);
    })
})

// FOURTH EVENT: Change image opacity when key down

const allImages = document.querySelectorAll('img');
allImages.forEach(function (object){
    window.addEventListener('keydown', function(){
        changeOpacity(object);
        console.log(object);
    })
});

function changeOpacity(object){
    object.style.opacity = Math.random();
}

// FIFTH EVENT: Change Div borders to dotted when Key Down

const footer = document.querySelector('footer');
console.log(footer);

footer.addEventListener('wheel', function(){
    footer.style.border = "2px solid";
})


// SIXTH EVENT: Change background color of Nav Header on 'Copy'

const mainNav = document.querySelector('.main-navigation');
console.log(mainNav);

mainNav.addEventListener('copy', function(){
    changeBackground(mainNav);
});

function changeBackground(object){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    object.style.backgroundColor = `#${randomColor}`;
    console.log(randomColor);
    console.log(object);
}

// SEVENTH EVENT: SELECT event, footer element

const footerBar = document.querySelector(".footer");

footerBar.addEventListener("select", 
    (event) => { event.target.style.backgroundColor = 'blue'; 
});

// EIGHTH EVENT: Make Div's appear when Header is clicked

'resize;'

// NINTH EVENT: Make Div's appear when Header is clicked

'scroll'

// TENTH EVENT: Make Div's appear when Header is clicked

'dblclick'
'select'

const container = document.querySelector('.container');
console.log(container);
container.addEventListener('dbl', function(){
    changeText(container);
});

const oneDiv = document.querySelector('div');
oneDiv.addEventListener('keydown', function(){
    changeColor(oneDiv);
});
console.log(oneDiv);


// Function Declarations

function makeDisappear(object){
    object.style.display = 'none';
}

function makeAppear(object){
    object.style.display = 'flex';
}

function changeColor(element){
    element.style.backgroundColor = "red";
}

function changeText(element){
    element.style.color = "blue";
}

function changeStyle(){ 
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    const ctaText = document.querySelector('.cta-text h1');
    ctaText.style.color = `#${randomColor}`;
    console.log(randomColor);
}