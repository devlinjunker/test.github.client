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
 * The ActionsPublicKey model module.
 * @module model/ActionsPublicKey
 * @version 0.0.5
 */
class ActionsPublicKey {
    /**
     * Constructs a new <code>ActionsPublicKey</code>.
     * The public key used for setting Actions Secrets.
     * @alias module:model/ActionsPublicKey
     * @param key {String} The Base64 encoded public key.
     * @param keyId {String} The identifier for the key.
     */
    constructor(key, keyId) { 
        
        ActionsPublicKey.initialize(this, key, keyId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, keyId) { 
        obj['key'] = key;
        obj['key_id'] = keyId;
    }

    /**
     * Constructs a <code>ActionsPublicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsPublicKey} obj Optional instance to populate.
     * @return {module:model/ActionsPublicKey} The populated <code>ActionsPublicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsPublicKey();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('key_id')) {
                obj['key_id'] = ApiClient.convertToType(data['key_id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} created_at
 */
ActionsPublicKey.prototype['created_at'] = undefined;

/**
 * @member {Number} id
 */
ActionsPublicKey.prototype['id'] = undefined;

/**
 * The Base64 encoded public key.
 * @member {String} key
 */
ActionsPublicKey.prototype['key'] = undefined;

/**
 * The identifier for the key.
 * @member {String} key_id
 */
ActionsPublicKey.prototype['key_id'] = undefined;

/**
 * @member {String} title
 */
ActionsPublicKey.prototype['title'] = undefined;

/**
 * @member {String} url
 */
ActionsPublicKey.prototype['url'] = undefined;






export default ActionsPublicKey;

