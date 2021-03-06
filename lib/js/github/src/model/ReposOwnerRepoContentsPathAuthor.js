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
 * The ReposOwnerRepoContentsPathAuthor model module.
 * @module model/ReposOwnerRepoContentsPathAuthor
 * @version 0.0.5
 */
class ReposOwnerRepoContentsPathAuthor {
    /**
     * Constructs a new <code>ReposOwnerRepoContentsPathAuthor</code>.
     * The author of the file. Default: The &#x60;committer&#x60; or the authenticated user if you omit &#x60;committer&#x60;.
     * @alias module:model/ReposOwnerRepoContentsPathAuthor
     * @param email {String} The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
     * @param name {String} The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
     */
    constructor(email, name) { 
        
        ReposOwnerRepoContentsPathAuthor.initialize(this, email, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, name) { 
        obj['email'] = email;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ReposOwnerRepoContentsPathAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoContentsPathAuthor} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoContentsPathAuthor} The populated <code>ReposOwnerRepoContentsPathAuthor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposOwnerRepoContentsPathAuthor();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} date
 */
ReposOwnerRepoContentsPathAuthor.prototype['date'] = undefined;

/**
 * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
 * @member {String} email
 */
ReposOwnerRepoContentsPathAuthor.prototype['email'] = undefined;

/**
 * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
 * @member {String} name
 */
ReposOwnerRepoContentsPathAuthor.prototype['name'] = undefined;






export default ReposOwnerRepoContentsPathAuthor;

