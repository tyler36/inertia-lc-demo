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
