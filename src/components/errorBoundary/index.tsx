import React from "react";

interface IErrorBoundary {
  children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<IErrorBoundary> {
  state = { error: false };

  static getDerivedStateFromError(error: any) {
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h1>出错了</h1>;
    }
    return this.props.children;
  }
}
