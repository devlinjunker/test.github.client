part of openapi.api;

class ScimUserEmails {
  
  bool primary = null;
  
  String value = null;

  ScimUserEmails({
    this.primary,
    this.value,
  });

  @override
  String toString() {
    return 'ScimUserEmails[primary=$primary, value=$value, ]';
  }

  ScimUserEmails.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    primary = json['primary'];
    value = json['value'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (primary != null)
      json['primary'] = primary;
    if (value != null)
      json['value'] = value;
    return json;
  }

  static List<ScimUserEmails> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimUserEmails>() : json.map((value) => ScimUserEmails.fromJson(value)).toList();
  }

  static Map<String, ScimUserEmails> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimUserEmails>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimUserEmails.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimUserEmails-objects as value to a dart map
  static Map<String, List<ScimUserEmails>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimUserEmails>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimUserEmails.listFromJson(value);
       });
     }
     return map;
  }
}

