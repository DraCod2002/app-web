import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { ProveedorListaComponent } from './proveedor-lista/proveedor-lista.component';

const routes: Routes = [
  { path: 'productos', component: ProductoListaComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'editar-producto/:id', component: EditarProductoComponent },
  { path: 'proveedores', component: ProveedorListaComponent }, 
  { path: 'agregar-proveedor', component: AgregarProveedorComponent },
  { path: 'editar-proveedor/:id', component: EditarProveedorComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
