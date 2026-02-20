const Icons = {
  wallet:      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>',
  receipt:     '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>',
  dollar:      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  tag:         '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
  trendDown:   '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
  search:      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  sort:        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>',
  pencil:      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>',
  trash:       '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  check:       '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  warning:     '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  download:    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
  upload:      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>',
  save:        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>',
  user:        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  github:      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  mail:        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  book:        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  shield:      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  smartphone:  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
  keyboard:    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>',
  dashboard:   '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
  arrows:      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>',
  plusCircle:  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
  settings:    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  info:        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
};

function escapeHTML(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function highlightText(text, query) {
  if (!query || !query.trim()) return escapeHTML(text);
  try {
    var regex = new RegExp("(" + query + ")", "gi");
    return escapeHTML(text).replace(regex, '<mark>$1</mark>');
  } catch (e) {
    return escapeHTML(text);
  }
}

function computeStats(transactions, budgetCap) {
  var totalSpent = 0;
  var categoryMap = {};

  for (var i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    totalSpent += t.amount;

    if (!categoryMap[t.category]) {
      categoryMap[t.category] = { count: 0, total: 0 };
    }
    categoryMap[t.category].count += 1;
    categoryMap[t.category].total += t.amount;
  }

  var topCategory = "-";
  var maxCount = 0;
  for (var cat in categoryMap) {
    if (categoryMap[cat].count > maxCount) {
      maxCount = categoryMap[cat].count;
      topCategory = cat;
    }
  }

  return {
    totalSpent: totalSpent,
    budgetRemaining: budgetCap - totalSpent,
    categoryMap: categoryMap,
    topCategory: topCategory,
  };
}

function catClass(category) {
  return category.toLowerCase().replace(/\s+/g, "");
}

function renderDashboard(container, transactions, budgetCap) {
  var stats = computeStats(transactions, budgetCap);
  var usagePercent = Math.min(Math.round((stats.totalSpent / budgetCap) * 100), 100);
  var isOver = stats.budgetRemaining < 0;

  var sortedCats = [];
  for (var cat in stats.categoryMap) {
    sortedCats.push({
      name: cat,
      count: stats.categoryMap[cat].count,
      total: stats.categoryMap[cat].total,
    });
  }
  sortedCats.sort(function (a, b) { return b.total - a.total; });

  var recent = transactions.slice().sort(function (a, b) {
    return b.date.localeCompare(a.date);
  }).slice(0, 5);

  var catHTML = "";
  if (sortedCats.length === 0) {
    catHTML = '<p class="empty-state">No data yet.</p>';
  } else {
    for (var i = 0; i < sortedCats.length; i++) {
      var c = sortedCats[i];
      var pct = stats.totalSpent > 0 ? Math.round((c.total / stats.totalSpent) * 100) : 0;
      catHTML += '<div class="cat-row">' +
        '<div class="cat-row__top">' +
          '<div class="cat-row__name">' +
            '<span class="cat-dot cat-dot--' + catClass(c.name) + '"></span>' +
            '<span>' + escapeHTML(c.name) + '</span>' +
            '<span class="badge badge--sm">' + c.count + '</span>' +
          '</div>' +
          '<span class="cat-row__amount">$' + c.total.toFixed(2) + '</span>' +
        '</div>' +
        '<div class="progress-bar progress-bar--sm">' +
          '<div class="progress-bar__fill progress-bar__fill--' + catClass(c.name) + '" style="width:' + pct + '%"></div>' +
        '</div>' +
      '</div>';
    }
  }

  var recentHTML = "";
  if (recent.length === 0) {
    recentHTML = '<p class="empty-state">No transactions yet.</p>';
  } else {
    recentHTML = '<div class="activity-list">';
    for (var j = 0; j < recent.length; j++) {
      var r = recent[j];
      recentHTML += '<div class="activity-item">' +
        '<div>' +
          '<div class="activity-item__desc">' + escapeHTML(r.description) + '</div>' +
          '<div class="activity-item__meta">' + escapeHTML(r.category) + ' &middot; ' + escapeHTML(r.date) + '</div>' +
        '</div>' +
        '<span class="activity-item__amount">$' + r.amount.toFixed(2) + '</span>' +
      '</div>';
    }
    recentHTML += '</div>';
  }

  var budgetLeftVal = isOver
    ? "$" + Math.abs(stats.budgetRemaining).toFixed(2) + " over"
    : "$" + stats.budgetRemaining.toFixed(2);
  var budgetLeftClass = isOver ? "stat-card__value--destructive" : "stat-card__value--success";

  var topSub = stats.categoryMap[stats.topCategory]
    ? stats.categoryMap[stats.topCategory].count + " transactions"
    : "";

  container.innerHTML =
    '<div class="page__header">' +
      '<h2 class="page__title">Dashboard</h2>' +
      '<p class="page__subtitle">Your spending overview at a glance.</p>' +
    '</div>' +

    '<div class="grid-4" style="margin-bottom:24px">' +
      '<div class="card"><div class="stat-card">' +
        '<div class="stat-card__icon">' + Icons.receipt + '</div>' +
        '<div>' +
          '<p class="stat-card__label">Transactions</p>' +
          '<p class="stat-card__value">' + transactions.length + '</p>' +
          '<p class="stat-card__sub">total recorded</p>' +
        '</div>' +
      '</div></div>' +
      '<div class="card"><div class="stat-card">' +
        '<div class="stat-card__icon">' + Icons.dollar + '</div>' +
        '<div>' +
          '<p class="stat-card__label">Total Spent</p>' +
          '<p class="stat-card__value">$' + stats.totalSpent.toFixed(2) + '</p>' +
          '<p class="stat-card__sub">of $' + budgetCap.toFixed(2) + ' budget</p>' +
        '</div>' +
      '</div></div>' +
      '<div class="card"><div class="stat-card">' +
        '<div class="stat-card__icon">' + Icons.tag + '</div>' +
        '<div>' +
          '<p class="stat-card__label">Top Category</p>' +
          '<p class="stat-card__value">' + escapeHTML(stats.topCategory) + '</p>' +
          '<p class="stat-card__sub">' + escapeHTML(topSub) + '</p>' +
        '</div>' +
      '</div></div>' +
      '<div class="card"><div class="stat-card">' +
        '<div class="stat-card__icon">' + Icons.trendDown + '</div>' +
        '<div>' +
          '<p class="stat-card__label">Budget Left</p>' +
          '<p class="stat-card__value ' + budgetLeftClass + '">' + budgetLeftVal + '</p>' +
        '</div>' +
      '</div></div>' +
    '</div>' +

    '<div class="card" style="margin-bottom:24px">' +
      '<div class="card__header"><h3 class="card__title">Budget Progress</h3></div>' +
      '<div class="card__body">' +
        '<div class="flex-between text-sm" style="margin-bottom:12px">' +
          '<span style="color:var(--muted-foreground)">$' + stats.totalSpent.toFixed(2) + ' spent</span>' +
          '<span style="font-weight:500">$' + budgetCap.toFixed(2) + ' cap</span>' +
        '</div>' +
        '<div class="progress-bar"><div class="progress-bar__fill" style="width:' + usagePercent + '%"></div></div>' +
        '<p class="text-xs" style="color:var(--muted-foreground);margin-top:12px">' + usagePercent + '% of your monthly budget used</p>' +
      '</div>' +
    '</div>' +

    '<div class="grid-2">' +
      '<div class="card">' +
        '<div class="card__header"><h3 class="card__title">Spending by Category</h3></div>' +
        '<div class="card__body" style="display:flex;flex-direction:column;gap:16px">' + catHTML + '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card__header"><h3 class="card__title">Recent Activity</h3></div>' +
        '<div class="card__body">' + recentHTML + '</div>' +
      '</div>' +
    '</div>';
}

function renderTransactions(container, transactions, onUpdate, onDelete) {
  var searchQuery = "";
  var sortField = "date";
  var sortDir = "desc";

  function getFilteredSorted() {
    var list = transactions.slice();

    if (searchQuery.trim()) {
      try {
        var regex = new RegExp(searchQuery, "gi");
        list = list.filter(function (t) {
          return regex.test(t.description) || regex.test(t.category);
        });
      } catch (e) {
        var q = searchQuery.toLowerCase();
        list = list.filter(function (t) {
          return t.description.toLowerCase().indexOf(q) !== -1 ||
                 t.category.toLowerCase().indexOf(q) !== -1;
        });
      }
    }

    list.sort(function (a, b) {
      var valA, valB;
      if (sortField === "description") {
        valA = a.description.toLowerCase();
        valB = b.description.toLowerCase();
      } else if (sortField === "amount") {
        valA = a.amount;
        valB = b.amount;
      } else {
        valA = a.date;
        valB = b.date;
      }
      if (sortDir === "asc") return valA > valB ? 1 : -1;
      return valA < valB ? 1 : -1;
    });

    return list;
  }

  function buildTable() {
    var filtered = getFilteredSorted();

    var tableHTML = '<div class="page__header">' +
      '<h2 class="page__title">Transactions</h2>' +
      '<p class="page__subtitle">Search, sort, and manage all of your recorded expenses.</p>' +
    '</div>' +

    '<div class="card card--compact" style="margin-bottom:24px">' +
      '<div class="card__body">' +
        '<div class="toolbar">' +
          '<div class="toolbar__search search-wrapper">' +
            Icons.search +
            '<input type="text" id="txn-search" placeholder="Search by description or category..." value="' + escapeHTML(searchQuery) + '">' +
          '</div>' +
          '<div class="toolbar__sort">' +
            '<select id="txn-sort-field" class="w-36">' +
              '<option value="date"' + (sortField === "date" ? " selected" : "") + '>Date</option>' +
              '<option value="description"' + (sortField === "description" ? " selected" : "") + '>Description</option>' +
              '<option value="amount"' + (sortField === "amount" ? " selected" : "") + '>Amount</option>' +
            '</select>' +
            '<button class="btn btn--outline btn--icon" id="txn-sort-dir" aria-label="Toggle sort direction">' + Icons.sort + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="card">' +
      '<div class="card__header"><h3 class="card__title">' + filtered.length + ' transaction' + (filtered.length !== 1 ? 's' : '') + '</h3></div>' +
      '<div class="card__body">';

    if (filtered.length === 0) {
      tableHTML += '<p class="empty-state">No transactions match your search.</p>';
    } else {
      tableHTML += '<div class="table-wrap"><table class="txn-table"><thead><tr>' +
        '<th>Description</th><th>Amount</th><th>Category</th><th>Date</th><th>Actions</th>' +
      '</tr></thead><tbody>';

      for (var i = 0; i < filtered.length; i++) {
        var t = filtered[i];
        tableHTML += '<tr>' +
          '<td>' + highlightText(t.description, searchQuery) + '</td>' +
          '<td>$' + t.amount.toFixed(2) + '</td>' +
          '<td><span class="badge badge--' + catClass(t.category) + '">' + escapeHTML(t.category) + '</span></td>' +
          '<td>' + escapeHTML(t.date) + '</td>' +
          '<td><div class="actions">' +
            '<button class="btn btn--ghost btn--icon edit-btn" data-id="' + t.id + '" aria-label="Edit ' + escapeHTML(t.description) + '">' + Icons.pencil + '</button>' +
            '<button class="btn btn--ghost btn--icon btn--danger delete-btn" data-id="' + t.id + '" aria-label="Delete ' + escapeHTML(t.description) + '">' + Icons.trash + '</button>' +
          '</div></td>' +
        '</tr>';
      }

      tableHTML += '</tbody></table></div>';
    }

    tableHTML += '</div></div>';

    tableHTML += '<div class="dialog-overlay" id="edit-dialog">' +
      '<div class="dialog">' +
        '<h3 class="dialog__title">Edit Transaction</h3>' +
        '<p class="dialog__description">Update the details of this transaction.</p>' +
        '<div class="dialog__fields">' +
          '<div class="form-group"><label for="edit-desc">Description</label><input type="text" id="edit-desc"></div>' +
          '<div class="form-group"><label for="edit-amt">Amount ($)</label><input type="text" id="edit-amt"></div>' +
          '<div class="form-group"><label for="edit-cat">Category</label>' +
            '<select id="edit-cat"><option value="Food">Food</option><option value="Books">Books</option><option value="Transport">Transport</option><option value="Entertainment">Entertainment</option><option value="Fees">Fees</option><option value="Other">Other</option></select>' +
          '</div>' +
          '<div class="form-group"><label for="edit-date">Date</label><input type="date" id="edit-date"></div>' +
        '</div>' +
        '<div class="dialog__footer">' +
          '<button class="btn btn--outline" id="edit-cancel">Cancel</button>' +
          '<button class="btn btn--primary" id="edit-save">Save Changes</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    tableHTML += '<div class="dialog-overlay" id="delete-dialog">' +
      '<div class="dialog">' +
        '<h3 class="dialog__title">Delete Transaction</h3>' +
        '<p class="dialog__description">Are you sure you want to delete this transaction? This action cannot be undone.</p>' +
        '<div class="dialog__footer">' +
          '<button class="btn btn--outline" id="delete-cancel">Cancel</button>' +
          '<button class="btn btn--destructive" id="delete-confirm">Delete</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    container.innerHTML = tableHTML;

    document.getElementById("txn-search").addEventListener("input", function (e) {
      searchQuery = e.target.value;
      buildTable();
    });

    document.getElementById("txn-sort-field").addEventListener("change", function (e) {
      sortField = e.target.value;
      buildTable();
    });

    document.getElementById("txn-sort-dir").addEventListener("click", function () {
      sortDir = sortDir === "asc" ? "desc" : "asc";
      buildTable();
    });

    /* edit buttons */
    var editBtns = container.querySelectorAll(".edit-btn");
    for (var k = 0; k < editBtns.length; k++) {
      editBtns[k].addEventListener("click", function () {
        var id = this.getAttribute("data-id");
        var txn = transactions.find(function (t) { return t.id === id; });
        if (!txn) return;
        document.getElementById("edit-desc").value = txn.description;
        document.getElementById("edit-amt").value = String(txn.amount);
        document.getElementById("edit-cat").value = txn.category;
        document.getElementById("edit-date").value = txn.date;
        document.getElementById("edit-dialog").classList.add("open");
        document.getElementById("edit-dialog").setAttribute("data-editing-id", id);
      });
    }

    document.getElementById("edit-cancel").addEventListener("click", function () {
      document.getElementById("edit-dialog").classList.remove("open");
    });

    document.getElementById("edit-save").addEventListener("click", function () {
      var id = document.getElementById("edit-dialog").getAttribute("data-editing-id");
      onUpdate(id, {
        description: document.getElementById("edit-desc").value,
        amount: parseFloat(document.getElementById("edit-amt").value),
        category: document.getElementById("edit-cat").value,
        date: document.getElementById("edit-date").value,
      });
      document.getElementById("edit-dialog").classList.remove("open");
      buildTable();
    });

    var delBtns = container.querySelectorAll(".delete-btn");
    for (var d = 0; d < delBtns.length; d++) {
      delBtns[d].addEventListener("click", function () {
        var id = this.getAttribute("data-id");
        document.getElementById("delete-dialog").classList.add("open");
        document.getElementById("delete-dialog").setAttribute("data-deleting-id", id);
      });
    }

    document.getElementById("delete-cancel").addEventListener("click", function () {
      document.getElementById("delete-dialog").classList.remove("open");
    });

    document.getElementById("delete-confirm").addEventListener("click", function () {
      var id = document.getElementById("delete-dialog").getAttribute("data-deleting-id");
      onDelete(id);
      document.getElementById("delete-dialog").classList.remove("open");
      buildTable();
    });

    var overlays = container.querySelectorAll(".dialog-overlay");
    for (var o = 0; o < overlays.length; o++) {
      overlays[o].addEventListener("click", function (e) {
        if (e.target === this) this.classList.remove("open");
      });
    }
  }

  buildTable();
}

function renderAddTransaction(container, onAdd, onNavigate) {
  container.innerHTML =
    '<div class="page__header">' +
      '<h2 class="page__title">Add Transaction</h2>' +
      '<p class="page__subtitle">Record a new expense to keep your finances up to date.</p>' +
    '</div>' +
    '<div id="add-alerts"></div>' +
    '<div class="card max-w-xl">' +
      '<div class="card__header">' +
        '<h3 class="card__title">New Expense</h3>' +
        '<p class="card__description">All fields are required. Amounts allow up to 2 decimal places.</p>' +
      '</div>' +
      '<div class="card__body">' +
        '<form id="add-form" style="display:flex;flex-direction:column;gap:20px">' +
          '<div class="form-group">' +
            '<label for="add-desc">Description</label>' +
            '<input type="text" id="add-desc" placeholder="e.g. Lunch at the cafeteria">' +
            '<p class="field-error" id="err-desc" style="display:none"></p>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="add-amt">Amount ($)</label>' +
            '<input type="text" id="add-amt" placeholder="0.00">' +
            '<p class="field-error" id="err-amt" style="display:none"></p>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="add-cat">Category</label>' +
            '<select id="add-cat">' +
              '<option value="Food">Food</option>' +
              '<option value="Books">Books</option>' +
              '<option value="Transport">Transport</option>' +
              '<option value="Entertainment">Entertainment</option>' +
              '<option value="Fees">Fees</option>' +
              '<option value="Other">Other</option>' +
            '</select>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="add-date">Date</label>' +
            '<input type="date" id="add-date">' +
            '<p class="field-error" id="err-date" style="display:none"></p>' +
          '</div>' +
          '<button type="submit" class="btn btn--primary" style="align-self:flex-start">Add Transaction</button>' +
        '</form>' +
      '</div>' +
    '</div>';

  document.getElementById("add-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var desc = document.getElementById("add-desc").value;
    var amt = document.getElementById("add-amt").value;
    var cat = document.getElementById("add-cat").value;
    var date = document.getElementById("add-date").value;

    var errDesc = document.getElementById("err-desc");
    var errAmt = document.getElementById("err-amt");
    var errDate = document.getElementById("err-date");
    errDesc.style.display = "none";
    errAmt.style.display = "none";
    errDate.style.display = "none";

    var dErr = validateDescription(desc);
    var aErr = validateAmount(amt);
    var dtErr = validateDate(date);

    if (dErr) { errDesc.textContent = dErr; errDesc.style.display = "block"; }
    if (aErr) { errAmt.textContent = aErr; errAmt.style.display = "block"; }
    if (dtErr) { errDate.textContent = dtErr; errDate.style.display = "block"; }
    if (dErr || aErr || dtErr) return;

    onAdd(desc, amt, cat, date);

    var alertsHTML = '<div class="alert alert--success" style="margin-bottom:16px">' +
      Icons.check +
      '<span>Added "' + escapeHTML(desc) + '" for $' + parseFloat(amt).toFixed(2) + '</span>' +
      '<button class="btn btn--ghost text-sm" id="go-transactions" style="margin-left:auto;color:var(--success)">View transactions</button>' +
    '</div>';

    if (hasDuplicateWords(desc)) {
      alertsHTML += '<div class="alert alert--warning" style="margin-bottom:16px">' +
        Icons.warning +
        '<span>Your description has duplicate consecutive words. The transaction was still added.</span>' +
      '</div>';
    }

    document.getElementById("add-alerts").innerHTML = alertsHTML;

    var goBtn = document.getElementById("go-transactions");
    if (goBtn) {
      goBtn.addEventListener("click", function () { onNavigate("transactions"); });
    }

    document.getElementById("add-desc").value = "";
    document.getElementById("add-amt").value = "";
    document.getElementById("add-cat").value = "Food";
    document.getElementById("add-date").value = "";
  });
}

function renderSettings(container, budgetCap, transactions, onUpdateBudget, onImport) {
  container.innerHTML =
    '<div class="page__header">' +
      '<h2 class="page__title">Settings</h2>' +
      '<p class="page__subtitle">Configure your budget cap and manage your data.</p>' +
    '</div>' +

    '<div class="card max-w-md" style="margin-bottom:24px">' +
      '<div class="card__header">' +
        '<h3 class="card__title">Budget Cap</h3>' +
        '<p class="card__description">Set a monthly spending limit to keep your finances in check.</p>' +
      '</div>' +
      '<div class="card__body">' +
        '<label for="budget-input">Monthly Limit ($)</label>' +
        '<div class="form-row">' +
          '<input type="number" id="budget-input" min="1" value="' + budgetCap + '" class="w-40">' +
          '<button class="btn btn--primary" id="save-budget">' + Icons.save + ' Save</button>' +
        '</div>' +
        '<div id="budget-msg" style="margin-top:12px"></div>' +
      '</div>' +
    '</div>' +

    '<div class="card max-w-md">' +
      '<div class="card__header">' +
        '<h3 class="card__title">Import / Export</h3>' +
        '<p class="card__description">Back up your data or restore from a previous export.</p>' +
      '</div>' +
      '<div class="card__body" style="display:flex;flex-direction:column;gap:16px">' +
        '<button class="btn btn--outline" id="export-btn">' + Icons.download + ' Export to JSON</button>' +
        '<div class="form-group">' +
          '<label for="import-file">Import from JSON</label>' +
          '<div class="form-row">' +
            '<input type="file" id="import-file" accept=".json" style="max-width:260px">' +
          '</div>' +
        '</div>' +
        '<div id="import-msg"></div>' +
      '</div>' +
    '</div>';

  document.getElementById("save-budget").addEventListener("click", function () {
    var val = parseFloat(document.getElementById("budget-input").value);
    if (isNaN(val) || val <= 0) return;
    onUpdateBudget(val);
    document.getElementById("budget-msg").innerHTML =
      '<div class="flex-row gap-4 text-sm" style="color:var(--success)">' + Icons.check + ' Budget cap updated.</div>';
    setTimeout(function () {
      document.getElementById("budget-msg").innerHTML = "";
    }, 2000);
  });

  document.getElementById("export-btn").addEventListener("click", function () {
    exportTransactionsJSON(transactions);
  });

  document.getElementById("import-file").addEventListener("change", function (e) {
    var file = e.target.files[0];
    if (!file) return;
    importTransactionsJSON(file).then(function (data) {
      onImport(data);
      document.getElementById("import-msg").innerHTML =
        '<p class="text-sm" style="color:var(--muted-foreground)">Successfully imported ' + data.length + ' transactions.</p>';
    }).catch(function (err) {
      document.getElementById("import-msg").innerHTML =
        '<p class="text-sm" style="color:var(--destructive)">' + escapeHTML(err.message) + '</p>';
    });
    e.target.value = "";
  });
}

function renderAbout(container) {
  container.innerHTML =
    '<div class="page__header">' +
      '<h2 class="page__title">About This App</h2>' +
      '<p class="page__subtitle">A student-built finance tracker for keeping track of your spending.</p>' +
    '</div>' +

    '<div class="card max-w-xl" style="margin-bottom:24px">' +
      '<div class="card__header"><h3 class="card__title">Author</h3></div>' +
      '<div class="card__body">' +
        '<div class="author-card">' +
          '<div class="author-avatar">' + Icons.user + '</div>' +
          '<div>' +
            '<p class="author-name">Rugwiro Celio Derrick</p>' +
            '<p class="author-role">Software Engineering Student at ALU</p>' +
          '</div>' +
        '</div>' +
        '<div class="author-links">' +
          '<a href="https://github.com/rderrick-ux/frontend_summative" target="_blank" rel="noopener noreferrer">' + Icons.github + ' github.com/rderrick-ux/frontend_summative</a>' +
          '<a href="mailto:r.derrick@alustudent.com">' + Icons.mail + ' r.derrick@alustudent.com</a>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="card max-w-xl" style="margin-bottom:24px">' +
      '<div class="card__header"><h3 class="card__title">Features</h3></div>' +
      '<div class="card__body">' +
        '<ul class="feature-list">' +
          '<li class="feature-list__item">' + Icons.book + '<span>Add, edit, and delete transactions with full validation</span></li>' +
          '<li class="feature-list__item">' + Icons.shield + '<span>Regex-powered input validation for all fields</span></li>' +
          '<li class="feature-list__item">' + Icons.smartphone + '<span>Responsive design that works on phone, tablet, and desktop</span></li>' +
          '<li class="feature-list__item">' + Icons.keyboard + '<span>Keyboard accessible with visible focus indicators</span></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +

    '<div class="card max-w-xl">' +
      '<div class="card__header"><h3 class="card__title">Regex Patterns Used</h3></div>' +
      '<div class="card__body">' +
        '<div class="regex-list">' +
          '<div class="regex-item"><span class="badge">Amount</span><code>^(0|[1-9][0-9]*)(\\.[0-9]{1,2})?$</code></div>' +
          '<div class="regex-item"><span class="badge">Date</span><code>^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$</code></div>' +
          '<div class="regex-item"><span class="badge">Category</span><code>^[A-Za-z]+(?:[ -][A-Za-z]+)*$</code></div>' +
          '<div class="regex-item"><span class="badge">Duplicates</span><code>\\b(\\w+)\\s+\\1\\b</code></div>' +
        '</div>' +
      '</div>' +
    '</div>';
}
