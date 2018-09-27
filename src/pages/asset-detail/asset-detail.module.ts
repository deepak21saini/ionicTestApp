import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssetDetailPage } from './asset-detail';

@NgModule({
  declarations: [
    AssetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AssetDetailPage),
  ],
})
export class AssetDetailPageModule {}
