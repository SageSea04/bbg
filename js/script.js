let noPressed = false
function showLove() {
    document.getElementById("response").innerHTML = "Good!🔫😗😗😗😗 I love you bbg";
    document.getElementById("response").style.display = "block";

    // ✅ Change background image for "Yes"
    document.body.style.background = "url('../images/happy.jpeg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    noPressed = false;
    createHearts();
}

function showRandomMessage() {
    let messages = [
        "Wrong answer bitch! 🖕",
        "Fuck you 🖕",
        "Lado vana baby",
        "Vak Bodhey",
        "Thu",
        "Gu khau",
    ];

    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("response").innerHTML = randomMessage;
    document.getElementById("response").style.display = "block";

    // ✅ Change background image for "No"
    document.body.style.background = "url('../images/sad.jpeg') no-repeat left center fixed";
    document.body.style.backgroundSize = "30%";
    noPressed = true;
    createSadEmojis();
}

//Function to create floating ❤️ ❣️ 😗 (only when "Yes" is pressed)
function createHearts() {
    if (noPressed) return; // ❌ Stops function if "No" was pressed

    let loveEmojis = ["❤️", "😗", "❣️"];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            if (noPressed) return; // ❌ Stop creating hearts if "No" is pressed

            let heart = document.createElement("div");
            heart.className = "heart-animation";
            heart.innerHTML = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
            document.body.appendChild(heart);

            // Randomize position
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 sec animation

            // Remove heart after animation ends
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 200);
    }
}
function createSadEmojis() {
    if(!noPressed){
        return;
    }
    if (!noPressed) return; // ❌ Stops function if "No" was NOT pressed

    let sadEmojis = ["😢", "😔", "😣"];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            if (!noPressed) return; // ❌ Stop creating emojis if "Yes" is pressed

            let sadEmoji = document.createElement("div");
            sadEmoji.className = "sad-animation";
            sadEmoji.innerHTML = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
            document.body.appendChild(sadEmoji);

            // Randomize position
            sadEmoji.style.left = Math.random() * 100 + "vw";
            sadEmoji.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 sec animation

            // Remove sad emoji after animation ends
            setTimeout(() => {
                sadEmoji.remove();
            }, 5000);
        }, i * 200);
    }
}