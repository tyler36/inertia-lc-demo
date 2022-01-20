import {ref} from 'vue';

export function useClipboard(text) {
    let copied = ref(false);
    let supported = navigator && 'clipboard' in navigator;

    let copy = () => {
        if(!supported) {
            return alert('Your browser does not support clipboard.');
        }

        navigator.clipboard.writeText(text);

        copied.value = true;
    };

    return {copy, copied, supported};
}
