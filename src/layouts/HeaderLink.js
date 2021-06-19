import React from 'react'

function HeaderLink(props){
    return(
        <div className="px-4 py-2 font-semibold text-lg">
            {props.data.title}
        </div>
    )
}export default HeaderLink
