const express = require("express");
const router = express.Router();
const bookingControllers = require("../controllers/bookingControllers");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking managment
 */

/**
 * @swagger
 *  /api/booking:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               finished:
 *                 type: string
 *                 format: date
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *               discount_coupon_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Booking created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/booking", bookingControllers.createBooking);

/**
 * @swagger
 * /api/booking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all booking
 *     responses:
 *       200:
 *         description: List of booking
 *       500:
 *         description: Server error
 */
router.get("/booking", bookingControllers.getBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *  get:
 *    tags: [Booking]
 *    summary: get booking By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Booking ID
 *    responses:
 *      200:
 *        description: Booking details
 *      404:
 *        description: Booking not found
 *      500:
 *        description: Server error
 */
router.get("/booking/:id", bookingControllers.getBookingById);

/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     tags: [Booking]
 *     summary: Update booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               finished:
 *                 type: string
 *                 format: date
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *               discount_coupon_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Booking updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.put("/booking/:id", bookingControllers.updateBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     tags: [Booking]
 *     summary: Delete booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       204:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/booking/:id", bookingControllers.deleteBooking);

module.exports = router;
