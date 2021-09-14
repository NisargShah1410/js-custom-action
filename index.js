const core = require('@actions/core');
const github = require('@actions/github');

try {
  const lang = core.getInput('language-name');
  console.log(`Language selected is ${lang}`);
  const com = `${lang} build`.toString();
  core.setOutput("com", com);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
