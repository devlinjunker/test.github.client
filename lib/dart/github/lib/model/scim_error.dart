part of openapi.api;

class ScimError {
  
  String detail = null;
  
  String documentationUrl = null;
  
  String message = null;
  
  List<String> schemas = [];
  
  String scimType = null;
  
  int status = null;

  ScimError({
    this.detail,
    this.documentationUrl,
    this.message,
    this.schemas,
    this.scimType,
    this.status,
  });

  @override
  String toString() {
    return 'ScimError[detail=$detail, documentationUrl=$documentationUrl, message=$message, schemas=$schemas, scimType=$scimType, status=$status, ]';
  }

  ScimError.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    detail = json['detail'];
    documentationUrl = json['documentation_url'];
    message = json['message'];
    schemas = (json['schemas'] == null) ?
      null :
      (json['schemas'] as List).cast<String>();
    scimType = json['scimType'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['detail'] = detail;
      json['documentation_url'] = documentationUrl;
      json['message'] = message;
    if (schemas != null)
      json['schemas'] = schemas;
      json['scimType'] = scimType;
    if (status != null)
      json['status'] = status;
    return json;
  }

  static List<ScimError> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimError>() : json.map((value) => ScimError.fromJson(value)).toList();
  }

  static Map<String, ScimError> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimError>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimError.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimError-objects as value to a dart map
  static Map<String, List<ScimError>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimError>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimError.listFromJson(value);
       });
     }
     return map;
  }
}

