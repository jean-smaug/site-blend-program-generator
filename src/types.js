export type Filter = { domain: string, level: string };

export type Filters = [Filter];

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
    selected: Conferences,
    remaining: Conferences,
  },
  ten: {
    selected: Conferences,
    remaining: Conferences,
  },
  fourteen: {
    selected: Conferences,
    remaining: Conferences,
  },
  sixteen: {
    selected: Conferences,
    remaining: Conferences,
  },
};

export type Tags = Array<String>;
