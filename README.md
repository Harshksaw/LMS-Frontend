#LMS Fontend

### Setup Instruction

...
1.    git clone https://github.com/Harshksaw/LMS-Frontend.git

...

```
2.    Move into the Directory
       cd LMS-Frontend 
```

```
3.  Install Dependency ->
    npm i
```

```
4. run the server -> 
    npm run dev
```

### Setup Instruction for tailwind

 visit -> [(https://tailwindcss.com/docs/installation)]
 1. Install tailwind css

 ```
    npm install -D tailwindcss | postcss autoprefixer
 ```
 ```
    Config ->
    npx tailwindcss init
 ```

 
 ```
 Add tailwind file entension-> in tailwind.config.js->
   content: ["./index.html", "./src/**/*.{html,js}"],

 ```

 ```
4. add the tailwind directives at the top of the 'indexcss'

 npx tailwindcss init -p

 ```

 ### Adding Plugins and dependencies

 ```
  install dependecies ->
  ╰─ npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

 ```

###Configure auto import sort esline

 ```
  1. import eslint simple import
   npm i -D eslint-plugin-simple-import-sort
 ```
 2. Add rule in `eslint.cjs`
 3. add plugin 
 ```
 [..., 'simple-import-sort]
 ```

 4. To Enable auto import sort on file save in vscode
 ```
 -open `settings.json`
 -add the folling config

     plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports' : 'errors', 
    'react-refresh/only-export-components': [
      'warn',
 ```