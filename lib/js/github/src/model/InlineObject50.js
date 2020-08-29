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
import ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions from './ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions';

/**
 * The InlineObject50 model module.
 * @module model/InlineObject50
 * @version 0.0.5
 */
class InlineObject50 {
    /**
     * Constructs a new <code>InlineObject50</code>.
     * @alias module:model/InlineObject50
     */
    constructor() { 
        
        InlineObject50.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject50</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject50} obj Optional instance to populate.
     * @return {module:model/InlineObject50} The populated <code>InlineObject50</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject50();

            if (data.hasOwnProperty('dismiss_stale_reviews')) {
                obj['dismiss_stale_reviews'] = ApiClient.convertToType(data['dismiss_stale_reviews'], 'Boolean');
            }
            if (data.hasOwnProperty('dismissal_restrictions')) {
                obj['dismissal_restrictions'] = ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.constructFromObject(data['dismissal_restrictions']);
            }
            if (data.hasOwnProperty('require_code_owner_reviews')) {
                obj['require_code_owner_reviews'] = ApiClient.convertToType(data['require_code_owner_reviews'], 'Boolean');
            }
            if (data.hasOwnProperty('required_approving_review_count')) {
                obj['required_approving_review_count'] = ApiClient.convertToType(data['required_approving_review_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
 * @member {Boolean} dismiss_stale_reviews
 */
InlineObject50.prototype['dismiss_stale_reviews'] = undefined;

/**
 * @member {module:model/ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions} dismissal_restrictions
 */
InlineObject50.prototype['dismissal_restrictions'] = undefined;

/**
 * Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) have reviewed.
 * @member {Boolean} require_code_owner_reviews
 */
InlineObject50.prototype['require_code_owner_reviews'] = undefined;

/**
 * Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6.
 * @member {Number} required_approving_review_count
 */
InlineObject50.prototype['required_approving_review_count'] = undefined;






export default InlineObject50;
