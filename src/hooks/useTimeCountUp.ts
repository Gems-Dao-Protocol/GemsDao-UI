import { useEffect, useState } from 'react'

const useTimeCountUp = (startDate: number) => {
    const countUpDate = new Date(startDate).getTime()

    const [countUp, setCountUp] = useState(
        new Date().getTime() - countUpDate
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setCountUp(new Date().getTime() - countUpDate)
        }, 1000)

        return () => clearInterval(interval)
    }, [countUpDate])

    return getReturnValues(countUp)
}

const getReturnValues = (countUp: number) => {
    // calculate time left
    const days = Math.floor(countUp / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (countUp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((countUp % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((countUp % (1000 * 60)) / 1000)

    return [days < 0 ? 0 : days, hours < 0 ? 0 : hours, minutes < 0 ? 0 : minutes, seconds < 0 ? 0 : seconds]
}

export { useTimeCountUp }
