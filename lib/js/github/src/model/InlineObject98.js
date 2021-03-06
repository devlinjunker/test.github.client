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
import AnyOfstringobject from './AnyOfstringobject';

/**
 * The InlineObject98 model module.
 * @module model/InlineObject98
 * @version 0.0.5
 */
class InlineObject98 {
    /**
     * Constructs a new <code>InlineObject98</code>.
     * @alias module:model/InlineObject98
     */
    constructor() { 
        
        InlineObject98.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject98</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject98} obj Optional instance to populate.
     * @return {module:model/InlineObject98} The populated <code>InlineObject98</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject98();

            if (data.hasOwnProperty('cname')) {
                obj['cname'] = ApiClient.convertToType(data['cname'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], AnyOfstringobject);
            }
        }
        return obj;
    }


}

/**
 * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see \"[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).\"
 * @member {String} cname
 */
InlineObject98.prototype['cname'] = undefined;

/**
 * @member {module:model/AnyOfstringobject} source
 */
InlineObject98.prototype['source'] = undefined;






export default InlineObject98;

