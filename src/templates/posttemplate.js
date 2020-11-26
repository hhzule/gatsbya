import React from 'react'
import Layout from '../components/Layout';
import Display from '../components/Display';
import { Link } from 'gatsby';

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
                /><div style={{ width: "100%" }}>
                    <Link to={`/`}><h2 style={{ textAlign: "center", alignSelf: "center" }}>Back to home</h2></Link>
                </div>

            </Layout>

        </div >
    )
}

export default posttemplate
