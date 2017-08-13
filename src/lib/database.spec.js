import { getTags } from './database';

const conferences = [
  {
    title: 'conf1',
    tags: ['foo', 'bar'],
  },
  {
    title: 'conf2',
    tags: ['foo', 'bar', 'test'],
  },
];

describe('database.lib', () => {
  it('should get tags', async () => {
    expect((await getTags(conferences)).length).toBe(3);
  });
});
