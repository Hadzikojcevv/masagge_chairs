import { createContext } from "react";

export type ModalOpenerValueType = {
    isOpened: boolean,
    openModal: () => void,
    closeModal: () => void

}

export const ModalOpener = createContext({} as ModalOpenerValueType)