const router = require('express').Router();
// import all of the API routes from /api/index.js (minus index.js, already implied)
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;