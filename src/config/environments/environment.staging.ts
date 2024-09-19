/* The code is defining a constant variable named `environment` and exporting it. The `environment`
object is being created using `Object.freeze()` which makes the object immutable, preventing any
modifications to its properties. The object has four properties: `production`, `services`,
`endpoints`, and `cors`. The `production` property is set to `false`, indicating that the code is
not running in a production environment. The `services`, `endpoints`, and `cors` properties are all
empty objects. */

export const environment = Object.freeze({
  production: false,
  services: {},
  endpoints: {},
  cors: {},
});
