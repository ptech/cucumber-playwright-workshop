Feature: [Workshop] Submit contact form when contact service is down

	@TEST_TESTAUTOCUPLAY-11
	Scenario: [Workshop] Submit contact form when contact service is down
		Given the user is on the Present Technologies website
		When the user fills the contact form
		And the user clicks on send button when the service returns an error
		Then a service error message is displayed