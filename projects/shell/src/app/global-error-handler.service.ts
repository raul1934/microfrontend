import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  async handleError(error: any): Promise<void> {
    const toastController = this.injector.get(ToastController);
    const toast = await toastController.create({
      message: JSON.stringify(error),
      duration: 5000,
      color: 'danger',
      buttons: [{ text: 'Close', role: 'cancel' }]
    });

    await toast.present();
  }
}
