import {FETCH_PRODUCTS} from '../actions/Types'

// Define the action creator function with a page number parameter
export const fetchProducts = (pageNumber) => {
  return async (dispatch) => {
    try {
      const itemsPerPage = 9; // Assuming each page contains a fixed number of items, e.g., 12 items per page

      // Calculate the starting and ending indices for the page
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = pageNumber * itemsPerPage;

      const response = await fetch('/products.json'); // Replace with the correct file path
      if (response.ok) {
        const data = await response.json();

        // Extract the products for the specified page
        const productsForPage = data.products.slice(startIndex, endIndex);

        // Dispatch the action with the products for the page
        dispatch({
          type: FETCH_PRODUCTS, // Correct action type
          payload: productsForPage,
        });
      } 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

