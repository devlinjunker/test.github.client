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
 * The InlineObject9 model module.
 * @module model/InlineObject9
 * @version 0.0.5
 */
class InlineObject9 {
    /**
     * Constructs a new <code>InlineObject9</code>.
     * @alias module:model/InlineObject9
     * @param body {String} The body of the attachment
     * @param title {String} The title of the attachment
     */
    constructor(body, title) { 
        
        InlineObject9.initialize(this, body, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body, title) { 
        obj['body'] = body;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>InlineObject9</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject9} obj Optional instance to populate.
     * @return {module:model/InlineObject9} The populated <code>InlineObject9</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject9();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The body of the attachment
 * @member {String} body
 */
InlineObject9.prototype['body'] = undefined;

/**
 * The title of the attachment
 * @member {String} title
 */
InlineObject9.prototype['title'] = undefined;






export default InlineObject9;

