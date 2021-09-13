import {
  appContants
} from '../../Contants/app.contants';
import {
  FlickerImageModel,
  FlickerPhotosDetails
} from './../../Models/flickr-image.model';
import {
  FlickerServiceService
} from './../../services/flicker-service.service';
import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Subscription
} from 'rxjs';
import {
  filter,
  finalize,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-user-image-search',
  templateUrl: './user-image-search.component.html',
  styleUrls: ['./user-image-search.component.css']
})
export class UserImageSearchComponent implements OnInit, OnDestroy {
  userSearchForm: FormGroup;
  imageExtrasPayload: string[] = ['date_upload', 'date_taken', 'owner_name', 'views', 'url_q']
  userSearchImageResultArray: FlickerPhotosDetails[] = [];
  subscription: Subscription = new Subscription();
  displayLoader: boolean = false;
  displayContent: boolean = true;
  spinnerDiameter: string = appContants.spninnerDiameter

  constructor(private flickerImageService: FlickerServiceService) {}

  ngOnInit(): void {
    this.initialiseFormGroup();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  initialiseFormGroup(): void {
    this.userSearchForm = new FormGroup({
      userInput: new FormControl('', [Validators.required])
    })
  }

  searchImage(): void {
    this.userSearchForm.valid && this.getIntersestingImage();
  }

  addtagName(imageResultArray: FlickerPhotosDetails[]): void {
    if (imageResultArray.length > 0) {
      imageResultArray.forEach(element => {
        element['tagName'] = this.userSearchForm.value.userInput
      });
    }
  }

  getIntersestingImage() {
    const requestImagePayload = {
      tags: this.userSearchForm.value.userInput,
      sort: 'interestingness-desc',
      perPage: 1,
      extras: this.imageExtrasPayload.toString()
    }
    this.displayContent = false;
    this.displayLoader = true
    this.subscription.add(this.flickerImageService.getInterestingImage(requestImagePayload).pipe(filter(res => res.photos.photo.length > 0), tap((res => this.addtagName(res.photos.photo))), finalize(() => {
      this.displayLoader = false;
      this.displayContent = true;
    })).subscribe((res: FlickerImageModel) => {
      if (res.stat === 'ok') {
        this.userSearchImageResultArray = [...this.userSearchImageResultArray, ...res.photos.photo]
        this.userSearchForm.reset();
      }
    }))
  }
}
