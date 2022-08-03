#### vue https://sanghunoh.github.io/learn_vue/
+ official nodejs : https://nodejs.org/
+ official npmjs : https://www.npmjs.com/
+ official vuejs : https://vuejs.org/. 
### first time
```
$ node -v. 
$ npm -v
$ npm install vue@next
$ vue --version
$ npm init @vitejs/app learn_vue
$ cd learn_vue
$ npm run dev

$ npm install axios
$ npm install -g bootstrap@next
$ npm install vue-router@next
```
### first times from github
```
$ npm install
```
#### vscode Extension : Vue Volar extension Pack (or vetur, vue 3 snippet, prettier-code formatte)
#### vue Devtools
+ https://chrome.google.com/webstore > [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

#### build mode : production, development, none
#### refer : 
+ 실무 프로젝트에 적용하면 좋은 내용 정리 : https://jess2.xyz/vue/vue-tip/
+ https://youtube.com/playlist
+ https://mailtrap.io/ 

### useful Tools

- webpack : https://webpack.js.org/
- Typescript web https://www.typescriptlang.org/play
- JavaScript : https://codepen.io/
- VScode Extention : Vuter, Vue3 Snippet, Prettier -> Vue Extension Pack
- VScode UI Setting : Menu > Code > Preference > Settings
  - search 'format' > Check Editor:Format On Save
  - search 'default format' > Select 'Prettier-Code Formatter' on Editor:Default Formatter.

| 주제 | 주요 항목 | 작성 | 참조 |
| :---: | --- |  --- | :---: |
|맛보기|CDN vue, with Go Live|[html](./vue_with_cdn.html)|[uri](https://v2.vuejs.org/v2/guide/installation.html?redirect=true)|
|config|nodejs,npmjs,vue|[js](./helloworld.js), [vue](./src/App.vue)||
|text bind|mustache, v-text, v-html|[vue](./src/apps/App_text-binding.vue)| |
| v-bind| attribute / style v-bind |[vue](./src/apps/App_attribute-binding.vue), [vue](./src/apps/App_style-binding.vue) | |
|condition| v-if, v-show, template|[vue](./src/apps/App_if-randering.vue) | |
|condition| v-for|[vue](./src/apps/App_for.vue)| |
|function|methods|[vue](./src/apps/App_methods.vue)||
|Event|Events|[vue](./src/apps/App_events.vue)||
|Form|Form, IMU(Input Method Editor) issue|[vue](./src/apps/App_forms.vue)||
|directives|directives|[vue](./src/apps/App_directives.vue)||
|computed|cache되어 method보다 performance 유리|[vue](./src/apps/App_computed.vue)||
|watch|watch|[vue](./src/apps/App_watch.vue)||
|components|provide inject|[vue](./src/apps/App_componets_provide_inject.vue)||
|components| composition props |[vue](./src/apps/App_componets_props.vue)||
|components|$emit, receive from chind to parent|[vue](./src/apps/App_componets_emit.vue)|useually vuex|
|components|Components Dynamic|[vue](./src/apps/App_components_dynamic.vue), [vue menu](./src/apps/App_Dynamic_Menu.vue)||
|components|slot|[vue](./src/apps/App_slot.vue)||
|teleport|teleport|[vue](./src/apps/App_teleport.vue)||
|http request|axios|[vue](./src/apps/App_httpRequest.vue)||
|life cycle|life cycle||[vue](./src/apps/App_lifecycle.vue)|
|refs|refs|[vue](./src/apps/App_refs.vue)||
|mixins|mixins|[vue](./src/apps/App_mixins.vue)|vue2|
|composition API|composition data|[vue](./src/apps/App_Composition-data.vue)|vue3|
|composition API|composition method|[vue](./src/apps/App_composition-methods.vue)|vue3|
|composition API|composition watch|[vue](./src/apps/App_composition-watch.vue)|vue3|
|composition API|composition lifecycle|[vue](./src/apps/App_composition-lifecycle.vue)|vue3|
|composition API|composition reusability|vue3|[vue](./src/apps/App_composition-reusability.vue)|
|router|router-view, router-liink|[vue](./src/apps/App_routers.vue)|[youtube](https://youtube.com/playlist?list=PLZzSdj89sCN0IRcwT4lJWg_qgfBFmcF6A)|
|composition API|shared global state|[vue](./src/apps/App_shared-states.vue)||
