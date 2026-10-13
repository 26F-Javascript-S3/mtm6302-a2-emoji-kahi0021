const emojiCodes = [
  128538, 128578, 129303, 129300, 128528, 128529, 128566, 128580, 128527, 128547, 128514, 128515  
];

const gallery = document.getElementById('gallery');

function showEmojis(count = emojiCodes.length) {
  gallery.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const code = emojiCodes[i];

    const card = document.createElement("div");
    card.className = "card";

    const symbol = document.createElement("span");
    symbol.className = "emoji";
    symbol.textContent = String.fromCodePoint(code);

    const label = document.createElement("span");
    label.className = "code";
    label.textContent = code;

    card.appendChild(symbol);
    card.appendChild(label);
    gallery.appendChild(card);
  }
}
 showEmojis();