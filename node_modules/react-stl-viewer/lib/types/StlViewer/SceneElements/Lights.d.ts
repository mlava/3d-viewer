import React from 'react';
export interface LightsProps {
    distance: number;
    offsetX?: number;
    offsetY?: number;
    offsetZ?: number;
}
declare const Lights: React.FC<LightsProps>;
export default Lights;
