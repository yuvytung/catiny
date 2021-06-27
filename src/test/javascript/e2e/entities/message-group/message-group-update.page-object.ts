import {by, element, ElementFinder, protractor} from 'protractor';
import {waitUntilDisplayed, waitUntilHidden} from '../../util/utils';

const expect = chai.expect;

export default class MessageGroupUpdatePage
{
  pageTitle: ElementFinder = element(by.id('catinyApp.messageGroup.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  uuidInput: ElementFinder = element(by.css('input#message-group-uuid'));
  userIdInput: ElementFinder = element(by.css('input#message-group-userId'));
  groupIdInput: ElementFinder = element(by.css('input#message-group-groupId'));
  groupNameInput: ElementFinder = element(by.css('input#message-group-groupName'));
  addByInput: ElementFinder = element(by.css('input#message-group-addBy'));
  lastContentInput: ElementFinder = element(by.css('textarea#message-group-lastContent'));
  searchFieldInput: ElementFinder = element(by.css('textarea#message-group-searchField'));
  roleInput: ElementFinder = element(by.css('input#message-group-role'));
  createdDateInput: ElementFinder = element(by.css('input#message-group-createdDate'));
  modifiedDateInput: ElementFinder = element(by.css('input#message-group-modifiedDate'));
  createdByInput: ElementFinder = element(by.css('input#message-group-createdBy'));
  modifiedByInput: ElementFinder = element(by.css('input#message-group-modifiedBy'));
  commentInput: ElementFinder = element(by.css('input#message-group-comment'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setUuidInput(uuid) {
    await this.uuidInput.sendKeys(uuid);
  }

  async getUuidInput() {
    return this.uuidInput.getAttribute('value');
  }

  async setUserIdInput(userId) {
    await this.userIdInput.sendKeys(userId);
  }

  async getUserIdInput() {
    return this.userIdInput.getAttribute('value');
  }

  async setGroupIdInput(groupId) {
    await this.groupIdInput.sendKeys(groupId);
  }

  async getGroupIdInput() {
    return this.groupIdInput.getAttribute('value');
  }

  async setGroupNameInput(groupName) {
    await this.groupNameInput.sendKeys(groupName);
  }

  async getGroupNameInput() {
    return this.groupNameInput.getAttribute('value');
  }

  async setAddByInput(addBy) {
    await this.addByInput.sendKeys(addBy);
  }

  async getAddByInput() {
    return this.addByInput.getAttribute('value');
  }

  async setLastContentInput(lastContent) {
    await this.lastContentInput.sendKeys(lastContent);
  }

  async getLastContentInput() {
    return this.lastContentInput.getAttribute('value');
  }

  async setSearchFieldInput(searchField) {
    await this.searchFieldInput.sendKeys(searchField);
  }

  async getSearchFieldInput() {
    return this.searchFieldInput.getAttribute('value');
  }

  async setRoleInput(role) {
    await this.roleInput.sendKeys(role);
  }

  async getRoleInput() {
    return this.roleInput.getAttribute('value');
  }

  async setCreatedDateInput(createdDate) {
    await this.createdDateInput.sendKeys(createdDate);
  }

  async getCreatedDateInput() {
    return this.createdDateInput.getAttribute('value');
  }

  async setModifiedDateInput(modifiedDate) {
    await this.modifiedDateInput.sendKeys(modifiedDate);
  }

  async getModifiedDateInput() {
    return this.modifiedDateInput.getAttribute('value');
  }

  async setCreatedByInput(createdBy) {
    await this.createdByInput.sendKeys(createdBy);
  }

  async getCreatedByInput() {
    return this.createdByInput.getAttribute('value');
  }

  async setModifiedByInput(modifiedBy) {
    await this.modifiedByInput.sendKeys(modifiedBy);
  }

  async getModifiedByInput() {
    return this.modifiedByInput.getAttribute('value');
  }

  async setCommentInput(comment) {
    await this.commentInput.sendKeys(comment);
  }

  async getCommentInput() {
    return this.commentInput.getAttribute('value');
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setUuidInput('64c99148-3908-465d-8c4a-e510e3ade974');
    await waitUntilDisplayed(this.saveButton);
    await this.setUserIdInput('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setGroupIdInput('groupId');
    await waitUntilDisplayed(this.saveButton);
    await this.setGroupNameInput('groupName');
    await waitUntilDisplayed(this.saveButton);
    await this.setAddByInput('addBy');
    await waitUntilDisplayed(this.saveButton);
    await this.setLastContentInput('lastContent');
    await waitUntilDisplayed(this.saveButton);
    await this.setSearchFieldInput('searchField');
    await waitUntilDisplayed(this.saveButton);
    await this.setRoleInput('role');
    await waitUntilDisplayed(this.saveButton);
    await this.setCreatedDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    await waitUntilDisplayed(this.saveButton);
    await this.setModifiedDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    await waitUntilDisplayed(this.saveButton);
    await this.setCreatedByInput('createdBy');
    await waitUntilDisplayed(this.saveButton);
    await this.setModifiedByInput('modifiedBy');
    await waitUntilDisplayed(this.saveButton);
    await this.setCommentInput('comment');
    await this.save();
    await waitUntilHidden(this.saveButton);
  }
}
