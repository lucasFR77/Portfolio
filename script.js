window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 10;
    nav.classList.toggle('scrolling-active', windowPosition);
});


// window.onload = function() {
//     document.querySelector(".pageloader").style.opacity = 0;
//     document.querySelector(".pageloader").style.transitionduration = "0.3s";
//     document.querySelector(".pageloader").style.visibility = "hidden";
//     document.querySelector(".container").style.opacity = 1;
//     document.querySelector(".container").style.visibility = "visible";
//     document.querySelector("nav").style.opacity = 1;
//     document.querySelector("nav").style.visibility = "visible";
//     document.querySelector("html").style.overflow = "auto";
// };


setTimeout(() => {
    document.querySelector(".pageloader").style.opacity = 0;
    document.querySelector(".pageloader").style.transitionduration = "0.3s";
    document.querySelector(".pageloader").style.visibility = "hidden";
    document.querySelector(".container").style.opacity = 1;
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector("nav").style.opacity = 1;
    document.querySelector("nav").style.visibility = "visible";
    document.querySelector("html").style.overflow = "auto";
}, 2500);

/*************** Typing effect ******************/
/********** tuile ***********/
$(window).one('scroll', function() {

    var str = "<p class='sousName'>Cliquez sur les tuiles pour plus de détails !</p>",
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById('tuile').innerHTML = text;

        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        if (isTag) return type();
        setTimeout(type, 80);
    }());
})

/********** fin tuile ***********/

/********** about ***********/

$(window).one('scroll', function() {

    var str = "<p class='sousName'>&lt;&gt; about &lt;/&gt;</p>",
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById('textAbout').innerHTML = text;

        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        if (isTag) return type();
        setTimeout(type, 80);
    }());
})

/********** fin about ***********/

/********** skills ***********/

$(window).one('scroll', function() {

    var str = "<p class='sousName'>&lt;&gt; skills &lt;/&gt;</p>",
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById('textSkills').innerHTML = text;

        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        if (isTag) return type();
        setTimeout(type, 80);
    }());
})

/********** fin skills ***********/

/********** exp ***********/

$(window).one('scroll', function() {

    var str = "<p class='sousName'>&lt;&gt; exp &lt;/&gt;</p>",
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById('textExp').innerHTML = text;

        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        if (isTag) return type();
        setTimeout(type, 80);
    }());
})

/********** fin exp ***********/

/********** products ***********/

$(window).one('scroll', function() {

    var str = "<p class='sousName'>&lt;&gt; products &lt;/&gt;</p>",
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById('textProducts').innerHTML = text;

        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        if (isTag) return type();
        setTimeout(type, 80);
    }());
})

/********** fin products ***********/

/********** hobbies ***********/

$(window).one('scroll', function() {

    var str = "<p class='sousName'>&lt;&gt; hobbies &lt;/&gt;</p>",
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById('textHobbies').innerHTML = text;

        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        if (isTag) return type();
        setTimeout(type, 80);
    }());
})

/********** fin hobbies ***********/

/********** contact ***********/

$(window).one('scroll', function() {

    var str = "<p class='sousName'>&lt;&gt; contact &lt;/&gt;</p>",
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById('textContact').innerHTML = text;

        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        if (isTag) return type();
        setTimeout(type, 80);
    }());
})

/********** fin contact ***********/

$('.comp1').click(function() {
    $('.comp1').toggleClass('active');
});
$('.comp2').click(function() {
    $('.comp2').toggleClass('active');
});
$('.comp3').click(function() {
    $('.comp3').toggleClass('active');
});
$('.comp4').click(function() {
    $('.comp4').toggleClass('active');
});
$('.comp5').click(function() {
    $('.comp5').toggleClass('active');
});


/************* Dark mode **************/

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});