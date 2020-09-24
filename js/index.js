let link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

let sect = document.querySelector('section');

let para = document.createElement('p');
para.textContent = 'Я нарешті починаю шось шарити!!!';
sect.appendChild(para);

let text = document.createTextNode(" — the premier source for web development knowledge.");
var linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);

//sect.removeChild(linkPara);

//linkPara.parentNode.removeChild(linkPara);

// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '300px';
// para.style.textAlign = 'center';
// window.onresize = function() {
//     let div = document.querySelector('div');
//     let WIDTH = window.innerWidth;
//     let HEIGHT = window.innerHeight;
//     div.style.width = WIDTH + 'px';
//     div.style.height = HEIGHT + 'px';
// }
