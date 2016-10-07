import _ from 'lodash';
import Box from './box';

const singleton = Symbol('singleton');
const prototype = Symbol('prototype');

/**
 * A decorator that sets whether or not a factory is a singleton
 *
 * @param {Symbol} serviceScope
 * @returns {function()}
 */
const scope = (serviceScope = singleton) => {
    return (factory) => {
        // if (_.isFunction(factory.createInstance)) {
        //     let serviceFactory;
        //
        //     if (!Box.isFactoryRegistered(factory)) {
        //         serviceFactory = Box.registerFactory(factory);
        //     } else {
        //         serviceFactory = Box.getFactory(factory);
        //     }
        //
        //     serviceFactory.setScope(serviceScope);
        // } else {
        //     throw new Error(`The factory ${factory.name} has a non-standard interface.
        //     Please create one with a static method "createInstance"`);
        // }

        if (_.isFunction(factory.createInstance)) {
            Box.setFactoryScope(factory.createInstance, serviceScope);
        } else {
            throw new Error(`The factory ${factory.name} has a non-standard interface.
            Please create one with a static method "createInstance"`);
        }
    };
};

export {singleton, prototype, scope};