import { Fragment } from 'react'
import { AppHead } from '../layout/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AppHead/>
      <Component {...pageProps} />
    </Fragment>
  )
    
}

export default MyApp
