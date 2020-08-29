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
 * The InlineObject75 model module.
 * @module model/InlineObject75
 * @version 0.0.5
 */
class InlineObject75 {
    /**
     * Constructs a new <code>InlineObject75</code>.
     * @alias module:model/InlineObject75
     */
    constructor() { 
        
        InlineObject75.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject75</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject75} obj Optional instance to populate.
     * @return {module:model/InlineObject75} The populated <code>InlineObject75</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject75();

            if (data.hasOwnProperty('tfvc_project')) {
                obj['tfvc_project'] = ApiClient.convertToType(data['tfvc_project'], 'String');
            }
            if (data.hasOwnProperty('vcs')) {
                obj['vcs'] = ApiClient.convertToType(data['vcs'], 'String');
            }
            if (data.hasOwnProperty('vcs_password')) {
                obj['vcs_password'] = ApiClient.convertToType(data['vcs_password'], 'String');
            }
            if (data.hasOwnProperty('vcs_username')) {
                obj['vcs_username'] = ApiClient.convertToType(data['vcs_username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} tfvc_project
 */
InlineObject75.prototype['tfvc_project'] = undefined;

/**
 * @member {String} vcs
 */
InlineObject75.prototype['vcs'] = undefined;

/**
 * The password to provide to the originating repository.
 * @member {String} vcs_password
 */
InlineObject75.prototype['vcs_password'] = undefined;

/**
 * The username to provide to the originating repository.
 * @member {String} vcs_username
 */
InlineObject75.prototype['vcs_username'] = undefined;






export default InlineObject75;
