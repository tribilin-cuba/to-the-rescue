# Tribilin

A project to help vulnerable animals in Cuba - just in Cuba so far.

## Website

Here we have implemented our website called **Tribilin**. It is a system to publish alerts about adoptions, animals in the street in critical condition, lost animals, etc.
We hope we can make a powerful tool to help animals out of **Tribilin** and with the help of the developer community.

You can view the production website [here](https://tribilin.netlify.app)

## Tools used

Everything has been done using JavaScript (React + Express). We also use Deta to store pictures in the cloud. We are open to adopt as many different languages and technologies as
needed.

## Project organization

This is a monorepo. The idea is that all the projects can be added here. So we think we need to make some clarifications about organization of this repo

### Branching

We have three important branches:

* ```main```: here we have the last stable version of the website. This branch is only updated by merging pull-requests from ```master```
* ```master```: here we have the last version of the website. This is the staging version that we need to test before declaring it stable. This branch is only updated by merging
pull-requests from ```dev```
* ```dev```: the development version. This is the default branch and the first place when the accepted contributions go to.

The rest of the branches are created by contributors. To learn about branches naming conventions in this project, please read the ```CONTRIBUTING.md``` document.

### Projects

So far we have only the frontend and the backend of the website. Any upcoming project would be placed at the same level of those. To run both projects you just need to follow
the these steps. We assume you have ```Node.js``` and ```yarn``` installed in your local environment.

* Clone this repo. You'll be cloning the ```dev``` branch
* Go to the ```frontend```/```backend``` directory (whatever you want to run)
* Run ```yarn```
* After dependencies have been installed run ```yarn start```

This also asumes you have a MongoDB server in your local environment and that it is running in the default url (_mongodb://localhost:27017_).

With both frontend and backend running you'll have the website running in your local environment!

### Running tests

The backend project is provided with unit tests. To see those test results you can run ```yarn test``` in the ```backend``` directory.

## Contributing

We encourage all developers to contribute with this project. Any help will be very welcome. Just make sure to read the ```CONTRIBUTING.md``` document where we give the instructions to make organized and fruitful contributions.

If you are not a developer but want to help with promotion or anything else, please reach us through our social media pages that you can find in the [about us page](https://tribilin.netlify.app/about-us) in **Tribilin**
