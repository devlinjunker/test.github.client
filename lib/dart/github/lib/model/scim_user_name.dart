part of openapi.api;

class ScimUserName {
  
  String familyName = null;
  
  String formatted = null;
  
  String givenName = null;

  ScimUserName({
    this.familyName,
    this.formatted,
    this.givenName,
  });

  @override
  String toString() {
    return 'ScimUserName[familyName=$familyName, formatted=$formatted, givenName=$givenName, ]';
  }

  ScimUserName.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    familyName = json['familyName'];
    formatted = json['formatted'];
    givenName = json['givenName'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['familyName'] = familyName;
      json['formatted'] = formatted;
      json['givenName'] = givenName;
    return json;
  }

  static List<ScimUserName> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimUserName>() : json.map((value) => ScimUserName.fromJson(value)).toList();
  }

  static Map<String, ScimUserName> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimUserName>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimUserName.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimUserName-objects as value to a dart map
  static Map<String, List<ScimUserName>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimUserName>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimUserName.listFromJson(value);
       });
     }
     return map;
  }
}

