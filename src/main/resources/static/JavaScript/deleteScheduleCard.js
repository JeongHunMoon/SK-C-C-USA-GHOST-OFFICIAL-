function deleteScheduleCard(results, dfe, date) {
    let spanTag =null;
    // 테이블을 담을 div
    const Container = document.getElementById("image-container");

    // 테이블 생성
    const schedule_div = document.createElement("div");
    schedule_div.className = "schedule_div";

    let table = document.createElement("table");
    table.className = "schedule_card"; // class 설정
    table.setAttribute("border", "1");
    table.style.borderCollapse = "collapse";

    // 상단 해더 고정
    const headerRow = table.insertRow();

    const partHeader = headerRow.insertCell();
    partHeader.textContent = "Part";
    partHeader.rowSpan = 2;

    const priorityHeader = headerRow.insertCell();
    priorityHeader.textContent = "Priority";
    priorityHeader.rowSpan = 2;

    const mondayHeader = headerRow.insertCell();
    mondayHeader.textContent = dfe

    const dateHeader = headerRow.insertCell();
    dateHeader.colSpan = 2;
    dateHeader.textContent = date;
    dateHeader.setAttribute('id', "dateInfo");


    // 날짜 행 추가
    const dateRow = table.insertRow();
    const nHeader = dateRow.insertCell();
    nHeader.textContent = "N";

    const dHeader = dateRow.insertCell();
    dHeader.textContent = "D";

    const eHeader = dateRow.insertCell();
    eHeader.textContent = "E";


    //전극 정보 가공
    let elec_info1 = []
    let elec_info2 = []

    results.forEach(item => {
        if (item.process === "ELEC") {
            if (item.priority === "1") {
                elec_info1.push(item);
            } else if (item.priority === "2") {
                elec_info2.push(item);
            }
        }
    });


    //// 전극 ////
    const elecRow = table.insertRow();
    const elec = elecRow.insertCell();
    elec.textContent = "ELEC";
    elec.rowSpan = 2;

    const elec_1 = elecRow.insertCell();
    elec_1.textContent = "1";

    const elec_1_N = elecRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'ELEC1')
    spanTag.textContent = elec_info1.find(item => item.shift === "N")?.name || "";
    elec_1_N.appendChild(spanTag)


    const elec_1_D = elecRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'ELEC2')
    spanTag.textContent = elec_info1.find(item => item.shift === "D")?.name || "";
    elec_1_D.appendChild(spanTag)

    const elec_1_E = elecRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'ELEC3')
    spanTag.textContent = elec_info1.find(item => item.shift === "E")?.name || "";
    elec_1_E.appendChild(spanTag)

    // 전극 2차
    const elecRow2 = table.insertRow();
    const elec_2 = elecRow2.insertCell();
    elec_2.textContent = "2";

    const elec_2_N = elecRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'ELEC4')
    spanTag.textContent = elec_info2.find(item => item.shift === "N")?.name || "";
    elec_2_N.appendChild(spanTag)

    const elec_2_D = elecRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'ELEC5')
    spanTag.textContent = elec_info2.find(item => item.shift === "D")?.name || "";
    elec_2_D.appendChild(spanTag)

    const elec_2_E = elecRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'ELEC6')
    spanTag.textContent = elec_info2.find(item => item.shift === "E")?.name || "";
    elec_2_E.appendChild(spanTag)



    //조립 정보 가공
    let cell_info1 = []
    let cell_info2 = []

    results.forEach(item => {
        if (item.process === "CELL") {
            if (item.priority === "1") {
                cell_info1.push(item);
            } else if (item.priority === "2") {
                cell_info2.push(item);
            }
        }
    });


    //// 조립 ////
    const cellRow = table.insertRow();
    const cell = cellRow.insertCell();
    cell.textContent = "CELL";
    cell.rowSpan = 2;

    const cell_1 = cellRow.insertCell();
    cell_1.textContent = "1";

    const cell_1_N = cellRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'CELL1')
    spanTag.textContent = cell_info1.find(item => item.shift === "N")?.name || "";
    cell_1_N.appendChild(spanTag)

    const cell_1_D = cellRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'CELL2')
    spanTag.textContent = cell_info1.find(item => item.shift === "D")?.name || "";
    cell_1_D.appendChild(spanTag)

    const cell_1_E = cellRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'CELL3')
    spanTag.textContent = cell_info1.find(item => item.shift === "E")?.name || "";
    cell_1_E.appendChild(spanTag)

    // 조립 2차
    const cellRow2 = table.insertRow();
    const cell_2 = cellRow2.insertCell();
    cell_2.textContent = "2";

    const cell_2_N = cellRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'CELL4')
    spanTag.textContent = cell_info2.find(item => item.shift === "N")?.name || "";
    cell_2_N.appendChild(spanTag)

    const cell_2_D = cellRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'CELL5')
    spanTag.textContent = cell_info2.find(item => item.shift === "D")?.name || "";
    cell_2_D.appendChild(spanTag)

    const cell_2_E = cellRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'CELL6')
    spanTag.textContent = cell_info2.find(item => item.shift === "E")?.name || "";
    cell_2_E.appendChild(spanTag)


    //화성 정보 가공
    let form_info1 = []
    let form_info2 = []

    results.forEach(item => {
        if (item.process === "FORM") {
            if (item.priority === "1") {
                form_info1.push(item);
            } else if (item.priority === "2") {
                form_info2.push(item);
            }
        }
    });

    //// 화성 ////
    const formRow = table.insertRow();
    const form = formRow.insertCell();
    form.textContent = "FORM";
    form.rowSpan = 2;

    const form_1 = formRow.insertCell();
    form_1.textContent = "1";

    const form_1_N = formRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'FORM1')
    spanTag.textContent = form_info1.find(item => item.shift === "N")?.name || "";
    form_1_N.appendChild(spanTag)


    const form_1_D = formRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'FORM2')
    spanTag.textContent = form_info1.find(item => item.shift === "D")?.name || "";
    form_1_D.appendChild(spanTag)

    const form_1_E = formRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'FORM3')
    spanTag.textContent = form_info1.find(item => item.shift === "E")?.name || "";
    form_1_E.appendChild(spanTag)


    // 화성 2차
    const formRow2 = table.insertRow();
    const form_2 = formRow2.insertCell();
    form_2.textContent = "2";

    const form_2_N = formRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'FORM4')
    spanTag.textContent = form_info2.find(item => item.shift === "N")?.name || "";
    form_2_N.appendChild(spanTag)

    const form_2_D = formRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'FORM5')
    spanTag.textContent = form_info2.find(item => item.shift === "D")?.name || "";
    form_2_D.appendChild(spanTag)

    const form_2_E = formRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'FORM6')
    spanTag.textContent = form_info2.find(item => item.shift === "E")?.name || "";
    form_2_E.appendChild(spanTag)


    //모듈 정보 가공
    let pack_info1 = []
    let pack_info2 = []

    results.forEach(item => {
        if (item.process === "PACK") {
            if (item.priority === "1") {
                pack_info1.push(item);
            } else if (item.priority === "2") {
                pack_info2.push(item);
            }
        }
    });


    //// 모듈 ////
    const packRow = table.insertRow();
    const pack = packRow.insertCell();
    pack.textContent = "PACK";
    pack.rowSpan = 2;

    const pack_1 = packRow.insertCell();
    pack_1.textContent = "1";

    const pack_1_N = packRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'PACK1')
    spanTag.textContent = pack_info1.find(item => item.shift === "N")?.name || "";
    pack_1_N.appendChild(spanTag)

    const pack_1_D = packRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'PACK2')
    spanTag.textContent = pack_info1.find(item => item.shift === "D")?.name || "";
    pack_1_D.appendChild(spanTag)

    const pack_1_E = packRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'PACK3')
    spanTag.textContent = pack_info1.find(item => item.shift === "E")?.name || "";
    pack_1_E.appendChild(spanTag)

    // 모듈 2차
    const packRow2 = table.insertRow();
    const pack_2 = packRow2.insertCell();
    pack_2.textContent = "2";

    const pack_2_N = packRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'PACK4')
    spanTag.textContent = pack_info2.find(item => item.shift === "N")?.name || "";
    pack_2_N.appendChild(spanTag)

    const pack_2_D = packRow2.insertCell();
    pack_2_D.textContent = pack_info2.find(item => item.shift === "D")?.name || "";
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'PACK5')
    pack_2_D.appendChild(spanTag)

    const pack_2_E = packRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'PACK6')
    spanTag.textContent = pack_info2.find(item => item.shift === "E")?.name || "";
    pack_2_E.appendChild(spanTag)


    //wms 정보 가공
    let wms_info1 = []
    let wms_info2 = []

    results.forEach(item => {
        if (item.process === "WMS") {
            if (item.priority === "1") {
                wms_info1.push(item);
            } else if (item.priority === "2") {
                wms_info2.push(item);
            }
        }
    });


    //// wms ////
    const wmsRow = table.insertRow();
    const wms = wmsRow.insertCell();
    wms.textContent = "WMS";
    wms.rowSpan = 2;

    const wms_1 = wmsRow.insertCell();
    wms_1.textContent = "1";

    const wms_1_N = wmsRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'WMS1')
    spanTag.textContent = wms_info1.find(item => item.shift === "N")?.name || "";
    wms_1_N.appendChild(spanTag)

    const wms_1_D = wmsRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'WMS2')
    spanTag.textContent = wms_info1.find(item => item.shift === "D")?.name || "";
    wms_1_D.appendChild(spanTag)

    const wms_1_E = wmsRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'WMS3')
    spanTag.textContent = wms_info1.find(item => item.shift === "E")?.name || "";
    wms_1_E.appendChild(spanTag)

    // wms 2차
    const wmsRow2 = table.insertRow();
    const wms_2 = wmsRow2.insertCell();
    wms_2.textContent = "2";

    const wms_2_N = wmsRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'WMS4')
    spanTag.textContent = wms_info2.find(item => item.shift === "N")?.name || "";
    wms_2_N.appendChild(spanTag)

    const wms_2_D = wmsRow2.insertCell();
    wms_2_D.textContent = wms_info2.find(item => item.shift === "D")?.name || "";
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'WMS5')
    wms_2_D.appendChild(spanTag)

    const wms_2_E = wmsRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'WMS6')
    spanTag.textContent = wms_info2.find(item => item.shift === "E")?.name || "";
    wms_2_E.appendChild(spanTag)


    //coll 정보 가공
    let coll_info1 = []
    let coll_info2 = []

    results.forEach(item => {
        if (item.process === "COLL") {
            if (item.priority === "1") {
                coll_info1.push(item);
            } else if (item.priority === "2") {
                coll_info2.push(item);
            }
        }
    });


    //// coll ////
    const collRow = table.insertRow();
    const coll = collRow.insertCell();
    coll.textContent = "COLL";
    coll.rowSpan = 2;

    const coll_1 = collRow.insertCell();
    coll_1.textContent = "1";

    const coll_1_N = collRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COLL1')
    spanTag.textContent = coll_info1.find(item => item.shift === "N")?.name || "";
    coll_1_N.appendChild(spanTag)

    const coll_1_D = collRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COLL2')
    spanTag.textContent = coll_info1.find(item => item.shift === "D")?.name || "";
    coll_1_D.appendChild(spanTag)

    const coll_1_E = collRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COLL3')
    spanTag.textContent = coll_info1.find(item => item.shift === "E")?.name || "";
    coll_1_E.appendChild(spanTag)

    // coll 2차
    const collRow2 = table.insertRow();
    const coll_2 = collRow2.insertCell();
    coll_2.textContent = "2";

    const coll_2_N = collRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COLL4')
    spanTag.textContent = coll_info2.find(item => item.shift === "N")?.name || "";
    coll_2_N.appendChild(spanTag)

    const coll_2_D = collRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COLL5')
    spanTag.textContent = coll_info2.find(item => item.shift === "D")?.name || "";
    coll_2_D.appendChild(spanTag)

    const coll_2_E = collRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COLL6')
    spanTag.textContent = coll_info2.find(item => item.shift === "E")?.name || "";
    coll_2_E.appendChild(spanTag)


    //comm 정보 가공
    let comm_info1 = []
    let comm_info2 = []

    results.forEach(item => {
        if (item.process === "COMM") {
            if (item.priority === "1") {
                comm_info1.push(item);
            } else if (item.priority === "2") {
                comm_info2.push(item);
            }
        }
    });


    //// comm ////
    const commRow = table.insertRow();
    const comm = commRow.insertCell();
    comm.textContent = "COMM";
    comm.rowSpan = 2;

    const comm_1 = commRow.insertCell();
    comm_1.textContent = "1";

    const comm_1_N = commRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COMM1')
    spanTag.textContent = comm_info1.find(item => item.shift === "N")?.name || "";
    comm_1_N.appendChild(spanTag)

    const comm_1_D = commRow.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COMM2')
    spanTag.textContent = comm_info1.find(item => item.shift === "D")?.name || "";
    comm_1_D.appendChild(spanTag)

    const comm_1_E = commRow.insertCell();
    comm_1_E.textContent = comm_info1.find(item => item.shift === "E")?.name || "";
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COMM3')
    comm_1_E.appendChild(spanTag)

    // comm 2차
    const commRow2 = table.insertRow();
    const comm_2 = commRow2.insertCell();
    comm_2.textContent = "2";

    const comm_2_N = commRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COMM4')
    spanTag.textContent = comm_info2.find(item => item.shift === "N")?.name || "";
    comm_2_N.appendChild(spanTag)

    const comm_2_D = commRow2.insertCell();
    comm_2_D.textContent = comm_info2.find(item => item.shift === "D")?.name || "";
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COMM5')
    comm_2_D.appendChild(spanTag)

    const comm_2_E = commRow2.insertCell();
    spanTag = document.createElement('span')
    spanTag.setAttribute('id', date + 'COMM6')
    spanTag.textContent = comm_info2.find(item => item.shift === "E")?.name || "";
    comm_2_E.appendChild(spanTag)


    // 테이블을 div에 추가
    schedule_div.appendChild(table)
    Container.appendChild(schedule_div);

}