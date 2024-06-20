import { Component } from '@angular/core';
import { Proveedor } from '../producto';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrl: './editar-proveedor.component.css'
})
export class EditarProveedorComponent {

  proveedor: Proveedor = new Proveedor();
  id: number;

  constructor(private proveedorServicio: ProveedorService,
              private ruta: ActivatedRoute,
              private enrutador: Router) { }

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.proveedorServicio.obtenerProveedorPorId(this.id).subscribe(
      {
        next: (datos) => this.proveedor = datos,
        error: (errores: any) => console.log(errores)
      }
    );
  }

  onSubmit() {
    this.guardarProveedor();
  }

  guardarProveedor() {
    this.proveedorServicio.guardarProveedor(this.id, this.proveedor).subscribe(
      {
        next: () => this.irListaProveedores(),
        error: (errores) => console.log(errores)
      }
    );
  }

  irListaProveedores() {
    this.enrutador.navigate(['/proveedores']);
  }
}
