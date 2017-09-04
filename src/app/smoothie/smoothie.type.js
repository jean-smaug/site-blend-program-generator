export type Conference = {
  day: 'dayOne' | 'dayTwo',
  description: string,
  domain: string,
  duration: number,
  level: 'beginner' | 'expert',
  room: string,
  speaker: {
    city: string,
    company: string,
    gender: 'male' | 'female',
    linkedin: string,
    name: string,
    picture: string,
    twitter: string,
  },
  sponsored: boolean,
  tags: Array<string>,
  timeBegin: string,
  title: string,
};

export type Conferences = Array<Conference> | [];

export type Day = {
  eight: {
    selected: Array<Conference> | [],
    remaining: Array<Conference> | [],
  },
  ten: {
    selected: Array<Conference> | [],
    remaining: Array<Conference> | [],
  },
  fourteen: {
    selected: Array<Conference> | [],
    remaining: Array<Conference> | [],
  },
  sixteen: {
    selected: Array<Conference> | [],
    remaining: Array<Conference> | [],
  },
};
