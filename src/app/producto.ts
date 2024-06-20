export class Producto {
    idProducto: number;
    descripcion: string;
    precio: number;
    exitencia: number;
    proveedor: Proveedor; 
}

export class Proveedor {
    idProveedor: number;
    nombre: string;
    direccion: string;
}
