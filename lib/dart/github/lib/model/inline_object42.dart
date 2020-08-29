part of openapi.api;

class InlineObject42 {
  /* The position of the column in a project */
  String position = null;

  InlineObject42({
    this.position,
  });

  @override
  String toString() {
    return 'InlineObject42[position=$position, ]';
  }

  InlineObject42.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    position = json['position'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (position != null)
      json['position'] = position;
    return json;
  }

  static List<InlineObject42> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject42>() : json.map((value) => InlineObject42.fromJson(value)).toList();
  }

  static Map<String, InlineObject42> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject42>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject42.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject42-objects as value to a dart map
  static Map<String, List<InlineObject42>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject42>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject42.listFromJson(value);
       });
     }
     return map;
  }
}

