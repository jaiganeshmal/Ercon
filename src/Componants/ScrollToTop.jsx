import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    let [visible, setVisible] = useState(false)

    useEffect(() => {
        let toggle_btn = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', toggle_btn)
        return () => window.removeEventListener('scroll', toggle_btn)
    }, [])

    let scrolTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <button onClick={scrolTop} className={`fixed right-6 bottom-6 z-50 bg-white p-3 shadow-xl  rounded-full transition-all duration-500 ${visible ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`}>
                <FaArrowUp size={35} />
            </button>
        </>
    )
}

export default ScrollToTop