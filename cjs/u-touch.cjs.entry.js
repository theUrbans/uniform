'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uTouchCss = ":host{display:block}";

let UTouch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.threshold = 150; // min distance for swipe
    this.restraint = 100; // min distance for swipe
    this.allowedTime = 800;
    this.swipeDir = 'none';
    this.distance = { x: 0, y: 0 };
    this.start = { x: 0, y: 0 };
    this.startTime = 0;
  }
  reset() {
    this.swipeDir = 'none';
    this.distance = { x: 0, y: 0 };
    this.start = { x: 0, y: 0 };
    this.startTime = 0;
  }
  touchstart(e) {
    const touch = e.changedTouches[0];
    this.start = { x: touch.pageX, y: touch.pageY };
  }
  mousedown(e) {
    this.start = { x: e.pageX, y: e.pageY };
  }
  touchend(e) {
    const touch = e.changedTouches[0];
    this.distance = {
      x: touch.pageX - this.start.x,
      y: touch.pageY - this.start.y
    };
    const elapsed = new Date().getTime() - this.startTime;
    if (elapsed <= this.allowedTime) {
      if (Math.abs(this.distance.x) >= this.threshold &&
        Math.abs(this.distance.y) <= this.restraint) {
        this.swipeDir = this.distance.x < 0 ? 'left' : 'right';
      }
      else if (Math.abs(this.distance.y) >= this.threshold &&
        Math.abs(this.distance.x) <= this.restraint) {
        this.swipeDir = this.distance.y < 0 ? 'up' : 'down';
      }
    }
    this.handleSwipe(this.swipeDir);
    this.reset();
  }
  mouseup(e) {
    this.distance = {
      x: e.pageX - this.start.x,
      y: e.pageY - this.start.y
    };
    const elapsed = new Date().getTime() - this.startTime;
    console.log(Date.now() - this.startTime, elapsed <= this.allowedTime, this.distance);
    if (Math.abs(this.distance.x) >= this.threshold &&
      Math.abs(this.distance.y) <= this.restraint) {
      this.swipeDir = this.distance.x < 0 ? 'left' : 'right';
    }
    else if (Math.abs(this.distance.y) >= this.threshold &&
      Math.abs(this.distance.x) <= this.restraint) {
      this.swipeDir = this.distance.y < 0 ? 'up' : 'down';
    }
    // if (elapsed <= this.allowedTime) {
    // }
    this.handleSwipe(this.swipeDir);
    this.reset();
  }
  handleSwipe(swipeDir) {
    switch (swipeDir) {
      case 'left':
        console.log('swiped left');
        break;
      case 'right':
        console.log('swiped right');
        break;
      case 'up':
        console.log('swiped up');
        break;
      case 'down':
        console.log('swiped down');
        break;
      default:
        console.log('swiped none');
    }
  }
  // @Listen('touchmove', { target: 'body', passive: false }) touchmove(e: TouchEvent) {
  // console.log(e);
  // e.preventDefault();
  // }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UTouch.style = uTouchCss;

exports.u_touch = UTouch;
