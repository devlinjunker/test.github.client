/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OneOfstringobjectarray from './OneOfstringobjectarray';

/**
 * The ScimUserOperations model module.
 * @module model/ScimUserOperations
 * @version 0.0.5
 */
class ScimUserOperations {
    /**
     * Constructs a new <code>ScimUserOperations</code>.
     * @alias module:model/ScimUserOperations
     * @param op {module:model/ScimUserOperations.OpEnum} 
     */
    constructor(op) { 
        
        ScimUserOperations.initialize(this, op);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, op) { 
        obj['op'] = op;
    }

    /**
     * Constructs a <code>ScimUserOperations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimUserOperations} obj Optional instance to populate.
     * @return {module:model/ScimUserOperations} The populated <code>ScimUserOperations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimUserOperations();

            if (data.hasOwnProperty('op')) {
                obj['op'] = ApiClient.convertToType(data['op'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], OneOfstringobjectarray);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ScimUserOperations.OpEnum} op
 */
ScimUserOperations.prototype['op'] = undefined;

/**
 * @member {String} path
 */
ScimUserOperations.prototype['path'] = undefined;

/**
 * @member {module:model/OneOfstringobjectarray} value
 */
ScimUserOperations.prototype['value'] = undefined;





/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */
ScimUserOperations['OpEnum'] = {

    /**
     * value: "add"
     * @const
     */
    "add": "add",

    /**
     * value: "remove"
     * @const
     */
    "remove": "remove",

    /**
     * value: "replace"
     * @const
     */
    "replace": "replace"
};



export default ScimUserOperations;
