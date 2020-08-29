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
import WorkflowUsageBillableMACOS from './WorkflowUsageBillableMACOS';

/**
 * The WorkflowUsageBillable model module.
 * @module model/WorkflowUsageBillable
 * @version 0.0.5
 */
class WorkflowUsageBillable {
    /**
     * Constructs a new <code>WorkflowUsageBillable</code>.
     * @alias module:model/WorkflowUsageBillable
     */
    constructor() { 
        
        WorkflowUsageBillable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowUsageBillable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowUsageBillable} obj Optional instance to populate.
     * @return {module:model/WorkflowUsageBillable} The populated <code>WorkflowUsageBillable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowUsageBillable();

            if (data.hasOwnProperty('MACOS')) {
                obj['MACOS'] = WorkflowUsageBillableMACOS.constructFromObject(data['MACOS']);
            }
            if (data.hasOwnProperty('UBUNTU')) {
                obj['UBUNTU'] = WorkflowUsageBillableMACOS.constructFromObject(data['UBUNTU']);
            }
            if (data.hasOwnProperty('WINDOWS')) {
                obj['WINDOWS'] = WorkflowUsageBillableMACOS.constructFromObject(data['WINDOWS']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WorkflowUsageBillableMACOS} MACOS
 */
WorkflowUsageBillable.prototype['MACOS'] = undefined;

/**
 * @member {module:model/WorkflowUsageBillableMACOS} UBUNTU
 */
WorkflowUsageBillable.prototype['UBUNTU'] = undefined;

/**
 * @member {module:model/WorkflowUsageBillableMACOS} WINDOWS
 */
WorkflowUsageBillable.prototype['WINDOWS'] = undefined;






export default WorkflowUsageBillable;
