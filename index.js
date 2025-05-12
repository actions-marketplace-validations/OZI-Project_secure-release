const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('@actions/exec');

try {
  await exec('python', ['-m', 'invoke', '--search-root=.tox/invoke/tmp/subprojects/ozi', 'release', `--wheel-sign-token=${core.getInput('wheel-sign-token')}`]);
} catch (error) {
  core.setFailed(error.message);
}
