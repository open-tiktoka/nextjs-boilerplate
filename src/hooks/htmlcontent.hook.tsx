//
// HTML Content Hook
// ...
//

import React, { useRef } from 'react'

function HtmlContent({ html }: { html: string }): JSX.Element {
    const ref = useRef<HTMLDivElement>(null)
    return (
        <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
            ref={ref}
        />
    )
}

export default HtmlContent

//
// END
//
