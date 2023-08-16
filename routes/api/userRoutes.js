const router = require('express').Router();
const { User } = require('../../models')

router.get("/", async () => {
    try {
        const userData = await User.find({});
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
});

module.exports = router;