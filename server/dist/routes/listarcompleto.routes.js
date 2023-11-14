"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libro_controller_1 = require("../controllers/libro.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(libro_controller_1.getLibros);
exports.default = router;
//# sourceMappingURL=listarcompleto.routes.js.map