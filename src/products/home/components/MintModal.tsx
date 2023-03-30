import React, { useMemo, useState, useEffect, useRef } from 'react'
import Modal from 'src/common/components/Modal'

interface ModalProps {
    isOpen: boolean
    handleClose: () => void
}

export default function MintModal({ isOpen, handleClose }: ModalProps) {    

    const onClose = () => {
        handleClose()
    }

    return (
        <div className='w-full'>
            <Modal
                isOpen={isOpen}
                handleClose={onClose}                
            >
                <div className='w-full p-4 border border-[#222]'>
                    
                </div>
            </Modal >
        </div >
    )
}
