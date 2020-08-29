part of openapi.api;

class InlineObject76 {
  /* The new Git author email. */
  String email = null;
  /* The new Git author name. */
  String name = null;
  
  String remoteId = null;

  InlineObject76({
    this.email,
    this.name,
    this.remoteId,
  });

  @override
  String toString() {
    return 'InlineObject76[email=$email, name=$name, remoteId=$remoteId, ]';
  }

  InlineObject76.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    name = json['name'];
    remoteId = json['remote_id'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (email != null)
      json['email'] = email;
    if (name != null)
      json['name'] = name;
    if (remoteId != null)
      json['remote_id'] = remoteId;
    return json;
  }

  static List<InlineObject76> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject76>() : json.map((value) => InlineObject76.fromJson(value)).toList();
  }

  static Map<String, InlineObject76> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject76>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject76.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject76-objects as value to a dart map
  static Map<String, List<InlineObject76>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject76>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject76.listFromJson(value);
       });
     }
     return map;
  }
}

