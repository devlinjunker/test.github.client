part of openapi.api;

class InlineObject58 {
  /* The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the commit comment. */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{

  InlineObject58({
    this.content,
  });

  @override
  String toString() {
    return 'InlineObject58[content=$content, ]';
  }

  InlineObject58.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<InlineObject58> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject58>() : json.map((value) => InlineObject58.fromJson(value)).toList();
  }

  static Map<String, InlineObject58> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject58>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject58.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject58-objects as value to a dart map
  static Map<String, List<InlineObject58>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject58>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject58.listFromJson(value);
       });
     }
     return map;
  }
}

