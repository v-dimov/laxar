
# <a id="laxar"></a>laxar

The API entry point for boostrapping LaxarJS applications.
Also, provides a couple of utilities to deal with assertions, objects and strings.

## Contents

**Types**

- [laxar](#laxar)
  - [laxar.bootstrap()](#laxar.bootstrap)
  - [laxar.instances()](#laxar.instances)

## Types

### <a id="laxar"></a>laxar

#### <a id="laxar.bootstrap"></a>laxar.bootstrap( anchorElement, optionalOptions )

Bootstraps AngularJS on the provided `anchorElement` and sets up the LaxarJS runtime.

##### Parameters

| Property | Type | Description |
| -------- | ---- | ----------- |
| anchorElement | `HTMLElement` |  the element to insert the page in |
| _optionalOptions_ | `Object` |  optional options for bootstrapping |
| _optionalOptions.widgetAdapters_ | `Array` |  widget adapters that are used in this application |
| _optionalOptions.configuration_ | `Object` |  configuration for the laxar application. See http://laxarjs.org/docs/laxar-latest/manuals/configuration/ for further information on available properties |
| _optionalOptions.artifacts_ | `Object` |  an artifact listing for the application, generated build tools (webpack / grunt-laxar) |

#### <a id="laxar.instances"></a>laxar.instances( optionalName )

Provide tooling access to LaxarJS services.

Each laxar#bootstrap call creates a new set of services such as a logger, global event bus etc. For tools
like the laxar-developer-tools-widget, it may be necessary to access these services for a given instance,
or for all instances.

##### Parameters

| Property | Type | Description |
| -------- | ---- | ----------- |
| _optionalName_ | `String` |  The configuration name of a LaxarJS instance to inspect. May be omitted to access all application instances by name. |

##### Returns

| Type | Description |
| ---- | ----------- |
| `Object` |  The tooling services for a specified instance, or for all instances that have tooling enabled. |