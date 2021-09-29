# interia-lc-demo

- [interia-lc-demo](#interia-lc-demo)
  - [Install and configure Inertia](#install-and-configure-inertia)

## Install and configure Inertia

- Create a new laravel project

    ```bash
    $ laravel new inertia-lc-demo
    $ php artisan --verion
    Laravel Framework 8.62.0
    ```

- Install `[inertia](https://inertiajs.com/server-side-setup)` via composer

  ```bash
  composer require inertiajs/inertia-laravel
  ```

- Add root template
- Add inertia middleware

  ```bash
  $ php artisan inertia:middleware
  Middleware created successfully.
  ```

- Install node dependencies for Vue3

  ```bash
  npm install @inertiajs/inertia @inertiajs/inertia-vue3
  ```

- Install Vue3 with single-file component support

  ```bash
  npm install vue@next
  npm install -D @vue/compiler-sfc
  ```

- Add inertia javascript bootstrap

  ```javascript
    import { createApp, h } from 'vue'
    import { createInertiaApp } from '@inertiajs/inertia-vue3'

    createInertiaApp({
        resolve: name => require(`./Pages/${name}`),
        setup({ el, App, props, plugin }) {
            createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
        },
    })
    ```
