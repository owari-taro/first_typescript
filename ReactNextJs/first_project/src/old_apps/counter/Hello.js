export const Hello = ({ name, handleChangeName, initialName }) => {
    return (
        <div className="App">
            <p>
                hello,<b>{name}</b>
                default name<b>{initialName}</b>
            </p>
            <input type="text" onChange={handleChangeName} />
        </div>
    )
}