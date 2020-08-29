part of openapi.api;

class InlineObject141 {
  /* The state that the membership should be in. Only `\"active\"` will be accepted. */
  String state = null;
  //enum stateEnum {  active,  };{

  InlineObject141({
    this.state,
  });

  @override
  String toString() {
    return 'InlineObject141[state=$state, ]';
  }

  InlineObject141.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    state = json['state'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (state != null)
      json['state'] = state;
    return json;
  }

  static List<InlineObject141> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject141>() : json.map((value) => InlineObject141.fromJson(value)).toList();
  }

  static Map<String, InlineObject141> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject141>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject141.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject141-objects as value to a dart map
  static Map<String, List<InlineObject141>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject141>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject141.listFromJson(value);
       });
     }
     return map;
  }
}

