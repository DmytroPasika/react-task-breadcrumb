function ListItem(props: {
    title: string,
    handleSelectItem?: Function
}) {
    const { title, handleSelectItem } = props

    function onClickItemElement() {
        return handleSelectItem ? handleSelectItem(title) : ''
    }

    return (
        <div className="list-item" onClick={onClickItemElement} >
            <li>{title}</li>
        </div>
    );
}

export default ListItem
