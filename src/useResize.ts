import { useEffect } from 'react'

export default function useResize(callback, throttle = 50) {
    console.log('useResize')
    useEffect(() => {
        let timeout
        const handleResize = () => {
            clearTimeout(timeout)
            timeout = setTimeout(callback, throttle)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
}