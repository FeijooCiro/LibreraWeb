"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLibros = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../connection/connection")); // DB
function getLibros(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield connection_1.default;
            const query = `SELECT libros.*, 
        dl.descripcion AS 'descripcion', 
        tl.titulo AS 'titulo',
        gl.nombreGeneroLiterario AS 'genero',
        ed.nombreEditorial AS 'editorial',
        da.descripcion AS 'descripcionAutor',
        np.nombre AS 'nombrePersona',
        il.idioma AS 'idioma',
        sl.sinopsis AS 'sinopsis'
        FROM libros
        INNER JOIN descripcionLibro dl ON libros.idDescripcion = dl.idDescripcionLibro
        INNER JOIN tituloLibro tl ON libros.idTituloLibro = tl.idTituloLibro
        INNER JOIN generoLiterario gl ON libros.idGeneroLibro = gl.idGeneroLiterario
        INNER JOIN editorial ed ON libros.idEditorial = ed.idEditorial
        INNER JOIN autorLibro a ON libros.idAutorLibro = a.idAutorLibro
        INNER JOIN descripcionAutor da ON a.idDescripcionAutor = da.idDescripcionAutor
        INNER JOIN persona p ON a.idPersona = p.idPersona
        INNER JOIN nombrePersona np ON p.idNombrePersona = np.idNombrePersona
        INNER JOIN idiomaLibro il ON libros.idIdioma = il.idIdiomaLibro
        INNER JOIN sinopsisLibro sl ON libros.idSinopsis = sl.idSinopsisLibro`;
            const [resultados] = yield conn.query(query, { type: sequelize_1.QueryTypes.SELECT });
            res.render('listarcompleto', { libros: resultados });
        }
        catch (e) {
            console.error(e);
            res.status(500).send('Error interno del servidor');
        }
    });
}
exports.getLibros = getLibros;
//# sourceMappingURL=libro.controller.js.map