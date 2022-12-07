const DeleteCategory = ({ onDeleteCategory , categories }) => {
    

    const onSubmit = (e) => {
        e.preventDefault()

        const temp = categories
        temp.splice(0 , 1)
        onDeleteCategory(temp)

    }
    
    return(
        <button className="button-delete" onClick={ onSubmit }>Borrar última entrada</button>
    )
}

export default DeleteCategory;