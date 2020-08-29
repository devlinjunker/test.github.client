part of openapi.api;

class CodeScanningAlert {
  
  DateTime closedAt = null;
  
  SimpleUser closedBy = null;
  
  String closedReason = null;
  //enum closedReasonEnum {  false positive,  won&#39;t fix,  used in tests,  };{
  
  DateTime createdAt = null;
  
  String htmlUrl = null;
  
  int number = null;
  /* Whether or not the alert is open. */
  bool open = null;
  /* A short description of the rule used to detect the alert. */
  String ruleDescription = null;
  /* A unique identifier for the rule used to detect the alert. */
  String ruleId = null;
  /* The severity of the alert. */
  String ruleSeverity = null;
  //enum ruleSeverityEnum {  none,  note,  warning,  error,  };{
  /* The name of the tool used to detect the alert. */
  String tool = null;
  
  String url = null;

  CodeScanningAlert({
    this.closedAt,
    this.closedBy,
    this.closedReason,
    this.createdAt,
    this.htmlUrl,
    this.number,
    this.open,
    this.ruleDescription,
    this.ruleId,
    this.ruleSeverity,
    this.tool,
    this.url,
  });

  @override
  String toString() {
    return 'CodeScanningAlert[closedAt=$closedAt, closedBy=$closedBy, closedReason=$closedReason, createdAt=$createdAt, htmlUrl=$htmlUrl, number=$number, open=$open, ruleDescription=$ruleDescription, ruleId=$ruleId, ruleSeverity=$ruleSeverity, tool=$tool, url=$url, ]';
  }

  CodeScanningAlert.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    closedAt = (json['closed_at'] == null) ?
      null :
      DateTime.parse(json['closed_at']);
    closedBy = (json['closed_by'] == null) ?
      null :
      SimpleUser.fromJson(json['closed_by']);
    closedReason = json['closed_reason'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    htmlUrl = json['html_url'];
    number = json['number'];
    open = json['open'];
    ruleDescription = json['rule_description'];
    ruleId = json['rule_id'];
    ruleSeverity = json['rule_severity'];
    tool = json['tool'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['closed_at'] = closedAt == null ? null : closedAt.toUtc().toIso8601String();
      json['closed_by'] = closedBy;
      json['closed_reason'] = closedReason;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (number != null)
      json['number'] = number;
    if (open != null)
      json['open'] = open;
    if (ruleDescription != null)
      json['rule_description'] = ruleDescription;
    if (ruleId != null)
      json['rule_id'] = ruleId;
    if (ruleSeverity != null)
      json['rule_severity'] = ruleSeverity;
      json['tool'] = tool;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CodeScanningAlert> listFromJson(List<dynamic> json) {
    return json == null ? List<CodeScanningAlert>() : json.map((value) => CodeScanningAlert.fromJson(value)).toList();
  }

  static Map<String, CodeScanningAlert> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CodeScanningAlert>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CodeScanningAlert.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CodeScanningAlert-objects as value to a dart map
  static Map<String, List<CodeScanningAlert>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CodeScanningAlert>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CodeScanningAlert.listFromJson(value);
       });
     }
     return map;
  }
}

