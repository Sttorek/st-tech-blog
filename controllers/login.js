const router = require('express').Router();
const { Login} = require('../models');



router.get('/', async (req, res) => {
    res.send("oyyyyyy")
    // try {
    //   const dbGalleryData = await Gallery.findByPk(req.params.id, {
    //     include: [
    //       {
    //         model: Painting,
    //         attributes: [
    //           'id',
    //           'title',
    //           'artist',
    //           'exhibition_date',
    //           'filename',
    //           'description',
    //         ],
    //       },
    //     ],
    //   });
  
    //   const gallery = dbGalleryData.get({ plain: true });
    //   res.render('gallery', {
    //     gallery,
    //     // We are not incrementing the 'countVisit' session variable here
    //     // but simply sending over the current 'countVisit' session variable to be rendered
    //     countVisit: req.session.countVisit,
    //   });
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
  });