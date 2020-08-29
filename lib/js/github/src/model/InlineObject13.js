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
 * The InlineObject13 model module.
 * @module model/InlineObject13
 * @version 0.0.5
 */
class InlineObject13 {
    /**
     * Constructs a new <code>InlineObject13</code>.
     * @alias module:model/InlineObject13
     * @param text {String} The Markdown text to render in HTML.
     */
    constructor(text) { 
        
        InlineObject13.initialize(this, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text) { 
        obj['text'] = text;
    }

    /**
     * Constructs a <code>InlineObject13</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject13} obj Optional instance to populate.
     * @return {module:model/InlineObject13} The populated <code>InlineObject13</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject13();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The repository context to use when creating references in `gfm` mode.
 * @member {String} context
 */
InlineObject13.prototype['context'] = undefined;

/**
 * The rendering mode.
 * @member {module:model/InlineObject13.ModeEnum} mode
 * @default 'markdown'
 */
InlineObject13.prototype['mode'] = 'markdown';

/**
 * The Markdown text to render in HTML.
 * @member {String} text
 */
InlineObject13.prototype['text'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject13['ModeEnum'] = {

    /**
     * value: "markdown"
     * @const
     */
    "markdown": "markdown",

    /**
     * value: "gfm"
     * @const
     */
    "gfm": "gfm"
};



export default InlineObject13;
