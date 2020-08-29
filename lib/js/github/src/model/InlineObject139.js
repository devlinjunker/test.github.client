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
 * The InlineObject139 model module.
 * @module model/InlineObject139
 * @version 0.0.5
 */
class InlineObject139 {
    /**
     * Constructs a new <code>InlineObject139</code>.
     * @alias module:model/InlineObject139
     * @param armoredPublicKey {String} A GPG key in ASCII-armored format.
     */
    constructor(armoredPublicKey) { 
        
        InlineObject139.initialize(this, armoredPublicKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, armoredPublicKey) { 
        obj['armored_public_key'] = armoredPublicKey;
    }

    /**
     * Constructs a <code>InlineObject139</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject139} obj Optional instance to populate.
     * @return {module:model/InlineObject139} The populated <code>InlineObject139</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject139();

            if (data.hasOwnProperty('armored_public_key')) {
                obj['armored_public_key'] = ApiClient.convertToType(data['armored_public_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A GPG key in ASCII-armored format.
 * @member {String} armored_public_key
 */
InlineObject139.prototype['armored_public_key'] = undefined;






export default InlineObject139;
