import { atom } from "recoil";

export const commonNotification = atom({
    key: 'commonNotification',
    default: {
        isVisible: false,
        message: ''
    }
})