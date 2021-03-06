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
import OneOfstringobject from './OneOfstringobject';

/**
 * The InlineObject83 model module.
 * @module model/InlineObject83
 * @version 0.0.5
 */
class InlineObject83 {
    /**
     * Constructs a new <code>InlineObject83</code>.
     * @alias module:model/InlineObject83
     */
    constructor() { 
        
        InlineObject83.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject83</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject83} obj Optional instance to populate.
     * @return {module:model/InlineObject83} The populated <code>InlineObject83</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject83();

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], 'String');
            }
            if (data.hasOwnProperty('assignees')) {
                obj['assignees'] = ApiClient.convertToType(data['assignees'], ['String']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [OneOfstringobject]);
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = ApiClient.convertToType(data['milestone'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Login for the user that this issue should be assigned to. **This field is deprecated.**
 * @member {String} assignee
 */
InlineObject83.prototype['assignee'] = undefined;

/**
 * Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
 * @member {Array.<String>} assignees
 */
InlineObject83.prototype['assignees'] = undefined;

/**
 * The contents of the issue.
 * @member {String} body
 */
InlineObject83.prototype['body'] = undefined;

/**
 * Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
 * @member {Array.<module:model/OneOfstringobject>} labels
 */
InlineObject83.prototype['labels'] = undefined;

/**
 * The `number` of the milestone to associate this issue with or `null` to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._
 * @member {Number} milestone
 */
InlineObject83.prototype['milestone'] = undefined;

/**
 * State of the issue. Either `open` or `closed`.
 * @member {module:model/InlineObject83.StateEnum} state
 */
InlineObject83.prototype['state'] = undefined;

/**
 * The title of the issue.
 * @member {String} title
 */
InlineObject83.prototype['title'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject83['StateEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"
};



export default InlineObject83;

