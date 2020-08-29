part of openapi.api;

class InlineObject82 {
  /* The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue comment. */
  String content = null;
  //enum contentEnum {  +1,  -1,  laugh,  confused,  heart,  hooray,  rocket,  eyes,  };{

  InlineObject82({
    this.content,
  });

  @override
  String toString() {
    return 'InlineObject82[content=$content, ]';
  }

  InlineObject82.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<InlineObject82> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject82>() : json.map((value) => InlineObject82.fromJson(value)).toList();
  }

  static Map<String, InlineObject82> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject82>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject82.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject82-objects as value to a dart map
  static Map<String, List<InlineObject82>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject82>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject82.listFromJson(value);
       });
     }
     return map;
  }
}

