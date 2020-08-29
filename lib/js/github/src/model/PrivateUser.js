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
import PrivateUserPlan from './PrivateUserPlan';

/**
 * The PrivateUser model module.
 * @module model/PrivateUser
 * @version 0.0.5
 */
class PrivateUser {
    /**
     * Constructs a new <code>PrivateUser</code>.
     * Private User
     * @alias module:model/PrivateUser
     * @param avatarUrl {String} 
     * @param bio {String} 
     * @param blog {String} 
     * @param collaborators {Number} 
     * @param company {String} 
     * @param createdAt {Date} 
     * @param diskUsage {Number} 
     * @param email {String} 
     * @param eventsUrl {String} 
     * @param followers {Number} 
     * @param followersUrl {String} 
     * @param following {Number} 
     * @param followingUrl {String} 
     * @param gistsUrl {String} 
     * @param gravatarId {String} 
     * @param hireable {Boolean} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param location {String} 
     * @param login {String} 
     * @param name {String} 
     * @param nodeId {String} 
     * @param organizationsUrl {String} 
     * @param ownedPrivateRepos {Number} 
     * @param privateGists {Number} 
     * @param publicGists {Number} 
     * @param publicRepos {Number} 
     * @param receivedEventsUrl {String} 
     * @param reposUrl {String} 
     * @param siteAdmin {Boolean} 
     * @param starredUrl {String} 
     * @param subscriptionsUrl {String} 
     * @param totalPrivateRepos {Number} 
     * @param twoFactorAuthentication {Boolean} 
     * @param type {String} 
     * @param updatedAt {Date} 
     * @param url {String} 
     */
    constructor(avatarUrl, bio, blog, collaborators, company, createdAt, diskUsage, email, eventsUrl, followers, followersUrl, following, followingUrl, gistsUrl, gravatarId, hireable, htmlUrl, id, location, login, name, nodeId, organizationsUrl, ownedPrivateRepos, privateGists, publicGists, publicRepos, receivedEventsUrl, reposUrl, siteAdmin, starredUrl, subscriptionsUrl, totalPrivateRepos, twoFactorAuthentication, type, updatedAt, url) { 
        
        PrivateUser.initialize(this, avatarUrl, bio, blog, collaborators, company, createdAt, diskUsage, email, eventsUrl, followers, followersUrl, following, followingUrl, gistsUrl, gravatarId, hireable, htmlUrl, id, location, login, name, nodeId, organizationsUrl, ownedPrivateRepos, privateGists, publicGists, publicRepos, receivedEventsUrl, reposUrl, siteAdmin, starredUrl, subscriptionsUrl, totalPrivateRepos, twoFactorAuthentication, type, updatedAt, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, avatarUrl, bio, blog, collaborators, company, createdAt, diskUsage, email, eventsUrl, followers, followersUrl, following, followingUrl, gistsUrl, gravatarId, hireable, htmlUrl, id, location, login, name, nodeId, organizationsUrl, ownedPrivateRepos, privateGists, publicGists, publicRepos, receivedEventsUrl, reposUrl, siteAdmin, starredUrl, subscriptionsUrl, totalPrivateRepos, twoFactorAuthentication, type, updatedAt, url) { 
        obj['avatar_url'] = avatarUrl;
        obj['bio'] = bio;
        obj['blog'] = blog;
        obj['collaborators'] = collaborators;
        obj['company'] = company;
        obj['created_at'] = createdAt;
        obj['disk_usage'] = diskUsage;
        obj['email'] = email;
        obj['events_url'] = eventsUrl;
        obj['followers'] = followers;
        obj['followers_url'] = followersUrl;
        obj['following'] = following;
        obj['following_url'] = followingUrl;
        obj['gists_url'] = gistsUrl;
        obj['gravatar_id'] = gravatarId;
        obj['hireable'] = hireable;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['location'] = location;
        obj['login'] = login;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['organizations_url'] = organizationsUrl;
        obj['owned_private_repos'] = ownedPrivateRepos;
        obj['private_gists'] = privateGists;
        obj['public_gists'] = publicGists;
        obj['public_repos'] = publicRepos;
        obj['received_events_url'] = receivedEventsUrl;
        obj['repos_url'] = reposUrl;
        obj['site_admin'] = siteAdmin;
        obj['starred_url'] = starredUrl;
        obj['subscriptions_url'] = subscriptionsUrl;
        obj['total_private_repos'] = totalPrivateRepos;
        obj['two_factor_authentication'] = twoFactorAuthentication;
        obj['type'] = type;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>PrivateUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrivateUser} obj Optional instance to populate.
     * @return {module:model/PrivateUser} The populated <code>PrivateUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrivateUser();

            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('blog')) {
                obj['blog'] = ApiClient.convertToType(data['blog'], 'String');
            }
            if (data.hasOwnProperty('business_plus')) {
                obj['business_plus'] = ApiClient.convertToType(data['business_plus'], 'Boolean');
            }
            if (data.hasOwnProperty('collaborators')) {
                obj['collaborators'] = ApiClient.convertToType(data['collaborators'], 'Number');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('disk_usage')) {
                obj['disk_usage'] = ApiClient.convertToType(data['disk_usage'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('events_url')) {
                obj['events_url'] = ApiClient.convertToType(data['events_url'], 'String');
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], 'Number');
            }
            if (data.hasOwnProperty('followers_url')) {
                obj['followers_url'] = ApiClient.convertToType(data['followers_url'], 'String');
            }
            if (data.hasOwnProperty('following')) {
                obj['following'] = ApiClient.convertToType(data['following'], 'Number');
            }
            if (data.hasOwnProperty('following_url')) {
                obj['following_url'] = ApiClient.convertToType(data['following_url'], 'String');
            }
            if (data.hasOwnProperty('gists_url')) {
                obj['gists_url'] = ApiClient.convertToType(data['gists_url'], 'String');
            }
            if (data.hasOwnProperty('gravatar_id')) {
                obj['gravatar_id'] = ApiClient.convertToType(data['gravatar_id'], 'String');
            }
            if (data.hasOwnProperty('hireable')) {
                obj['hireable'] = ApiClient.convertToType(data['hireable'], 'Boolean');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('ldap_dn')) {
                obj['ldap_dn'] = ApiClient.convertToType(data['ldap_dn'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('organizations_url')) {
                obj['organizations_url'] = ApiClient.convertToType(data['organizations_url'], 'String');
            }
            if (data.hasOwnProperty('owned_private_repos')) {
                obj['owned_private_repos'] = ApiClient.convertToType(data['owned_private_repos'], 'Number');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = PrivateUserPlan.constructFromObject(data['plan']);
            }
            if (data.hasOwnProperty('private_gists')) {
                obj['private_gists'] = ApiClient.convertToType(data['private_gists'], 'Number');
            }
            if (data.hasOwnProperty('public_gists')) {
                obj['public_gists'] = ApiClient.convertToType(data['public_gists'], 'Number');
            }
            if (data.hasOwnProperty('public_repos')) {
                obj['public_repos'] = ApiClient.convertToType(data['public_repos'], 'Number');
            }
            if (data.hasOwnProperty('received_events_url')) {
                obj['received_events_url'] = ApiClient.convertToType(data['received_events_url'], 'String');
            }
            if (data.hasOwnProperty('repos_url')) {
                obj['repos_url'] = ApiClient.convertToType(data['repos_url'], 'String');
            }
            if (data.hasOwnProperty('site_admin')) {
                obj['site_admin'] = ApiClient.convertToType(data['site_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('starred_url')) {
                obj['starred_url'] = ApiClient.convertToType(data['starred_url'], 'String');
            }
            if (data.hasOwnProperty('subscriptions_url')) {
                obj['subscriptions_url'] = ApiClient.convertToType(data['subscriptions_url'], 'String');
            }
            if (data.hasOwnProperty('suspended_at')) {
                obj['suspended_at'] = ApiClient.convertToType(data['suspended_at'], 'Date');
            }
            if (data.hasOwnProperty('total_private_repos')) {
                obj['total_private_repos'] = ApiClient.convertToType(data['total_private_repos'], 'Number');
            }
            if (data.hasOwnProperty('twitter_username')) {
                obj['twitter_username'] = ApiClient.convertToType(data['twitter_username'], 'String');
            }
            if (data.hasOwnProperty('two_factor_authentication')) {
                obj['two_factor_authentication'] = ApiClient.convertToType(data['two_factor_authentication'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} avatar_url
 */
PrivateUser.prototype['avatar_url'] = undefined;

/**
 * @member {String} bio
 */
PrivateUser.prototype['bio'] = undefined;

/**
 * @member {String} blog
 */
PrivateUser.prototype['blog'] = undefined;

/**
 * @member {Boolean} business_plus
 */
PrivateUser.prototype['business_plus'] = undefined;

/**
 * @member {Number} collaborators
 */
PrivateUser.prototype['collaborators'] = undefined;

/**
 * @member {String} company
 */
PrivateUser.prototype['company'] = undefined;

/**
 * @member {Date} created_at
 */
PrivateUser.prototype['created_at'] = undefined;

/**
 * @member {Number} disk_usage
 */
PrivateUser.prototype['disk_usage'] = undefined;

/**
 * @member {String} email
 */
PrivateUser.prototype['email'] = undefined;

/**
 * @member {String} events_url
 */
PrivateUser.prototype['events_url'] = undefined;

/**
 * @member {Number} followers
 */
PrivateUser.prototype['followers'] = undefined;

/**
 * @member {String} followers_url
 */
PrivateUser.prototype['followers_url'] = undefined;

/**
 * @member {Number} following
 */
PrivateUser.prototype['following'] = undefined;

/**
 * @member {String} following_url
 */
PrivateUser.prototype['following_url'] = undefined;

/**
 * @member {String} gists_url
 */
PrivateUser.prototype['gists_url'] = undefined;

/**
 * @member {String} gravatar_id
 */
PrivateUser.prototype['gravatar_id'] = undefined;

/**
 * @member {Boolean} hireable
 */
PrivateUser.prototype['hireable'] = undefined;

/**
 * @member {String} html_url
 */
PrivateUser.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
PrivateUser.prototype['id'] = undefined;

/**
 * @member {String} ldap_dn
 */
PrivateUser.prototype['ldap_dn'] = undefined;

/**
 * @member {String} location
 */
PrivateUser.prototype['location'] = undefined;

/**
 * @member {String} login
 */
PrivateUser.prototype['login'] = undefined;

/**
 * @member {String} name
 */
PrivateUser.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
PrivateUser.prototype['node_id'] = undefined;

/**
 * @member {String} organizations_url
 */
PrivateUser.prototype['organizations_url'] = undefined;

/**
 * @member {Number} owned_private_repos
 */
PrivateUser.prototype['owned_private_repos'] = undefined;

/**
 * @member {module:model/PrivateUserPlan} plan
 */
PrivateUser.prototype['plan'] = undefined;

/**
 * @member {Number} private_gists
 */
PrivateUser.prototype['private_gists'] = undefined;

/**
 * @member {Number} public_gists
 */
PrivateUser.prototype['public_gists'] = undefined;

/**
 * @member {Number} public_repos
 */
PrivateUser.prototype['public_repos'] = undefined;

/**
 * @member {String} received_events_url
 */
PrivateUser.prototype['received_events_url'] = undefined;

/**
 * @member {String} repos_url
 */
PrivateUser.prototype['repos_url'] = undefined;

/**
 * @member {Boolean} site_admin
 */
PrivateUser.prototype['site_admin'] = undefined;

/**
 * @member {String} starred_url
 */
PrivateUser.prototype['starred_url'] = undefined;

/**
 * @member {String} subscriptions_url
 */
PrivateUser.prototype['subscriptions_url'] = undefined;

/**
 * @member {Date} suspended_at
 */
PrivateUser.prototype['suspended_at'] = undefined;

/**
 * @member {Number} total_private_repos
 */
PrivateUser.prototype['total_private_repos'] = undefined;

/**
 * @member {String} twitter_username
 */
PrivateUser.prototype['twitter_username'] = undefined;

/**
 * @member {Boolean} two_factor_authentication
 */
PrivateUser.prototype['two_factor_authentication'] = undefined;

/**
 * @member {String} type
 */
PrivateUser.prototype['type'] = undefined;

/**
 * @member {Date} updated_at
 */
PrivateUser.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
PrivateUser.prototype['url'] = undefined;






export default PrivateUser;
