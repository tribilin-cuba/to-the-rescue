# Contributor guidelines

We are excited about receiving all kinds of contributions from people around the world that want to help vulnerable animals in Cuba - just in Cuba so far :wink:.
That's why we want to guide you through the process of contributing to this project so the time and effort of all contributors can really make a difference.

In the next sections we'll be talking about the scope of contributions and the steps you need to follow so your contribution can reach the vulnerable animals
out there.

## Scope of contributions

What can you contribute with? Almost with anything related to this project. The following is a non-exhaustive list of areas in which you can contribute:

* :books: Documentation
* * For users
* * For developers
* :bug: Bug fixing and refactoring
* :star: New features
* :smiley: New projects (new mobile app for example :sweat_smile:)

As you can see, a lot of work can be done!

Of course, if you want to help in another way, like promotion for example, you can reach us in our social media in the [about us page](https://tribilin.netlify.app/about-us).
This guide is for contributions associated with the development of the projects.

So, what do you have to do to contribute?

## The contribution workflow

It seems you are doing quite well because the first step for contributing is reading this guide! Now, let's talk about the following steps.

### Step 2: Read issues and pull-requests

You maybe found a bug, or want to add some documentation but, what happen if there is another person working on that?

We strongly recommend you to read the issues in the repo as well as the pending pull-requests so you can focus your energies on something new and don't waste your
time.

### Step 3: Write an issue

Once you are sure nobody is working in what you want to contribute with, it's time to let others know that you are working on it! This way, new contributors can avoid
working in what you are doing. It is also a great place to discuss about ideas and recommendations. It can also happen that people who manage the projects won't
agree with the kind of contribution you propose for several reasons. Make sure everybody is ok with what you will be doing before starting to work! 

Make sure **to label your issue appropriately**. We'll be talking about labeling in the **Step 5**.

In case your contribution is originated from a report of others and that report was written in an issue, make sure to open a new issue so we can close the report issue
with yours.


### Step 4: Fork this repo

There is not too much to add. Just fork this repo cause you are going to work in your forked version.

### Step 5: Create a branch from dev

After forking this repo and cloning it to your local environment, you need to checkout to the ```dev``` branch and create a new branch from there. We have a convention
for branch naming:

The name of your branch should follow the format: ```<your identifier>/<label>/<short description>```. Let's explain this further:

* ```your identifier```: can be your name or any nickname you want to be identified with. E.g. ```jose```, or ```awesome-dev```
* ```label```: we have multiple predefined labels you should use according with the kind of contribution you want to do:
* * ```doc``` for documentation related contributions
* * ```fix``` if you want to fix a bug
* * ```feat``` if you want to add any new feature. E.g. adding maps, making a new mobile application, etc
* * ```ref``` if you want to refactor some parts of the existing codebase

The ```short description``` explains what you will be doing. It should be written in Pascal case.

Examples of valid branch names are:

* ```jose/doc/AddUserManual```
* ```awesome-dev/feat/CreateMobileApp```

#### Notes on commits

We also have commit messages conventions. Your commit message should respect the following format:

```plain
<label><!(if it is a chain breaker)>: <brief explanation>

<Optional body to explain your changes further>
```

For the label just apply what we've explained before. The ```!``` sign only has to be included if your changes are incompatible with the previous version of the app.
Usually, if this happens, it is good that you add the optional body with a detailed explanation of what has been broken and how to fix it. The brief explanation should
complete the sentence _If you apply this commit it will..._. The message header should be written in lowercase. Examples of valid commit messages are:

* ```doc: add a user manual to documentation```
* ```plain
    ref!: create some utility functions to reuse
    
    You need to import the getDBConnection function from utils in the backend whenever you need to connect to the DB
  ```
  
### Step 6: Make a pull request to the dev branch of the original repo

After you have completed your work and **have made sure all the test passed after your changes (whenever it applies)**. You can proceed to make a pull-request to the
**dev** branch of this repo. Please, write a detailed description of the changes you have made so it will be easier to make a review. Make sure you link the issue you
published at the beginning of the process.

The review process can take a while and we can have some nice debates about your changes. The result of such review could be:

* **Change request:** we detected some things we want you to change or fix. You can do it and make a new pull request with the changes
* **Not accepted:** we don't think your changes should be accepted. Sometimes it could be due to some violations of the rules stated above.
* **Accepted!!!:** we think you have done it quite well and we'll merge your work in the repo!

Please note that this is a work that is done in community. We watch for every member of this community to be respectful with others. We won't tolerate any offensive
or violent comment! All the critics should be constructive and with good faith.

## Final notes

We hope we haven't overwhelmed you with so many rules and conventions. We want everyone to feel encouraged to contribute to this project and to help vulnerable animals.
They really need it!

These rules are formulated with the spirit of organize and optimize the way everyone contributes. It is difficult sometimes to organize the work of so many people!

So, what are you waiting for?
