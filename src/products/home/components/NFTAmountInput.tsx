import React, { useMemo, useState, useEffect } from 'react'
import AmountInputBox from '@app/common/components/AmountInputBox'

interface InputProps {
    id: string
    onChange: (v: string) => void
    onMax: () => void
}
export default function NFTAmountInput({ id, onChange, onMax }: InputProps) {

    return (
        <div className="w-full flex flex-col rounded-md gap-[2px] flex-1 p-4 border border-[#112030]">
            <div className='text-[#00CEFF] text-[16px]'>
                Mint Amount
            </div>
            <div className='w-full flex items-center gap-2'>
                <AmountInputBox id={id} placeholder="0" onChange={onChange} decimals={0} />
                <div className='text-white text-[16px] cursor-pointer' onClick={onMax}>
                    MAX
                </div>
            </div>
        </div>
    )
}
