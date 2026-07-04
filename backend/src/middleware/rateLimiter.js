import ratelimit from "../config/upstash.js"


const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-rate-limit"); // userid can be used to rate limit by user, but this is a prototype only

        if (!success) {
            return res.status(429).json({
                message: "Too many requests. Try again later."
            });
        }

        next();

    } catch (error) {
        console.log("Rate limit error:", error);
        next(error);
    } 
}

export default rateLimiter;