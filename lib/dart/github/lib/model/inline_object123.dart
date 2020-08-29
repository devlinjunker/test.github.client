part of openapi.api;

class InlineObject123 {
  
  bool active = null;
  /* The name of the user, suitable for display to end-users */
  String displayName = null;
  /* user emails */
  List<ScimV2OrganizationsOrgUsersEmails> emails = [];
  
  String externalId = null;
  
  List<String> groups = [];
  
  ScimV2OrganizationsOrgUsersName name = null;
  
  List<String> schemas = [];
  /* Configured by the admin. Could be an email, login, or username */
  String userName = null;

  InlineObject123({
    this.active,
    this.displayName,
    this.emails,
    this.externalId,
    this.groups,
    this.name,
    this.schemas,
    this.userName,
  });

  @override
  String toString() {
    return 'InlineObject123[active=$active, displayName=$displayName, emails=$emails, externalId=$externalId, groups=$groups, name=$name, schemas=$schemas, userName=$userName, ]';
  }

  InlineObject123.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    active = json['active'];
    displayName = json['displayName'];
    emails = (json['emails'] == null) ?
      null :
      ScimV2OrganizationsOrgUsersEmails.listFromJson(json['emails']);
    externalId = json['externalId'];
    groups = (json['groups'] == null) ?
      null :
      (json['groups'] as List).cast<String>();
    name = (json['name'] == null) ?
      null :
      ScimV2OrganizationsOrgUsersName.fromJson(json['name']);
    schemas = (json['schemas'] == null) ?
      null :
      (json['schemas'] as List).cast<String>();
    userName = json['userName'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (active != null)
      json['active'] = active;
    if (displayName != null)
      json['displayName'] = displayName;
    if (emails != null)
      json['emails'] = emails;
    if (externalId != null)
      json['externalId'] = externalId;
    if (groups != null)
      json['groups'] = groups;
    if (name != null)
      json['name'] = name;
    if (schemas != null)
      json['schemas'] = schemas;
    if (userName != null)
      json['userName'] = userName;
    return json;
  }

  static List<InlineObject123> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject123>() : json.map((value) => InlineObject123.fromJson(value)).toList();
  }

  static Map<String, InlineObject123> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject123>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject123.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject123-objects as value to a dart map
  static Map<String, List<InlineObject123>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject123>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject123.listFromJson(value);
       });
     }
     return map;
  }
}

