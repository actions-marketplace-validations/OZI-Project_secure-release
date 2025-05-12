const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('@actions/exec');

core.setSecret(core.getInput('wheel-sign-token'));

var args = [
  '-m',
  'invoke',
  '--search-root=.tox/invoke/tmp/subprojects/ozi',
  'release',
  core.getBooleanInput('sdist') ? ['--sdist'] : [],
  `--wheel-sign-token=${core.getInput('wheel-sign-token')}`
];

try {
  await exec('python', args.flat());
} catch (error) {
  core.setFailed(error.message);
}
