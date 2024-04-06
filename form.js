function valid() {
    var f = document.querySelector('#name')
    var username = document.querySelector('#name').value;
    var Email = document.querySelector("#email").value;
    var Pass = document.querySelector("#password").value;
    var cPass = document.querySelector("#cpassword").value;

    var usercheck = /^[A-Z][a-z]{4,30}$/;
    var emailcheck = /^[a-zA-Z]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var passcheck = /^[a-zA-z]{3,}[@#$%&*]{1}[0-9]{3,16}$/;


    if (usercheck.test(username)) {
        f.style.outlineColor = "green";
    } else {

        f.style.outlineColor = "red";

        return false;
    }


    if (emailcheck.test(Email)) {
        email.style.outlineColor = "green";

    } else {
        email.style.outlineColor = "red";

        return false;
    }
    if (passcheck.test(Pass)) {
        password.style.outlineColor = "green";

    } else {
        password.style.outlineColor = "red";

        return false;
    }
    if (cPass.match(Pass)) {
        cpassword.style.outlineColor = "green";

    } else {
        cpassword.style.outlineColor = "red";

        return false;
    }

}




//////  login



function validation() {


    var u = document.querySelector('#log-name')
    var e = document.querySelector('#log-email')
    var p = document.querySelector('#log-password')

    var logusername = document.querySelector('#log-name').value;
    var logEmail = document.querySelector("#log-email").value;
    var logPass = document.querySelector("#log-password").value;


    var userchek = /^[A-Z][a-z]{4,30}$/;
    var emailchek = /^[a-zA-Z]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var passchek = /^[a-zA-z]{3,}[@#$%&*]{1}[0-9]{3,16}$/;


    if (userchek.test(logusername)) {
        u.style.outlineColor = "green";
    } else {
        u.style.outlineColor = "red";

        return false;
    }


    if (emailchek.test(logEmail)) {
        e.style.outlineColor = "green";
    } else {
        e.style.outlineColor = "red";

        return false;
    }

    if (passchek.test(logPass)) {
        p.style.outlineColor = "green";

    } else {

        p.style.outlineColor = "red";

        return false;
    }


}


//////////   rotate



const card = document.getElementById("card")

function openlogin() {
    card.style.transform = "rotateY(0deg)";
}

function openregister() {
    card.style.transform = "rotateY(-180deg)";
}


//////////////////  Nav Bar 



product.addEventListener('click', function() {
    // e.preventDefault();
    if (iconrotate.style.transform == "rotate(0deg)", ul2.style.display == "block") {
        document.getElementById('iconrotate').style.transform = "rotate(178deg)";
        document.getElementById('ul2').style.display = "none";
    } else {
        document.getElementById('iconrotate').style.transform = "rotate(0deg)";
        document.getElementById('ul2').style.display = "block";

    }
})

var burger = document.getElementById('menu-btn');
var navbar = document.getElementById('navbar');
document.getElementById('menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    burger.classList.toggle('active');
}




///////////////////////   Cart Page




function smallimg() {
    let y = document.getElementById("mainimg");
    y.innerHTML = "<img src='image/gallery-1.jpg'>";
};

function smallimg2() {
    let y = document.getElementById("mainimg");
    y.innerHTML = "<img src='image/product-6.jpg'>";
}

function smallimg3() {
    let y = document.getElementById("mainimg");
    y.innerHTML = "<img src='image/product-3.jpg'>";
}

function smallimg4() {
    let y = document.getElementById("mainimg");
    y.innerHTML = "<img src='image/brand2.jpg'>";
}




//////////////////  slider



var slideIndex = 1;
sliders(slideIndex)

var rightarrow = document.getElementById('rightarrow').addEventListener('click', function(e) {
    sliders(slideIndex += 1);
});
var leftarrow = document.getElementById('leftarrow').addEventListener('click', function(e) {
    sliders(slideIndex -= 1);
});

function sliders(n) {
    var i;
    var slides = document.getElementsByClassName('slide');
    if (slideIndex > slides.length) {
        slideIndex = 4;
        var rightarrow = document.getElementById('rightarrow').style.visibility = "hidden";
    } else {
        var rightarrow = document.getElementById('rightarrow').style.visibility = "visible";
    }

    if (n < 1) {
        slideIndex = 1;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slides[slideIndex - 1].style.display = "block";
    // document.getElementById('num').innerHTML = slideIndex;
};



////////////////////   heart



var n = document.getElementById('name');
var b = document.getElementById('btn');
var b = document.getElementById('box');


function hrt1() {
    if (heart_1.style.color == "orange") {
        setTimeout(function() {
            b.style.opacity = "1";
            b.style.visibility = "visible";
            n.innerHTML = "Iteam Remove From Wishlist";
        }, 1000);
        heart_1.style.color = "gray";
    } else {
        heart_1.style.color = "orange";
        setTimeout(function() {
            b.style.opacity = "1";
            n.innerHTML = "Iteam Add To Your Wishlist";
            b.style.visibility = "visible";
        }, 1000);
    }
    setTimeout(function() {
        b.style.opacity = "0";
        b.style.visibility = "hidden";
        n.innerHTML = "Iteam Remove From Wishlist";
    }, 2000);
}



function hrt2() {
    if (heart_2.style.color == "orange") {
        setTimeout(function() {
            b.style.opacity = "1";
            b.style.visibility = "visible";
            n.innerHTML = "Iteam Remove From Wishlist";
        }, 1000);
        heart_2.style.color = "gray";
    } else {
        heart_2.style.color = "orange";
        setTimeout(function() {
            b.style.opacity = "1";
            n.innerHTML = "Iteam Add To Your Wishlist";
            b.style.visibility = "visible";
        }, 1000);
    }
    setTimeout(function() {
        b.style.opacity = "0";
        b.style.visibility = "hidden";
        n.innerHTML = "Iteam Remove From Wishlist";
    }, 2000);
}


function hrt3() {
    if (heart_3.style.color == "orange") {
        setTimeout(function() {
            b.style.opacity = "1";
            b.style.visibility = "visible";
            n.innerHTML = "Iteam Remove From Wishlist";
        }, 1000);
        heart_3.style.color = "gray";
    } else {
        heart_3.style.color = "orange";
        setTimeout(function() {
            b.style.opacity = "1";
            n.innerHTML = "Iteam Add To Your Wishlist";
            b.style.visibility = "visible";
        }, 1000);
    }
    setTimeout(function() {
        b.style.opacity = "0";
        b.style.visibility = "hidden";
        n.innerHTML = "Iteam Remove From Wishlist";
    }, 2000);
};


function hrt4() {
    if (heart_4.style.color == "orange") {
        setTimeout(function() {
            b.style.opacity = "1";
            b.style.visibility = "visible";
            n.innerHTML = "Iteam Remove From Wishlist";
        }, 1000);
        heart_4.style.color = "gray";
    } else {
        heart_4.style.color = "orange";
        setTimeout(function() {
            b.style.opacity = "1";
            n.innerHTML = "Iteam Add To Your Wishlist";
            b.style.visibility = "visible";
        }, 1000);
    }

    setTimeout(function() {
        b.style.opacity = "0";
        b.style.visibility = "hidden";
        n.innerHTML = "Iteam Remove From Wishlist";
    }, 2000);

function hrt5(){
    if(heart_5.style.color== "orange"){
        setTimeout(function(){
            b.style.opacity="1";
            b.style.visibility="visible";
            n.innerHTML="Iteam Remove From Whishlist";
        },1000);

        heart_5.style.color="grey";
    }
    else{
        heart_5.style.color= " orange";
        setTimeout(function(){
            b.style.opacity="1";
            b.style.visibility="visible";
            n.innerHTML="Iteam Added To wishlist";
        },1000);
    }

setTimeout(function(){
b.style.opacity="0";
b.style.visibility="hidden";
},2000);

};