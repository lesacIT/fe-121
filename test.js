<script>
document.addEventListener("DOMContentLoaded", () => {

/* =========================================================
   1. DATA
   ========================================================= */

/* ===== SUMMARY ===== */
const dataSummary = [
  { name: "Khám bệnh", tong: 219, bhyt: 91, qn: 1, bha: 32, khac: 58, khongBhyt: 91, note: "Khám VIP: 38" },
  { name: "Vào viện", tong: 128, bhyt: 118, qn: 13, bha: 13, khac: 92, khongBhyt: 10, note: "Số ca: 188" },
  { name: "Ra viện", tong: 69, bhyt: 60, qn: 9, bha: 6, khac: 45, khongBhyt: 9, note: "Khám SK: 0" }
];

/* ===== CLS ===== */
const dataCLS = [
  { ten: "Phòng Nội Tim Mạch 2", pk: 2, khoa: "A1", tong: 25, xn: 18, tl: 72 },
  { ten: "Phòng Nội Tiêu Hóa", pk: 4, khoa: "A2", tong: 18, xn: 6, tl: 33 }
];

/* ===== KHOA ===== */
const dataKhoa = [
  {
    khoa: "A1", cu: 58,
    hc: [3,14,44,""], vao: [1,8,2,3], ra: [3,"",4,""],
    tv: "", cv: ["",""], ck: ["",""], dt: ["",2]
  },
  {
    khoa: "Tổng", cu: 652,
    hc: [54,85,539,""], vao: [33,128,13,13], ra: [92,10,69,9],
    tv: 6, cv: [45,9], ck: [0,0], dt: [1,6]
  }
];

/* ===== XÉT NGHIỆM ===== */
const dataXN = {
  benhNhan: { tong: 1168, bhyt: 855, dvyt: 226, qn: 87 },
  chiDinh: { tong: 10383, bhyt: 8062, dvyt: 1844, qn: 477 }
};

/* ===== DƯỢC ===== */
const dataDuoc = [
  { type: "DVYT", toa: 465, daCap: 465 },
  { type: "BHYT", toa: 340, daCap: 340 },
  { type: "QN/CS", toa: 124, daCap: 124 },
  { type: "Tổng", toa: 929, daCap: 929 }
];

/* =========================================================
   2. RENDER FUNCTIONS
   ========================================================= */

function renderSummary() {
  const tb = document.getElementById("tb-summary");
  if (!tb) return;

  dataSummary.forEach(item => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="left"><strong>${item.name}</strong></td>
      <td>${item.tong}</td>
      <td>${item.bhyt}</td>
      <td>${item.qn}</td>
      <td>${item.bha}</td>
      <td>${item.khac}</td>
      <td>${item.khongBhyt}</td>
      <td class="left">${item.note}</td>
    `;

    tb.appendChild(tr);
  });
}

/* ===== CLS ===== */
function renderCLS() {
  const tb = document.getElementById("tb-cls");
  if (!tb) return;

  let stt = 1;

  dataCLS.forEach(item => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${stt++}</td>
      <td>${item.pk}</td>
      <td class="left">${item.ten}</td>
      <td>${item.khoa}</td>
      <td>${item.tong}</td>
      <td>${item.xn}</td>
      <td>${item.tl}%</td>
    `;

    tb.appendChild(tr);
  });
}

/* ===== KHOA ===== */
function renderKhoa() {
  const tb = document.getElementById("tb-khoa");
  if (!tb) return;

  dataKhoa.forEach(row => {
    const tr = document.createElement("tr");

    if (row.khoa === "Tổng") {
      tr.style.fontWeight = "bold";
      tr.style.background = "#e0f2fe";
    }

    tr.innerHTML = `
      <td class="left">${row.khoa}</td>
      <td>${row.cu}</td>

      ${row.hc.map(v => `<td>${v || ""}</td>`).join("")}
      ${row.vao.map(v => `<td>${v || ""}</td>`).join("")}
      ${row.ra.map(v => `<td>${v || ""}</td>`).join("")}

      <td>${row.tv || ""}</td>

      <td>${row.cv[0] || ""}</td>
      <td>${row.cv[1] || ""}</td>

      <td>${row.ck[0] || ""}</td>
      <td>${row.ck[1] || ""}</td>

      <td>${row.dt[0] || ""}</td>
      <td>${row.dt[1] || ""}</td>
    `;

    tb.appendChild(tr);
  });
}

/* ===== XÉT NGHIỆM ===== */
function renderXN() {
  const tb = document.getElementById("tb-xn");
  if (!tb) return;

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>Tổng</td>
    <td>${dataXN.benhNhan.tong}</td>
    <td>${dataXN.benhNhan.bhyt}</td>
    <td>${dataXN.benhNhan.dvyt}</td>
    <td>${dataXN.benhNhan.qn}</td>

    <td>${dataXN.chiDinh.tong}</td>
    <td>${dataXN.chiDinh.bhyt}</td>
    <td>${dataXN.chiDinh.dvyt}</td>
    <td>${dataXN.chiDinh.qn}</td>
  `;

  tb.appendChild(tr);
}

/* ===== DƯỢC ===== */
function renderDuoc() {
  const tb = document.getElementById("tb-duoc");
  if (!tb) return;

  dataDuoc.forEach(item => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.type}</td>
      <td>${item.toa}</td>
      <td>${item.daCap}</td>
    `;

    tb.appendChild(tr);
  });
}

/* =========================================================
   3. INIT
   ========================================================= */

renderSummary();
renderCLS();
renderKhoa();
renderXN();
renderDuoc();

});
</script>