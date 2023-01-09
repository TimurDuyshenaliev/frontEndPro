import { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log({
            error, errorInfo
        })
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        if (hasError) {
            return <h1>Что-то пошло не так</h1>
        } else {
            return children
        }
    }
}
