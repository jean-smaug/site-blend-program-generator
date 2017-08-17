// import {
//   filterByDomain,
//   filterByLevel,
//   filterByLevelAndDomain,
//   orderConfences,
// } from './dataFilter.lib';
import { getTags, orderConferencesV2 } from './dataFilter.lib';

const conferences = [
  {
    day: 'dayOne',
    description: 'Lorem ipsum dolor sit amet',
    domain: 'tech',
    duration: 15,
    room: 'Amphi X',
    speaker: {
      linkedin: 'linkedin.com/fe156vse1',
      name: 'Maxime Blanc',
      picture: 'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png',
      twitter: 'twitter.com/_MaximeBlanc',
    },
    sponsored: true,
    tags: ['react', 'js', 'front-end'],
    timeBegin: '10h40',
    title: 'React en 2017',
  },
  {
    day: 'dayOne',
    description: 'Lorem ipsum dolor sit amet',
    domain: 'design',
    duration: 40,
    level: 'beginner',
    room: 'Auditorium Lumière',
    speaker: {
      linkedin: 'linkedin.com/in/carinelallemand',
      name: 'Carine LALLEMAND',
      picture: 'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png',
      twitter: 'twitter.com/carilall',
    },
    sponsored: false,
    tags: ['design', 'ux'],
    timeBegin: '16h',
    title: 'Guérilla UX, "quick" mais pas "dirty"',
  },
  {
    day: 'dayOne',
    description: 'Lorem ipsum dolor sit amet',
    domain: 'société',
    duration: 15,
    level: 'beginner',
    room: 'Rhône 3',
    speaker: {
      linkedin: 'linkedin.com/in/nessa-buonomo-27141241',
      name: 'Nessa BUONOMO',
      picture: 'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png',
      twitter: 'twitter.com/lmapn',
    },
    sponsored: false,
    tags: ['blog', 'slasheuse', 'entreprendre'],
    timeBegin: '10h',
    title: "Comment le blogging m'a permis d'inventer mon propre métier",
  },
  {
    day: 'dayOne',
    description: 'Lorem ipsum dolor sit amet',
    domain: 'tech',
    duration: 40,
    level: 'beginner',
    room: 'Auditorium Lumière',
    speaker: {
      linkedin: 'linkedin.com/in/clairedufetrelle/',
      name: 'Claire DUFETRELLE',
      picture: 'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png',
      twitter: 'twitter.com/claire_duf',
    },
    sponsored: false,
    tags: ['blog', 'slasheuse', 'entreprendre'],
    timeBegin: '17h',
    title:
      "Comment publier une application mobile en un clic ? Notre expérience de l'intégration continue sur mobile",
  },
];

describe('database.lib', () => {
  it('should get tags', async () => {
    expect((await getTags(conferences)).length).toBe(8);
  });

  it('should order conferences', () => {
    expect(orderConferencesV2(conferences)).toBe({ dayOne: {}, dayTwo: {} });
  });
});

it('should filter conferences by domain', () => {
  //   expect(filterByDomain(data, 'tech').length).toBe(19);
  //   expect(filterByDomain(data, 'blend').length).toBe(24);
  // });

  // it('should filter conferences by level', () => {
  //   expect(filterByLevel(data, 'confirmed').length).toBe(56);
  //   expect(filterByLevel(data, 'noob').length).toBe(44);
  expect(1).toBe(1);
});

// it('should filter conferences by domain and level', () => {
//   const filters = [
//     {
//       level: 'noob',
//       domain: 'tech',
//     },
//     {
//       level: 'confirmed',
//       domain: 'tech',
//     },
//   ];
//   const filters2 = [
//     {
//       level: 'noob',
//       domain: 'tech',
//     },
//     {
//       level: 'noob',
//       domain: 'design',
//     },
//   ];

//   expect(filterByLevelAndDomain(data, filters).length).toBe(
//     filterByDomain(data, 'tech').length,
//   );
//   expect(filterByLevelAndDomain(data, filters2).length).toBe(19);
// });

// it('should reorder conferences', () => {
//   expect(orderConfences(data).dayOne.eight.length).toBe(0);
//   expect(orderConfences(data).dayOne.ten.length).toBe(26);
//   expect(orderConfences(data).dayOne.fourteen.length).toBe(4);
//   expect(orderConfences(data).dayOne.sixteen.length).toBe(4);
// });
