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
 * The PullRequestReviewLinksHtml model module.
 * @module model/PullRequestReviewLinksHtml
 * @version 0.0.5
 */
class PullRequestReviewLinksHtml {
    /**
     * Constructs a new <code>PullRequestReviewLinksHtml</code>.
     * @alias module:model/PullRequestReviewLinksHtml
     * @param href {String} 
     */
    constructor(href) { 
        
        PullRequestReviewLinksHtml.initialize(this, href);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href) { 
        obj['href'] = href;
    }

    /**
     * Constructs a <code>PullRequestReviewLinksHtml</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReviewLinksHtml} obj Optional instance to populate.
     * @return {module:model/PullRequestReviewLinksHtml} The populated <code>PullRequestReviewLinksHtml</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestReviewLinksHtml();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} href
 */
PullRequestReviewLinksHtml.prototype['href'] = undefined;






export default PullRequestReviewLinksHtml;
