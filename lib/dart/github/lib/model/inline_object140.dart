part of openapi.api;

class InlineObject140 {
  /* The public SSH key to add to your GitHub account. */
  String key = null;
  /* A descriptive name for the new key. */
  String title = null;

  InlineObject140({
    this.key,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject140[key=$key, title=$title, ]';
  }

  InlineObject140.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    key = json['key'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (key != null)
      json['key'] = key;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject140> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject140>() : json.map((value) => InlineObject140.fromJson(value)).toList();
  }

  static Map<String, InlineObject140> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject140>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject140.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject140-objects as value to a dart map
  static Map<String, List<InlineObject140>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject140>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject140.listFromJson(value);
       });
     }
     return map;
  }
}

