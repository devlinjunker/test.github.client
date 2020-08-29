part of openapi.api;

class InlineObject43 {
  /* Body of the project */
  String body = null;
  /* Name of the project */
  String name = null;
  /* The baseline permission that all organization members have on this project */
  String organizationPermission = null;
  //enum organizationPermissionEnum {  read,  write,  admin,  none,  };{
  /* Whether or not this project can be seen by everyone. */
  bool private = null;
  /* State of the project; either 'open' or 'closed' */
  String state = null;

  InlineObject43({
    this.body,
    this.name,
    this.organizationPermission,
    this.private,
    this.state,
  });

  @override
  String toString() {
    return 'InlineObject43[body=$body, name=$name, organizationPermission=$organizationPermission, private=$private, state=$state, ]';
  }

  InlineObject43.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    name = json['name'];
    organizationPermission = json['organization_permission'];
    private = json['private'];
    state = json['state'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['body'] = body;
    if (name != null)
      json['name'] = name;
    if (organizationPermission != null)
      json['organization_permission'] = organizationPermission;
    if (private != null)
      json['private'] = private;
    if (state != null)
      json['state'] = state;
    return json;
  }

  static List<InlineObject43> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject43>() : json.map((value) => InlineObject43.fromJson(value)).toList();
  }

  static Map<String, InlineObject43> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject43>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject43.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject43-objects as value to a dart map
  static Map<String, List<InlineObject43>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject43>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject43.listFromJson(value);
       });
     }
     return map;
  }
}

