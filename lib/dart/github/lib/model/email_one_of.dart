part of openapi.api;

class EmailOneOf {
  
  String email = null;
  
  bool primary = null;
  
  bool verified = null;
  
  String visibility = null;

  EmailOneOf({
    this.email,
    this.primary,
    this.verified,
    this.visibility,
  });

  @override
  String toString() {
    return 'EmailOneOf[email=$email, primary=$primary, verified=$verified, visibility=$visibility, ]';
  }

  EmailOneOf.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    primary = json['primary'];
    verified = json['verified'];
    visibility = json['visibility'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (email != null)
      json['email'] = email;
    if (primary != null)
      json['primary'] = primary;
    if (verified != null)
      json['verified'] = verified;
      json['visibility'] = visibility;
    return json;
  }

  static List<EmailOneOf> listFromJson(List<dynamic> json) {
    return json == null ? List<EmailOneOf>() : json.map((value) => EmailOneOf.fromJson(value)).toList();
  }

  static Map<String, EmailOneOf> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, EmailOneOf>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = EmailOneOf.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of EmailOneOf-objects as value to a dart map
  static Map<String, List<EmailOneOf>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<EmailOneOf>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = EmailOneOf.listFromJson(value);
       });
     }
     return map;
  }
}

