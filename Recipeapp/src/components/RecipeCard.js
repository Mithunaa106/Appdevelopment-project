import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    const { image, label, cuisineType, dietLabel, mealType, uri } = recipe?.recipe

    const id = uri?.split("#")[1]


        const addToFavorites = (recipe) => {
          const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
          if (!storedFavorites.some(fav => fav.id === recipe.id)) {
            storedFavorites.push(recipe);
            localStorage.setItem('favorites', JSON.stringify(storedFavorites));
          }
        };

    return (
        <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
            <div className='bg-_gradient shadow w-full rounded-lg'>
                <img src={image} alt={label} className='rounded-lg h-[200px] md:h-[150px] w-full' />

                <div className='p-3'>
                    <p className='text-white font-semibold'>{label}</p>

                    <div className='mt-2'>
                        <span className='px-2 py-1 text-[12px] capitalize bg-white shadow-xl rounded-full mr-3 text-green-500'>
                            {cuisineType}
                        </span>
                        <span className='px-2 py-1 text-[12px] capitalize bg-white shadow-xl rounded-full text-pink-500'>
                            {mealType}
                        </span>
                    </div>
                </div>
            </div>

            {/* <button
          onClick={() => addToFavorites(recipe)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add to Favorites
        </button> */}
        </Link>
    )
}

export default RecipeCard