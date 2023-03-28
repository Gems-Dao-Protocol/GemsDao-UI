import { CHAIN_ITEMS } from '@app/common/layout/SupportChainsConstants'
import React, { useContext, useState } from 'react'

declare type Maybe<T> = T | null | undefined

export interface IGemsDaoContext {
    currentChainId: number
}

const GemsDaoContext = React.createContext<Maybe<IGemsDaoContext>>(null)

export const GemsDaoProvider = ({ children = null as any }) => {
    const [currentChainId, setCurrentChainId] = useState(CHAIN_ITEMS[0])

    return (
        <GemsDaoContext.Provider
            value={{
                currentChainId
            }}
        >
            {children}
        </GemsDaoContext.Provider >
    )
}

export const useGemsDao = () => {
    const context = useContext(GemsDaoContext)

    if (!context) {
        throw new Error('Component rendered outside the provider tree')
    }

    return context
}

