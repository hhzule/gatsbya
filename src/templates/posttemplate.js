import React from 'react'

const posttemplate = ({ pageContext: { data } }) => {
    console.log(data.data);

    return (
        <div>
            template of post
        </div>
    )
}

export default posttemplate
