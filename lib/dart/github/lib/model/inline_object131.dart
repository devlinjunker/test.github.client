part of openapi.api;

class InlineObject131 {
  /* The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment. */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{

  InlineObject131({
    this.content,
  });

  @override
  String toString() {
    return 'InlineObject131[content=$content, ]';
  }

  InlineObject131.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<InlineObject131> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject131>() : json.map((value) => InlineObject131.fromJson(value)).toList();
  }

  static Map<String, InlineObject131> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject131>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject131.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject131-objects as value to a dart map
  static Map<String, List<InlineObject131>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject131>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject131.listFromJson(value);
       });
     }
     return map;
  }
}

