export class FlickerImageModel {
  photos: FlickerImageDetails;
  stat: string;
}
export class FlickerImageDetails {
  page: number​​
  pages: number​​
  perpage: number​​
  photo: FlickerImageList[]​​
  total: number
}

export class FlickerImageList {
  id:                   string;
  owner:                string;
  secret:               string;
  server:               string;
  farm:                 number;
  title:                string;
  ispublic:             number;
  isfriend:             number;
  isfamily:             number;
  dateupload:           string;
  datetaken:            string;
  datetakengranularity: number;
  datetakenunknown:     number;
  ownername:            string;
  views:                string;
  url_q:                string;
  height_q:             string;
  width_q:              string;
}

