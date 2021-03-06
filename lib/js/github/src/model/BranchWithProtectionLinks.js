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
 * The BranchWithProtectionLinks model module.
 * @module model/BranchWithProtectionLinks
 * @version 0.0.5
 */
class BranchWithProtectionLinks {
    /**
     * Constructs a new <code>BranchWithProtectionLinks</code>.
     * @alias module:model/BranchWithProtectionLinks
     * @param html {String} 
     * @param self {String} 
     */
    constructor(html, self) { 
        
        BranchWithProtectionLinks.initialize(this, html, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, html, self) { 
        obj['html'] = html;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>BranchWithProtectionLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchWithProtectionLinks} obj Optional instance to populate.
     * @return {module:model/BranchWithProtectionLinks} The populated <code>BranchWithProtectionLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchWithProtectionLinks();

            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} html
 */
BranchWithProtectionLinks.prototype['html'] = undefined;

/**
 * @member {String} self
 */
BranchWithProtectionLinks.prototype['self'] = undefined;






export default BranchWithProtectionLinks;

