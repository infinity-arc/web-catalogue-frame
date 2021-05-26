import Head from 'next/head'
import Layout from '../layout'
// import styles from '../styles/Home.module.css'
import React from 'react';
// import Iframe from "react-iframe";


export default function Home() {
  return (
    <Layout>

        <div className="container m-auto">
            <div className="m-2">
            <h3>The</h3>
            <h1 className="display-1">Winter Collection</h1>
            </div>
            <div className="text-center">
            <img style={{height: '500px'}} src="ia-3d-tall-transparent-bg.png" alt=""/>
                <div><small>by </small><h5>INFINITY ARC</h5></div>
            </div>
        </div>
    </Layout>
  )
}
