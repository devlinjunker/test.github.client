part of openapi.api;

class PorterLargeFile {
  
  String oid = null;
  
  String path = null;
  
  String refName = null;
  
  int size = null;

  PorterLargeFile({
    this.oid,
    this.path,
    this.refName,
    this.size,
  });

  @override
  String toString() {
    return 'PorterLargeFile[oid=$oid, path=$path, refName=$refName, size=$size, ]';
  }

  PorterLargeFile.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    oid = json['oid'];
    path = json['path'];
    refName = json['ref_name'];
    size = json['size'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (oid != null)
      json['oid'] = oid;
    if (path != null)
      json['path'] = path;
    if (refName != null)
      json['ref_name'] = refName;
    if (size != null)
      json['size'] = size;
    return json;
  }

  static List<PorterLargeFile> listFromJson(List<dynamic> json) {
    return json == null ? List<PorterLargeFile>() : json.map((value) => PorterLargeFile.fromJson(value)).toList();
  }

  static Map<String, PorterLargeFile> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PorterLargeFile>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PorterLargeFile.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PorterLargeFile-objects as value to a dart map
  static Map<String, List<PorterLargeFile>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PorterLargeFile>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PorterLargeFile.listFromJson(value);
       });
     }
     return map;
  }
}

