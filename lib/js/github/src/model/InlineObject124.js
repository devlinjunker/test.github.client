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
import ScimV2OrganizationsOrgUsersEmails from './ScimV2OrganizationsOrgUsersEmails';
import ScimV2OrganizationsOrgUsersName from './ScimV2OrganizationsOrgUsersName';

/**
 * The InlineObject124 model module.
 * @module model/InlineObject124
 * @version 0.0.5
 */
class InlineObject124 {
    /**
     * Constructs a new <code>InlineObject124</code>.
     * @alias module:model/InlineObject124
     * @param emails {Array.<module:model/ScimV2OrganizationsOrgUsersEmails>} user emails
     * @param name {module:model/ScimV2OrganizationsOrgUsersName} 
     * @param userName {String} Configured by the admin. Could be an email, login, or username
     */
    constructor(emails, name, userName) { 
        
        InlineObject124.initialize(this, emails, name, userName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, emails, name, userName) { 
        obj['emails'] = emails;
        obj['name'] = name;
        obj['userName'] = userName;
    }

    /**
     * Constructs a <code>InlineObject124</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject124} obj Optional instance to populate.
     * @return {module:model/InlineObject124} The populated <code>InlineObject124</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject124();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], [ScimV2OrganizationsOrgUsersEmails]);
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ScimV2OrganizationsOrgUsersName.constructFromObject(data['name']);
            }
            if (data.hasOwnProperty('schemas')) {
                obj['schemas'] = ApiClient.convertToType(data['schemas'], ['String']);
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
InlineObject124.prototype['active'] = undefined;

/**
 * The name of the user, suitable for display to end-users
 * @member {String} displayName
 */
InlineObject124.prototype['displayName'] = undefined;

/**
 * user emails
 * @member {Array.<module:model/ScimV2OrganizationsOrgUsersEmails>} emails
 */
InlineObject124.prototype['emails'] = undefined;

/**
 * @member {String} externalId
 */
InlineObject124.prototype['externalId'] = undefined;

/**
 * @member {Array.<String>} groups
 */
InlineObject124.prototype['groups'] = undefined;

/**
 * @member {module:model/ScimV2OrganizationsOrgUsersName} name
 */
InlineObject124.prototype['name'] = undefined;

/**
 * @member {Array.<String>} schemas
 */
InlineObject124.prototype['schemas'] = undefined;

/**
 * Configured by the admin. Could be an email, login, or username
 * @member {String} userName
 */
InlineObject124.prototype['userName'] = undefined;






export default InlineObject124;
