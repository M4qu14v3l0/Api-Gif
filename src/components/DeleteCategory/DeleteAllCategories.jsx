const DeleteAllCategories = ({ onDeleteAll }) => {



    const onSubmit = (e) => {
        e.preventDefault()

        const temp = []
        onDeleteAll(temp)

    }
    
    return(

        <button className="button-delete" onClick={ onSubmit }>Borrar todo</button>

    )
}

export default DeleteAllCategories;