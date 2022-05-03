export interface NotficationOption {
  title: string;
  message?: string;
  delay?: number;
  buttons?: Array<{
    title: string;
    handler: () => void;
  }>;
}
interface Notification {
  title: string;
  message: string;
  delay: number;
  action?: Array<{
    title: string;
    handler: () => void;
  }>;
}
export declare type NotificationType = 'error' | 'success' | 'warning' | 'default';
/**
 * @name Notification
 * @state 🟡
 * @description Toast like notifications
 */
export declare class UNotification {
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  type: NotificationType;
  notifications: Array<Notification>;
  intervalls: Array<any>;
  newNotification: Notification | null;
  notificationsChanged(notification: Notification): void;
  showToast(event: CustomEvent): void;
  clearToast(): void;
  show(type: NotificationType, options: NotficationOption): Promise<void>;
  success(title: string, message?: string, delay?: number): Promise<void>;
  error(title: string, message?: string, delay?: number): Promise<void>;
  warning(title: string, message?: string, delay?: number): Promise<void>;
  private handleClose;
  render(): any;
}
export {};
