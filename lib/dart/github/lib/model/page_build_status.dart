part of openapi.api;

class PageBuildStatus {
  
  String status = null;
  
  String url = null;

  PageBuildStatus({
    this.status,
    this.url,
  });

  @override
  String toString() {
    return 'PageBuildStatus[status=$status, url=$url, ]';
  }

  PageBuildStatus.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    status = json['status'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (status != null)
      json['status'] = status;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<PageBuildStatus> listFromJson(List<dynamic> json) {
    return json == null ? List<PageBuildStatus>() : json.map((value) => PageBuildStatus.fromJson(value)).toList();
  }

  static Map<String, PageBuildStatus> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PageBuildStatus>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PageBuildStatus.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PageBuildStatus-objects as value to a dart map
  static Map<String, List<PageBuildStatus>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PageBuildStatus>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PageBuildStatus.listFromJson(value);
       });
     }
     return map;
  }
}

