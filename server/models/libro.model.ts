export interface Libro {
     idLibro?: number;
     titulo: string;
     descripcion: string;
     genero: string;
     nombreAutor: string;
     cantPaginas: number;
     nombreEditorial: string;
     idioma: string;
     fechaPublicacion: Date;
}

export default Libro