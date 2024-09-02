'use client'
import React, { useState } from 'react'
import { ModalOpener, ModalOpenerValueType } from './ModalOpenerContext'

type ModalOpenerPropsType = {
    children: JSX.Element
}

const ModalOpenerProvider = ({children}: ModalOpenerPropsType) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const contextValue: ModalOpenerValueType = {
        isOpened: isModalOpen,
        openModal,
        closeModal
    }

  return (
    <ModalOpener.Provider value={contextValue}>
        {children}
    </ModalOpener.Provider>
  )
}

export default ModalOpenerProvider