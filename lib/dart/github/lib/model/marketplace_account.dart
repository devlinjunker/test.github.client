part of openapi.api;

class MarketplaceAccount {
  
  String email = null;
  
  int id = null;
  
  String login = null;
  
  String nodeId = null;
  
  String organizationBillingEmail = null;
  
  String type = null;
  
  String url = null;

  MarketplaceAccount({
    this.email,
    this.id,
    this.login,
    this.nodeId,
    this.organizationBillingEmail,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'MarketplaceAccount[email=$email, id=$id, login=$login, nodeId=$nodeId, organizationBillingEmail=$organizationBillingEmail, type=$type, url=$url, ]';
  }

  MarketplaceAccount.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    id = json['id'];
    login = json['login'];
    nodeId = json['node_id'];
    organizationBillingEmail = json['organization_billing_email'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['email'] = email;
    if (id != null)
      json['id'] = id;
    if (login != null)
      json['login'] = login;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['organization_billing_email'] = organizationBillingEmail;
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<MarketplaceAccount> listFromJson(List<dynamic> json) {
    return json == null ? List<MarketplaceAccount>() : json.map((value) => MarketplaceAccount.fromJson(value)).toList();
  }

  static Map<String, MarketplaceAccount> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, MarketplaceAccount>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = MarketplaceAccount.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MarketplaceAccount-objects as value to a dart map
  static Map<String, List<MarketplaceAccount>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<MarketplaceAccount>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = MarketplaceAccount.listFromJson(value);
       });
     }
     return map;
  }
}

