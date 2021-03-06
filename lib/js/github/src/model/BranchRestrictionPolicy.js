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
import BranchRestrictionPolicyApps from './BranchRestrictionPolicyApps';
import BranchRestrictionPolicyTeams from './BranchRestrictionPolicyTeams';
import BranchRestrictionPolicyUsers from './BranchRestrictionPolicyUsers';

/**
 * The BranchRestrictionPolicy model module.
 * @module model/BranchRestrictionPolicy
 * @version 0.0.5
 */
class BranchRestrictionPolicy {
    /**
     * Constructs a new <code>BranchRestrictionPolicy</code>.
     * Branch Restriction Policy
     * @alias module:model/BranchRestrictionPolicy
     * @param apps {Array.<module:model/BranchRestrictionPolicyApps>} 
     * @param appsUrl {String} 
     * @param teams {Array.<module:model/BranchRestrictionPolicyTeams>} 
     * @param teamsUrl {String} 
     * @param url {String} 
     * @param users {Array.<module:model/BranchRestrictionPolicyUsers>} 
     * @param usersUrl {String} 
     */
    constructor(apps, appsUrl, teams, teamsUrl, url, users, usersUrl) { 
        
        BranchRestrictionPolicy.initialize(this, apps, appsUrl, teams, teamsUrl, url, users, usersUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apps, appsUrl, teams, teamsUrl, url, users, usersUrl) { 
        obj['apps'] = apps;
        obj['apps_url'] = appsUrl;
        obj['teams'] = teams;
        obj['teams_url'] = teamsUrl;
        obj['url'] = url;
        obj['users'] = users;
        obj['users_url'] = usersUrl;
    }

    /**
     * Constructs a <code>BranchRestrictionPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchRestrictionPolicy} obj Optional instance to populate.
     * @return {module:model/BranchRestrictionPolicy} The populated <code>BranchRestrictionPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchRestrictionPolicy();

            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], [BranchRestrictionPolicyApps]);
            }
            if (data.hasOwnProperty('apps_url')) {
                obj['apps_url'] = ApiClient.convertToType(data['apps_url'], 'String');
            }
            if (data.hasOwnProperty('teams')) {
                obj['teams'] = ApiClient.convertToType(data['teams'], [BranchRestrictionPolicyTeams]);
            }
            if (data.hasOwnProperty('teams_url')) {
                obj['teams_url'] = ApiClient.convertToType(data['teams_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [BranchRestrictionPolicyUsers]);
            }
            if (data.hasOwnProperty('users_url')) {
                obj['users_url'] = ApiClient.convertToType(data['users_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/BranchRestrictionPolicyApps>} apps
 */
BranchRestrictionPolicy.prototype['apps'] = undefined;

/**
 * @member {String} apps_url
 */
BranchRestrictionPolicy.prototype['apps_url'] = undefined;

/**
 * @member {Array.<module:model/BranchRestrictionPolicyTeams>} teams
 */
BranchRestrictionPolicy.prototype['teams'] = undefined;

/**
 * @member {String} teams_url
 */
BranchRestrictionPolicy.prototype['teams_url'] = undefined;

/**
 * @member {String} url
 */
BranchRestrictionPolicy.prototype['url'] = undefined;

/**
 * @member {Array.<module:model/BranchRestrictionPolicyUsers>} users
 */
BranchRestrictionPolicy.prototype['users'] = undefined;

/**
 * @member {String} users_url
 */
BranchRestrictionPolicy.prototype['users_url'] = undefined;






export default BranchRestrictionPolicy;

