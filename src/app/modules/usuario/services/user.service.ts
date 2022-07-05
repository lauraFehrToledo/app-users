import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService { 

  private urlApi = `${environment.baseURL}/users`;

  constructor(
    public http: HttpClient
    ) {
    super(http);
  }

  // Trae listado de usuarios
  public getUsers(): Observable<Array<User>> {
    const url = `${this.urlApi}`;

    // TODO Mock Servicio
    const response = JSON.parse('[{"idUser":1, "username": "NA1111", "name":"Nombre1", "surnames":"Apellido1", "email":"email@email.com", "password":"12345678", "age":20, "active": true, "lastLoggin": "01/01/2022", "creationDate": "01/01/2022"}]');
    return of(response);
    
    return this.realizarPeticionGet(url);
  }

  // Obtener detalle usuario por id
  public getUserById(idUser: number): Observable<User> {
    const url = `${this.urlApi}/${idUser}`;

    // TODO Mock Servicio
    const response = JSON.parse('{"idUser":1, "username": "NA1111", "name":"Nombre1", "surnames":"Apellido1", "email":"email@email.com", "password":"12345678", "age":20, "active": true, "lastLoggin": "01/01/2022", "creationDate": "01/01/2022"}');
    return of(response);

    return this.realizarPeticionGet(url);
  }

    // Crear usuario
    public crearActividad(user: User): Observable<User> {
      const url = `${this.urlApi}`;
  
      return this.realizarPeticionPost(url, user);
    }

  
  // Modificar usuario
  public modificarActividad(user: User): Observable<User> {
    const url = `${this.urlApi}`;

    return this.realizarPeticionPut(url, user);
  }

  // Eliminar usuario
  public eliminarActividad(user: User): Observable<User> {
    const url = `${this.urlApi}/${user.idUser}`;
    return this.realizarPeticionDelete(url);
  }

}
