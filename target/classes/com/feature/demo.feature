Feature: JBK Test


Background:
Given user enter  "file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html"

@logo
Scenario: logo test

Then logo should display

@login
Scenario Outline: login Test

 
When  user enter "<username>" and "<password>"
Then  user should on home page

Examples: 
	|username		|password|
	|kiran@gmail.com|123456  |
	|mangesh		|12345678|
	|Neelam			|abc123	 |
	
	