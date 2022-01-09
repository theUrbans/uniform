export default ({ app }, inject) => {
    inject('modal', () => new Modal());
}

class Modal {
    body = document.querySelector('body');
    show(name, params) {
        body.dispatchEvent(new CustomEvent('show-modal', { detail: { name, params } }));
    }
    close(name) {
        body.dispatchEvent(new CustomEvent('close-modal', { detail: { name } }));
    }
}              