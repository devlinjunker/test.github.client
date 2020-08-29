part of openapi.api;

class InlineObject34 {
  /* The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion. */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{

  InlineObject34({
    this.content,
  });

  @override
  String toString() {
    return 'InlineObject34[content=$content, ]';
  }

  InlineObject34.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<InlineObject34> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject34>() : json.map((value) => InlineObject34.fromJson(value)).toList();
  }

  static Map<String, InlineObject34> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject34>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject34.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject34-objects as value to a dart map
  static Map<String, List<InlineObject34>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject34>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject34.listFromJson(value);
       });
     }
     return map;
  }
}

