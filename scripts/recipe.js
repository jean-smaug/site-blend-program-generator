const Travis = require('travis-ci');
const ghPages = require('gh-pages');
const gitBranch = require('git-branch');

const travis = new Travis({
  version: '2.0.0',
});

const ghPagesConfig = {
  repo: 'https://github.com/the-smaug/site-blend-program-generator',
  branch: gitBranch.sync(),
  dest: 'recipe',
};

travis.repos('the-smaug', 'site-blend-program-generator').get((err, res) => {
  const lastBuildNumber = res.repo.last_build_number;

  ghPages.publish('build', ghPagesConfig, (errorPublish) => {
    if (errorPublish !== null) {
      console.error(errorPublish);
    }
  });

  console.log(lastBuildNumber);
});
