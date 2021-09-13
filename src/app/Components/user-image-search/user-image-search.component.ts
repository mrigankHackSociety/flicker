import {
  appContants
} from '../../Contants/app.contants';
import {
  FlickerImageList,
  FlickerImageModel
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
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-user-image-search',
  templateUrl: './user-image-search.component.html',
  styleUrls: ['./user-image-search.component.css']
})
export class UserImageSearchComponent implements OnInit, OnDestroy {
  userSearchForm: FormGroup;
  imageExtrasPayload = ['date_upload', 'date_taken', 'owner_name', 'views', 'url_q']
  userSearchImageResultArray: FlickerImageList[] = [];
  subscription: Subscription;
  displayLoader: boolean = false;
  spinnerDiameter = appContants.spninnerDiameter

  constructor(private flickerImageService: FlickerServiceService) {
    this.subscription = new Subscription();
  }

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

  addtagName(imageResultArray: FlickerImageList[]): void {
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
    this.displayLoader = true
    this.subscription.add(this.flickerImageService.getInterestingImage(requestImagePayload).pipe(filter(res => res.photos.photo.length > 0), tap((res => this.addtagName(res.photos.photo)))).subscribe((res: FlickerImageModel) => {
      if (res.stat === 'ok') {
        this.displayLoader = false;
        this.userSearchImageResultArray = res.photos.photo.length > 0 ? res.photos.photo : []
        this.userSearchForm.reset();
      } else {
        this.displayLoader = false
      }
    }, error => {
      this.displayLoader = false
    }))
  }
}
