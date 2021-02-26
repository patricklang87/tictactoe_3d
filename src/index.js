import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

const showRotation = () => {
  console.log(document.getElementsByClassName('cube')[0].style["transform"]);
}

let mouseIsDown = false;
let initMouseX = null;
let initMouseY = null;
let initRotationX = 0;
let initRotationY = 0;

export const parseRotationValues = () => {
  let newCubeX = -30;
  let newCubeY = -30;
  let cubeTransform = document.getElementsByClassName('cube')[0].style.transform;
  if (cubeTransform) {
    let cubeY = cubeTransform.split(' ')[0];
    let cubeX = cubeTransform.split(' ')[1];
    newCubeY = cubeY.slice(8, cubeY.length - 4);
    newCubeX = cubeX.slice(8, cubeX.length - 4);
  }
  return [newCubeY, newCubeX];
}

const onMouseDown = (e) => {
    let x = (e.touches) ? e.touches[0].clientX : e.clientX;
    let y = (e.touches) ? e.touches[0].clientY : e.clientY;
    initMouseX = x;
    initMouseY = y;
    let initRotation = parseRotationValues();
    initRotationY = initRotation[0];
    initRotationX = initRotation[1];
    mouseIsDown = true;
}

const onMouseMoving = (e) => {
  let x = (e.touches) ? e.touches[0].clientX : e.clientX;
  let y = (e.touches) ? e.touches[0].clientY : e.clientY;
  let cube = document.getElementsByClassName('cube')[0];
    if (mouseIsDown === true) {
      let yRotate = x - initMouseX + Number(initRotationY);
      let xRotate = initMouseY - y + Number(initRotationX);
      let rotatePhrase = `rotateY(${yRotate}deg) rotateX(${xRotate}deg)`;
      cube.style.transform = rotatePhrase;   
      console.log(rotatePhrase);
          
  }       
}

const onMouseUp = () => {
    mouseIsDown = false;
    initMouseX = null;
    initMouseY = null;
}

const changeDistance = (e) => {
  let wrapper = document.getElementById('wrapper');
  let distance = e.target.value;
  let newDistance = `${distance}px`;
  wrapper.style.perspective = newDistance;
}


let isSliderClicked = false;

const mouseDownSlider = () => {
  isSliderClicked = true;
  document.getElementsByTagName('HTML')[0].removeEventListener('mousedown', onMouseDown);
  document.getElementsByTagName('HTML')[0].removeEventListener('mousemove', onMouseMoving);
  document.getElementsByTagName('HTML')[0].removeEventListener('mouseup', onMouseUp);
  document.getElementsByTagName('HTML')[0].removeEventListener('touchstart', onMouseDown);
  document.getElementsByTagName('HTML')[0].removeEventListener('touchend', onMouseMoving);
  document.getElementsByTagName('HTML')[0].removeEventListener('touchmove', onMouseUp);
}

const mouseUpSlider = () => {
  isSliderClicked = false;
  document.getElementsByTagName('HTML')[0].addEventListener('mousedown', onMouseDown);
  document.getElementsByTagName('HTML')[0].addEventListener('mousemove', onMouseMoving);
  document.getElementsByTagName('HTML')[0].addEventListener('mouseup', onMouseUp);
  document.getElementsByTagName('HTML')[0].addEventListener('touchstart', onMouseDown);
  document.getElementsByTagName('HTML')[0].addEventListener('touchend', onMouseMoving);
  document.getElementsByTagName('HTML')[0].addEventListener('touchmove', onMouseUp);
  
}

let id = null;
const adjustSize = (e) => {
  clearInterval(id);
  id = setInterval(frame, 5);
  console.log("isSliderClicked: ", isSliderClicked);
  function frame() {
    if (isSliderClicked !== true) {
      clearInterval(id);
    } else {
      let wrapper = document.getElementById('wrapper');
      let distance = e.target.value;
      let newDistance = `${distance}px`;
      wrapper.style.perspective = newDistance;
    }
  }
} 



// document.getElementById('slider').addEventListener('change', changeDistance);
document.getElementById('slider').addEventListener('mousedown', mouseDownSlider);
document.getElementById('slider').addEventListener('mouseup', mouseUpSlider);
document.getElementById('slider').addEventListener('mousemove', adjustSize);
document.getElementById('slider').addEventListener('touchstart', mouseDownSlider);
document.getElementById('slider').addEventListener('touchend', mouseUpSlider);
document.getElementById('slider').addEventListener('touchmove', adjustSize);
document.getElementById('slider').addEventListener('click', changeDistance);
document.getElementsByTagName('HTML')[0].addEventListener('click', showRotation);
document.getElementsByTagName('HTML')[0].addEventListener('mousedown', onMouseDown);
document.getElementsByTagName('HTML')[0].addEventListener('mousemove', onMouseMoving);
document.getElementsByTagName('HTML')[0].addEventListener('mouseup', onMouseUp);
document.getElementsByTagName('HTML')[0].addEventListener('touchstart', onMouseDown);
document.getElementsByTagName('HTML')[0].addEventListener('touchmove', onMouseMoving);
document.getElementsByTagName('HTML')[0].addEventListener('touchend', onMouseUp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

