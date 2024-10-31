const router = require("express").Router();
const readingListController = require("../controllers/readingListController");
const authentication = require("../middlewares/authentication");

// router.get('/', readingListController.getManga);
router.get('/mylist', authentication, readingListController.getMyList);
router.post('/add', authentication, readingListController.addMangaToList);
router.put('/progress', authentication, readingListController.updateProgress);
router.put('/rate', authentication, readingListController.rateManga);
router.put('/finish', authentication, readingListController.finishReading);
router.delete('/:id', authentication, readingListController.removeMangaFromList);
// router.get('/:id', authentication, readingListController.getMangaById);

module.exports = router;