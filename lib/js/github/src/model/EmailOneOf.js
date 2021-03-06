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
 * The EmailOneOf model module.
 * @module model/EmailOneOf
 * @version 0.0.5
 */
class EmailOneOf {
    /**
     * Constructs a new <code>EmailOneOf</code>.
     * @alias module:model/EmailOneOf
     * @param email {String} 
     * @param primary {Boolean} 
     * @param verified {Boolean} 
     * @param visibility {String} 
     */
    constructor(email, primary, verified, visibility) { 
        
        EmailOneOf.initialize(this, email, primary, verified, visibility);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, primary, verified, visibility) { 
        obj['email'] = email;
        obj['primary'] = primary;
        obj['verified'] = verified;
        obj['visibility'] = visibility;
    }

    /**
     * Constructs a <code>EmailOneOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailOneOf} obj Optional instance to populate.
     * @return {module:model/EmailOneOf} The populated <code>EmailOneOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailOneOf();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
            if (data.hasOwnProperty('verified')) {
                obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
EmailOneOf.prototype['email'] = undefined;

/**
 * @member {Boolean} primary
 */
EmailOneOf.prototype['primary'] = undefined;

/**
 * @member {Boolean} verified
 */
EmailOneOf.prototype['verified'] = undefined;

/**
 * @member {String} visibility
 */
EmailOneOf.prototype['visibility'] = undefined;






export default EmailOneOf;

