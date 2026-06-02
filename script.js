const styleCopy = {
  family: {
    label: "親子",
    party: "家庭旅遊、親子放電",
    title: "5天4夜｜東京親子之旅",
    days: [
      ["抵達東京", "淺草寺散步、晴空塔夜景，晚餐安排親子友善餐廳。"],
      ["迪士尼樂園", "整日保留給園區，午餐避開尖峰，晚上回飯店休息。"],
      ["上野與阿美橫町", "上野動物園、國立科博館、阿美橫町補貨。"],
      ["鎌倉一日遊", "江之電、海邊散步與小町通點心，回程不排太晚。"],
      ["自由活動", "東京車站伴手禮、機場交通與退稅時間預留。"]
    ],
    panels: {
      map: ["淺草與晴空塔排同一天，步行與短程電車即可銜接。", "上野區適合半日親子活動，下雨也有室內備案。", "鎌倉安排在第 4 天，避免剛抵達或離境日太疲累。"],
      shopping: ["阿美橫町：藥妝、零食、伴手禮一次處理。", "東京車站：角色商品與限定甜點，適合最後一天補買。", "晴空塔 Solamachi：親子用品、雜貨、餐廳選擇集中。"],
      food: ["淺草：天丼與蕎麥麵，排隊時間控制在 30 分鐘內。", "上野：親子座位較多的洋食餐廳，午餐建議 11:30 前入座。", "鎌倉：小町通點心當作下午茶，不塞正式大餐。"],
      traffic: ["機場到市區用 Skyliner 或利木津巴士，依飯店位置切換。", "市區以地鐵 24/48/72 小時券為主，親子移動少轉乘。", "鎌倉日使用 JR + 江之電，回程避開晚高峰。"]
    }
  },
  couple: {
    label: "情侶",
    party: "情侶旅行、拍照散步",
    title: "5天4夜｜東京情侶小旅行",
    days: [
      ["抵達東京", "表參道散步、青山咖啡，晚上看東京鐵塔。"],
      ["淺草與藏前", "和服體驗、隅田川散步、藏前選物店。"],
      ["吉祥寺一日", "井之頭公園、甜點店、傍晚逛商店街。"],
      ["鎌倉海線", "江之島、七里濱咖啡與海景夕陽。"],
      ["銀座收尾", "早午餐、伴手禮與機場移動。"]
    ],
    panels: {
      map: ["表參道、青山、澀谷集中在同一區，適合抵達日低負擔散步。", "藏前與淺草同線安排，拍照點密度高。", "鎌倉海線放第 4 天，保留完整日落時間。"],
      shopping: ["藏前：手作雜貨與質感選物。", "表參道：香氛、服飾與咖啡店周邊。", "銀座：甜點伴手禮與免稅精品。"],
      food: ["青山咖啡：抵達日用輕食銜接。", "吉祥寺甜點：避開週末午後排隊。", "七里濱海景餐廳：建議預約傍晚時段。"],
      traffic: ["市區以地鐵為主，景點密集時改步行。", "鎌倉使用 JR 到鎌倉，再接江之電。", "離境日保留 3 小時機場緩衝。"]
    }
  },
  shopping: {
    label: "購物",
    party: "購物補貨、伴手禮優先",
    title: "5天4夜｜東京購物補貨之旅",
    days: [
      ["抵達與新宿", "飯店 check-in 後逛新宿藥妝與電器。"],
      ["澀谷原宿", "服飾、潮流小物與美妝旗艦店。"],
      ["上野阿美橫町", "藥妝比價、零食與伴手禮集中採買。"],
      ["台場與豐洲", "大型商場、親水散步與晚餐。"],
      ["東京車站", "限定甜點、行李整理與機場移動。"]
    ],
    panels: {
      map: ["新宿放抵達日，交通方便且店家營業較晚。", "澀谷與原宿同日處理服飾與美妝。", "東京車站放最後一天，伴手禮直接進行李。"],
      shopping: ["新宿：藥妝、電器、百貨一次補齊。", "阿美橫町：零食與藥妝適合比價。", "東京車站：限定餅乾、蛋糕與角色商品。"],
      food: ["新宿：拉麵或燒肉作為抵達日快速晚餐。", "澀谷：百貨美食街降低排隊風險。", "豐洲：海鮮丼安排早午餐。"],
      traffic: ["購物日建議用置物櫃，不帶戰利品換區。", "大件商品排在回飯店前購買。", "離境日確認行李重量與退稅單據。"]
    }
  },
  food: {
    label: "美食",
    party: "美食踩點、在地餐廳",
    title: "5天4夜｜東京美食散步之旅",
    days: [
      ["抵達與銀座", "銀座甜點、居酒屋晚餐。"],
      ["築地與淺草", "築地早午餐、淺草小吃散步。"],
      ["中目黑代官山", "咖啡、麵包、甜點與選物。"],
      ["吉祥寺", "排隊名店、井之頭公園散步消化。"],
      ["東京車站", "拉麵街、伴手禮與機場移動。"]
    ],
    panels: {
      map: ["築地和淺草安排同日，從早午餐接下午散步。", "中目黑與代官山適合咖啡甜點密集踩點。", "吉祥寺保留彈性，避免連續排隊過累。"],
      shopping: ["銀座：甜點伴手禮與精緻食品。", "中目黑：咖啡豆、器皿與雜貨。", "東京車站：限定禮盒最後補買。"],
      food: ["築地：海鮮丼建議 10:00 前抵達。", "代官山：甜點店排隊安排在下午茶前。", "東京車站拉麵街：離境日前快速收尾。"],
      traffic: ["美食點之間用短程地鐵與步行消化。", "排隊餐廳前後不要安排硬性預約。", "離峰移動，午晚餐尖峰前 30 分鐘到店。"]
    }
  }
};

const tabLabels = {
  map: "景點地圖",
  shopping: "購物地點",
  food: "美食推薦",
  traffic: "交通建議"
};

const chips = document.querySelectorAll(".chip");
const tabs = document.querySelectorAll(".tab");
const startPlan = document.querySelector("#startPlan");
const agentSteps = document.querySelectorAll("#agentSteps li");
const plannerView = document.querySelector("#plannerView");
const agentView = document.querySelector("#agentView");
const resultView = document.querySelector("#resultView");
const summaryView = document.querySelector("#summaryView");
const resultContent = document.querySelector("#resultContent");
const resultSubtitle = document.querySelector("#result-subtitle");
const tripTitle = document.querySelector("#tripTitle");
const budgetPill = document.querySelector("#budgetPill");
const timeline = document.querySelector("#timeline");
const tabPanel = document.querySelector("#tabPanel");
const destinationInput = document.querySelector("#destination");
const daysSelect = document.querySelector("#days");
const budgetSelect = document.querySelector("#budget");
const homeButton = document.querySelector("#homeButton");
const summaryBackButton = document.querySelector("#summaryBackButton");
const spotInput = document.querySelector("#spotInput");
const startDateInput = document.querySelector("#startDate");
const endDateInput = document.querySelector("#endDate");
const peopleForm = document.querySelector("#peopleForm");
const adultCount = document.querySelector("#adultCount");
const childCount = document.querySelector("#childCount");
const continuePeople = document.querySelector("#continuePeople");
const peopleSummary = document.querySelector("#peopleSummary");
const bookFlight = document.querySelector("#bookFlight");
const bookHotel = document.querySelector("#bookHotel");
const showSummary = document.querySelector("#showSummary");
const summarySubtitle = document.querySelector("#summarySubtitle");
const summaryFlightStatus = document.querySelector("#summaryFlightStatus");
const summaryHotelStatus = document.querySelector("#summaryHotelStatus");
const summaryTripMeta = document.querySelector("#summaryTripMeta");
const summaryPeople = document.querySelector("#summaryPeople");
const summaryDates = document.querySelector("#summaryDates");
const summaryBudgetTotal = document.querySelector("#summaryBudgetTotal");
const summaryBudgetBreakdown = document.querySelector("#summaryBudgetBreakdown");
const summaryAdjustment = document.querySelector("#summaryAdjustment");
const openChat = document.querySelector("#openChat");
const closeChat = document.querySelector("#closeChat");
const chatPanel = document.querySelector("#chatPanel");
const chatMessages = document.querySelector("#chatMessages");
const chatInput = document.querySelector("#chatInput");
const sendChat = document.querySelector("#sendChat");

let selectedStyle = "family";
let selectedTab = "map";
let isPlanning = false;
let waitingForPeople = false;
let flightBooked = false;
let hotelBooked = false;
let shibuyaSkyUpdated = false;

function getTrip() {
  return styleCopy[selectedStyle];
}

function setStyle(style) {
  selectedStyle = style;
  chips.forEach((chip) => chip.classList.toggle("is-active", chip.dataset.style === style));
  if (!resultView.classList.contains("is-hidden")) {
    renderResults();
  }
}

function setTab(tab) {
  selectedTab = tab;
  tabs.forEach((item) => item.classList.toggle("is-active", item.dataset.tab === tab));
  renderTabPanel();
}

function renderResults() {
  const trip = getTrip();
  const destination = destinationInput.value.trim() || "東京";
  const adults = Number(adultCount.value) || 0;
  const children = Number(childCount.value) || 0;
  const dateRange = startDateInput.value && endDateInput.value
    ? `${startDateInput.value} - ${endDateInput.value}`
    : "日期未指定";
  tripTitle.textContent = trip.title.replace("東京", destination);
  budgetPill.textContent = budgetSelect.value;
  resultSubtitle.textContent = `${destination}・${trip.label}・${budgetSelect.value}・${adults}大${children}小・${dateRange}`;
  const days = trip.days.map((day, index) => {
    if (shibuyaSkyUpdated && index === 3) {
      return ["鎌倉與澀谷夜景", "江之電、海邊散步後回東京，傍晚安排 SHIBUYA SKY。"];
    }
    return day;
  });
  timeline.innerHTML = days.map((day, index) => `
    <article class="day-item">
      <span class="day-badge">Day ${index + 1}</span>
      <div>
        <h4>${day[0]}</h4>
        <p>${day[1]}</p>
      </div>
    </article>
  `).join("");
  renderTabPanel();
  renderBookingState();
  renderSummary();
}

function renderTabPanel() {
  const trip = getTrip();
  const items = trip.panels[selectedTab];
  tabPanel.innerHTML = `
    <h4>${tabLabels[selectedTab]}</h4>
    <ul>
      ${items.map((item) => {
        const parts = item.split("：");
        return parts.length > 1
          ? `<li><strong>${parts[0]}：</strong>${parts.slice(1).join("：")}</li>`
          : `<li>${item}</li>`;
      }).join("")}
    </ul>
  `;
}

function showPlannerView() {
  agentView.classList.add("is-hidden");
  resultView.classList.add("is-hidden");
  summaryView.classList.add("is-hidden");
  plannerView.classList.remove("is-hidden");
  startPlan.disabled = false;
  startPlan.textContent = "開始規劃";
  agentSteps.forEach((step) => step.classList.remove("is-active", "is-done"));
  peopleForm.classList.add("is-hidden");
  waitingForPeople = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showAgentView() {
  plannerView.classList.add("is-hidden");
  resultView.classList.add("is-hidden");
  summaryView.classList.add("is-hidden");
  agentView.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResultView() {
  agentView.classList.add("is-hidden");
  plannerView.classList.add("is-hidden");
  summaryView.classList.add("is-hidden");
  resultView.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSummaryView() {
  renderSummary();
  agentView.classList.add("is-hidden");
  plannerView.classList.add("is-hidden");
  resultView.classList.add("is-hidden");
  summaryView.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function runPlanning() {
  if (isPlanning || waitingForPeople) return;
  isPlanning = true;
  showAgentView();
  startPlan.disabled = true;
  startPlan.textContent = "Agent 規劃中";
  resultSubtitle.textContent = "Agent 正在整理輸入資料。";
  agentSteps.forEach((step) => step.classList.remove("is-active", "is-done"));
  peopleForm.classList.add("is-hidden");
  peopleSummary.textContent = "等待使用者填寫幾大幾小";

  await completeAgentStep(0);
  agentSteps[1].classList.add("is-active");
  peopleForm.classList.remove("is-hidden");
  startPlan.textContent = "等待人數";
  isPlanning = false;
  waitingForPeople = true;
  adultCount.focus();
}

function completeAgentStep(index) {
  return new Promise((resolve) => {
    agentSteps[index].classList.add("is-active");
    window.setTimeout(() => {
      agentSteps[index].classList.remove("is-active");
      agentSteps[index].classList.add("is-done");
      resolve();
    }, 2000);
  });
}

async function continuePlanningAfterPeople() {
  if (!waitingForPeople) return;
  const adults = Math.max(1, Number(adultCount.value) || 1);
  const children = Math.max(0, Number(childCount.value) || 0);
  adultCount.value = adults;
  childCount.value = children;
  peopleSummary.textContent = `${adults} 大 ${children} 小`;
  peopleForm.classList.add("is-hidden");
  agentSteps[1].classList.remove("is-active");
  agentSteps[1].classList.add("is-done");
  waitingForPeople = false;
  isPlanning = true;
  startPlan.textContent = "Agent 規劃中";

  for (let index = 2; index < agentSteps.length; index += 1) {
    await completeAgentStep(index);
  }

  renderResults();
  startPlan.disabled = false;
  startPlan.textContent = "開始規劃";
  isPlanning = false;
  showResultView();
}

function renderBookingState() {
  bookFlight.textContent = flightBooked ? "機票已加入" : "訂機票";
  bookHotel.textContent = hotelBooked ? "飯店已加入" : "訂飯店";
  bookFlight.classList.toggle("is-booked", flightBooked);
  bookHotel.classList.toggle("is-booked", hotelBooked);
}

function renderSummary() {
  const destination = destinationInput.value.trim() || "東京";
  const trip = getTrip();
  const adults = Math.max(1, Number(adultCount.value) || 1);
  const children = Math.max(0, Number(childCount.value) || 0);
  const totalTravelers = adults + children;
  const nights = Number((daysSelect.value.match(/(\d+)夜/) || [0, 4])[1]);
  const flightBudget = 13800 * totalTravelers;
  const hotelBudget = 5200 * nights;
  const dailyBudget = 2600 * adults * (nights + 1) + 1500 * children * (nights + 1);
  const totalBudget = flightBudget + hotelBudget + dailyBudget;
  const dateRange = startDateInput.value && endDateInput.value
    ? `${startDateInput.value} - ${endDateInput.value}`
    : "日期未指定";
  summarySubtitle.textContent = `${destination}・${trip.label}・${budgetSelect.value}`;
  summaryFlightStatus.textContent = flightBooked ? "機票已加入行程" : "機票尚未加入";
  summaryHotelStatus.textContent = hotelBooked ? "飯店已加入行程" : "飯店尚未加入";
  summaryTripMeta.textContent = `${tripTitle.textContent || trip.title.replace("東京", destination)}｜${budgetSelect.value}`;
  summaryPeople.textContent = `${adults}大${children}小`;
  summaryDates.textContent = dateRange;
  summaryAdjustment.textContent = shibuyaSkyUpdated ? "已更新：SHIBUYA SKY 安排在傍晚前往" : "尚未調整行程";
  summaryBudgetTotal.textContent = `NT$ ${totalBudget.toLocaleString("en-US")}`;
  summaryBudgetBreakdown.textContent = `機票 NT$ ${flightBudget.toLocaleString("en-US")}｜飯店 NT$ ${hotelBudget.toLocaleString("en-US")}｜餐飲交通 NT$ ${dailyBudget.toLocaleString("en-US")}`;
}

function addChatMessage(text, className) {
  const message = document.createElement("p");
  message.className = className;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function openAgentChat() {
  chatPanel.classList.remove("is-hidden");
  chatInput.focus();
}

function closeAgentChat() {
  chatPanel.classList.add("is-hidden");
}

function sendAgentChat() {
  if (sendChat.disabled) return;
  const request = chatInput.value.trim();
  if (!request) {
    chatInput.focus();
    return;
  }
  chatInput.value = "";
  sendChat.disabled = true;
  addChatMessage(request, "user-message");
  addChatMessage("正在更新行程規劃...", "agent-message");
  window.setTimeout(() => {
    shibuyaSkyUpdated = true;
    renderResults();
    renderSummary();
    addChatMessage("已更新：SHIBUYA SKY 有名的在他的夜景, 我幫你安排在傍晚前往, 可以同時欣賞到傍晚跟晚上的景色。", "agent-message");
    sendChat.disabled = false;
  }, 1200);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => setStyle(chip.dataset.style));
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setTab(tab.dataset.tab));
});

destinationInput.addEventListener("input", () => {
  if (!resultView.classList.contains("is-hidden")) renderResults();
});

[daysSelect, budgetSelect, spotInput, startDateInput, endDateInput, adultCount, childCount].forEach((input) => {
  input.addEventListener("input", () => {
    if (!resultView.classList.contains("is-hidden")) renderResults();
  });
});

budgetSelect.addEventListener("change", () => {
  if (!resultView.classList.contains("is-hidden")) renderResults();
});

startPlan.addEventListener("click", runPlanning);
continuePeople.addEventListener("click", continuePlanningAfterPeople);
homeButton.addEventListener("click", showPlannerView);
summaryBackButton.addEventListener("click", showResultView);
bookFlight.addEventListener("click", () => {
  flightBooked = true;
  renderBookingState();
});
bookHotel.addEventListener("click", () => {
  hotelBooked = true;
  renderBookingState();
});
showSummary.addEventListener("click", showSummaryView);
openChat.addEventListener("click", openAgentChat);
closeChat.addEventListener("click", closeAgentChat);
sendChat.addEventListener("click", sendAgentChat);
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendAgentChat();
  }
});

renderTabPanel();
renderBookingState();
