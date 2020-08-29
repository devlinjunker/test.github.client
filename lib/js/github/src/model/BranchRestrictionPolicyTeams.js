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
 * The BranchRestrictionPolicyTeams model module.
 * @module model/BranchRestrictionPolicyTeams
 * @version 0.0.5
 */
class BranchRestrictionPolicyTeams {
    /**
     * Constructs a new <code>BranchRestrictionPolicyTeams</code>.
     * @alias module:model/BranchRestrictionPolicyTeams
     */
    constructor() { 
        
        BranchRestrictionPolicyTeams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchRestrictionPolicyTeams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchRestrictionPolicyTeams} obj Optional instance to populate.
     * @return {module:model/BranchRestrictionPolicyTeams} The populated <code>BranchRestrictionPolicyTeams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchRestrictionPolicyTeams();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('members_url')) {
                obj['members_url'] = ApiClient.convertToType(data['members_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('privacy')) {
                obj['privacy'] = ApiClient.convertToType(data['privacy'], 'String');
            }
            if (data.hasOwnProperty('repositories_url')) {
                obj['repositories_url'] = ApiClient.convertToType(data['repositories_url'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
BranchRestrictionPolicyTeams.prototype['description'] = undefined;

/**
 * @member {String} html_url
 */
BranchRestrictionPolicyTeams.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
BranchRestrictionPolicyTeams.prototype['id'] = undefined;

/**
 * @member {String} members_url
 */
BranchRestrictionPolicyTeams.prototype['members_url'] = undefined;

/**
 * @member {String} name
 */
BranchRestrictionPolicyTeams.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
BranchRestrictionPolicyTeams.prototype['node_id'] = undefined;

/**
 * @member {String} parent
 */
BranchRestrictionPolicyTeams.prototype['parent'] = undefined;

/**
 * @member {String} permission
 */
BranchRestrictionPolicyTeams.prototype['permission'] = undefined;

/**
 * @member {String} privacy
 */
BranchRestrictionPolicyTeams.prototype['privacy'] = undefined;

/**
 * @member {String} repositories_url
 */
BranchRestrictionPolicyTeams.prototype['repositories_url'] = undefined;

/**
 * @member {String} slug
 */
BranchRestrictionPolicyTeams.prototype['slug'] = undefined;

/**
 * @member {String} url
 */
BranchRestrictionPolicyTeams.prototype['url'] = undefined;






export default BranchRestrictionPolicyTeams;
