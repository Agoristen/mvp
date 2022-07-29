# Vue 3 project + library integration issue

I have created a project and a library. When trying to include the library in project I get this error:

`runtime-core.esm-bundler.js:38 [Vue warn]: Invalid VNode type: Symbol() (symbol)
at <VJstree ref="release" datz= [{…}] >
at <App>`

Research online seems to indicate that this error is from running multiple Vue instances, but I'm not sure how to fix the problem. 
## Project Setup

First enter example-library and follow README

Then go to example-project and follow README

## For every change you need to run

### In example-library directory

```sh
npm run build
yalc push
```

### In example-project directory
Restart this process
```sh
npm run dev
```
