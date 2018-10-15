import React from 'react';


export default class Button extends React.Component {
    render() {

        const {className,children, ...rest}  = this.props,
             cn = ("btn " + this.props.className).split(" -")
                        .join(" btn-");
        return <button className={cn} type="button" {...rest}> {children} 
        </button>;
    }
}