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
 * The LicenseSimple model module.
 * @module model/LicenseSimple
 * @version 0.0.5
 */
class LicenseSimple {
    /**
     * Constructs a new <code>LicenseSimple</code>.
     * License Simple
     * @alias module:model/LicenseSimple
     * @param key {String} 
     * @param name {String} 
     * @param nodeId {String} 
     * @param spdxId {String} 
     * @param url {String} 
     */
    constructor(key, name, nodeId, spdxId, url) { 
        
        LicenseSimple.initialize(this, key, name, nodeId, spdxId, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, name, nodeId, spdxId, url) { 
        obj['key'] = key;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['spdx_id'] = spdxId;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>LicenseSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseSimple} obj Optional instance to populate.
     * @return {module:model/LicenseSimple} The populated <code>LicenseSimple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseSimple();

            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('spdx_id')) {
                obj['spdx_id'] = ApiClient.convertToType(data['spdx_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} html_url
 */
LicenseSimple.prototype['html_url'] = undefined;

/**
 * @member {String} key
 */
LicenseSimple.prototype['key'] = undefined;

/**
 * @member {String} name
 */
LicenseSimple.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
LicenseSimple.prototype['node_id'] = undefined;

/**
 * @member {String} spdx_id
 */
LicenseSimple.prototype['spdx_id'] = undefined;

/**
 * @member {String} url
 */
LicenseSimple.prototype['url'] = undefined;






export default LicenseSimple;
