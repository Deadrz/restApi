const express = require('express');
const router = express.Router();
const { cekKey } = require('../database/db'); 
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const { xnSea, xnDetai, fbdl, sswebpc, sshpe } = require('../controllers/xnx');
const { wphd, carifilm, artiname, igdonwload, filmapik } = require('../controllers/acak');
const { cakLontong, bijak, quotes, fakta, ptl, motivasi, anime } = require('../controllers/randomtext');

router.get('/checkkey', async (req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    res.send({status: 200, apikey: apikey, response: 'Active'});
});

router.get('/ytplay', youtubePlay);
router.get('/ytmp4', youtubeMp4);
router.get('/ytmp3', youtubeMp3);
router.get('/caklontong', cakLontong);
router.get('/quotes', quotes);
router.get('/fakta', fakta);
router.get('/bijak', bijak);
router.get('/ptl', ptl);
router.get('/motivasi', motivasi);
router.get('/xnsearch', xnSea);
router.get('/xndetail', xnDetai);
router.get('/fbdl', fbdl);
router.get('/ssweb.png', sswebpc);
router.get('/sshp.png', sshpe);
router.get('/randomanime', anime);
router.get('/wphd', wphd);
router.get('/carifilm', carifilm);
router.get('/artinama', artiname);
router.get('/igdownload', igdonwload);
router.get('/filmapik', filmapik)


module.exports = router;
