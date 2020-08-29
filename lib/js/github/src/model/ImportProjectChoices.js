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
 * The ImportProjectChoices model module.
 * @module model/ImportProjectChoices
 * @version 0.0.5
 */
class ImportProjectChoices {
    /**
     * Constructs a new <code>ImportProjectChoices</code>.
     * @alias module:model/ImportProjectChoices
     */
    constructor() { 
        
        ImportProjectChoices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImportProjectChoices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportProjectChoices} obj Optional instance to populate.
     * @return {module:model/ImportProjectChoices} The populated <code>ImportProjectChoices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportProjectChoices();

            if (data.hasOwnProperty('human_name')) {
                obj['human_name'] = ApiClient.convertToType(data['human_name'], 'String');
            }
            if (data.hasOwnProperty('tfvc_project')) {
                obj['tfvc_project'] = ApiClient.convertToType(data['tfvc_project'], 'String');
            }
            if (data.hasOwnProperty('vcs')) {
                obj['vcs'] = ApiClient.convertToType(data['vcs'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} human_name
 */
ImportProjectChoices.prototype['human_name'] = undefined;

/**
 * @member {String} tfvc_project
 */
ImportProjectChoices.prototype['tfvc_project'] = undefined;

/**
 * @member {String} vcs
 */
ImportProjectChoices.prototype['vcs'] = undefined;






export default ImportProjectChoices;
