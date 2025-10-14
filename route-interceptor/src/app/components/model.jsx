'use client'

import { useRouter } from "next/navigation"
import { useCallback, useEffect, useRef } from "react"

export default function Modal({ children }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()

    const onDismiss = useCallback(() => {
        router.back()
    }, [router])

    //close the modal dialog
    const onClick = useCallback((e) => {
        if (e.target === overlay.current || wrapper.current) {
            //if you have clicked on photo
            if (onDismiss) onDismiss()
        }
    })
    //close the dialog : when you press escape key
    const onKeyDown = useCallback(e => {
        if (e.key === 'Escape') {
            onDismiss()
        }
    }, [onDismiss])

    //componentDidUpdate
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        //componentWillUnMount
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onkeydown])

    return <div ref={overlay} onClick={onClick}>
        {/* Within Modal we render Framework */}
        {/* This div will display Frame(Photo) */}
        <div ref={wrapper} style={{ backgroundColor: 'yellow' }} className="absolute top-2/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6">
            {children}
        </div>
    </div>
}
