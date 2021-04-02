const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsers)
router.get("/:id", UsersController.getUserId)
router.post("/", UsersController.postUsers)
router.put("/id", UsersController.putUsers)
router.delete("/id", UsersController.deleteUsers)


module.exports = router



