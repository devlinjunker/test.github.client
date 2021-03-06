# How to Contribute!

Thanks for helping out!

## Reporting Issues

The best way to [report an issue is through Github](../../issues). The owners of the repo should get an email notification whenever a new issue is created.


## Development

### Environment Setup and Tools

_TODO: Detail the steps to setup the project for development_


### Folder Structure

_TODO: Break down how each folder is used in the repo and how different code file types should be organized (config/view templates/controllers/models)_

```
- .github/
|-- ISSUE_TEMPLATE/  
|---- (Github Issue Template Files)
|-- workflows/
|---- (Github workflow .yaml files)
|-- (other github specific files)
- (project config files and READMEs)
```



### Scripts

_TODO_

Git hooks and Github workflows/actions can be extremely useful for streamlining processes and typical developer actions, or verifying that standards are met. This section should be used to document these and how they should be used in the developer workflow.

#### Hooks
Git Hooks can be added in the `.git/hooks` directory (or you can create a symbolic link to another place in the repo so they can be committed for every developer.

e.g. if you store the hook scripts in `./hooks`, on unix boxes the command would be `ln -s ./hooks/ ./.git/hooks` if you are in the repo's root directory.

To create a hook, you'll need to add a script file to the directory with the name of the hook from [this list](https://git-scm.com/docs/githooks#_hooks).

e.g. to run a script before a commit is saved (to verify the contents of the commit, verify the app builds, etc) you would create `./.git/hooks/pre-commit.sh`

#### Workflows
[Git Workflows/Actions](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) are added in `.github/workflows`. These are defined by .yaml files that define when the workflow should run and the steps it should take. Github can then enforce that these workflows are successful before Pull Requests are merged via the [Branch Settings Page](../../settings/branches).

#### Shell scripts
Shell scripts can be created to help with deployment/installation or running the software.  

### Style Guide

_TODO_


### Branching and Pull Requests

I'm going to talk about my own strategy in this document, this way my projects will _hopefully_ all use the same-ish workflow. Feel free to use/modify/change this for your project.

It is good practice to create a Git commit on the current branch at the end of each night that you are coding. If you forget, the next best practice is to create a commit of the old changes as the first thing whenever you begin to code on the project again. This way you can easily revert or stash and be back to the beginning of your current coding session.

Each feature that is created should be in it's own `feature-` branch in the git repo. Once the changes in the feature branch are completed and tested, you should create a Pull Request (PR) against the `master` branch. This repo should use a Pull Request Template to fill out and help explain the feature and changes you are making. Once this PR is approved, you can merge to the `master` branch.

```
 --o--o--o`master-HEAD`                                  --o--o------o`master-HEAD`
    \                         -> after merge to master      \       /
     o--o--o`feature-XXX-HEAD`                               o--o--o
```

If this is a larger feature (> 1 week of real time) or you think it will be useful to document each step/get feedback on smaller pieces, then it is best to create a new branch (`branch-1`) off of the feature branch for the smaller pieces of code. After a section of the larger feature is completed, or if you think feedback would be useful, you can create a Pull Request (PR) on Github from the `branch-1` to the `feature-*` branch.

```
 --o--o--o`master-HEAD`                                           --o--o--o`master-HEAD`                                          --o--o--o-------o`master-HEAD`
    \                                                                \                                                               \           /
     o--o--o`feature-XXX-HEAD`    -> after merge to feature           o--o------o`feature-XXX-HEAD`     -> after merge to master      o--o------o`feature-XXX-HEAD`
         \                                                                \    /                                                          \    /
          o--o`branch-1-HEAD`                                              o--o                                                            o--o
```

**Note:** After you create the PR, any new changes that are unrelated to the code changes in the PR should be in a new branch (`branch-2`) that starts at the end of `branch-2`.

```
 --o--o--o`master-HEAD`                                           --o--o--o`master-HEAD`                                            --o--o--o`master-HEAD`
    \                                                                \                                                                 \           
     o--o--o`feature-XXX-HEAD`    -> after 1st merge to feature       o--o------o`feature-XXX-HEAD`  -> after 2nd merge to feature      o--o------o----o`feature-XXX-HEAD`
         \                                                                \    /                                                          \    /      /
          o--o`branch-1-HEAD`                                              o--o                                                            o--o      /
              \                                                                \                                                               \    /
               o`branch-2-HEAD`                                                 o--o`branch-2-HEAD`                                             o--o
```


### Code Reviews

Code Reviews are an important part of the software development process. They help to maintain quality and inform other developers of changes to the code. Make sure Pull Request descriptions are completely filled out, include thoughts, links, issues you faced or any other details relevant to the changes.

**Tips:**

 - Make sure to ask any questions you can come up with to ensure you understand what the changes are doing.
 - Review the logic of the code to be sure that it is doing what the author says it should
 - Try to think of any edge cases they may have missed.
 - Ensure formatting and style guide is followed
 - [5 antipractices of Code Reviews](https://blogs.oracle.com/javamagazine/five-code-review-antipatterns)
