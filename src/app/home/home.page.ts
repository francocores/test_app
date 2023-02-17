import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ImagesService } from '../core/endpoints/images.service';
import { Image } from '../core/endpoints/models/image.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public modalStatus: boolean = false;
  public modalData!: Image;

  public isLoading: boolean = false;
  public images: Image[] = [];
  private imagesData: Image[] = [];

  constructor(
    private imagesService: ImagesService,
    private loading: LoadingController,
  ) { }

  public async ionViewWillEnter() {
    this.load();
  }

  public async load() {
    this.images = [];

    this.isLoading = true;
    const loading = await this.loading.create()
    await loading.present();
    this.imagesService.imagesLocal().subscribe({
      next: async (response: Image[]) => {
        this.imagesData = response;
        this.images = response;
        await loading.dismiss();
        this.isLoading = false;
      },
      error: async (error) => {
        console.error(error);
        await loading.dismiss();
        this.isLoading = false;
      }
    })
  }

  handleChange(event: any) {
    this.isLoading = true;
    const query: string = event.target.value.toLowerCase();
    if (query)
      this.images = this.imagesData.filter(d => d.id.toString() === query || d.text.toLowerCase().includes(query));
    else
      this.images = this.imagesData;
    this.isLoading = false;
  }

  onCardClick(item: Image) {
    this.modalData = item;
    this.modalStatus = true;
  }

}
