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
 * The InlineObject39 model module.
 * @module model/InlineObject39
 * @version 0.0.5
 */
class InlineObject39 {
    /**
     * Constructs a new <code>InlineObject39</code>.
     * @alias module:model/InlineObject39
     */
    constructor() { 
        
        InlineObject39.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject39</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject39} obj Optional instance to populate.
     * @return {module:model/InlineObject39} The populated <code>InlineObject39</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject39();

            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether or not the card is archived
 * @member {Boolean} archived
 */
InlineObject39.prototype['archived'] = undefined;

/**
 * The project card's note
 * @member {String} note
 */
InlineObject39.prototype['note'] = undefined;






export default InlineObject39;

