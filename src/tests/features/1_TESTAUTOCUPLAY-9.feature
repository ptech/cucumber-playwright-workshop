Feature: [Workshop] Submit contact form without name input filled

	@TEST_TESTAUTOCUPLAY-9
	Scenario: [Workshop] Submit contact form without name input filled
		Given the user is on the Present Technologies website
		When the user fills the contact form except the "Name" field
		And the user clicks to send the contact form
		Then an error message is displayed under the field