export type Conference = {
  'day': 'dayOne' | 'dayTwo',
  'description': string,
  'domain': string,
  'duration': number,
  'level': 'beginner' | 'expert',
  'room': string,
  'speaker': {
    'city': string,
    'company': string,
    'gender': 'male' | 'female',
    'linkedin': string,
    'name': string,
    'picture': string,
    'twitter': string,
  },
  'sponsored': boolean,
  'tags': Array<string>,
  'timeBegin': string,
  'title': string,
};

export type Conferences = Array<Conference> | [];

export type Day = {
  eight: Array<Conference> | [],
  ten: Array<Conference> | [],
  fourteen: Array<Conference> | [],
  sixteen: Array<Conference> | [],
};
