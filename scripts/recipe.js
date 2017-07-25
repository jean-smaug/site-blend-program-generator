const Travis = require('travis-ci');
const ghPages = require('gh-pages');

const travis = new Travis({
  version: '2.0.0',
});

travis.repos('the-smaug', 'site-blend-program-generator').get((err, res) => {
  const lastBuildNumber = res.repo.last_build_number;
  console.log(res);
});
