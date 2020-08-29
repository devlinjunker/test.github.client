part of openapi.api;

class PageBuildError {
  
  String message = null;

  PageBuildError({
    this.message,
  });

  @override
  String toString() {
    return 'PageBuildError[message=$message, ]';
  }

  PageBuildError.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['message'] = message;
    return json;
  }

  static List<PageBuildError> listFromJson(List<dynamic> json) {
    return json == null ? List<PageBuildError>() : json.map((value) => PageBuildError.fromJson(value)).toList();
  }

  static Map<String, PageBuildError> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PageBuildError>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PageBuildError.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PageBuildError-objects as value to a dart map
  static Map<String, List<PageBuildError>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PageBuildError>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PageBuildError.listFromJson(value);
       });
     }
     return map;
  }
}

