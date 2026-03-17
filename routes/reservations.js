var express = require('express');
var router = express.Router();
let reservationController = require('../controllers/reservations');
let { checkLogin } = require('../utils/authHandler');

// GET all reservations for the current user
router.get('/', checkLogin, async function (req, res, next) {
  try {
    await reservationController.getAllReservations(req, res);
  } catch (error) {
    next(error);
  }
});

// GET a specific reservation by ID for the current user
router.get('/:id', checkLogin, async function (req, res, next) {
  try {
    await reservationController.getReservationById(req, res);
  } catch (error) {
    next(error);
  }
});

// POST reserve a cart (entire cart of the user)
router.post('/reserveACart', checkLogin, async function (req, res, next) {
  try {
    await reservationController.reserveACart(req, res);
  } catch (error) {
    next(error);
  }
});

// POST reserve items from a list
router.post('/reserveItems', checkLogin, async function (req, res, next) {
  try {
    await reservationController.reserveItems(req, res);
  } catch (error) {
    next(error);
  }
});

// POST cancel a reservation
router.post('/cancelReserve/:id', checkLogin, async function (req, res, next) {
  try {
    await reservationController.cancelReserve(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;