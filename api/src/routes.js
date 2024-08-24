const { Router } = require('express');
const ReminderController = require('./app/controllers/ReminderController');

const router = Router();

router.get('/reminders', ReminderController.index);
router.post('/reminders', ReminderController.store);
// router.put('/reminders/:id', ReminderController.update);
router.delete('/reminders/:id/day/:idDay', ReminderController.delete);

module.exports = router;
