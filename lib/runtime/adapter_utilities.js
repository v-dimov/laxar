/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */

/**
 * Several factory methods for creating error objects that are useful for almost any adapter.
 *
 * @module adapter_utilities
 */

/**
 * Creates an instance of the adapter utilities.
 *
 * @return {AdapterUtilities}
 *   a collection of methods to create error messages commonly generated by widget adapters
 *
 * @private
 */
export function create() {

   /**
    * Provides access to the configuration that was passed during application bootstrapping.
    *
    * A *Configuration* instance provides convenient readonly access to the underlying LaxarJS
    * application bootstrapping configuration. The configuration values are passed to
    * {@link laxar#create()} on startup (before LaxarJS v2.x, these configuration values were read from
    * `window.laxar`). When using the LaxarJS application template, the configuration values are set in the
    * file `init.js` under your project's root directory.
    *
    * @name AdapterUtilities
    * @constructor
    */
   return {

      /**
       * Creates (but does not throw) an error indicating that an activity tried accessing the DOM.
       *
       * @param {Object} details
       *    details for the error
       * @param {String} details.technology
       *    the complaining adapter's technology
       * @param {String} details.widgetName
       *    the canonical name of the activity causing the problem
       *
       * @return {Error}
       *    the error, ready to throw
       */
      activityAccessingDom( { technology, widgetName } ) {
         return new Error( `${technology} adapter: Trying to access DOM in activity ${widgetName}` );
      },

      /**
       * Creates (but does not throw) an error indicating that a widget requested an injection that cannot be
       * provided by the adapter.
       *
       * @param {Object} details
       *    details for the error
       * @param {String} details.technology
       *    the complaining adapter's technology
       * @param {String} details.injection
       *    the failing injection
       * @param {String} details.widgetName
       *    the canonical name of the widget causing the problem
       *
       * @return {Error}
       *    the error, ready to throw
       */
      unknownInjection( { technology, injection, widgetName } ) {
         return new Error(
            `${technology} adapter: ` +
            `Trying to inject unknown service "${injection} into widget "${widgetName}"`
         );
      },

      /**
       * Creates (but does not throw) an error indicating that a widget was not registered with the current
       * adapter.
       *
       * @param {Object} details
       *    details for the error
       * @param {String} details.technology
       *    the complaining adapter's technology
       * @param {String} details.widgetName
       *    the canonical name of the missing widget
       *
       * @return {Error}
       *    the error, ready to throw
       */
      unknownWidget( { technology, widgetName } ) {
         return new Error( `${technology} adapter: Unknown widget: ${widgetName}` );
      }
   };
}
