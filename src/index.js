import { render3dViewer } from "./3dViewerComponent";
import createButtonObserver from "roamjs-components/dom/createButtonObserver";
import createBlock from "roamjs-components/writes/createBlock";

var runners = {
    observers: [],
}

export default {
    onload: ({ extensionAPI }) => {
        const onloadArgs = { extensionAPI };
        const viewerObserver = createButtonObserver({
            attribute: '3dviewer',
            render: (b) => {
                render3dViewer(b, onloadArgs)
            }
        });
        runners['observers'] = [viewerObserver];

        extensionAPI.ui.commandPalette.addCommand({
            label: "Embed a 3d object",
            callback: () => {
                const uid = window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"];
                if (uid == undefined) {
                    alert("Please focus a block before embedding");
                    return;
                } else {
                    window.roamAlphaAPI.updateBlock(
                        { block: { uid: uid, string: "Loading...".toString(), open: true } });
                    embed3D(uid, true);
                }
            }
        });

        async function embed3D(blockUid) {
            const clipText = await navigator.clipboard.readText();
            // setTimeout is needed because sometimes block is left blank
            setTimeout(async () => {
                await window.roamAlphaAPI.updateBlock({ "block": { "uid": blockUid, "string": "{{3dviewer}}" } });
                await createBlock({
                    node: {
                        text: clipText,
                    },
                    parentUid: blockUid,
                });
                let blockData = window.roamAlphaAPI.data.pull("[:node/title :block/uid {:block/children ...}]", `[:block/uid \"${blockUid}\"]`);
                await window.roamAlphaAPI.updateBlock({ "block": { "uid": blockData[":block/children"][0][":block/children"][0][":block/uid"], "open": false } });
            }, 200);

            document.querySelector("body")?.click();
        };
    },
    onunload: () => {
        for (let index = 0; index < runners['observers'].length; index++) {
            const element = runners['observers'][index];
            element.disconnect()
        };
    }
}
