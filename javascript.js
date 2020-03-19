const audioFiles1 = [
    {audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    key: "Q",
    id: "Heater-1",
    display: "Heater 1",
    keyCode: '81'},

    {audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    key: "W",
    id: "Heater-2",
    display: "Heater 2",
    keyCode: 87},

    {audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    key: "E",
    id: "Heater-3",
    display: "Heater 3",
    keyCode: 69},
    
    {audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    key: "A",
    id: "Heater-4",
    display: "Heater 4",
    keyCode: 65},

    {audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    key: "S",
    id: "Clap",
    display: "Clap",
    keyCode: 83},

  {audio:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    key: "D",
    id: "Open-HH",
    display: "Open Hi-Hat",
    keyCode: 68},

{audio:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    key: "Z",
    id: "Kick-and-Hat",
    display: "Kick n' Hat",
    keyCode: 90},

{audio:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    key: "X",
    id: "Kick",
    display: "Kick",
    keyCode: 88},

{audio:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    key: "C",
    id: "Closed-HH",
    display: "Closed Hi-Hat",
    keyCode: 67},
];

const audioFiles2 = [
    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    key: "Q",
    id: "Chord-1",
    display: "Chord 1",
    keyCode: 81},

    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    key: "W",
    id: "Chord-2",
    display: "Chord 2",
    keyCode: 87},

    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    key: "E",
    id: "Chord-3",
    display: "Chord 3",
    keyCode: 69},

    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    key: "A",
    id: "Shaker",
    display: "Shaker",
    keyCode: 65},

    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    key: "S",
    id: "Open-HH",
    display: "Open Hi-Hat",
    keyCode: 83},

    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    key: "D",
    id: "Closed-HH",
    display: "Closed Hi-Hat",
    keyCode: 68},

    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    key: "Z",
    id: "Punchy-Kick",
    display: "Punchy Kick",
    keyCode: 90},

    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    key: "X",
    id: "Side-Stick",
    display: "Side Stick", 
    keyCode: 88},

    {audio: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    key: "C",
    id: "Snare",
    display: "Snare",
    keyCode: 67},
];

//creating drum pads
var ul = document.querySelector("ul");
var count = 0;

while (count < 9) {
ul.appendChild(document.createElement("li"));
count++;
}
//

//Setting up the class, id and text of the drum pads depending on the audio kit used
var li = document.querySelectorAll("li");

function setKit1() {
for (var i = 0; i < li.length; i++) {
  li[i].className = "drum-pad";
  li[i].textContent = audioFiles1[i]["key"];
  li[i].id = audioFiles1[i]["id"];
  li[i].dataset.key = audioFiles1[i]["keyCode"];
};
};

function setKit2() {
for (var i = 0; i < li.length; i++) {
  li[i].className = "drum-pad";
  li[i].textContent = audioFiles2[i]["key"];
  li[i].id = audioFiles2[i]["id"];
  li[i].dataset.key = audioFiles2[i]["keyCode"];
};
};
//

//Creating and inserting audio in each drum pad - append audio to body element so keydown event works, that way these nodes are in the DOM
count = 0; 
while (count < 9) {
document.body.appendChild(document.createElement("audio"));
count++;
}

var allAudio = document.querySelectorAll("audio");

function setSound(audioFile) {
for (var i = 0; i < li.length; i++) {
  allAudio[i].dataset.key = audioFile[i]["keyCode"];
  allAudio[i].src = audioFile[i]["audio"];
  allAudio[i].type = "audio/mpeg";
  allAudio[i].className = "clip";
  allAudio[i].id = audioFile[i]["key"];
};
};

function getSoundWithKeys(audioFile) {   
 document.addEventListener('keydown', function(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
   var index = Array.from(li).indexOf(key);
   
 if(!audio) return; // stop function
    key.classList.add("active");
    audio.play();
    display.textContent = audioFile[index]["display"];
  });
//remove active class after user stops pressing key
  document.addEventListener('keyup', function(e){
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    key.classList.remove("active");
  });
};
// Removes keyboard input if the power is off
function removeSoundOfKeys() {
document.addEventListener('keydown', function(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
   key.classList.remove("active");
   audio.pause();
   display.textContent = "";
});
}

function getSoundWithClick(audioFile) {
  li.forEach((item, index) => item.addEventListener("click", () => {     
    allAudio[index].play();
    display.textContent = audioFile[index]["display"];
    })
);
};
//

//Volume control
var volume = document.querySelector("#volume");

volume.addEventListener("input",() => {
display.textContent = volume.value;
allAudio.forEach(sound => {sound.volume = volume.value / 100});
});
volume.addEventListener("change", () => {
display.textContent = volume.value;
allAudio.forEach(sound => {sound.volume = volume.value / 100});
});
//

//Change sound kit with button id="kit"
var kit = document.querySelector("#kit-button");
var display = document.querySelector("#display");
var boolKit = true;

kit.addEventListener("click", () => {
if (boolKit) {
  boolKit = false;
  setKit2();
  setSound(audioFiles2);
  if (boolPower == true) {
    display.textContent = "Smooth Piano Kit";
  };
  getSoundWithKeys(audioFiles2);
  getSoundWithClick(audioFiles2);
} else {
  boolKit = true;
  setKit1();
  setSound(audioFiles1);
  if (boolPower == true) {
    display.textContent = "Heater Kit";
  };
  getSoundWithKeys(audioFiles1);
  getSoundWithClick(audioFiles1);
}                      
});
//

//Powering on or off the button with id="power"
var power = document.querySelector("#power-button");
var boolPower = false;

power.addEventListener("click", () => {
if (boolPower) {
  boolPower = false;
  li.forEach(item => {item.classList.add("disabled")});
  display.textContent = "";
  removeSoundOfKeys();
} else {
  li.forEach(item => {item.classList.remove("disabled")});
  boolPower = true;
  setKit1();
  setSound(audioFiles1);
  getSoundWithKeys(audioFiles1);
  getSoundWithClick(audioFiles1);
  if (boolKit) {
    display.textContent = "Heater Kit";
  } else {
    display.textContent = "Smooth Piano Kit";
  };
}                      
});
//

//Initial State
setKit1();
li.forEach(item => {item.classList.add("disabled")});
//