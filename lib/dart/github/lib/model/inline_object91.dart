part of openapi.api;

class InlineObject91 {
  /* The contents of the key. */
  String key = null;
  /* If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.      Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see \"[Repository permission levels for an organization](https://help.github.com/articles/repository-permission-levels-for-an-organization/)\" and \"[Permission levels for a user account repository](https://help.github.com/articles/permission-levels-for-a-user-account-repository/).\" */
  bool readOnly = null;
  /* A name for the key. */
  String title = null;

  InlineObject91({
    this.key,
    this.readOnly,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject91[key=$key, readOnly=$readOnly, title=$title, ]';
  }

  InlineObject91.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    key = json['key'];
    readOnly = json['read_only'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (key != null)
      json['key'] = key;
    if (readOnly != null)
      json['read_only'] = readOnly;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject91> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject91>() : json.map((value) => InlineObject91.fromJson(value)).toList();
  }

  static Map<String, InlineObject91> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject91>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject91.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject91-objects as value to a dart map
  static Map<String, List<InlineObject91>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject91>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject91.listFromJson(value);
       });
     }
     return map;
  }
}

