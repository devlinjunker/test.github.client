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

/**
 * The InlineObject42 model module.
 * @module model/InlineObject42
 * @version 0.0.5
 */
class InlineObject42 {
    /**
     * Constructs a new <code>InlineObject42</code>.
     * @alias module:model/InlineObject42
     * @param position {String} The position of the column in a project
     */
    constructor(position) { 
        
        InlineObject42.initialize(this, position);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, position) { 
        obj['position'] = position;
    }

    /**
     * Constructs a <code>InlineObject42</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject42} obj Optional instance to populate.
     * @return {module:model/InlineObject42} The populated <code>InlineObject42</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject42();

            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The position of the column in a project
 * @member {String} position
 */
InlineObject42.prototype['position'] = undefined;






export default InlineObject42;
