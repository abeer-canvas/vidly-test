
// POST /api/returns {customerId, movieId}

// Return 401 if client is not logged in
// Return 400 if customerId is not provoided
// Return 400 if movieId is not provoided
// Return 404 if no rental found for this customer/movie
// Return 400 if rental already processed
// Return 200 if it is a valid request
// Calculate the rental fee
// Increase the stock
// Return the rental