const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
function authenticateToken(req, res, next) {
    // Get the Authorization header from the request
    const authHeader = req.headers["authorization"];

    // Extract the token from the header (format: "Bearer <token>")
    const token = authHeader && authHeader.split(" ")[1];

    // If no token is provided, return 401 Unauthorized
    if (!token) return res.sendStatus(401);

    // Verify the token using the secret key
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        // If verification fails, return 401 Unauthorized
        if (err) return res.sendStatus(401);

        // Attach the decoded user payload to the request object
        req.user = user;

        // Pass control to the next middleware or route handler
        next();
    });
}

// Export the middleware function
module.exports = {
    authenticateToken,
};