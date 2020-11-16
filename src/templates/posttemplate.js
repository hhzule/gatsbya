import React from 'react'
import Layout from '../components/Layout';
import Display from '../components/Display';

const posttemplate = ({ pageContext: { data } }) => {
    console.log(data.node.title)

    return (
        <div>
            <Layout>
                <Display
                    title={data.node.title}
                    content={data.node.content.raw}
                    timestamp={data.node.timestamp}
                    pic={data.node.image.file.url}
                />
            </Layout>

        </div>
    )
}

export default posttemplate
