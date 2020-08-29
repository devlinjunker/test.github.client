part of openapi.api;

class ScimUser {
  /* The active status of the User. */
  bool active = null;
  /* The name of the user, suitable for display to end-users */
  String displayName = null;
  /* user emails */
  List<ScimUserEmails> emails = [];
  /* The ID of the User. */
  String externalId = null;
  /* associated groups */
  List<Object> groups = [];
  /* Unique identifier of an external identity */
  String id = null;
  
  ScimUserMeta meta = null;
  
  ScimUserName name = null;
  /* Set of operations to be performed */
  List<ScimUserOperations> operations = [];
  /* The ID of the organization. */
  int organizationId = null;
  /* SCIM schema used. */
  List<String> schemas = [];
  /* Configured by the admin. Could be an email, login, or username */
  String userName = null;

  ScimUser({
    this.active,
    this.displayName,
    this.emails,
    this.externalId,
    this.groups,
    this.id,
    this.meta,
    this.name,
    this.operations,
    this.organizationId,
    this.schemas,
    this.userName,
  });

  @override
  String toString() {
    return 'ScimUser[active=$active, displayName=$displayName, emails=$emails, externalId=$externalId, groups=$groups, id=$id, meta=$meta, name=$name, operations=$operations, organizationId=$organizationId, schemas=$schemas, userName=$userName, ]';
  }

  ScimUser.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    active = json['active'];
    displayName = json['displayName'];
    emails = (json['emails'] == null) ?
      null :
      ScimUserEmails.listFromJson(json['emails']);
    externalId = json['externalId'];
    groups = (json['groups'] == null) ?
      null :
      Object.listFromJson(json['groups']);
    id = json['id'];
    meta = (json['meta'] == null) ?
      null :
      ScimUserMeta.fromJson(json['meta']);
    name = (json['name'] == null) ?
      null :
      ScimUserName.fromJson(json['name']);
    operations = (json['operations'] == null) ?
      null :
      ScimUserOperations.listFromJson(json['operations']);
    organizationId = json['organization_id'];
    schemas = (json['schemas'] == null) ?
      null :
      (json['schemas'] as List).cast<String>();
    userName = json['userName'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (active != null)
      json['active'] = active;
      json['displayName'] = displayName;
    if (emails != null)
      json['emails'] = emails;
      json['externalId'] = externalId;
    if (groups != null)
      json['groups'] = groups;
    if (id != null)
      json['id'] = id;
    if (meta != null)
      json['meta'] = meta;
    if (name != null)
      json['name'] = name;
    if (operations != null)
      json['operations'] = operations;
    if (organizationId != null)
      json['organization_id'] = organizationId;
    if (schemas != null)
      json['schemas'] = schemas;
      json['userName'] = userName;
    return json;
  }

  static List<ScimUser> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimUser>() : json.map((value) => ScimUser.fromJson(value)).toList();
  }

  static Map<String, ScimUser> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimUser>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimUser.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimUser-objects as value to a dart map
  static Map<String, List<ScimUser>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimUser>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimUser.listFromJson(value);
       });
     }
     return map;
  }
}

