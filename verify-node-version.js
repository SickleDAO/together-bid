const semver = require('semver');
const { engines } = require('./package');

const version = engines.node;

if (!semver.satisfies(process.version, version)) {
  console.error(
    `
    ERROR: Required node version ${version}
    `
  );
  process.exit(1);
}
