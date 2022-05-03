/**
 * @name Touch gesture
 * @description This component allows you to detect gestures
 */
export declare class UTouch {
  private threshold;
  private restraint;
  private allowedTime;
  swipeDir: 'none' | 'left' | 'right' | 'up' | 'down';
  distance: {
    x: number;
    y: number;
  };
  start: {
    x: number;
    y: number;
  };
  startTime: number;
  private reset;
  touchstart(e: TouchEvent): void;
  mousedown(e: MouseEvent): void;
  touchend(e: TouchEvent): void;
  mouseup(e: MouseEvent): void;
  private handleSwipe;
  render(): any;
}
