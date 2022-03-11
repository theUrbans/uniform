import { Component, Host, h, Listen, State } from '@stencil/core';

/**
 * @name Touch gesture
 * @description This component allows you to detect gestures
 */
@Component({
  tag: 'u-touch',
  styleUrl: 'u-touch.css',
  shadow: true,
})
export class UTouch {
  private threshold: number = 150; // min distance for swipe
  private restraint: number = 100; // min distance for swipe
  private allowedTime: number = 800;
  @State() swipeDir: 'none' | 'left' | 'right' | 'up' | 'down' = 'none';
  @State() distance: { x: number; y: number } = { x: 0, y: 0 };
  @State() start: { x: number; y: number } = { x: 0, y: 0 };
  @State() startTime: number = 0;
  private reset() {
    this.swipeDir = 'none';
    this.distance = { x: 0, y: 0 };
    this.start = { x: 0, y: 0 };
    this.startTime = 0;
  }

  @Listen('touchstart', { target: 'body' }) touchstart(e: TouchEvent) {
    const touch = e.changedTouches[0];
    this.start = { x: touch.pageX, y: touch.pageY };
  }
  @Listen('mousedown', { target: 'body' }) mousedown(e: MouseEvent) {
    this.start = { x: e.pageX, y: e.pageY };
  }
  @Listen('touchend', { target: 'body' }) touchend(e: TouchEvent) {
    const touch = e.changedTouches[0];
    this.distance = { x: touch.pageX - this.start.x, y: touch.pageY - this.start.y };
    const elapsed = new Date().getTime() - this.startTime;
    if (elapsed <= this.allowedTime) {
      if (Math.abs(this.distance.x) >= this.threshold && Math.abs(this.distance.y) <= this.restraint) {
        this.swipeDir = this.distance.x < 0 ? 'left' : 'right';
      } else if (Math.abs(this.distance.y) >= this.threshold && Math.abs(this.distance.x) <= this.restraint) {
        this.swipeDir = this.distance.y < 0 ? 'up' : 'down';
      }
    }
    this.handleSwipe(this.swipeDir);
    this.reset();
  }
  @Listen('mouseup', { target: 'body' }) mouseup(e: MouseEvent) {
    this.distance = { x: e.pageX - this.start.x, y: e.pageY - this.start.y };
    const elapsed = new Date().getTime() - this.startTime;
    console.log(Date.now() - this.startTime, elapsed <= this.allowedTime, this.distance);
    if (Math.abs(this.distance.x) >= this.threshold && Math.abs(this.distance.y) <= this.restraint) {
      this.swipeDir = this.distance.x < 0 ? 'left' : 'right';
    } else if (Math.abs(this.distance.y) >= this.threshold && Math.abs(this.distance.x) <= this.restraint) {
      this.swipeDir = this.distance.y < 0 ? 'up' : 'down';
    }
    if (elapsed <= this.allowedTime) {
    }
    this.handleSwipe(this.swipeDir);
    this.reset();
  }
  private handleSwipe(swipeDir: 'none' | 'left' | 'right' | 'up' | 'down') {
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
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
