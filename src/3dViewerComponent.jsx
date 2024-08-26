import { createComponentRender } from "roamjs-components/components/ComponentContainer";
import React from 'react';
import View3D from "@egjs/react-view3d";
import ReactDOM from 'react-dom';
import { StlViewer } from "react-stl-viewer";

const ViewerElement = ({ blockUid }) => {
    let blockData = window.roamAlphaAPI.data.pull("[:block/string :block/uid {:block/children ...}]", `[:block/uid \"${blockUid}\"]`);
    console.info(blockData);
    let image = blockData[":block/children"][0][":block/string"];
    console.info(image);

    return (<View3D
        src={image}
        onReady={e => {
            // DO_SOMETHING
        }}
    ></View3D>);
    /*
    return (
        <StlViewer
            style={style}
            orbitControls
            shadows
            url={url}
        />
    );*/
};

export const render3dViewer = createComponentRender(
    ({ blockUid }) => <ViewerElement blockUid={blockUid} />,
    "3dviewer-element-parent"
);