# Task

This application has state management set in place. <br />
It's using [ngrx/store][store] to manage state and [ngrx/effects][effects] to make side effects,
particularly http requests. <br />

We use `services` to interact with the `store`

The nomenclatures we have established for our services are as follows.
The services are named with the appropriate domain and prepended with either `State`, `Set`, and `Effects`. 

Then, they are appended with `Service` to indicate that it is a service.

For example. 
* `StateUsersService` - This service will contain methods for accessing the state of the users entity.
* `SetUsersService` - This service will contain methods to manipulate the state of the users entity.
* `EffectsUsersServive` - This service will contain methods that will cause side effects involving the users entity.

## First task
* Access the state of the users from the `store` and pass them down to shared `card component`

#### Card Component
The component takes an `Input` of `cardTitle`, `cardText`, `avatarUrl`, and `cardHref`.
From the User object use `login` for `cardTitle`, `type` for `cardText`, `avatar_url` 
for `avatarUrl`, and `html_url` for `cardHref`.

_Use the Redux devtools so you can visually inspect the contents of the store_

[store]: https://github.com/ngrx/platform/blob/master/docs/store/README.md
[effects]: https://github.com/ngrx/platform/blob/master/docs/effects/README.md
