themeManager.js:98 fix name: to id: dark
###
add documents etc. to file explorer
###
index.js: open_project

```js
if (!cache.projects.includes(json.data.path)) cache["projects"].push(json.data.path);
```
###
add timestamp to project cache
###
sort them by timestamp in main menus
###
remove .light thing from everywhere
###
add language section to main menu with emoji/logo of translators
###
add theme section to main menu with emoji/logo of a canvas
###
in project.html decodeURI the window.location.href
###
remove the Group class and add a group section to Scene class
###
make a render process to scene

```js
  update() {
    this.entities.forEach(i => {
      i.update();
      if (i.model) i.model.draw(this.ctx, i, i.clone());
    });
  }
}

setInterval(() => Scene.ctx ? Scene.getInstance().update() : null, 10);
```

###
Make all public class out of async function
