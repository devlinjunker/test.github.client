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
 * The InlineObject107 model module.
 * @module model/InlineObject107
 * @version 0.0.5
 */
class InlineObject107 {
    /**
     * Constructs a new <code>InlineObject107</code>.
     * @alias module:model/InlineObject107
     */
    constructor() { 
        
        InlineObject107.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject107</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject107} obj Optional instance to populate.
     * @return {module:model/InlineObject107} The populated <code>InlineObject107</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject107();

            if (data.hasOwnProperty('commit_message')) {
                obj['commit_message'] = ApiClient.convertToType(data['commit_message'], 'String');
            }
            if (data.hasOwnProperty('commit_title')) {
                obj['commit_title'] = ApiClient.convertToType(data['commit_title'], 'String');
            }
            if (data.hasOwnProperty('merge_method')) {
                obj['merge_method'] = ApiClient.convertToType(data['merge_method'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Extra detail to append to automatic commit message.
 * @member {String} commit_message
 */
InlineObject107.prototype['commit_message'] = undefined;

/**
 * Title for the automatic commit message.
 * @member {String} commit_title
 */
InlineObject107.prototype['commit_title'] = undefined;

/**
 * Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.
 * @member {module:model/InlineObject107.MergeMethodEnum} merge_method
 */
InlineObject107.prototype['merge_method'] = undefined;

/**
 * SHA that pull request head must match to allow merge.
 * @member {String} sha
 */
InlineObject107.prototype['sha'] = undefined;





/**
 * Allowed values for the <code>merge_method</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject107['MergeMethodEnum'] = {

    /**
     * value: "merge"
     * @const
     */
    "merge": "merge",

    /**
     * value: "squash"
     * @const
     */
    "squash": "squash",

    /**
     * value: "rebase"
     * @const
     */
    "rebase": "rebase"
};



export default InlineObject107;
