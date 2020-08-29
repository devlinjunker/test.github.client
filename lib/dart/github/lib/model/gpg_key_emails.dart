part of openapi.api;

class GpgKeyEmails {
  
  String email = null;
  
  bool verified = null;

  GpgKeyEmails({
    this.email,
    this.verified,
  });

  @override
  String toString() {
    return 'GpgKeyEmails[email=$email, verified=$verified, ]';
  }

  GpgKeyEmails.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    verified = json['verified'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (email != null)
      json['email'] = email;
    if (verified != null)
      json['verified'] = verified;
    return json;
  }

  static List<GpgKeyEmails> listFromJson(List<dynamic> json) {
    return json == null ? List<GpgKeyEmails>() : json.map((value) => GpgKeyEmails.fromJson(value)).toList();
  }

  static Map<String, GpgKeyEmails> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GpgKeyEmails>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GpgKeyEmails.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GpgKeyEmails-objects as value to a dart map
  static Map<String, List<GpgKeyEmails>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GpgKeyEmails>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GpgKeyEmails.listFromJson(value);
       });
     }
     return map;
  }
}

