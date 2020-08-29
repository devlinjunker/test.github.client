part of openapi.api;

class InlineObject138 {
  /* An email address associated with the GitHub user account to manage. */
  String email = null;
  /* Denotes whether an email is publically visible. */
  String visibility = null;
  //enum visibilityEnum {  public,  private,  };{

  InlineObject138({
    this.email,
    this.visibility,
  });

  @override
  String toString() {
    return 'InlineObject138[email=$email, visibility=$visibility, ]';
  }

  InlineObject138.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    visibility = json['visibility'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (email != null)
      json['email'] = email;
    if (visibility != null)
      json['visibility'] = visibility;
    return json;
  }

  static List<InlineObject138> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject138>() : json.map((value) => InlineObject138.fromJson(value)).toList();
  }

  static Map<String, InlineObject138> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject138>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject138.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject138-objects as value to a dart map
  static Map<String, List<InlineObject138>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject138>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject138.listFromJson(value);
       });
     }
     return map;
  }
}

