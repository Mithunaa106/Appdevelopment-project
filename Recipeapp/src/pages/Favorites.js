// import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import RecipeCard from '../components/RecipeCard';

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   return (
//     <div className='w-full'>
//       <Header title='Your Favorite Recipes' />

//       <div className='w-full flex flex-wrap gap-10 px-4 lg:px-20 py-10'>
//         {favorites.length > 0 ? (
//           favorites.map((item, index) => <RecipeCard recipe={item} key={index} />)
//         ) : (
//           <p className='text-white'>You have no favorite recipes yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Favorites;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Your Favorite Recipes</h1>
//       {favorites.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {favorites.map((recipe, index) => (
//             <div key={index} className="border rounded-lg shadow-md overflow-hidden">
//               <img
//                 src={recipe.image}
//                 alt={recipe.label}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{recipe.label}</h2>
//                 <p className="mt-2 text-gray-600">{recipe.source}</p>
//                 <Link
//                   to={/recipe/${recipe.id}}
//                   className="text-blue-500 hover:underline mt-4 block"
//                 >
//                   View Recipe
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>You have no favorite recipes yet.</p>
//       )}
//     </div>
//   );
// };

// export default Favorites;
import React, { useEffect, useState } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Retrieve the favorites from localStorage when the component mounts
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <img src={recipe.image} alt={recipe.name} />
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;