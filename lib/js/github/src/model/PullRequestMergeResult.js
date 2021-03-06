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
 * The PullRequestMergeResult model module.
 * @module model/PullRequestMergeResult
 * @version 0.0.5
 */
class PullRequestMergeResult {
    /**
     * Constructs a new <code>PullRequestMergeResult</code>.
     * Pull Request Merge Result
     * @alias module:model/PullRequestMergeResult
     * @param merged {Boolean} 
     * @param message {String} 
     * @param sha {String} 
     */
    constructor(merged, message, sha) { 
        
        PullRequestMergeResult.initialize(this, merged, message, sha);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, merged, message, sha) { 
        obj['merged'] = merged;
        obj['message'] = message;
        obj['sha'] = sha;
    }

    /**
     * Constructs a <code>PullRequestMergeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestMergeResult} obj Optional instance to populate.
     * @return {module:model/PullRequestMergeResult} The populated <code>PullRequestMergeResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestMergeResult();

            if (data.hasOwnProperty('merged')) {
                obj['merged'] = ApiClient.convertToType(data['merged'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} merged
 */
PullRequestMergeResult.prototype['merged'] = undefined;

/**
 * @member {String} message
 */
PullRequestMergeResult.prototype['message'] = undefined;

/**
 * @member {String} sha
 */
PullRequestMergeResult.prototype['sha'] = undefined;






export default PullRequestMergeResult;

