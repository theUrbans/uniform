import { createStore } from "@stencil/store";

interface Notification {
    title: string;
    message: string;
    delay: number;
    action?: Array<{ title: string, handler: () => void }>;
}

type StoreType = {
    notifications: Notification[];
    newNotification: Notification | null;
}

const Store: StoreType = {
    notifications: [],
    newNotification: null
};

const { state, onChange } = createStore(Store);

onChange('newNotification', (notification) => {
    state.notifications = [...state.notifications, notification];
    console.log(state.notifications);
    setTimeout(() => {
        state.notifications = state.notifications.slice(1, state.notifications.length);
        console.log(state.notifications);
    }, notification.delay);
});

export default state;