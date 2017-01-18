# Contributing to devdocs-electron

I'd love to have your help improving devdocs-electron! If you'd like to pitch in, you can do so in a number of ways:

1. Look through open [Issues](https://github.com/jgarber623/devdocs-electron/issues).
2. Review any open [Pull Requests](https://github.com/jgarber623/devdocs-electron/pulls).
3. [Fork devdocs-electron](#get-set-up-to-contribute) and fix an open Issue or add your own feature.
4. File new Issues if you have a good idea or see a bug and don't know how to fix it yourself. _Only do this after you've made sure the behavior or problem you're seeing isn't already documented in an open Issue._

I definitely appreciate your interest in (and help improving) devdocs-electron. Thanks!

## Install development dependencies

devdocs-electron is built atop [Electron](http://electron.atom.io/) which itself is built atop [Node.js](http://nodejs.org/). If you're using a Mac, the easiest way to install Node.js (and plenty of other great tools) is with [Homebrew](http://brew.sh/):

```sh
brew install node
```

If you're using a different operating system, use a different package manager, or prefer not to use Homebrew, check out the [Node.js Downloads page](http://nodejs.org/download/).

## Get set up to contribute

Contributing to devdocs-electron is pretty straightforward:

1. Fork the devdocs-electron repo and clone it.
1. Install development dependencies by running `npm install` from the root of the project.
1. Create a feature branch for the issue or new feature you're looking to tackle: `git checkout -b your-descriptive-branch-name`.
1. _Write some code!_
1. Commit your changes: `git commit -am 'Add some new feature or fix some issue'`.
1. Push the branch to your fork of devdocs-electron: `git push origin your-descriptive-branch-name`.
1. Create a new Pull Request and I'll give it a look!


## Code Style

Code styles are like opinions: Everyone's got one and yours is better than mine.

Basically: Follow the conventions you see in the existing source code as best as you can.

devdocs-electron's formatting guidelines are defined in the `.editorconfig` file which uses the [EditorConfig](http://editorconfig.org/) syntax. There are [a number of great plugins for a variety of editors](http://editorconfig.org/#download) that utilize the settings in the `.editorconfig` file. Using EditorConfig will make your time spent coding a little bit easier.

Your bug fix or feature addition won't be rejected if it runs afoul of any (or all) of these guidelines, but following the guidelines will definitely make everyone's lives a little easier.
