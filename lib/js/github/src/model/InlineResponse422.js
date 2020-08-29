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
import InlineResponse422Errors from './InlineResponse422Errors';

/**
 * The InlineResponse422 model module.
 * @module model/InlineResponse422
 * @version 0.0.5
 */
class InlineResponse422 {
    /**
     * Constructs a new <code>InlineResponse422</code>.
     * @alias module:model/InlineResponse422
     */
    constructor() { 
        
        InlineResponse422.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse422</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse422} obj Optional instance to populate.
     * @return {module:model/InlineResponse422} The populated <code>InlineResponse422</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse422();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [InlineResponse422Errors]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse422Errors>} errors
 */
InlineResponse422.prototype['errors'] = undefined;

/**
 * @member {String} message
 */
InlineResponse422.prototype['message'] = undefined;






export default InlineResponse422;
