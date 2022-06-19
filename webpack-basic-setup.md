# How to bundle a react, typescript-based web application using webpack?


While setting up a modern web application, we tend to get into the zone of never-ending brainstorming of architectural decisions, tech stack, bundling, benchmarking, performance, and many other aspects. 

To kick start the project, we would start with a build setup. In the era of vanilla JS  web applications, we would manually add the js file and all dependencies in the script tag those needed to render the page.

We have multiple open source bundler options available now, which would save us from this tedious task. You can find a good article about the comparison [here]( https://snipcart.com/blog/javascript-module-bundler). This article will focus on building a basic bundler setup using webpack.

![Discussion](https://media.giphy.com/media/ZB2FawJQBLR9KzdzUR/giphy.gif "Discussion")


## Why do we need a bundler?

Bundlers play a crucial role while building a modern web application. It generates a single file (or a few files) that are required to run your application on the browser in an optimized way. 

It takes care of dependency management pain and provides out-of-the-box optimization options like chunk/code-splitting, a way to enable code sharing using federation, HMR (Hot module replacement) for better dev-ex, great error logs, and many other tooling support.

![bundling](https://media.giphy.com/media/xUySTQ6Ed5CVlxNgQ0/giphy.gif "bundling")

> In a nutshell, the webpack bundling process consists of mapping all the dependencies by referencing the entry points and parsing through the entire file. Once that's done, it would update the decencies of these dependencies.

> In the process, it marks the unused files which aren't required. It creates an order in which the dependency must resolve when it is being requested by the client. You can refer to this official doc for a detailed [explanation](https://webpack.js.org/concepts/)

## Few webpack configuration jargons we should understand
 
#### Entry:
We should specify our application execution entry point. In the case of multiple entry points, we can mention them in an array.

#### Output:
This is the output path where webpack would save bundled files. We can use this static folder to serve the resource to the client application. We can specify content hash to name these output files so that it would help us burst the cache during the new deployment.

#### Loader:
 As webpack is just a bundler, only understand Javascript and JSON files. We should use the correct loader to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

#### Plugins:
It's a powerful concept and building block of webpack itself.
In simple terms, it's a javascript object with an apply method that would get executed by webpack during compilation.

### Webpack setup
> While setting up a webpack production-ready configuration, it's good to create a base configuration with generic attributes and use this config to create the dev and prod configurations with the help of webpack merge functionality.

I had to use a few loaders to mention webpack whenever it finds a file other than js or JSON to use these loaders to read specified format of files. Below are the loaders I have used in the example.

##### ts-loader: 
loader to compile all typescript files.

##### sass-loader: 
to process scss type of files( prettier to format these files).
[![Screenshot-2022-06-12-at-12-23-53-PM.png](https://i.postimg.cc/WzhHJ1Ry/Screenshot-2022-06-12-at-12-23-53-PM.png)](https://postimg.cc/N2v43Yj8)

I have used a few generic plugins and find below the detail for the same.
##### CleanWebpackPlugin(): 
This plugin helps us remove all the files which reside in the output path before compilation.

##### HtmlWebpackPlugin():
This plugin helps create an HTML 5 file with the webpack-generated bundles attached to the body using a script tag. If you want a specific template then you can mention that file path, which may be ideal for cases where we have to custom description, meta tags, etc.

##### ForkTsCheckerWebpackPlugin():
This speeds up type checking by moving it to a separate process. To do this you should create a tsconfig file for your project.

##### ESLintPlugin():
This plugin uses eslint to find and fix all the javascript, typescript related issues, one of the famous eslint configs which keep your repo consistent is eslint-airbnb-config.
[![Screenshot-2022-06-12-at-12-29-49-PM.png](https://i.postimg.cc/L51Gb8y1/Screenshot-2022-06-12-at-12-29-49-PM.png)](https://postimg.cc/jnR8WtYx)

##### Few development configuration pointers come in handy.
- Enabling inline-source map for better-debugging capability
- HotModuleReplacementPlugin for instant change reflection and dev server configuration, another way to serve these files is by running an express server.
- specifying different ouput path if required.

[![Screenshot-2022-06-12-at-12-33-23-PM.png](https://i.postimg.cc/KzN1gm7t/Screenshot-2022-06-12-at-12-33-23-PM.png)](https://postimg.cc/ygD1M4bN)
 
#### How do these web pack config file looks?

You can find the entire setup code here:  [repo link](https://github.com/MadhuAloor/react-webpack-template) .
Feel free to raise a PR to update, modify the content.

