import React from 'react';
interface IProps extends React.PropsWithChildren {
    onError?: (err: Error) => void;
}
interface IState {
    message: string;
}
declare class ErrorBoundary extends React.Component<IProps, IState> {
    state: {
        message: string;
    };
    shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean;
    static getDerivedStateFromError(error: Error): IState;
    componentDidCatch(): void;
    render(): React.ReactNode;
}
export default ErrorBoundary;
