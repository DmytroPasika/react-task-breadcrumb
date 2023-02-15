import { useState } from 'react';
import List from '../common/List';
import ListItem from '../common/ListItem';

export interface BreadCrumbData {
    value: string
    path: string[]
}

function NavigationBar() {
    const [breadCrumbPath, setbreadCrumbPath] = useState('')
    function handleItemselection(data: BreadCrumbData) {
        const path = `${data.path.join(' -> ')} ${data.value ? `-> ${data.value}` : ''}`
        setbreadCrumbPath(path)
    }
    return (
        <div>
            <List title='list #1.0' onSelectPath={handleItemselection}>
                <ListItem title='item #1.1' />
                <ListItem title='item #1.2' />
                <List title='list #2.0'>
                    <ListItem title='item #2.1' />
                    <ListItem title='item #2.2' />
                    <ListItem title='item #2.3' />
                    <List title='list #3.0'>
                        <ListItem title='item #3.1' />
                        <ListItem title='item #3.2' />
                    </List>
                </List>
            </List>
            <div>
                {breadCrumbPath && `Breadcrumb: ${breadCrumbPath}`}
            </div>
        </div>
    );
}

export default NavigationBar;
