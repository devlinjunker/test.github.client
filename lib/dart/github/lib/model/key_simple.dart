part of openapi.api;

class KeySimple {
  
  int id = null;
  
  String key = null;

  KeySimple({
    this.id,
    this.key,
  });

  @override
  String toString() {
    return 'KeySimple[id=$id, key=$key, ]';
  }

  KeySimple.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
    key = json['key'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (id != null)
      json['id'] = id;
    if (key != null)
      json['key'] = key;
    return json;
  }

  static List<KeySimple> listFromJson(List<dynamic> json) {
    return json == null ? List<KeySimple>() : json.map((value) => KeySimple.fromJson(value)).toList();
  }

  static Map<String, KeySimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, KeySimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = KeySimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of KeySimple-objects as value to a dart map
  static Map<String, List<KeySimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<KeySimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = KeySimple.listFromJson(value);
       });
     }
     return map;
  }
}

