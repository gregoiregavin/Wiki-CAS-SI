<p align="center">
    <img alt="Gatsby" src="https://i.imgur.com/aYAwoNa.png" width="200" />
</p>
<h1 align="center">
  Bean
</h1>

WIKI-CAS-SI1 (pronounce '**Bean**') is an exploration website based on open source technologies such as [Gatsby](https://www.gatsbyjs.com/) and [Strapi](https://strapi.io/). These have been choosen for their high adaptable and scalable structure for both frontend and backend users. Bean is developed at the EPFL, aiming at first to provide a tool for teaching in the [CAS pour l'enseignement de la Science Informatique en secondaire 1](https://www.epfl.ch/education/educational-initiatives/fr/le-projet-edunum-le-cas-si/cas-si).

_Please note that the project is under development and is not deployed nor testable online._

## 🚀 Installation

_Should work on any Unix system, yet I tested on Ubuntu 22.04 LTS only._

1. **Prerequisites**

     [**Node.js**](https://nodejs.org/en/download/) _(v.16.x.x LTS)_ to run the local Javascript server, execute frontend and backend commands and install packages via the Node Package Manager (NPM).
     
      ```shell
     # to check if Node is installed
    node --version # expected : v.16.x.x
    ```
     
     [**GitHub Desktop**](https://desktop.github.com/) **(recommended)** to clone this repository. GitHub Desktop provides a nice GUI, keeping things simple and removing some complexity like the use of ssh-agent. For Ubuntu, see [github_ubuntu_desktop.sh](https://gist.github.com/berkorbay/6feda478a00b0432d13f1fc0a50467f1).
     
     _You may need to restart your computer or terminal to complete installations._

2. **Gatsby CLI installation**

    Globally install the Gatsby Command Line Interface (CLI) NPM package.    
    
    ```shell
    # install gatsby cli
    npm install -g gatsby-cli
    ```
    ```shell
    # check installation
    gatsby --version # expected : Gatsby CLI version: 4.16.0
    ```
    
_If you get stucked at Node, Git or Gatsby CLI installation, additional help can be found [here](https://www.gatsbyjs.com/docs/tutorial/part-0/)._

3. **Clone this project**

    Using GitHub Desktop, or using Git :
    ```shell
    
    # go to your dev repo
    cd my-dev-repository
    
    # clone the project
    git clone https://github.com/gregoiregavin/Wiki-CAS-SI.git
    
    ```
4. **Install front-end dependencies**

    Go to the project root and install all [Gatsby dependencies](https://github.com/gregoiregavin/Wiki-CAS-SI/blob/master/package.json) :
    
    ```shell
    
    # go to your dev repo
    cd wiki-cas-si
    
    # install depedencies
    npm install
    
    ```

5. **Install back-end dependencies**

    Go to the project `/backend` folder and install all Strapi depedencies :
    

    ```shell
    
    # go to the /backend repo
    cd backend
    
    # install depedencies
    npm install
    
    ```

## :triangular_ruler: Configuration
    
## :turtle: Roadmap
- [ ] coucou
- [ ] casd
- [x] asdsad

## :purple_heart: Philosophy

Bean is a project with some philosophical and societal values we intent to share in the field of education.

choix des technos : 

Inclusive
Simple UX/UI
Open Data
User rights management
Scalability
Portability
Accessibility
Vanilla
