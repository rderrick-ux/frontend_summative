(function () {
  "use strict";

  var transactions = [];
  var budgetCap = 500;
  var activePage = "dashboard";

  var pageContainers = {};
  var sidebarBtns = [];
  var mobileBtns = [];

  var NAV_ITEMS = [
    { id: "about",        label: "About",          icon: "info" },
    { id: "dashboard",    label: "Dashboard",       icon: "dashboard" },
    { id: "transactions", label: "Transactions",    icon: "arrows" },
    { id: "add",          label: "Add Transaction", icon: "plusCircle" },
    { id: "settings",     label: "Settings",        icon: "settings" },
  ];

  function buildNav() {
    var sidebarList = document.getElementById("sidebar-nav-list");
    var sidebarHTML = "";
    for (var i = 0; i < NAV_ITEMS.length; i++) {
      var item = NAV_ITEMS[i];
      sidebarHTML += '<li><button class="sidebar__nav-btn' +
        (item.id === activePage ? " active" : "") +
        '" data-page="' + item.id + '">' +
        Icons[item.icon] +
        '<span>' + item.label + '</span></button></li>';
    }
    sidebarList.innerHTML = sidebarHTML;

    var mobileNav = document.getElementById("mobile-nav");
    var mobileHTML = "";
    for (var j = 0; j < NAV_ITEMS.length; j++) {
      var m = NAV_ITEMS[j];
      mobileHTML += '<button class="mobile-nav__btn' +
        (m.id === activePage ? " active" : "") +
        '" data-page="' + m.id + '">' +
        Icons[m.icon] +
        '<span class="sr-only">' + m.label + '</span></button>';
    }
    mobileNav.innerHTML = mobileHTML;

    sidebarBtns = sidebarList.querySelectorAll(".sidebar__nav-btn");
    mobileBtns = mobileNav.querySelectorAll(".mobile-nav__btn");

    for (var k = 0; k < sidebarBtns.length; k++) {
      sidebarBtns[k].addEventListener("click", handleNavClick);
    }
    for (var l = 0; l < mobileBtns.length; l++) {
      mobileBtns[l].addEventListener("click", handleNavClick);
    }
  }

  function handleNavClick() {
    var page = this.getAttribute("data-page");
    navigateTo(page);
  }

  function navigateTo(pageId) {
    activePage = pageId;

    for (var i = 0; i < sidebarBtns.length; i++) {
      var pg = sidebarBtns[i].getAttribute("data-page");
      sidebarBtns[i].classList.toggle("active", pg === pageId);
    }
    for (var j = 0; j < mobileBtns.length; j++) {
      var pg2 = mobileBtns[j].getAttribute("data-page");
      mobileBtns[j].classList.toggle("active", pg2 === pageId);
    }

    for (var key in pageContainers) {
      pageContainers[key].classList.toggle("active", key === pageId);
    }

    renderActivePage();

    var announcer = document.getElementById("sr-announcer");
    if (announcer) announcer.textContent = "Viewing " + pageId + " page";
  }

  function renderActivePage() {
    switch (activePage) {
      case "dashboard":
        renderDashboard(pageContainers.dashboard, transactions, budgetCap);
        break;
      case "transactions":
        renderTransactions(
          pageContainers.transactions,
          transactions,
          handleUpdateTransaction,
          handleDeleteTransaction
        );
        break;
      case "add":
        renderAddTransaction(pageContainers.add, handleAddTransaction, navigateTo);
        break;
      case "settings":
        renderSettings(pageContainers.settings, budgetCap, transactions, handleUpdateBudget, handleImport);
        break;
      case "about":
        renderAbout(pageContainers.about);
        break;
    }
  }

  function handleAddTransaction(desc, amt, cat, date) {
    var newTxn = createTransaction(desc, amt, cat, date);
    transactions.push(newTxn);
    saveTransactions(transactions);
  }

  function handleUpdateTransaction(id, updates) {
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].id === id) {
        for (var key in updates) {
          transactions[i][key] = updates[key];
        }
        transactions[i].updatedAt = new Date().toISOString();
        break;
      }
    }
    saveTransactions(transactions);
  }

  function handleDeleteTransaction(id) {
    transactions = transactions.filter(function (t) { return t.id !== id; });
    saveTransactions(transactions);
  }

  function handleUpdateBudget(cap) {
    budgetCap = cap;
    saveBudgetCap(cap);
  }

  function handleImport(data) {
    transactions = data;
    saveTransactions(transactions);
    renderActivePage();
  }

  function init() {
    transactions = loadTransactions();
    budgetCap = loadBudgetCap();

    pageContainers = {
      about:        document.getElementById("page-about"),
      dashboard:    document.getElementById("page-dashboard"),
      transactions: document.getElementById("page-transactions"),
      add:          document.getElementById("page-add"),
      settings:     document.getElementById("page-settings"),
    };

    buildNav();

    navigateTo("dashboard");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
