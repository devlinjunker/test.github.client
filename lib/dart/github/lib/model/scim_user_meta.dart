part of openapi.api;

class ScimUserMeta {
  
  DateTime created = null;
  
  DateTime lastModified = null;
  
  String location = null;
  
  String resourceType = null;

  ScimUserMeta({
    this.created,
    this.lastModified,
    this.location,
    this.resourceType,
  });

  @override
  String toString() {
    return 'ScimUserMeta[created=$created, lastModified=$lastModified, location=$location, resourceType=$resourceType, ]';
  }

  ScimUserMeta.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    created = (json['created'] == null) ?
      null :
      DateTime.parse(json['created']);
    lastModified = (json['lastModified'] == null) ?
      null :
      DateTime.parse(json['lastModified']);
    location = json['location'];
    resourceType = json['resourceType'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (created != null)
      json['created'] = created == null ? null : created.toUtc().toIso8601String();
    if (lastModified != null)
      json['lastModified'] = lastModified == null ? null : lastModified.toUtc().toIso8601String();
    if (location != null)
      json['location'] = location;
    if (resourceType != null)
      json['resourceType'] = resourceType;
    return json;
  }

  static List<ScimUserMeta> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimUserMeta>() : json.map((value) => ScimUserMeta.fromJson(value)).toList();
  }

  static Map<String, ScimUserMeta> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimUserMeta>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimUserMeta.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimUserMeta-objects as value to a dart map
  static Map<String, List<ScimUserMeta>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimUserMeta>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimUserMeta.listFromJson(value);
       });
     }
     return map;
  }
}

