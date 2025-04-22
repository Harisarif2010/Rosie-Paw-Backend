import { createRouter, expressWrapper } from "next-connect";
import { NextResponse } from "next/server";

const router = createRouter();

router

  // Example middleware for measuring request time
    .use(async (req, res, next) => {
        console.log('Request received');
        return next();
    const start = Date.now();
    await next(); // continue to next middleware
    const end = Date.now();
    console.log(`Request took ${end - start}ms`);
  })

  // GET handler
  .get(async (req, res) => {
    const user = await getUser(req.query.id);
    res.json({ user });
  })

  // PUT handler
  .put(async (req, res) => {
    if (req.user.id !== req.query.id) {
      return res
        .status(403)
        .json({ error: "You can't update other user's profile" });
    }

    const user = await updateUser(req.body.user);
    res.json({ user });
  });

// Export edge runtime config (optional)
export const config = {
  runtime: "edge",
};

// Export the handler with error handler
export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
