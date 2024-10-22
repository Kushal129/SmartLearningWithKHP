import React from 'react';
import loaderImage from '../../public/Loader.png';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="loader-macbook">
          <div className="loader-macbook__topBord">
            <div className="loader-macbook__display">
              <div className="loader-macbook__load"></div>
            </div>
          </div>
          <div className="loader-macbook__underBord">
            <div className="loader-macbook__keybord">
              <div className="loader-keybord">
                <div className="loader-keybord__touchbar"></div>
                <ul className="loader-keybord__keyBox">
                  <li className="loader-keybord__key loader-key--01"></li>
                  <li className="loader-keybord__key loader-key--02"></li>
                  <li className="loader-keybord__key loader-key--03"></li>
                  <li className="loader-keybord__key loader-key--04"></li>
                  <li className="loader-keybord__key loader-key--05"></li>
                  <li className="loader-keybord__key loader-key--06"></li>
                  <li className="loader-keybord__key loader-key--07"></li>
                  <li className="loader-keybord__key loader-key--08"></li>
                  <li className="loader-keybord__key loader-key--09"></li>
                  <li className="loader-keybord__key loader-key--10"></li>
                  <li className="loader-keybord__key loader-key--11"></li>
                  <li className="loader-keybord__key loader-key--12"></li>
                  <li className="loader-keybord__key loader-key--13"></li>
                </ul>
                <ul className="loader-keybord__keyBox--under">
                  <li className="loader-keybord__key loader-key--14"></li>
                  <li className="loader-keybord__key loader-key--15"></li>
                  <li className="loader-keybord__key loader-key--16"></li>
                  <li className="loader-keybord__key loader-key--17"></li>
                  <li className="loader-keybord__key loader-key--18"></li>
                  <li className="loader-keybord__key loader-key--19"></li>
                  <li className="loader-keybord__key loader-key--20"></li>
                  <li className="loader-keybord__key loader-key--21"></li>
                  <li className="loader-keybord__key loader-key--22"></li>
                  <li className="loader-keybord__key loader-key--23"></li>
                  <li className="loader-keybord__key loader-key--24"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

// CSS styles
const styles = `
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.loader-wrapper {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader-macbook {
  position: relative;
  width: 228px;
  height: 260px;
  transform: scale(0.8);
}
@media (min-width: 768px) {
  .loader-macbook {
    transform: scale(1);
  }
}
.loader-macbook__topBord {
  position: absolute;
  z-index: 0;
  top: 34px;
  left: 0;
  width: 128px;
  height: 116px;
  border-radius: 6px;
  transform-origin: center;
  background: linear-gradient(-135deg, #190727 52%, #0d0314 56%);
  transform: scale(0) skewY(-30deg);
  animation: loader-topbord 0.4s 1.7s ease-out;
  animation-fill-mode: forwards;
}
.loader-macbook__topBord::before {
  content: "";
  position: absolute;
  z-index: 2;
  top: 8px;
  left: 6px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: #000;
}
.loader-macbook__topBord::after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: -7px;
  left: 8px;
  width: 168px;
  height: 12px;
  transform-origin: left bottom;
  transform: rotate(-42deg) skew(-4deg);
  background: linear-gradient(-135deg, #190727 52%, #0d0314 56%);
}
.loader-macbook__display {
  position: absolute;
  z-index: 10;
  top: 17px;
  left: 12px;
  z-index: 2;
  width: calc(100% - 8px);
  height: calc(100% - 12px);
  background-image: url(${loaderImage});
  background-size:100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.loader-macbook__display::before {
  content: "";
  position: absolute;
  z-index: 5;
  top: -9px;
  left: -6px;
  width: calc(100% + 12px);
  height: calc(100% + 18px);
  border-radius: 6px;
  background: linear-gradient(
    60deg,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.3) 60%
  );
}
.loader-macbook__load {
  position: relative;
  width: 100%;
  height: 100%;
  background: #190727;
  animation: loader-display 0.4s 4.3s ease;
  opacity: 1;
  animation-fill-mode: forwards;
}
.loader-macbook__load:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 80px;
  height: 6px;
  border-radius: 3px;
  box-sizing: border-box;
  border: solid 1px #fff;
}
.loader-macbook__load:after {
  content: "";
  position: absolute;
  top: 0;
  left: 18px;
  bottom: 0;
  margin: auto;
  width: 0;
  height: 6px;
  border-radius: 3px;
  background: #fff;
  animation: loader-load 2s 2s ease-out;
  animation-fill-mode: forwards;
}
.loader-macbook__underBord {
  position: relative;
  left: 42px;
  bottom: -145px;
  width: 150px;
  height: 90px;
  border-radius: 6px;
  transform-origin: center;
  transform: rotate(-30deg) skew(30deg);
  background: linear-gradient(-45deg, #190727 61%, #0d0314 66%);
  animation: loader-modal 0.5s 1s ease-out;
  opacity: 0;
  animation-fill-mode: forwards;
}
.loader-macbook__underBord::before {
  content: "";
  position: absolute;
  z-index: 3;
  top: -8px;
  left: 8px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: #190727;
}
.loader-macbook__underBord::after {
  content: "";
  position: absolute;
  z-index: 2;
  top: -8px;
  left: 12px;
  width: 170px;
  height: 15px;
  transform-origin: top left;
  background: linear-gradient(-45deg, #190727 61%, #0d0314 66%);
  transform: rotate(31deg) skew(-16deg);
}
.loader-macbook__keybord {
  position: relative;
  top: 0;
  left: 16px;
  z-index: 3;
  border-radius: 3px;
  width: calc(100% - 16px);
  height: 45px;
  background: #190727;
}
.loader-macbook__keybord::before {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40px;
  height: 25px;
  border-radius: 3px;
  background: #190727;
}
.loader-keybord {
  position: relative;
  top: 2px;
  left: 2px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 3px);
  height: calc(100% - 4px);
}
.loader-keybord__touchbar {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #0d0314;
}
.loader-keybord__keyBox {
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 24px;
  margin: 1px 0 0 0;
  padding: 0 0 0 1px;
  box-sizing: border-box;
  list-style: none;
}
.loader-keybord__key {
  position: relative;
  width: 8px;
  height: 7px;
  margin: 1px;
  background: #ffffff;
}
.loader-keybord__keyBox .loader-keybord__key {
  transform: translate(60px, -60px);
  animation: loader-key 0.2s 1.4s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;
}
.loader-keybord__keyBox .loader-keybord__key::before,
.loader-keybord__keyBox .loader-keybord__key::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
}
.loader-keybord__key::before {
  top: 8px;
  transform: translate(20px, -20px);
  animation: loader-key1 0.2s 1.5s ease-out;
  animation-fill-mode: forwards;
}
.loader-keybord__key::after {
  top: 16px;
  transform: translate(40px, -40px);
  animation: loader-key2 0.2s 1.6s ease-out;
  animation-fill-mode: forwards;
}
.loader-keybord__keyBox .loader-key--12::before {
  width: 10px;
}
.loader-keybord__keyBox .loader-key--13::before {
  height: 10px;
}
.loader-key--01 {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
.loader-key--02 {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
.loader-key--03 {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
}
.loader-key--04 {
  grid-row: 1 / 2;
  grid-column: 4 / 5;
}
.loader-key--05 {
  grid-row: 1 / 2;
  grid-column: 5 / 6;
}
.loader-key--06 {
  grid-row: 1 / 2;
  grid-column: 6 / 7;
}
.loader-key--07 {
  grid-row: 1 / 2;
  grid-column: 7 / 8;
}
.loader-key--08 {
  grid-row: 1 / 2;
  grid-column: 8 / 9;
}
.loader-key--09 {
  grid-row: 1 / 2;
  grid-column: 9 / 10;
}
.loader-key--10 {
  grid-row: 1 / 2;
  grid-column: 10 / 11;
}
.loader-key--11 {
  grid-row: 1 / 2;
  grid-column: 11 / 12;
}
.loader-key--12 {
  grid-row: 1 / 2;
  grid-column: 12 / 13;
}
.loader-key--13 {
  grid-row: 1 / 2;
  grid-column: 13 / 14;
}
.loader-keybord__keyBox--under {
  margin: 0;
  padding: 0 0 0 1px;
  box-sizing: border-box;
  list-style: none;
  display: flex;
}
.loader-keybord__keyBox--under .loader-keybord__key {
  transform: translate(80px, -80px);
  animation: loader-key3 0.3s 1.6s linear;
  animation-fill-mode: forwards;
  opacity: 0;
}
.loader-key--19 {
  width: 28px;
}
@keyframes loader-topbord {
  0% {
    transform: scale(0) skewY(-30deg);
  }
  30% {
    transform: scale(1.1) skewY(-30deg);
  }
  45% {
    transform: scale(0.9) skewY(-30deg);
  }
  60% {
    transform: scale(1.05) skewY(-30deg);
  }
  75% {
    transform: scale(0.95) skewY(-30deg);
  }
  90% {
    transform: scale(1.02) skewY(-30deg);
  }
  100% {
    transform: scale(1) skewY(-30deg);
  }
}
@keyframes loader-display {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes loader-load {
  0% {
    width: 0;
  }
  20% {
    width: 40px;
  }
  30% {
    width: 40px;
  }
  60% {
    width: 60px;
  }
  90% {
    width: 60px;
  }
  100% {
    width: 80px;
  }
}

@keyframes loader-modal {
  0% {
    transform: scale(0) rotate(-30deg) skew(30deg);
    opacity: 0;
  }
  30% {
    transform: scale(1.1) rotate(-30deg) skew(30deg);
    opacity: 1;
  }
  45% {
    transform: scale(0.9) rotate(-30deg) skew(30deg);
    opacity: 1;
  }
  60% {
    transform: scale(1.05) rotate(-30deg) skew(30deg);
    opacity: 1;
  }
  75% {
    transform: scale(0.95) rotate(-30deg) skew(30deg);
    opacity: 1;
  }
  90% {
    transform: scale(1.02) rotate(-30deg) skew(30deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(-30deg) skew(30deg);
    opacity: 1;
  }
}

@keyframes loader-key {
  0% {
    transform: translate(60px, -60px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
@keyframes loader-key1 {
  0% {
    transform: translate(20px, -20px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
@keyframes loader-key2 {
  0% {
    transform: translate(40px, -40px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
@keyframes loader-key3 {
  0% {
    transform: translate(80px, -80px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
`;

// Inject the styles into the document
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);
