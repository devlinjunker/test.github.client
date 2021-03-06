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
 * The InlineObject59 model module.
 * @module model/InlineObject59
 * @version 0.0.5
 */
class InlineObject59 {
    /**
     * Constructs a new <code>InlineObject59</code>.
     * @alias module:model/InlineObject59
     * @param body {String} The contents of the comment.
     */
    constructor(body) { 
        
        InlineObject59.initialize(this, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body) { 
        obj['body'] = body;
    }

    /**
     * Constructs a <code>InlineObject59</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject59} obj Optional instance to populate.
     * @return {module:model/InlineObject59} The populated <code>InlineObject59</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject59();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The contents of the comment.
 * @member {String} body
 */
InlineObject59.prototype['body'] = undefined;

/**
 * **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.
 * @member {Number} line
 */
InlineObject59.prototype['line'] = undefined;

/**
 * Relative path of the file to comment on.
 * @member {String} path
 */
InlineObject59.prototype['path'] = undefined;

/**
 * Line index in the diff to comment on.
 * @member {Number} position
 */
InlineObject59.prototype['position'] = undefined;






export default InlineObject59;

