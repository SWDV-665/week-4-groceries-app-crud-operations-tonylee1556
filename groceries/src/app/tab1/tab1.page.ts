import { Component } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //title for the app
  title = "Grocery list"
  //list of items

  //constructor
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public alertController: AlertController, public dataservice: GroceriesServiceService) { }
  loaditems(){
    return this.dataservice.getItem();
  }
  numberOfItem(){
    return this.dataservice.getItem().length;
  }
  //removing items function
  async removeItem(item, index) {
    this.dataservice.removeItem(index);
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
    });
    toast.present();

  }
  edititems(item, index) {
    console.log("editing item -");
    this.editItemPrompt(item, index);
  }
  //adding function that is calling addItemPrompt for detail input
  addItem() {
    console.log("Removing Item - ");
    this.addItemPrompt();
  }

  async editItemPrompt(item, index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Input Item Detail',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'NAME',
          value: item.name
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'name2-id',
          placeholder: 'QUANTITY',
          value: item.quantity
        }], buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: item => {
              console.log('Confirm Ok', item);
              this.dataservice.editItem(item,index);
            }
          }
        ]
    });
    await alert.present();
  }

  async addItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Input Item Detail',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'NAME'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'name2-id',
          placeholder: 'QUANTITY'
        }], buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: item => {
              console.log('Confirm Ok', item);
              this.dataservice.addItem(item);
            }
          }
        ]
    });
    await alert.present();
  }
}
