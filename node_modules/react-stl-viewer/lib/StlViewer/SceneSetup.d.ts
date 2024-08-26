import React, { CSSProperties } from 'react';
import { BufferGeometry, Mesh } from 'three';
import { ModelDimensions } from './SceneElements/Model3D';
import { CameraPosition } from './SceneElements/Camera';
export interface FloorProps {
    gridWidth?: number;
    gridLength?: number;
}
export interface CameraRef {
    setCameraPosition: (position: CameraPosition) => any;
}
export interface CameraProps {
    ref?: {
        current?: null | CameraRef;
    };
    initialPosition?: CameraPosition;
}
export interface ModelRef {
    model: Mesh;
    save: () => Blob;
}
export interface ModelProps {
    ref?: {
        current?: null | ModelRef;
    };
    scale?: number;
    positionX?: number;
    positionY?: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
    color?: CSSProperties['color'];
    geometryProcessor?: (geometry: BufferGeometry) => BufferGeometry;
}
export interface SceneSetupProps {
    url: string;
    /** @deprecated use cameraProps.initialPosition instead */
    cameraInitialPosition?: Partial<CameraPosition>;
    extraHeaders?: Record<string, string>;
    shadows?: boolean;
    showAxes?: boolean;
    orbitControls?: boolean;
    onFinishLoading?: (ev: ModelDimensions) => any;
    cameraProps?: CameraProps;
    modelProps?: ModelProps;
    floorProps?: FloorProps;
}
declare const SceneSetup: React.FC<SceneSetupProps>;
export default SceneSetup;
