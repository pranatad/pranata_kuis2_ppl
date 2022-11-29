import {slowCypressDown} from 'cypress-slow-down'
slowCypressDown(800)

describe('Test Scenario - Searching Barang', () => {
  before('masuk menu barang', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://127.0.0.1:8000/');
    cy.get("input[name='email']").type('administrator@gmail.com');
    cy.wait(2000);
    cy.get("input[name='password']").type('12345678');
    cy.wait(2000);
    cy.get("button[type='submit']").click();
    cy.wait(3000);
    
  })

  it('login + dashboard + pilih menu barang pada navbar', () => {
    cy.once('uncaught:exception', () => false);
    cy.get("a[href='javascript:void(0)']").eq(0).click();
    cy.wait(2000);
    cy.contains('Barang').click();
    cy.wait(3000);

  })
  it('Test Case 1 - Searching dengan menginputkan id atau nama barang secara valid', () => {
    cy.once('uncaught:exception', () => false);
    cy.get("input[type='search']")
    .type('001').wait(7000).clear().wait(2000)
    .type('Nama').wait(7000).clear();
    cy.wait(3000);
  })
  it('Test Case 2 - Searching dengan menginputkan id yang benar dan nama barang yang tidak valid / tidak terdaftar', () => {
    cy.once('uncaught:exception', () => false);
    cy.get("input[type='search']")
    .type('002').wait(7000).clear().wait(2000)
    .type('Pranata').wait(7000).clear();
    cy.wait(3000);
  })
  it('Test Case 3 - Searching dengan menginputkan id yang tidak valid / tidak terdaftar dan nama barang yang benar', () => {
    cy.once('uncaught:exception', () => false);
    cy.get("input[type='search']")
    .type('#$%@$').wait(7000).clear().wait(2000)
    .type('Tanpa').wait(7000).clear();
    cy.wait(3000);
  })
  it('Test Case 4 - Searching dengan menginputkan id atau nama barang yang tidak valid / tidak terdaftar', () => {
    cy.once('uncaught:exception', () => false);
    cy.get("input[type='search']")
    .type('#$%@$').wait(7000).clear().wait(2000)
    .type('Pranata Dito Fitriyansyah').wait(7000).clear();
  })
})