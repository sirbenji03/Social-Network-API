const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

router
    .route("/")
    .get(getAllThought)
    .post(createThought);

router
    .route("/:id")
    .get(getThoughtById)
    .delete(deleteThought)
    .put(updateThought)

router
    .route("/:id/reactions")
    .post(createReaction)

router
    .route("/:id/reactions/:reactionId")
    .delete(deleteReaction)

module.exports = router;