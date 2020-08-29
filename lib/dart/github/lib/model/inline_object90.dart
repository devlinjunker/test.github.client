part of openapi.api;

class InlineObject90 {
  /* The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue. */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{

  InlineObject90({
    this.content,
  });

  @override
  String toString() {
    return 'InlineObject90[content=$content, ]';
  }

  InlineObject90.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<InlineObject90> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject90>() : json.map((value) => InlineObject90.fromJson(value)).toList();
  }

  static Map<String, InlineObject90> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject90>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject90.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject90-objects as value to a dart map
  static Map<String, List<InlineObject90>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject90>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject90.listFromJson(value);
       });
     }
     return map;
  }
}

