part of openapi.api;

class ScimUserList {
  
  List<ScimUser> resources = [];
  
  int itemsPerPage = null;
  /* SCIM schema used. */
  List<String> schemas = [];
  
  int startIndex = null;
  
  int totalResults = null;

  ScimUserList({
    this.resources,
    this.itemsPerPage,
    this.schemas,
    this.startIndex,
    this.totalResults,
  });

  @override
  String toString() {
    return 'ScimUserList[resources=$resources, itemsPerPage=$itemsPerPage, schemas=$schemas, startIndex=$startIndex, totalResults=$totalResults, ]';
  }

  ScimUserList.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    resources = (json['Resources'] == null) ?
      null :
      ScimUser.listFromJson(json['Resources']);
    itemsPerPage = json['itemsPerPage'];
    schemas = (json['schemas'] == null) ?
      null :
      (json['schemas'] as List).cast<String>();
    startIndex = json['startIndex'];
    totalResults = json['totalResults'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (resources != null)
      json['Resources'] = resources;
    if (itemsPerPage != null)
      json['itemsPerPage'] = itemsPerPage;
    if (schemas != null)
      json['schemas'] = schemas;
    if (startIndex != null)
      json['startIndex'] = startIndex;
    if (totalResults != null)
      json['totalResults'] = totalResults;
    return json;
  }

  static List<ScimUserList> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimUserList>() : json.map((value) => ScimUserList.fromJson(value)).toList();
  }

  static Map<String, ScimUserList> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimUserList>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimUserList.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimUserList-objects as value to a dart map
  static Map<String, List<ScimUserList>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimUserList>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimUserList.listFromJson(value);
       });
     }
     return map;
  }
}

