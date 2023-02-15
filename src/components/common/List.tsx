import React, { cloneElement, Children, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BreadCrumbData } from '../navigation/NavigationBar';
import './List.css';

function List(props: {
    children: ReactNode,
    onSelectPath?: Function,
    title: string,
}) {
    const { children, title } = props

    function onSelectPath(data: BreadCrumbData) {
        return props.onSelectPath ? props.onSelectPath({
            value: data.value,
            path: [title, ...data.path]
        }) : ''
    }

    function handleSelectItem(value: string) {
        onSelectPath({
            value,
            path: []
        })
    }

    function onClickListElement() {
        onSelectPath({
            value: '',
            path: []
        })
    }
    return (
        <div className="App" >
            <p onClick={onClickListElement}>{title}</p>
            <ul>
                {Children ? Children.map(children, (child) =>
                    cloneElement(child as React.ReactElement, {
                        handleSelectItem: handleSelectItem,
                        onSelectPath: onSelectPath,
                        key: uuidv4()
                    })
                ) : ''}
            </ul>
        </div>
    );
}

export default List
