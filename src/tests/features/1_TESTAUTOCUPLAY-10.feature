Feature: [Workshop] Submit contact form without an input filled

	@TEST_TESTAUTOCUPLAY-10
	Scenario Outline: [Workshop] Submit contact form without an input filled
		Given the user is on the Present Technologies website
		When the user fills the contact form except the "<field>" field
		And the user clicks to send the contact form
		Then an error message is displayed under the field

		  Examples:
		  | field   |
		  | Name    |
		  | Email   |
		  | Message |