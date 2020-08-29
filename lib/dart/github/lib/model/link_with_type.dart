part of openapi.api;

class LinkWithType {
  
  String href = null;
  
  String type = null;

  LinkWithType({
    this.href,
    this.type,
  });

  @override
  String toString() {
    return 'LinkWithType[href=$href, type=$type, ]';
  }

  LinkWithType.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    href = json['href'];
    type = json['type'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (href != null)
      json['href'] = href;
    if (type != null)
      json['type'] = type;
    return json;
  }

  static List<LinkWithType> listFromJson(List<dynamic> json) {
    return json == null ? List<LinkWithType>() : json.map((value) => LinkWithType.fromJson(value)).toList();
  }

  static Map<String, LinkWithType> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, LinkWithType>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = LinkWithType.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of LinkWithType-objects as value to a dart map
  static Map<String, List<LinkWithType>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<LinkWithType>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = LinkWithType.listFromJson(value);
       });
     }
     return map;
  }
}

