export interface HttpResponse {
  status: string;
  data: Data;
}

export interface Data {
  result: Result;
}

export interface Result {
  message: Message;
}

export interface Message {
  header: Header;
  body: Body;
}

export interface Body {
  artist_list: Artistlist2[];
}

export interface Artistlist2 {
  artist: Artist2;
}

export interface Artist2 {
  artist_id: number;
  artist_name: string;
  artist_name_translation_list: Artistnametranslationlist[];
  artist_comment: string;
  artist_country: string;
  artist_alias_list: Artistaliaslist[];
  artist_rating: number;
  artist_twitter_url: string;
  artist_credits: Artistcredits2;
  restricted: number;
  updated_time: string;
  begin_date_year: string;
  begin_date: string;
  end_date_year: string;
  end_date: string;
}

export interface Artistcredits2 {
  artist_list: Artistlist[];
}

export interface Artistlist {
  artist: Artist;
}

export interface Artist {
  artist_id: number;
  artist_name: string;
  artist_name_translation_list: any[];
  artist_comment: string;
  artist_country: string;
  artist_alias_list: Artistaliaslist[];
  artist_rating: number;
  artist_twitter_url: string;
  artist_credits: Artistcredits;
  restricted: number;
  updated_time: string;
  begin_date_year: string;
  begin_date: string;
  end_date_year: string;
  end_date: string;
}

export interface Artistcredits {
  artist_list: any[];
}

export interface Artistaliaslist {
  artist_alias: string;
}

export interface Artistnametranslationlist {
  artist_name_translation: Artistnametranslation;
}

export interface Artistnametranslation {
  language: string;
  translation: string;
}

export interface Header {
  status_code: number;
  execute_time: number;
}
