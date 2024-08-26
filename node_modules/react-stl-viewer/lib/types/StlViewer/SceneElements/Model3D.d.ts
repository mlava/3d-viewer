import React from 'react';
import { BufferGeometry, Group, Mesh } from 'three';
import { GroupProps, MeshProps, MeshStandardMaterialProps } from '@react-three/fiber';
export interface ModelDimensions {
    boundingRadius: number;
    width: number;
    length: number;
    height: number;
}
export interface Model3DProps extends Omit<GroupProps, 'scale'> {
    scale?: number;
    visible?: boolean;
    geometry: BufferGeometry;
    meshProps: MeshProps;
    materialProps: MeshStandardMaterialProps;
    onLoaded: (dims: ModelDimensions, mesh: Mesh, group: Group) => any;
}
declare const Model3D: React.FC<Model3DProps>;
export default Model3D;
