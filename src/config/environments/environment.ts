/* The code is defining a constant variable named `environment` using the `export` keyword, which means
it can be accessed from other files. The value of `environment` is an object that has four
properties: `production`, `services`, `endpoints`, and `cors`. */

export const environment = Object.freeze({
  production: true,
  services: {},
  endpoints: {},
  cors: {},
});
