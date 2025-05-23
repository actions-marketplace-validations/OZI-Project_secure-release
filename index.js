const core = require('@actions/core');
const { exec } = require('@actions/exec');

core.setSecret(core.getInput('wheel-sign-token'));

const build = async function(){
  var args = [
    '-m',
    'invoke',
    '--search-root=.tox/invoke/tmp/subprojects/ozi/ozi',
    'release',
    core.getBooleanInput('sdist') ? ['--sdist'] : [],
    `--wheel-sign-token=${core.getInput('wheel-sign-token')}`
  ];
  
  try {
    await exec('python', args.flat());
  } catch (error) {
    core.setFailed(error.message);
  }
}
build()
