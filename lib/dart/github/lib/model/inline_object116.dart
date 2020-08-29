part of openapi.api;

class InlineObject116 {
  /* An alternate short description of the asset. Used in place of the filename. */
  String label = null;
  /* The file name of the asset. */
  String name = null;
  
  String state = null;

  InlineObject116({
    this.label,
    this.name,
    this.state,
  });

  @override
  String toString() {
    return 'InlineObject116[label=$label, name=$name, state=$state, ]';
  }

  InlineObject116.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    label = json['label'];
    name = json['name'];
    state = json['state'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (label != null)
      json['label'] = label;
    if (name != null)
      json['name'] = name;
    if (state != null)
      json['state'] = state;
    return json;
  }

  static List<InlineObject116> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject116>() : json.map((value) => InlineObject116.fromJson(value)).toList();
  }

  static Map<String, InlineObject116> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject116>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject116.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject116-objects as value to a dart map
  static Map<String, List<InlineObject116>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject116>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject116.listFromJson(value);
       });
     }
     return map;
  }
}

