part of openapi.api;

class InlineObject103 {
  /* The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the pull request review comment. */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{

  InlineObject103({
    this.content,
  });

  @override
  String toString() {
    return 'InlineObject103[content=$content, ]';
  }

  InlineObject103.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<InlineObject103> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject103>() : json.map((value) => InlineObject103.fromJson(value)).toList();
  }

  static Map<String, InlineObject103> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject103>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject103.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject103-objects as value to a dart map
  static Map<String, List<InlineObject103>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject103>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject103.listFromJson(value);
       });
     }
     return map;
  }
}

