import * as React from 'react'
import { Redirect, RedirectProps } from 'react-router'

class DelayedRedirect extends React.Component{
    state = {
        timeToRedirect: false,
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({
                timeToRedirect: true,
            })
        }, this.props.delay)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        const { delay, ...props } = this.props
        const { timeToRedirect } = this.state

        if (timeToRedirect) {
            return <Redirect {...props} />
        }

        return null
    }
}
export default DelayedRedirect;
