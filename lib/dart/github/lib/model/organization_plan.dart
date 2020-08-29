part of openapi.api;

class OrganizationPlan {
  
  int filledSeats = null;
  
  String name = null;
  
  int privateRepos = null;
  
  int seats = null;
  
  int space = null;

  OrganizationPlan({
    this.filledSeats,
    this.name,
    this.privateRepos,
    this.seats,
    this.space,
  });

  @override
  String toString() {
    return 'OrganizationPlan[filledSeats=$filledSeats, name=$name, privateRepos=$privateRepos, seats=$seats, space=$space, ]';
  }

  OrganizationPlan.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    filledSeats = json['filled_seats'];
    name = json['name'];
    privateRepos = json['private_repos'];
    seats = json['seats'];
    space = json['space'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (filledSeats != null)
      json['filled_seats'] = filledSeats;
    if (name != null)
      json['name'] = name;
    if (privateRepos != null)
      json['private_repos'] = privateRepos;
    if (seats != null)
      json['seats'] = seats;
    if (space != null)
      json['space'] = space;
    return json;
  }

  static List<OrganizationPlan> listFromJson(List<dynamic> json) {
    return json == null ? List<OrganizationPlan>() : json.map((value) => OrganizationPlan.fromJson(value)).toList();
  }

  static Map<String, OrganizationPlan> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrganizationPlan>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrganizationPlan.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrganizationPlan-objects as value to a dart map
  static Map<String, List<OrganizationPlan>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrganizationPlan>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrganizationPlan.listFromJson(value);
       });
     }
     return map;
  }
}

