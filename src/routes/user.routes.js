const { Router } = require("express");
const {
    AuthMiddelware,
    ParseIntMiddelware,
    CacheMiddelware,
} = require("../middlewares");

const { CACHE_TIME } = require("../helpers");

module.exports = function({ UserController }) {
    const router = Router();

    router.get(
        "", [AuthMiddelware, ParseIntMiddelware, CacheMiddelware(CACHE_TIME.ONE_HOUR)],
        UserController.getAll
    );
    router.get("/:userId", UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);

    return router;
};