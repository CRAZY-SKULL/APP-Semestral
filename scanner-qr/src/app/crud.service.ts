import { Injectable } from '@angular/core';
//importar en el servide al Storage de angular
import { Storage } from '@ionic/storage';

//importar en el servide al Storage de angular

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) { 
    //crear al storage para usarlo
    this.init();
  }
  // crear el storage
  async init(){
    await this.storage.create();
  }
  //ingresasr datos al storage con key
  async agregarConKey(key: string, valor: string){
    await this.storage.set(key, valor);
  }

  //ingresar datos al storage key autoincrementar
  async agregar(valor:string){
    let id = await this.storage.length() + 1 ;
    await this.storage.set(id.toString(), valor);
  }

  async rescatar(key:string)
  {
    return await this.storage.get(key);
  }
  listar()
  {
    let listado = []
    this.storage.forEach((v,k) => {listado.push(v); })
    return listado;

  }
  eliminar(key:string){
    //ojo como se agrega cada elemento via autincrementable o por otro codigo
    this.storage.remove(key);
  }// primer parte lista..
}
