import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from "rxjs/operators";
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath: string = "api/categories"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.http.get(this.apiPath).pipe(
      catchError(this.handlerError),
      map(this.jsonDataToCategoties)
    )
  }

  getById(id:number): Observable<Category>{
    const url =`${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handlerError),
      map(this.jsonDataToCategory)
    )
  }

  create(category: Category):Observable<Category>{
    return this.http.post(this.apiPath, category).pipe(
      catchError(this.handlerError),
      map(this.jsonDataToCategory)
    )
  }

  Update(category: Category):Observable<Category>{
    const url =`${this.apiPath}/${category.id}`;
    return this.http.put(url, category).pipe(
      catchError(this.handlerError),
      map(()=> category)
    )
  }

  delete(id:number):Observable<any>{
    const url =`${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handlerError),
      map(()=> null)
    )

  }

  //PRIVATE METHODS

  private jsonDataToCategoties(jsonData: any[]): Category[]{
    const categories: Category[] = [];
    jsonData.forEach(element => categories.push(element as Category));
    return categories
  }

  private jsonDataToCategory(jsonData:any): Category{
    return jsonData as Category;
  }

  private handlerError(error:any):Observable<any>{
    console.log("ERRO NA ERQUISIÇÃO ", error);
    return throwError(error);
  }

}
