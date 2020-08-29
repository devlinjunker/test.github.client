part of openapi.api;

class BranchRestrictionPolicyApps {
  
  String createdAt = null;
  
  String description = null;
  
  List<String> events = [];
  
  String externalUrl = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String name = null;
  
  String nodeId = null;
  
  BranchRestrictionPolicyOwner owner = null;
  
  BranchRestrictionPolicyPermissions permissions = null;
  
  String slug = null;
  
  String updatedAt = null;

  BranchRestrictionPolicyApps({
    this.createdAt,
    this.description,
    this.events,
    this.externalUrl,
    this.htmlUrl,
    this.id,
    this.name,
    this.nodeId,
    this.owner,
    this.permissions,
    this.slug,
    this.updatedAt,
  });

  @override
  String toString() {
    return 'BranchRestrictionPolicyApps[createdAt=$createdAt, description=$description, events=$events, externalUrl=$externalUrl, htmlUrl=$htmlUrl, id=$id, name=$name, nodeId=$nodeId, owner=$owner, permissions=$permissions, slug=$slug, updatedAt=$updatedAt, ]';
  }

  BranchRestrictionPolicyApps.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = json['created_at'];
    description = json['description'];
    events = (json['events'] == null) ?
      null :
      (json['events'] as List).cast<String>();
    externalUrl = json['external_url'];
    htmlUrl = json['html_url'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    owner = (json['owner'] == null) ?
      null :
      BranchRestrictionPolicyOwner.fromJson(json['owner']);
    permissions = (json['permissions'] == null) ?
      null :
      BranchRestrictionPolicyPermissions.fromJson(json['permissions']);
    slug = json['slug'];
    updatedAt = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt;
    if (description != null)
      json['description'] = description;
    if (events != null)
      json['events'] = events;
    if (externalUrl != null)
      json['external_url'] = externalUrl;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (owner != null)
      json['owner'] = owner;
    if (permissions != null)
      json['permissions'] = permissions;
    if (slug != null)
      json['slug'] = slug;
    if (updatedAt != null)
      json['updated_at'] = updatedAt;
    return json;
  }

  static List<BranchRestrictionPolicyApps> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchRestrictionPolicyApps>() : json.map((value) => BranchRestrictionPolicyApps.fromJson(value)).toList();
  }

  static Map<String, BranchRestrictionPolicyApps> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchRestrictionPolicyApps>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchRestrictionPolicyApps.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchRestrictionPolicyApps-objects as value to a dart map
  static Map<String, List<BranchRestrictionPolicyApps>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchRestrictionPolicyApps>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchRestrictionPolicyApps.listFromJson(value);
       });
     }
     return map;
  }
}

