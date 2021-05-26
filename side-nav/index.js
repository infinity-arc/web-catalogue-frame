import Link from 'next/link'


function SideNav({ data }) {

    function NavItems() {
        let key = 0;
        return data.map(entry => {
            return (
                <Link key={key++} href={entry.page}>
                <a  title={entry.page}
                    className="list-group-item list-group-item-action py-3 lh-tight"
                    aria-current="true">
                    <i className="bi bi-caret-right-fill"></i> <strong className="mb-1">List group item heading</strong>
                </a>
                </Link>
            )
        })
    }

    return (
        <section style={{ maxHeight: '100vh', overflow: 'scroll' }} >
            <div>
                <div className="shadow" style={{ minHeight: "45px !important" }}>
                    <div className="d-flex justify-content-around align-items-center pt-3">
                        <h2>Is this season</h2>
                    </div>
                    <hr />

                </div>
                <div className="fw-semibold pb-3">
                    <img className="m-auto d-block" style={{ height: '120px' }} src="/ia-small-full033x.png"
                        alt="infinity arc logo"></img>
                </div>
                <div className="bg-secondary" style={{ height: '1em' }}></div>
            </div>
            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white p-relative" style={{ width: "380px" }}>

                <div id="list-body" className="list-group list-group-flush border-bottom scrollarea">

                    <NavItems />

                </div>
            </div>
        </section>
    )
}

export default SideNav
