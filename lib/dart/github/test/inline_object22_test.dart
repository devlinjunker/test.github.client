import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for InlineObject22
void main() {
    var instance = new InlineObject22();

  group('test InlineObject22', () {
    // **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
    // String email (default value: null)
    test('to test the property `email`', () async {
      // TODO
    });

    // **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
    // int inviteeId (default value: null)
    test('to test the property `inviteeId`', () async {
      // TODO
    });

    // Specify role for new member. Can be one of:   \\* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.   \\* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.   \\* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
    // String role (default value: "direct_member")
    test('to test the property `role`', () async {
      // TODO
    });

    // Specify IDs for the teams you want to invite new members to.
    // List<int> teamIds (default value: [])
    test('to test the property `teamIds`', () async {
      // TODO
    });


  });

}
