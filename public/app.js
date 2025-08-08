/* eslint-env browser */

const addressForm = document.getElementById('address-form');
const loadAddressesBtn = document.getElementById('load-addresses');
const addressTable = document.getElementById('address-table');

const institutionForm = document.getElementById('institution-form');
const loadInstitutionsBtn = document.getElementById('load-institutions');
const institutionTable = document.getElementById('institution-table');

const clearTable = (table) => { while (table.firstChild) table.removeChild(table.firstChild); };

addressForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(addressForm);
  const data = Object.fromEntries(formData.entries());
  await fetch('/address/persist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  addressForm.reset();
});

loadAddressesBtn.addEventListener('click', async () => {
  const res = await fetch('/address');
  const json = await res.json();
  clearTable(addressTable);
  if (json.data) {
    const header = document.createElement('tr');
    ['id', 'country', 'state', 'city', 'neighborhood', 'street', 'postalCode']
      .forEach((field) => {
        const th = document.createElement('th');
        th.textContent = field;
        header.appendChild(th);
      });
    addressTable.appendChild(header);
    json.data.forEach((addr) => {
      const row = document.createElement('tr');
      header.childNodes.forEach((th) => {
        const td = document.createElement('td');
        td.textContent = addr[th.textContent];
        row.appendChild(td);
      });
      addressTable.appendChild(row);
    });
  }
});

institutionForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(institutionForm);
  const data = Object.fromEntries(formData.entries());
  await fetch('/institution/persist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  institutionForm.reset();
});

loadInstitutionsBtn.addEventListener('click', async () => {
  const res = await fetch('/institution');
  const json = await res.json();
  clearTable(institutionTable);
  if (json.data) {
    const header = document.createElement('tr');
    ['id', 'name', 'document_number', 'address_id']
      .forEach((field) => {
        const th = document.createElement('th');
        th.textContent = field;
        header.appendChild(th);
      });
    institutionTable.appendChild(header);
    json.data.forEach((inst) => {
      const row = document.createElement('tr');
      header.childNodes.forEach((th) => {
        const td = document.createElement('td');
        td.textContent = inst[th.textContent];
        row.appendChild(td);
      });
      institutionTable.appendChild(row);
    });
  }
});
