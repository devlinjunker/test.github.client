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
import Repository from './Repository';

/**
 * The InlineResponse20020 model module.
 * @module model/InlineResponse20020
 * @version 0.0.5
 */
class InlineResponse20020 {
    /**
     * Constructs a new <code>InlineResponse20020</code>.
     * @alias module:model/InlineResponse20020
     */
    constructor() { 
        
        InlineResponse20020.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20020</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020} The populated <code>InlineResponse20020</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20020();

            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], [Repository]);
            }
            if (data.hasOwnProperty('repository_selection')) {
                obj['repository_selection'] = ApiClient.convertToType(data['repository_selection'], 'String');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Repository>} repositories
 */
InlineResponse20020.prototype['repositories'] = undefined;

/**
 * @member {String} repository_selection
 */
InlineResponse20020.prototype['repository_selection'] = undefined;

/**
 * @member {Number} total_count
 */
InlineResponse20020.prototype['total_count'] = undefined;






export default InlineResponse20020;

