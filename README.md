# Radiuss Home

![assets/img/radius-text.png](assets/img/radius-text.png)

[![License](https://img.shields.io/badge/License-MIT%203--Clause-blue.svg)](https://github.com/rse-radiuss/rse-radiuss.github.io/blob/main/LICENSE)
[![CircleCI](https://circleci.com/gh/rse-radiuss/rse-radiuss.github.io/tree/main.svg?style=svg)](https://circleci.com/gh/rse-radiuss/rse-radiuss.github.io/tree/main)

This project is part of [RADIUSS](https://computing.llnl.gov/projects/radiuss), which
has a focus on helping open source scientific projects use best practices for
automation and development.

## How does it work?

### Policy

Each policy point defined at [the policy home](https://rse-radiuss.github.io/policy) is rendered from data files in [_data/policy](_data/policy). Thus, if you want to tweak the policy points, you should edit the data file. If you want to add a new category under policy, you can add a page under [docs/policy](docs/policy).

### Posts

The posts are automatically updated on a nightly bases, retrieved from [llnl.github.io](https://github.com/LLNL/llnl.github.io). Since these posts are for LLNL open source software, they are of course relevant for RADIUSS.

### Organization

The following organization is used:

 - [pages](pages): holds top level pages under "Documentation" (which is also included there)
 - [docs](docs): generally include subpages of top level documentation pages. For example, the policy.md file is found in pages, but the subpages for that are under [docs/policy](docs/policy).
 - [_posts](_posts): where LLNL posts are automatically added. You can add new content here and it won't be erased.
 - [_includes](_includes) and [_data](_data) are standard to Jekyll. You can read more about Jekyll [here](https://jekyllrb.com/docs/)


## Development

#### Previewing the Site

To preview the site locally, you'll need to [install jekyll](https://jekyllrb.com/docs/installation/)
It's then typical to go to the root of the site and issue (just once):

```bash
$ bundle install
```

And then (also in the top level directory of your forked repository) run 

```bash
$ jekyll serve
# or
$ bundle exec jekyll serve
```

and open your browser to <http://localhost:4000>.
If you are having trouble try `rm -rf _site`, followed by `bundle update`, then `bundle exec jekyll serve`.

For pull requests we use CircleCI to preview the site on any pull request. After it finishes building, make sure you are logged in
and following the repository, and then click on the "Artifacts" tab. You can select the static
file to open and preview in your browser.


## Automation

### News Updates

The workflow [update-posts.yaml](.github/workflows/update-posts.yaml) is run nightly to retrieve new posts, and push them to the site.

## Coming Soon

We will soon be adding or working on:

 - A linked page of the automated container builds
 - A RESTful API to retrieve policy rules
 - A single page print view of all policies
 - More that @vsoch hasn't properly formulated yet :)

## Thanks

This interface would not be possible without the following supporting projects!

 - [stately](https://github.com/pmarsceill/stately/) covered by an [MIT LICENSE](https://github.com/pmarsceill/stately/blob/e4ac35c5fa54dc8ffa9e56856ec4fc04ad4f8d36/LICENSE.txt)
 - [particles.js](https://github.com/VincentGarreau/particles.js/) covered by an [MIT LICENSE](https://github.com/VincentGarreau/particles.js/blob/3e4f236d2698cec74fc9a43ecb6b9c51500d3a4a/LICENSE.md)

License
-------

Copyright (c) 2017-2021, Lawrence Livermore National Security, LLC. 
Produced at the Lawrence Livermore National Laboratory.

The RADIUSS documentation is licensed under the MIT license [LICENSE](./LICENSE).

Copyrights and patents in the RADIUSS project are retained by
contributors. No copyright assignment is required to contribute to RADIUSS
Docker.

This work was produced under the auspices of the U.S. Department of
Energy by Lawrence Livermore National Laboratory under Contract
DE-AC52-07NA27344.
