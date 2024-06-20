import { Component, OnInit } from '@angular/core';
import { Producto, Proveedor } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  producto: Producto = new Producto();
  proveedores: Proveedor[] = []; 
  proveedorSeleccionado: Proveedor; // Variable para almacenar el proveedor seleccionado

  constructor(
    private productoServicio: ProductoService,
    private proveedorServicio: ProveedorService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener los proveedores al inicializar el componente
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.proveedorServicio.obtenerProveedoresLista().subscribe(
      (data: Proveedor[]) => {
        this.proveedores = data; // Asigna los proveedores obtenidos al array
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    // Asignar el proveedor seleccionado al campo proveedor del producto
    this.producto.proveedor = this.proveedorSeleccionado;
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.agregarProducto(this.producto).subscribe(
      {
        next: (data) => {
          console.log('Producto agregado:', data);
          this.irAListaProductos();
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

  irAListaProductos() {
    this.router.navigate(['/productos']);
  }
}
