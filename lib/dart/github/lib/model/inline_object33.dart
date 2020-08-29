part of openapi.api;

class InlineObject33 {
  /* The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment. */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{

  InlineObject33({
    this.content,
  });

  @override
  String toString() {
    return 'InlineObject33[content=$content, ]';
  }

  InlineObject33.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<InlineObject33> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject33>() : json.map((value) => InlineObject33.fromJson(value)).toList();
  }

  static Map<String, InlineObject33> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject33>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject33.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject33-objects as value to a dart map
  static Map<String, List<InlineObject33>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject33>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject33.listFromJson(value);
       });
     }
     return map;
  }
}

