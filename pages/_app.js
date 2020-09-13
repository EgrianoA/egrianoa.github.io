import { useEffect, useState } from 'react'
import Head from 'next/head';
import { Layout } from 'antd'
import '../style/main.scss'
import Antd from '../style/antd';
import ReactSlick from '../style/react-slick'
import ReactSlickTheme from '../style/react-slick-theme'

const _app = props => {
    const assetPrefix = process.env.ASSET_PREFIX
    const { Component, pageProps } = props;

    return (
        <div>
            <Head>
                <title>EgrianoA's Personal Page</title>
                <link rel="icon" href={`${assetPrefix}/assets/logo1.png`} />
            </Head>
            <Antd/>
            <ReactSlick/>
            <ReactSlickTheme/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default _app;