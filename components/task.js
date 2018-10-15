import React from 'react';
import Button from './button';

export default class Task extends React.Component {
    render() {
        return <Button className="-large -primary -block" 
        type="button"> { this.props.children } 
        </Button>;
    }
}