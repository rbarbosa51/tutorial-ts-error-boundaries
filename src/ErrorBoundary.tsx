import { Component } from "react";
interface Props {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}
interface State {
  hasError: boolean;
}
export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
