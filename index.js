const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('@actions/exec');

try {
  await exec('tox', ['-e', 'invoke', '--', 'release'], {'env': {'WHEEL_SIGN_TOKEN': core.getInput('wheel-sign-token')}});
} catch (error) {
  core.setFailed(error.message);
}
