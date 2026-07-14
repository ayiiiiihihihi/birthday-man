// =============================
// LOGIN
// =============================

const correctName = "vic";
const correctPassword = "1507";

function login(){

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;

    if(name === correctName && password === correctPassword){

        localStorage.setItem("sayangkuu!!", name);

        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("question1").classList.remove("hidden");

    }else{

        alert("Nama atau password salah 😤");

    }

}

// =============================
// QUESTION 1
// =============================

function question2(){

    document.getElementById("question1").classList.add("hidden");
    document.getElementById("question2").classList.remove("hidden");

}

function wrongBirthday(){

    alert("Masa bukan ulang tahun? 🤨");

}

// =============================
// QUESTION 2
// =============================

function wrongAnswer(){

    alert("Jawaban salah 😤");

}

function showBirthday(){

    document.getElementById("question2").classList.add("hidden");
    document.getElementById("birthday-page").classList.remove("hidden");

    document.getElementById("username").innerHTML =
    "Dear " + localStorage.getItem("birthdayName") + " ❤️";

    playMusic();

    typingEffect();

    createHearts();

    createConfetti();

    createBalloons();

}

// =============================
// MUSIC
// =============================

function playMusic(){

    const music = document.getElementById("birthdayMusic");

    music.volume = 0.5;

    music.play();

}

// =============================
// TYPING EFFECT
// =============================

const birthdayMessage =

`Happy Birthday ❤️

Selamat ulang tahun yaa.

Semoga semua doa baikmu dikabulkan.

Semoga selalu sehat.

Semoga selalu bahagia.

Semoga selalu dikelilingi orang-orang yang tulus.

Dan semoga semua impianmu menjadi kenyataan.

Enjoy your special day! 🎂`;

let index = 0;

function typingEffect(){

    const target = document.getElementById("typing-text");

    target.innerHTML = "";

    index = 0;

    const interval = setInterval(function(){

        target.innerHTML += birthdayMessage.charAt(index);

        index++;

        if(index >= birthdayMessage.length){

            clearInterval(interval);

        }

    },40);

}

// =============================
// NEXT PAGE
// =============================

function nextWish(){

    document.getElementById("birthday-page").classList.add("hidden");
    document.getElementById("wish-page").classList.remove("hidden");

}

// =============================
// RESTART
// =============================

function restart(){

    location.reload();

}

// =============================
// HEARTS
// =============================

function createHearts(){

    setInterval(function(){

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random()*100 + "vw";

        heart.style.fontSize = (20+Math.random()*20)+"px";

        heart.style.animationDuration = (4+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },7000);

    },300);

}

// =============================
// CONFETTI
// =============================

function createConfetti(){

    for(let i=0;i<200;i++){

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random()*100 + "vw";

        confetti.style.background =
        `hsl(${Math.random()*360},100%,60%)`;

        confetti.style.animationDuration =
        (3+Math.random()*3)+"s";

        document.body.appendChild(confetti);

        setTimeout(function(){

            confetti.remove();

        },7000);

    }

}

// =============================
// BALLOONS
// =============================

function createBalloons(){

    const colors = [

        "#ff4d8d",

        "#ffcc00",

        "#66ccff",

        "#66ff99",

        "#ff6666",

        "#b266ff"

    ];

    for(let i=0;i<15;i++){

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left = Math.random()*100+"vw";

        balloon.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        balloon.style.animationDuration =
        (8+Math.random()*5)+"s";

        document.body.appendChild(balloon);

        setTimeout(function(){

            balloon.remove();

        },14000);

    }

}