part of openapi.api;

class HookResponse {
  
  int code = null;
  
  String message = null;
  
  String status = null;

  HookResponse({
    this.code,
    this.message,
    this.status,
  });

  @override
  String toString() {
    return 'HookResponse[code=$code, message=$message, status=$status, ]';
  }

  HookResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    code = json['code'];
    message = json['message'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['code'] = code;
      json['message'] = message;
      json['status'] = status;
    return json;
  }

  static List<HookResponse> listFromJson(List<dynamic> json) {
    return json == null ? List<HookResponse>() : json.map((value) => HookResponse.fromJson(value)).toList();
  }

  static Map<String, HookResponse> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, HookResponse>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = HookResponse.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of HookResponse-objects as value to a dart map
  static Map<String, List<HookResponse>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<HookResponse>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = HookResponse.listFromJson(value);
       });
     }
     return map;
  }
}

