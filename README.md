This is just a starting point to create a new React App with Webpack configuration.

## Available Scripts

In the project directory, you can run:

```npm dev```

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  package.json
  webpack.config.js
  app/
  	components/
  		hello-component.js
  	style/
    	app.css
    	logo.svg
  		favicon.ico
    app.js
    index.html
```

For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;
* `favicon.ico` is the icon you see in the browser tab;
* `app/app.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `app`. For faster rebuilds, only files inside `app` are processed by Webpack.  
You need to **put any JS and CSS files inside `app`**, or Webpack won’t see them.

You can, however, create more top-level directories.  
They will not be included in the production build so you can use them for things like documentation.