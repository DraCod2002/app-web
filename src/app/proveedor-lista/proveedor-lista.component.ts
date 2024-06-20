import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../producto';
import { Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-lista',
  templateUrl: './proveedor-lista.component.html',
  styleUrls: ['./proveedor-lista.component.css'] // Usa 'styleUrls' en lugar de 'styleUrl'
})
export class ProveedorListaComponent implements OnInit {
  proveedores: Proveedor[];

  constructor(private proveedorServicio: ProveedorService, private enrutador: Router) { }

  ngOnInit() {
    this.obtenerProveedores();
  }

  private obtenerProveedores() {
    this.proveedorServicio.obtenerProveedoresLista().subscribe(
      datos => {
        this.proveedores = datos;
      },
      error => {
        console.log(error);
      }
    );
  }

  editarProveedor(id: number) {
    this.enrutador.navigate(['editar-proveedor', id]);
  }

  eliminarProveedor(id: number) {
    this.proveedorServicio.eliminarProveedor(id).subscribe({
      next: () => {
        this.obtenerProveedores();
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
