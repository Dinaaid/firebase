import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private fb: AngularFireDatabase) {}

  /**
   * Add single item to the firebase
   * @param  {string} path the item path at the firebase
   * @param  {{}} data the data we need to add
   * @param  {string='id'} id optional paramter to add the id key at the added object
   * @returns Promise
   */
  public addItem(path: string, data: {}, id: string = 'id'): Promise<void> {
    return this.fb
      .list(path)
      .push(data)
      .then(resp => this.fb.list(path).update(resp.key, { [id]: resp.key }));
  }

  /**
   * Get the value of single item
   * @param  {string} path
   * @returns Observable
   */
  public getItem(path: string): Observable<any> {
    return this.fb.object(path).valueChanges();
  }

  /**
   * Get all items from the firebase with the items path
   * @param  {string} path
   * @returns Observable
   */
  public getAllItems(path: string): Observable<any[]> {
    return this.fb.list(path).valueChanges();
  }

  /**
   * Update the single item at the firebase
   * @param  {string} path
   * @param  {{}} data
   * @returns Promise
   */
  public updateItem(path: string, data: {}): Promise<void> {
    return this.fb.object(path).update(data);
  }

  /**
   * Detete the single item from the firebase
   * @param  {string} path
   * @returns Promise
   */
  public deleteItem(path: string): Promise<void> {
    return this.fb.object(path).remove();
  }
}
