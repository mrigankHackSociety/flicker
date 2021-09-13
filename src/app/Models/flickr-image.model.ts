export class FlickerImageModel {
  photos: FlickerPhotos;
  stat:   string;
}

export class FlickerPhotos {
  page:    number;
  pages:   number;
  perpage: number;
  total:   number;
  photo:   FlickerPhotosDetails[];
}

export class FlickerPhotosDetails {
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
  datetakenunknown:     string;
  ownername:            string;
  views:                string;
  url_q:                string;
  height_q:             number;
  width_q:              number;
}


