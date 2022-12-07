import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import DeleteAllCategories from "../DeleteCategory/DeleteAllCategories";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import GifGrid from "./GifGrid";


const GifExpertApp = () => {

    const [categories , setCategories] = useState(['Goku'])

    const onAddCategory = ( NewCategory ) => {

        if(categories.includes(NewCategory)) return

        setCategories([NewCategory , ...categories])
    }

    const onDeleteCategory = ( Category ) => {

        setCategories( [...Category] )
    }

    const onDeleteAll = ( EmptyCategory ) => {

        setCategories([...EmptyCategory])

    }


    
    
    return(
        <div className="gift-general-container">
            <h1>Mi Aplicación de Gifs</h1>

            <AddCategory 
                onNewCategory = { onAddCategory }
            />
            
            <div className="buttons-delete-container">
                <DeleteCategory 
                    onDeleteCategory = { onDeleteCategory } categories = {categories}
                />

                <DeleteAllCategories
                    onDeleteAll = { onDeleteAll }
                />
            </div>

            {
                categories.map( category => (
                    <GifGrid key={ category } category={category} />
                ))
            }
        </div>
    )
}

export default GifExpertApp;