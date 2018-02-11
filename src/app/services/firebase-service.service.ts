import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ProfileInfo } from '../models/profile-info';
import { Category, CategoryInfo } from '../models/category';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class FirebaseService {
  categoryList: AngularFireList<Category>;
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.categoryList = db.list('category');
  }

  loginWithFacebook(): Promise<ProfileInfo> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);

  }
  saveCategory(data: Category) {

    this.categoryList.push(data);

  }
  getCategory(): Observable<CategoryInfo[]> {
    return this.categoryList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    });
  }
  updateCategory(key:string,data:Category) {
    this.categoryList.update(key,data);
  }
  deleteCategory(key:string){
    this.categoryList.remove(key);
  }
}
