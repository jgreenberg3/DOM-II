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

function changeTextRandom(object){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    object.style.color = `#${randomColor}`;
    console.log(randomColor);
}

// SECOND EVENT: Mouseover EVENT, change text of all Divs randomly

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

// FIFTH EVENT: Cut EVENT, change Footer background color

const footer = document.querySelector('footer');
console.log(footer);

window.addEventListener('cut', function(){
    footer.style.backgroundColor = "darkblue";
})

// SIXTH EVENT: Change background color of Nav Header on 'Copy'

const mainNav = document.querySelector('.main-navigation');
console.log(mainNav);

window.addEventListener("copy", function(){
    changeBackground(mainNav);
});

function changeBackground(object){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    object.style.backgroundColor = `#${randomColor}`;
    console.log(randomColor);
    console.log(object);
}

// SEVENTH EVENT: Double Click EVENT, changes Footer background

const footerBar = document.querySelector('.footer');

window.addEventListener("dblclick", function(){
        changeBackground(footerBar);
    });

// EIGHTH EVENT: Resize EVENT, changes Font-Family of Paragraphs

paragraphs.forEach(function (object){
    window.addEventListener("resize", function(){
        changeFont(object);
    });
});

function changeFont(object){
    var fontType = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Georgia"];
    var font = fontType[Math.floor(Math.random()*5)];

    object.style.fontFamily = font;
    console.log(object.style.fontFamily);
}

// NINTH EVENT: Scroll EVENT, Adds red border to 'Content-Section'

const contentSection = document.querySelectorAll('.content-section');
contentSection.forEach(function(object){
    window.addEventListener("scroll", function(){
        addBorder(object);
    })
})

function addBorder(element){
    element.style.border = "1px solid red";
}

// TENTH EVENT: Double Click EVENT, switch Opacity of Images from 0 to 1

allImages.forEach(function (object){
    object.addEventListener('dblclick', function(){
        vanish(object);
        console.log(object);
    })
});

function vanish(object){
    var decider = Math.floor(Math.random()*2);
    console.log(decider);
    
    if (decider > 0){
        object.style.opacity = '1';
    } else{ object.style.opacity = '0';
        }
}

///////////////////////////////////////////////////////////////// 

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