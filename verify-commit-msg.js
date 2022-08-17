const msgPath = process.env.GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE =
  /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.error(
    `
    ERROR: invalid commit message format.
      Proper commit message format is required for automated changelog generation. Examples:
        feat(xxx): xxxxxxxxxx'
        fix(xxx): xxxxxxxxxxx'
    `
  );
  process.exit(1);
}
