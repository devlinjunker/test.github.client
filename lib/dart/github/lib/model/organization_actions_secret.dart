part of openapi.api;

class OrganizationActionsSecret {
  
  DateTime createdAt = null;
  /* The name of the secret. */
  String name = null;
  
  String selectedRepositoriesUrl = null;
  
  DateTime updatedAt = null;
  /* Visibility of a secret */
  String visibility = null;
  //enum visibilityEnum {  all,  private,  selected,  };{

  OrganizationActionsSecret({
    this.createdAt,
    this.name,
    this.selectedRepositoriesUrl,
    this.updatedAt,
    this.visibility,
  });

  @override
  String toString() {
    return 'OrganizationActionsSecret[createdAt=$createdAt, name=$name, selectedRepositoriesUrl=$selectedRepositoriesUrl, updatedAt=$updatedAt, visibility=$visibility, ]';
  }

  OrganizationActionsSecret.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    name = json['name'];
    selectedRepositoriesUrl = json['selected_repositories_url'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    visibility = json['visibility'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (name != null)
      json['name'] = name;
    if (selectedRepositoriesUrl != null)
      json['selected_repositories_url'] = selectedRepositoriesUrl;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (visibility != null)
      json['visibility'] = visibility;
    return json;
  }

  static List<OrganizationActionsSecret> listFromJson(List<dynamic> json) {
    return json == null ? List<OrganizationActionsSecret>() : json.map((value) => OrganizationActionsSecret.fromJson(value)).toList();
  }

  static Map<String, OrganizationActionsSecret> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrganizationActionsSecret>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrganizationActionsSecret.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrganizationActionsSecret-objects as value to a dart map
  static Map<String, List<OrganizationActionsSecret>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrganizationActionsSecret>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrganizationActionsSecret.listFromJson(value);
       });
     }
     return map;
  }
}

