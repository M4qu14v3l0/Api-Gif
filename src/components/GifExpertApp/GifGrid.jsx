import { useEffect, useState } from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

import GifItem from "./GifItem";

const GifGrid = ({category}) => {

    
    const { images , isLoading } = useFetchGifs( category )

    return ( 
        <div className="gif-category-container">
            <h1>{category}</h1>

            {
                isLoading
                ? (<h1>Cargando...</h1>)
                : null

            }

            <div className="gif-card-container">
                {
                    images.map(( image ) => (
                        <GifItem 
                            key={image.id}
                            {...image}                        
                            />
                    ))
                }
            </div>
        </div>
     );
}
 
export default GifGrid;