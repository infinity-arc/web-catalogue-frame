import React, { useEffect } from "react";
import Iframe from "react-iframe";


export default function OmegaHugo() {
    const iframeNode = React.createRef();
    console.log(iframeNode);
    const IFrameNode = iframeNode.
    useEffect(()=>{

    })
    return (
        // <Iframe url="https://themes.gohugo.io/theme/omega-hugo-theme/"
        //     is="x-frame-bypass"
        //     width="450px"
        //     height="450px"
        //     id="myId"
        //     className="myClassname"
        //     display="initial"
        //     position="relative" />
        <iframe ref={iframeNode} is="x-frame-bypass" src="https://themes.gohugo.io/theme/omega-hugo-theme/"></iframe>
    )
}