# linkedINonymous
Reduce implicit bias in hiring by anonymizing LinkedIn profiles

## What this plugin does
- Removes profile pictures from LinkedIn
- Anonymizes the names of users on LinkedIn

## Why?
https://hbswk.hbs.edu/item/minorities-who-whiten-job-resumes-get-more-interviews

https://www.nytimes.com/2015/01/04/upshot/the-measuring-sticks-of-racial-bias-.html

http://gender.stanford.edu/news/2014/why-does-john-get-stem-job-rather-jennifer

In short, we suck at turning off our biases, even when we want to. Instead, let's evaluate resumes based on their merit, not on our cultural stereotypes.

## Development
Dependencies: `node`, `yarn`, `Google Chrome`
1. `git clone git@github.com:AnilRedshift/linkedINonymous.git`
1. `yarn`
1. `yarn start`
1. Navigate to `chrome://extensions` choose "Load Unpacked", and then select the `build` folder

## Building production versions
1. `yarn run build:prod` or `yarn run build:firefox:prod` for firefox

## Feedback
Please send feedback!

* Twitter: https://twitter.com/anilredshift
* Email: <mailto:help@terminal.space>
