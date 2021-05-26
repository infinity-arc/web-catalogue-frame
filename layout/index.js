
import React, {createRef, Fragment, useEffect} from 'react'
import SideNav from '../side-nav'
import data from './layout-data'

function Layout( props) {

    const { children } = props;

    const button = createRef()

    useEffect(()=>{
        setTooltip()
    })

    function setTooltip(){
        return new bootstrap.Tooltip(button.current);
    }
    
    return (
        <Fragment>
            <style jsx>{`
                body,
                html {
                    height: 100vh;
                    width: 100vw;
                }

                .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                }

                @media (min-width: 768px) {
                    .bd-placeholder-img-lg {
                        font-size: 3.5rem;
                    }
                }
                
                .fs-btn{
                  bottom: 20px;
                  right: 20px;
                }
            `}</style>

            <main className="d-flex" style={{flex: '1'}}>
                <section className="shadow" style={{backgroundColor: '#fafafa'}}>
                    <SideNav data={data} />
                </section>

                <section style={{flex: '1'}}>
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                            <h5 className="text-white h4">Collapsed content</h5>
                            <span className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark shadow">
                        <div className="container-fluid mt-3 d-flex justify-content-around align-items-center">
                            <h2 className="text-light">Winter Collection</h2>
                        </div>
                    </nav>
                    <div>
                        {children}
                    </div>
                </section>
            </main>
            <button id="tooltip" ref={button}
                data-bs-toggle="tooltip" data-bs-placement="left" title="Full Screen View" role="tooltip"
                className="btn position-absolute fs-btn border-dark"><i className="bi bi-arrows-fullscreen"></i></button>
        </Fragment>
    )
}

export default Layout;
