import { useState } from "react"

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault()

        //limpiar data
        if(inputValue.trim().length <= 1) return

        // Destructuración
        //setCategories( (categories) => [ ...categories , inputValue])
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return(
        <form className="form-add-category" onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={ onInputChange }/>
        </form>
    )

}


export default AddCategory