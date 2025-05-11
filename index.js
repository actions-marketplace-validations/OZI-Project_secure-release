const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('@actions/exec');

try {
  const options = {};
  options.env = {'WHEEL_SIGN_TOKEN': core.getInput('wheel-sign-token')};
  await exec('tox', ['-e', 'invoke', '--', 'release'], options);
} catch (error) {
  core.setFailed(error.message);
}
