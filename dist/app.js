"use strict";
const p1 = {
    name: 'Playstation 5',
    imageUrl: './images/ps.jpg',
    bgColor: '#5754ecb3',
    color: '#5754ec',
    vote: 0
};
const p2 = {
    name: 'XBox Series X',
    imageUrl: './images/xbox.jpg',
    bgColor: '#2b2b2bcc',
    color: '#1c7a1c',
    vote: 0
};
const p3 = {
    name: 'Iphone',
    imageUrl: './images/iphone.jpg',
    bgColor: '#1c7a1c7a',
    color: '#1c7a1c',
    vote: 0
};
const p4 = {
    name: 'Samsung',
    imageUrl: './images/samsung.jpg',
    bgColor: '#2b2b2bcc',
    color: '#111',
    vote: 0
};
const p5 = {
    name: 'Fifa',
    imageUrl: './images/fifa.jpg',
    bgColor: '#14cc8f88',
    color: '#14cc8f',
    vote: 0
};
const p6 = {
    name: 'PES',
    imageUrl: './images/pes.jpg',
    bgColor: '#c9c9c984',
    color: '#5754ec',
    vote: 0
};
const products = [
    { x: p1, y: p2 },
    { x: p3, y: p4 },
    { x: p5, y: p6 }
];
const container = document.querySelector('.container');
const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');
const leftVoteBtn = document.querySelector('#left');
const rightVoteBtn = document.querySelector('#right');
function Display(P, i = 0) {
    let round = i;
    // Name
    leftSide.querySelector('h1').innerText = P[round].x.name;
    rightSide.querySelector('h1').innerText = P[round].y.name;
    // Image
    leftSide.style.backgroundImage = `url('${P[round].x.imageUrl}')`;
    rightSide.style.backgroundImage = `url('${P[round].y.imageUrl}')`;
    // BgColor
    leftSide.style.setProperty("--left-bg-color", `${P[round].x.bgColor}`);
    rightSide.style.setProperty("--right-bg-color", `${P[round].y.bgColor}`);
    // Color
    leftSide.querySelector('a').style.setProperty("--left-btn-hover-color", `${P[round].x.color}`);
    rightSide.querySelector('a').style.setProperty("--right-btn-hover-color", `${P[round].y.color}`);
    // Voting
    function vote() {
        if (round < P.length - 1) {
            round++;
            Display(P, round);
        }
        return false;
    }
    leftVoteBtn.addEventListener('click', vote);
    rightVoteBtn.addEventListener('click', vote);
}
;
Display(products);
// Hover Effect 
leftSide.addEventListener('mouseenter', () => container.classList.add('hover-left'));
leftSide.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
rightSide.addEventListener('mouseenter', () => container.classList.add('hover-right'));
rightSide.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
