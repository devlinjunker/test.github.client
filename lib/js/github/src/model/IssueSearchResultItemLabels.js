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
 * The IssueSearchResultItemLabels model module.
 * @module model/IssueSearchResultItemLabels
 * @version 0.0.5
 */
class IssueSearchResultItemLabels {
    /**
     * Constructs a new <code>IssueSearchResultItemLabels</code>.
     * @alias module:model/IssueSearchResultItemLabels
     */
    constructor() { 
        
        IssueSearchResultItemLabels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueSearchResultItemLabels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueSearchResultItemLabels} obj Optional instance to populate.
     * @return {module:model/IssueSearchResultItemLabels} The populated <code>IssueSearchResultItemLabels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueSearchResultItemLabels();

            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} color
 */
IssueSearchResultItemLabels.prototype['color'] = undefined;

/**
 * @member {Boolean} default
 */
IssueSearchResultItemLabels.prototype['default'] = undefined;

/**
 * @member {String} description
 */
IssueSearchResultItemLabels.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
IssueSearchResultItemLabels.prototype['id'] = undefined;

/**
 * @member {String} name
 */
IssueSearchResultItemLabels.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
IssueSearchResultItemLabels.prototype['node_id'] = undefined;

/**
 * @member {String} url
 */
IssueSearchResultItemLabels.prototype['url'] = undefined;






export default IssueSearchResultItemLabels;
