Feature('Care Discover application form');

Scenario('Visit application form', (I) => {
  I.amOnPage('/insurances/care-discover?locale=ko&tester=1');
  I.click('보험 가입하기');
  I.see('성 last name');
});