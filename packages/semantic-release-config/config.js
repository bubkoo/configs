module.exports = function (options) {
  return {
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'angular',
          releaseRules: [
            { breaking: true, release: 'major' },
            { revert: true, release: 'patch' },
            { type: 'feat', release: 'minor' },
            { type: 'build', release: 'patch' },
            { type: 'ci', release: false },
            { type: 'chore', release: false },
            { type: 'docs', release: 'patch' },
            { type: 'perf', release: 'patch' },
            { type: 'refactor', release: 'patch' },
            { type: 'style', release: 'patch' },
            { type: 'test', release: 'patch' },
            { scope: 'no-release', release: false },
          ],
          parserOpts: {
            noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
          },
          ...options.commitAnalyzer,
        },
      ],
      [
        '@semantic-release/release-notes-generator',
        {
          ...options.releaseNotesGenerator,
        },
      ],
      [
        '@semantic-release/changelog',
        {
          ...options.changelog,
        },
      ],
      [
        '@semantic-release/npm',
        {
          ...options.npm,
        },
      ],
      [
        '@semantic-release/github',
        {
          addReleases: 'bottom',
          ...options.github,
        },
      ],
      [
        '@semantic-release/git',
        {
          assets: ['package.json', 'CHANGELOG.md'],
          message:
            'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
          ...options.git,
        },
      ],
    ],
  }
}
