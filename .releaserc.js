module.exports = {
  branch: 'master',
  plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        "@semantic-release/changelog",
        {
          "changelogFile": "CHANGELOG.md"
        }
      ],
      [
        "@semantic-release/npm",
        {
          "npmPublish": false
        }
      ],
      [
        "@semantic-release/git",
        {
          "assets": [
            "CHANGELOG.md",
            "package.json",
            "package-lock.json"
          ],
          "message": "chore(release): ${nextRelease.version} [skip ci]"
        }
      ],
      "@semantic-release/github"
    ]
};