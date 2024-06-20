import { Component } from '@angular/core';
import { Proveedor } from '../producto';
import { Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrl: './agregar-proveedor.component.css'
})
export class AgregarProveedorComponent {
  proveedor: Proveedor = new Proveedor();

  constructor(private proveedorServicio: ProveedorService, private enrutador: Router) { }

  onSubmit() {
    this.guardarProveedor();
  }

  guardarProveedor() {
    this.proveedorServicio.agregarProveedor(this.proveedor).subscribe({
      next: () => {
        this.irListaProveedores();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  irListaProveedores() {
    this.enrutador.navigate(['/proveedores']);
  }
}
