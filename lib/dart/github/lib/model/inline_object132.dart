part of openapi.api;

class InlineObject132 {
  /* The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion. */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{

  InlineObject132({
    this.content,
  });

  @override
  String toString() {
    return 'InlineObject132[content=$content, ]';
  }

  InlineObject132.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<InlineObject132> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject132>() : json.map((value) => InlineObject132.fromJson(value)).toList();
  }

  static Map<String, InlineObject132> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject132>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject132.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject132-objects as value to a dart map
  static Map<String, List<InlineObject132>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject132>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject132.listFromJson(value);
       });
     }
     return map;
  }
}

