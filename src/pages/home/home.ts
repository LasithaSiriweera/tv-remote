import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Action } from '../../models/action';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  action ={} as Action;
  actionRef$:FirebaseListObservable<Action[]>;
  constructor(public navCtrl: NavController, public database:AngularFireDatabase) {
    this.actionRef$=this.database.list('action-list');
  }


  addAction(btn_name:string){
    this.action.button_name=btn_name;
    this.action.time=new Date+'';

    this.actionRef$.push(this.action);
    console.log(this.action)
  }

}
