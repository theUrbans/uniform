import {
  Component,
  Host,
  h,
  Method,
  State,
  Prop,
  Watch,
  Listen
} from '@stencil/core';

export interface NotficationOption {
  title: string;
  message?: string;
  delay?: number;
  buttons?: Array<{ title: string; handler: () => void }>;
}

interface Notification {
  title: string;
  message: string;
  delay: number;
  action?: Array<{ title: string; handler: () => void }>;
}

export type NotificationType = 'error' | 'success' | 'warning' | 'default';

/**
 * @name Notification
 * @state 🟡
 * @description Toast like notifications
 */
@Component({
  tag: 'u-notification',
  styleUrl: 'u-notification.css',
  shadow: true
})
export class UNotification {
  @Prop() position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center' = 'top-right';

  @State() type: NotificationType = 'default';

  @State() notifications: Array<Notification> = [];

  @State() intervalls: Array<any> = [];

  @State() newNotification: Notification | null = null;

  @Watch('newNotification') notificationsChanged(notification: Notification) {
    // notification.progress = 100;
    // this.intervalls.push(
    //   setInterval(() => {
    //     notification = { ...notification, progress: (notification.progress -= 100 / (notification.delay / 100)) };
    //     console.log(notification.progress);
    //   }, 100),
    // );
    if (this.position.includes('top')) {
      this.notifications = [...this.notifications, notification];
      setTimeout(() => {
        this.notifications = this.notifications.slice(
          1,
          this.notifications.length
        );
        clearInterval(this.intervalls[0]);
        this.intervalls = this.intervalls.slice(1, this.intervalls.length);
        console.log(this.intervalls);
      }, notification.delay);
    }
    if (this.position.includes('bottom')) {
      this.notifications = [notification, ...this.notifications];
      setTimeout(() => {
        this.notifications = this.notifications.slice(
          0,
          this.notifications.length - 1
        );
        clearInterval(this.intervalls[0]);
      }, notification.delay);
    }
    console.log(this.intervalls);
  }

  @Listen('show-toast', { target: 'body' })
  showToast(event: CustomEvent) {
    this.show(event.detail.type, { ...event.detail });
  }

  @Listen('clear-toast', { target: 'body' })
  clearToast() {
    this.notifications = [];
  }

  @Method()
  async show(type: NotificationType, options: NotficationOption) {
    this.type = type || 'default';
    this.newNotification = {
      title: options.title,
      message: options.message,
      delay: options.delay || 3000,
      action: options.buttons || []
    };
  }

  @Method()
  async success(title: string, message?: string, delay?: number) {
    await this.show('success', { title, message, delay });
  }

  @Method()
  async error(title: string, message?: string, delay?: number) {
    await this.show('error', { title, message, delay });
  }

  @Method()
  async warning(title: string, message?: string, delay?: number) {
    await this.show('warning', { title, message, delay });
  }

  private handleClose(notification: Notification) {
    this.notifications = this.notifications.filter((n) => n !== notification);
  }

  render() {
    return (
      <Host>
        <div
          class={{
            [this.position]: true,
            list: true
          }}
        >
          {this.notifications.map((notification) => (
            <div
              class={{
                notification: true,
                [this.type]: true
              }}
            >
              <div class="close" onClick={() => this.handleClose(notification)}>
                &times;
              </div>
              <h1>{notification.title}</h1>
              {notification.message && <p>{notification.message}</p>}
              {/* <div
                  class="duration"
                  style={
                    {
                      // width: () => {
                      //   let width = 100;
                      //   setInterval(() => {
                      //     width -= 100 / (notification.delay / 100);
                      //   }, 100);
                      //   return width + '%';
                      // },
                    }
                  }
                  // aria-valuenow={notification.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div> */}
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
