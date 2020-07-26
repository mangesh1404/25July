package com.stepdefs;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class demoStepdef {
	WebDriver driver;
	@Before// hooks
	public void setup() {// it will run before every scenario		
		System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");
	    driver= new ChromeDriver();
	}
	@After
	public void tearDown() {// it will run after every scenario
		driver.close();
	}
	@Given("^user enter  \"([^\"]*)\"$")
	public void user_enter(String url) throws Throwable {
		driver.get(url);
	}
	@Then("^logo should display$")
	public void logo_should_display() throws Throwable {
		 WebElement logo=driver.findElement(By.xpath("//img"));
		   Assert.assertEquals(true,logo.isDisplayed());
	}
	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String uname, String pass) throws Throwable {
	   driver.findElement(By.id("email")).sendKeys(uname);
	   driver.findElement(By.id("password")).sendKeys(pass);
	   driver.findElement(By.xpath("//button")).click();
	}
	@Then("^user should on home page$")
	public void user_should_on_home_page() throws Throwable {
	    Assert.assertEquals("JavaByKiran | Dashboard", driver.getTitle());
	}
}
