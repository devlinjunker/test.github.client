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
 * The ContentFileLinks model module.
 * @module model/ContentFileLinks
 * @version 0.0.5
 */
class ContentFileLinks {
    /**
     * Constructs a new <code>ContentFileLinks</code>.
     * @alias module:model/ContentFileLinks
     * @param git {String} 
     * @param html {String} 
     * @param self {String} 
     */
    constructor(git, html, self) { 
        
        ContentFileLinks.initialize(this, git, html, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, git, html, self) { 
        obj['git'] = git;
        obj['html'] = html;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>ContentFileLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentFileLinks} obj Optional instance to populate.
     * @return {module:model/ContentFileLinks} The populated <code>ContentFileLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentFileLinks();

            if (data.hasOwnProperty('git')) {
                obj['git'] = ApiClient.convertToType(data['git'], 'String');
            }
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
 * @member {String} git
 */
ContentFileLinks.prototype['git'] = undefined;

/**
 * @member {String} html
 */
ContentFileLinks.prototype['html'] = undefined;

/**
 * @member {String} self
 */
ContentFileLinks.prototype['self'] = undefined;






export default ContentFileLinks;
