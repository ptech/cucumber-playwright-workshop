Feature: [Workshop] Open QA automation job opening and validate content

	@TEST_TESTAUTOCUPLAY-8
	Scenario: [Workshop] Open QA automation job opening and validate content
		Given the user is on the Present Technologies website
		And the user clicks on the learn more button in the join us section
		When the user clicks on the "Quality Assurance (QA) Automation Engineer" job opening
		Then the user is redirected to the "Quality Assurance (QA) Automation Engineer" job details
		And the following sections are displayed:
		| sections                               |
		| ROLE DESCRIPTION - KEY RESPONSIBILITIES|
		| MAIN REQUIREMENTS                      |
		| NICE TO HAVE                           |
		| PERKS                                  |
		And an apply online form is visible
		
