//
// Popover Hook
// ...
//

import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

type TUsePopoverReturn = {
    ref: MutableRefObject<HTMLInputElement>
    openHandle: () => void
    isOpen: boolean
}

function usePopover(open: boolean): TUsePopoverReturn {
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>
    const [isOpen, setIsOpen] = useState<boolean>(open)

    function openHandle() {
        return isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    function bodyHandle() {
        const clickOutSide = (event: any) => {
            const { current } = ref
            const isCheck = isOpen && current && !current.contains(event.target)
            if (isCheck) setIsOpen(false)
        }
        document.addEventListener('mousedown', clickOutSide)
        return () => document.removeEventListener('mousedown', clickOutSide)
    }

    useEffect(bodyHandle, [isOpen])

    return {
        ref,
        openHandle,
        isOpen,
    }
}

export default usePopover

//
// END
//
