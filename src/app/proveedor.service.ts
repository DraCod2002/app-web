import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './producto';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlBase = "http://localhost:8081/inventario-app/proveedores";

  constructor(private clienteHttp: HttpClient) { }

  obtenerProveedoresLista(): Observable<Proveedor[]> {
    return this.clienteHttp.get<Proveedor[]>(this.urlBase);
  }

  agregarProveedor(proveedor: Proveedor): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, proveedor);
  }

  obtenerProveedorPorId(id: number): Observable<Proveedor> {
    return this.clienteHttp.get<Proveedor>(`${this.urlBase}/${id}`);
  }

  guardarProveedor(id: number, proveedor: Proveedor): Observable<Object> {
    return this.clienteHttp.put(`${this.urlBase}/${id}`, proveedor);
  }

  eliminarProveedor(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
