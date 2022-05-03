import { Component, Host, h, Listen, State } from '@stencil/core';
/**
 * @name Touch gesture
 * @description This component allows you to detect gestures
 */
export class UTouch {
  constructor() {
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
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-touch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-touch.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-touch.css"]
  }; }
  static get states() { return {
    "swipeDir": {},
    "distance": {},
    "start": {},
    "startTime": {}
  }; }
  static get listeners() { return [{
      "name": "touchstart",
      "method": "touchstart",
      "target": "body",
      "capture": false,
      "passive": true
    }, {
      "name": "mousedown",
      "method": "mousedown",
      "target": "body",
      "capture": false,
      "passive": true
    }, {
      "name": "touchend",
      "method": "touchend",
      "target": "body",
      "capture": false,
      "passive": true
    }, {
      "name": "mouseup",
      "method": "mouseup",
      "target": "body",
      "capture": false,
      "passive": true
    }]; }
}
