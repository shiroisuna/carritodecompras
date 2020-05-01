import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Producto } from './../model/producto';

@Injectable()
export class ProductosService {

  private productos: Array<Producto> = [];

  constructor() {
    for (let i = 1; i < 10; i++) { // Creamos un conjunto de 20 productos de prueba
      const producto = new Producto();
      producto.id = (i + 1);
      producto.name = `Libro ${i}`;
      producto.descripcion = 'Lorem ipsum dolor sit amet...';
      producto.price = i * 10 + 100;
      producto.fabricante = `Editorial JAMP-${i}`;
      producto.novedad = (i < 6); // Marcamos como novedad los 6 primeros
      this.productos.push(producto);
    }
  }

  /**
   * getProductos
   */
  getProductos() {
    return new Promise((resolve, reject) => {
      if (this.productos.length > 0) {
        resolve(this.productos);
      } else {
        reject('No hay productos disponibles');
      }
    });
  }

}
